import "./categories-menu.styles.scss";
import CategoryItem from "../category-item/Category-item.component";

const categoriesMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        const { id } = category;
        return <CategoryItem key={id} category={category} />;
      })}
    </div>
  );
};

export default categoriesMenu;
