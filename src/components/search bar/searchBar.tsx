import css from "./searchBar.module.css"
import {BiSearch} from 'react-icons/bi'
import {MdCancel} from 'react-icons/md'
import React from 'react'
import { useState } from "react";
import {FcFilledFilter} from "react-icons/fc"
import AdvanceSearch from "../advanced search/advanceSearch";
import { useSearchAdvertisementsLazyQuery } from "@/graphql/generated/generated";

interface SearchBarProps {
    variant?: string,
    isRedirect?: boolean
    onSearch: Function
    onAdvancedSearch?: Function
}


const SearchBar : React.FC<SearchBarProps> = ({onSearch, onAdvancedSearch, isRedirect = false}) => {
    const searchRef = React.useRef<HTMLInputElement>();

    const [searchAdvertisements] = useSearchAdvertisementsLazyQuery();
    
    const [advanceOpen, setAdvanceOpen] = useState(false);
    const handleShow = () => setAdvanceOpen(true);

    const search = async () => {
        if(!isRedirect)
        {
            const res = await searchAdvertisements({
                variables: {
                    searchInput: {
                        bookName: searchRef.current.value,
                    }
                }
            });
    
            console.log(res);
            onSearch(res.data.searchAdvertisements);
        }
        else
        {
            onSearch(searchRef.current.value);
        }
    }

    return(
        <>
        {!advanceOpen &&
        <div className={css.root}>
            <button onClick={search} ><BiSearch className="pl-2 pr-2" opacity={0.6} enableBackground={"true"} color="black" size={36}/></button>
            <input ref={searchRef} placeholder="Find a Book or Category" className={css.search} />
            <button onClick={() => searchRef.current.value = ""} ><MdCancel className="pr-1" opacity={0.6} enableBackground={"true"} color="black" size={24}/></button>
            {!isRedirect && <FcFilledFilter className="hover:cursor-pointer" size={32} onClick={handleShow} />}
        </div> }  
        {advanceOpen && <AdvanceSearch onSearch={onAdvancedSearch} advanceOpen = {advanceOpen} setAdvanceOpen = {setAdvanceOpen} />}  
      </>
    )
}

export default SearchBar;