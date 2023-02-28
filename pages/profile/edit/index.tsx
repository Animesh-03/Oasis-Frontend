import MainSection from "@/components/mainSection/mainSection"
import clsx from "clsx";
import css from "./edit.module.css";
import pfp from "@/assets/Ellipse 2.png"
import Image from "next/image";
import Button from "@/components/button/button";
import { Input } from "@/components/input/input";

interface EditProfileProps {

}

const EditProfile: React.FC<EditProfileProps> = ({}) => {

    return (
        <MainSection>
        <div className={clsx([css.root])}>
            <div className={clsx([css.left, "col-span-5 pt-16"])}>
                <div>
                    <img alt="pfp" src={"https://www.giantfreakinrobot.com/wp-content/uploads/2022/08/rick-astley.jpg"} width={300} height={300} className={css.pfp} />
                    <p className="uppercase tracking-wide font-medium text-2xl">Mayur Joshi</p>
                    <br/>
                    <div>
                        <p className={clsx([css.email])}>986677228</p>
                        <p className={clsx([css.email])}>MAYUR@gmail.com</p>
                    </div>
                </div>

                <Button label="Delete Account" variant="light"/>
            </div>

            <div className={clsx([css.right, "col-span-7"])}>
                <Input placeholder="Full Name" defaultValue={"Mayur Joshi"} variant="outlined" />
                <Input placeholder="Address" defaultValue={"Mayur Joshi"} variant="outlined" />
                <Input placeholder="Phone No" defaultValue={"Mayur Joshi"} variant="outlined" />
                <Input placeholder="Email ID" defaultValue={"Mayur Joshi"} variant="outlined" />
                <Button label="Save" variant="dark" />
            </div>
        </div>
        </MainSection>
    )
}

export default EditProfile;