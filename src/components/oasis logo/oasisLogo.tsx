import clsx from 'clsx';
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


    return(
        <span className={clsx([css.root, variants.weight[weight], variants.size[size]])}>OASIS</span>
    );
}

export default OasisLogo;