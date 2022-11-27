import { FC } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import { BUTTON_TYPES_CLASSES } from "../button/button.component";

import {
  ProductCardContainer,
  BackgroundImage,
  AddButton,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

import { CategoryItem } from "../../store/categories/categories.types"


type ProductCardProps = {
  product: CategoryItem,
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { imageUrl, name, price } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <AddButton
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </AddButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
