import { Badge, CartIcon, Container } from "./CartButton.style";
import { useSelector } from "react-redux";

const CartButton = () => {
  const { totalAlbums } = useSelector((state) => state.cart);
  return (
    <Container>
      <CartIcon>
        <img src="/cart_icon.svg" alt="Cart Icon" />
      </CartIcon>
      <Badge>{totalAlbums}</Badge>
    </Container>
  );
};

export default CartButton;
