import css from "./searchBar.module.css"
import {BiSearch} from 'react-icons/bi'
import {MdCancel} from 'react-icons/md'


interface SearchBarProps {
    variant?: string
    value: string,
    onChange: Function
    onSearch: Function
}

const SearchBar : React.FC<SearchBarProps> = ({}) => {

    return(
        <div className={css.root}>
            <button><BiSearch className="pl-2 pr-2" opacity={0.6} enableBackground={"true"} color="black" size={36}/></button>
            <input placeholder="Find a Book or Category" className={css.search} />
            <button><MdCancel className="pr-1" opacity={0.6} enableBackground={"true"} color="black" size={24}/></button>
        </div>
    )
}

export default SearchBar;