import MainSection from "@/components/mainSection/mainSection"
import clsx from "clsx";
import css from "./edit.module.css";
import pfp from "@/assets/Ellipse 2.png"
import Image from "next/image";
import Button from "@/components/button/button";
import { Input } from "@/components/input/input";
import { useGetCurrentUserQuery, useUpdateUserMutation, useDeleteUserMutation } from "@/graphql/generated/generated";
import withApollo from "@/apollo/client"
import React from "react";


interface EditProfileProps {

}

const EditProfile: React.FC<EditProfileProps> = ({ }) => {
    const { data: userData, loading: userLoading } = useGetCurrentUserQuery();
    const [updateUser] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();

    const [fullName, setFullName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [address, setAddress] = React.useState<string>("");
    const [phoneNo, setPhoneNo] = React.useState<string>("");

    React.useEffect(() => {
        if (!userLoading) {
            setFullName(userData.getCurrentUser.fullName);
            setEmail(userData.getCurrentUser.email);
            setAddress(userData.getCurrentUser.address);
            setPhoneNo(userData.getCurrentUser.phoneNo);
        }
    }, [userLoading]);

    const handleUpdate = async () => {
        await updateUser({
            variables: {
                input: {
                    address,
                    email,
                    fullName,
                    phoneNo
                }
            }
        });
    }

    const handleDelete = async () => {
        await deleteUser();
    }

    if (userLoading)
        return <>Loading...</>

    return (
        <MainSection>
            <div className={clsx([css.root])}>
                <div className={clsx([css.left, "col-span-5 pt-16"])}>
                    <div>
                        <img alt="pfp" src={"https://www.giantfreakinrobot.com/wp-content/uploads/2022/08/rick-astley.jpg"} width={300} height={300} className={css.pfp} />
                        <p className="uppercase tracking-wide font-medium text-2xl">{userData.getCurrentUser.fullName}</p>
                        <br />
                        <div>
                            <p className={clsx([css.email])}>{userData.getCurrentUser.email}</p>
                            <p className={clsx([css.email])}>{userData.getCurrentUser.phoneNo}</p>
                        </div>
                    </div>

                    <Button label="Delete Account" variant="light" onClick={handleDelete} />
                </div>

                <div className={clsx([css.right, "col-span-7"])}>
                    <Input placeholder="Full Name" defaultValue={fullName} variant="outlined" onChange={(e) => setFullName(e.currentTarget.value)} />
                    <Input placeholder="Address" defaultValue={address} variant="outlined" onChange={(e) => setAddress(e.currentTarget.value)} />
                    <Input placeholder="Phone No" defaultValue={phoneNo} variant="outlined" onChange={(e) => setPhoneNo(e.currentTarget.value)} />
                    <Input placeholder="Email ID" defaultValue={email} variant="outlined" onChange={(e) => setEmail(e.currentTarget.value)} />
                    <Button label="Save" variant="dark" onClick={handleUpdate} />
                </div>
            </div>
        </MainSection>
    )
}

export default withApollo({ ssr: true })(EditProfile);