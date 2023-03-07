import React from "react";
import MainSection from "@/components/mainSection/mainSection";
import css from "./sell.module.css";
import clsx from "clsx";
import withApollo from "@/apollo/client";
import { Input } from "@/components/input/input";
import { title } from "process";
import Button from "@/components/button/button";

function PostAdd() {
	const [addInfo, setAddInfo] = React.useState<any>({
		title: "",
		author: "",
		description: "",
		category: "",
		price: "",
		image: "",
		tags: "",
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

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(addInfo);
	};

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
							<div className={css["add-image-text"]}>
								{" "}
								Drag And Drop Your File Here{" "}
							</div>
							<input
								className={css["add-image-button"]}
								type="file"
								name="image"
								onChange={onAddInfoChange}
							/>
						</div>
						<div className={css["remove"]}>Remove</div>
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
									<Input variant="bordered" onChange={onAddInfoChange} value={addInfo.title} name={"author"} />
								</div>
								<div>
									<div className={css["add-info-title"]}> Category </div>
									<select className={css["input-fields"]} name="category" onChange={handleCategoryChange}>
										<option value="1">Fiction</option>
										<option value="2">Non-Fiction</option>
										<option value="3">Academic</option>
										<option value="4">Others</option>
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
									<Input variant="bordered" onChange={onAddInfoChange} value={addInfo.title} name={"price"} />
								</div>
								<div className={css["tags"]}>
									<div className={css["div-heading"]}>Tags</div>
									<div className={css["add-info-title"]}> Tags </div>
									<Input variant="bordered" onChange={onAddInfoChange} value={addInfo.title} name={"tags"} />
								</div>
							</div>
						</div>
						<div className="mb-4">
							<Button variant={"dark"} label={"Post"} />
						</div>
					</div>
				</div>
			</div>
		</MainSection>
	);
}

export default withApollo({ ssr: true })(PostAdd);
