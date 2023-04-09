import React from "react";
import MainSection from "@/components/mainSection/mainSection";
import css from "./sell.module.css";
import clsx from "clsx";
import withApollo from "@/apollo/client";
import { Input } from "@/components/input/input";
import Button from "@/components/button/button";
import UploadImage from "@/components/upload image/uploadImage";
import { useGetAllCategoriesQuery, usePostAdvertisementMutation } from "@/graphql/generated/generated";
import { useRouter } from "next/router";

interface AdInfo {
	title: string,
	author: string,
	description: string,
	category: string,
	price: string,
	image: string,
	tags: string,
	isbn: string
}

function PostAd() {
	const router = useRouter();

	const {data: categories, loading} = useGetAllCategoriesQuery();
	const [postAdvertisement] = usePostAdvertisementMutation();


	const [addInfo, setAddInfo] = React.useState<AdInfo>({
		title: "",
		author: "",
		description: "",
		category: "",
		price: "0",
		image: null,
		tags: "",
		isbn: ""
	});

	const onAddInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAddInfo({
			...addInfo,
			[e.target.name]: e.target.value,
		});
	};

	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setAddInfo({
			...addInfo,
			category: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let adPosted = await postAdvertisement({
			variables: {
				postAdvertisement: {
					isbn: addInfo.isbn,
					price: Number(addInfo.price),
					images: [addInfo.image],
					book : {
						authorName: addInfo.author,
						bookName: addInfo.title,
						description: addInfo.description,
						isbn: addInfo.isbn,
						category: addInfo.category
					}
				}
			}
		});

		await router.push(`/dashboard`);

		console.log(adPosted);
	};

	if(loading)
		return <>Loading</>

	return (
		<MainSection>
			<div className={css["sell-root"]}>
				<div className="flex flex-col justify-center items-center w-full h-2/4">
					<div className={css.hero_par}>
						<div className={clsx([css.hero])}>
							<div className={css["hero-text"]}>
								<div>Selling a book</div>
								<div>was never easier</div>
							</div>
						</div>
					</div>
				</div>
				<div className={css["add-info-root"]}>
					<div className={css["add-image"]}>
						<div className={css["div-heading"]}>Media</div>
						<div className={css["image"]}>
							{
								addInfo.image == null ?
									<UploadImage onSuccess={
										(url: string) => {
											setAddInfo({
												...addInfo,
												image: url
											});
											console.log(url);
										}
									}
									/>
									: <img className="object-cover" src={addInfo.image} />
							}
						</div>
						<div className="mb-4">
							<Button variant="dark" label="remove" onClick={() => setAddInfo({
								...addInfo,
								image: null
							})} />
						</div>
					</div>
					<div className={css["add-info"]}>
						<div className={css["div-heading"]}>Product Information</div>
						<div className={css["add-details"]}>
							<div className={css["title-author"]}>
								<div>
									<div className={css["add-info-title"]}> Book Title </div>
									<Input variant="bordered" onChange={onAddInfoChange} value={addInfo.title} name={"title"} />
								</div>
								<div>
									<div className={css["add-info-title"]}> Author </div>
									<Input variant="bordered" onChange={onAddInfoChange} value={addInfo.author} name={"author"} />
								</div>
								<div>
									<div className={css["add-info-title"]}> Category </div>
									<select className={css["input-fields"]} name="category" onChange={handleCategoryChange}>
										{categories.getAllCategories.map(category => {
											return <option key={category.id} value={category.name}>{category.name}</option>
										})}
										
									</select>
								</div>
							</div>
							<div className={css["description"]}>
								<div className={css["add-info-title"]}> Description </div>
								<input
									className={css["description-input"]}
									type="textarea"
									name="description"
									onChange={onAddInfoChange}
								/>
							</div>

							<div className={css["price-tag"]}>

								<div className={css["price"]}>
									<div className={css["div-heading"]}>Pricing</div>
									<div className={css["add-info-title"]}> Price </div>
									<Input variant="bordered" onChange={onAddInfoChange} value={addInfo.price.toString()} name={"price"} />
								</div>

								<div className={css["tags"]}>
									<div className={css["div-heading"]}>Tags</div>
									<div className={css["add-info-title"]}> Tags </div>
									<Input variant="bordered" onChange={onAddInfoChange} value={addInfo.tags} name={"tags"} />
								</div>

								<div className={css["tags"]}>
									<div className={css["div-heading"]}>ISBN</div>
									<div className={css["add-info-title"]}> ISBN </div>
									<Input variant="bordered" onChange={onAddInfoChange} value={addInfo.isbn} name={"isbn"} />
								</div>
							</div>
						</div>
						<div className="mb-4">
							<Button variant={"dark"} label={"Post"} onClick={(e) => handleSubmit(e)} />
						</div>
					</div>
				</div>
			</div>
		</MainSection>
	);
}

export default withApollo({ ssr: true })(PostAd);
