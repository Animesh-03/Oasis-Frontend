import clsx from 'clsx';
import { useRouter } from 'next/router';
import css from './oasisLogo.module.css'

const variants = {
    size: {
        large: css.large
    },
    weight: {
        bold: css.bold
    }
}

interface OasisLogoProps{
    size?: keyof typeof variants.size,
    weight?: keyof typeof variants.weight,
}

const OasisLogo: React.FC<OasisLogoProps> = ({size = "", weight = ""}) => {
    const router = useRouter();

    return(
        <span onClick={async () => await router.push("/dashboard")} className={clsx([css.root, variants.weight[weight], variants.size[size], "cursor-pointer"])}>OASIS</span>
    );
}

export default OasisLogo;