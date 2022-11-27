import { FC } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import {
  ProductCardContainer,
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
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
