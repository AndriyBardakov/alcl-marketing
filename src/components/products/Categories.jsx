import { useDispatch, useSelector } from "react-redux";
import {
  categoriesSelector,
  categoryFilterSelector,
} from "../../redux/selectors/products";
import { addCategoryFilter } from "../../redux/actions/products";
import { BiCategory } from "react-icons/bi";

const Categories = () => {
  const categories = useSelector(categoriesSelector);
  const categoryFilter = useSelector(categoryFilterSelector);
  const dispatch = useDispatch();

  const categoryHandler = (e) => {
    dispatch(addCategoryFilter(e.target.value));
  };
  return (
    <>
      <select
        className="form-select"
        onChange={categoryHandler}
        value={categoryFilter}
      >
        <option value="">Choose a category</option>
        {categories?.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <BiCategory className="icon" />
    </>
  );
};

export default Categories;
