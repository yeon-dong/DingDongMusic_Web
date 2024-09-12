import { Badge, CartIcon, Container } from "./CartButton.style";

const CartButton = () => {
  return (
    <Container>
      <CartIcon>
        <img src="./cart_icon.svg" alt="Cart Icon" />
      </CartIcon>
      {/* TODO: Store에서 값 가져오기 */}
      <Badge>12</Badge>
    </Container>
  );
};

export default CartButton;
