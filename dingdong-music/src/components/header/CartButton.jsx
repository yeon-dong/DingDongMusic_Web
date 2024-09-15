import { Badge, CartIcon, Container } from "./CartButton.style";
import { useSelector } from "react-redux";

const CartButton = ({ color }) => {
  const { totalAlbums } = useSelector((state) => state.cart);
  return (
    <Container>
      <CartIcon>
        <img
          src={`/cart_icon${color === "white" ? "_white" : ""}.svg`}
          alt="Cart Icon"
        />
      </CartIcon>
      <Badge>{totalAlbums}</Badge>
    </Container>
  );
};

export default CartButton;
