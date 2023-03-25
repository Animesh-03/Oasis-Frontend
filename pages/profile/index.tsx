import MainSection from "@/components/mainSection/mainSection"
import withApollo from "@/apollo/client";


interface ProfilePageProps {

}

const ProfilePage: React.FC<ProfilePageProps> = ({}) => {

    return (
        <MainSection>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis, eaque exercitationem nobis nisi quam iste? Blanditiis error eius corporis nihil a delectus beatae at, consectetur rerum saepe. Sunt, veritatis? 
        </div>
        </MainSection>
    )
}

export default withApollo({ssr: true})(ProfilePage);