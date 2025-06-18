import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductsKeywordFilter } from "../../redux/actions/products";
import { addDealersKeywordFilter } from "@/redux/actions/dealers";
import { productsKeywordFilterSelector } from "../../redux/selectors/products";
import { dealersKeywordFilterSelector } from "@/redux/selectors/dealers";

const SearchBox = ({ type }) => {
  const keyword = useSelector(
    type === "product"
      ? productsKeywordFilterSelector
      : dealersKeywordFilterSelector
  );
  const [getKeyWord, setkeyWord] = useState(keyword);
  const dispath = useDispatch();
  const placeholder = type === "product" ? "Search for Products" : "Search for Dealers";

  // keyword handler
  const keywordHandler = (e) => {
    if(type === "product") {
    dispath(addProductsKeywordFilter(e.target.value));
    return;
    }
    dispath(addDealersKeywordFilter(e.target.value));
  };

  useEffect(() => {
    setkeyWord(keyword);
  }, [setkeyWord, keyword]);

  return (
    <>
      <input
        type="text"
        name="listing-search"
        placeholder={placeholder}
        value={getKeyWord}
        onChange={keywordHandler}
      />
      <span className="icon flaticon-search-3"></span>
    </>
  );
};

export default SearchBox;
