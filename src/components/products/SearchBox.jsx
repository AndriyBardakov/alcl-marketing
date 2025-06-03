


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKeywordFilter } from "../../redux/actions/products";
import { keywordFilterSelector } from "../../redux/selectors/products";

const SearchBox = () => {
    const keyword = useSelector(keywordFilterSelector);
    const [getKeyWord, setkeyWord] = useState(keyword);
    const dispath = useDispatch();

    // keyword handler
    const keywordHandler = (e) => {
        dispath(addKeywordFilter(e.target.value));
    };

    useEffect(() => {
        setkeyWord(keyword);
    }, [setkeyWord, keyword]);

    return (
        <>
            <input
                type="text"
                name="listing-search"
                placeholder="Search for Products"
                value={getKeyWord}
                onChange={keywordHandler}
            />
            <span className="icon flaticon-search-3"></span>
        </>
    );
};

export default SearchBox;
