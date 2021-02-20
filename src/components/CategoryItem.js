import { Link } from "react-router-dom";
import { ItemWrapper } from "../styles";


const CategoryItem = ({ category }) => {
  
  return (
   
    <ItemWrapper>
    <Link to={`/categories/${category.slug}`} className="list-group-item list-group-item-action">
      <img src={category.image} alt={category.name} />
      </Link>
      <p>{category.name}</p>
      </ItemWrapper>
    
  );
};

export default CategoryItem;