import { useDispatch, useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"
import { removeItemFromCart, addItemToCart, clearItemFromCart } from "../../store/cart/cart.action"

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  RemoveButton,
  Quantity,
  Arrow,
  Value,
} from "./checkout-item.styles.jsx"

const CheckoutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems)
  const { name, imageUrl, price, quantity } = cartItem

  const dispatch = useDispatch()
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>

      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
      <hr />
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
