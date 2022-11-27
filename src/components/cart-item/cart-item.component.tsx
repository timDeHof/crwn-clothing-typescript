import { FC,memo } from 'react'

import { CartItemContainer, ItemDetails } from "./cart-item.styles";

import { CartItem as TcartItem} from "../../store/cart/cart.types"

export type CartItemProps = {
  cartItem: TcartItem;
}

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
