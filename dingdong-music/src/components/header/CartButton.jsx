import { useCallback } from "react";
import { Badge, CartIcon, Container } from "./CartButton.style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartButton = ({ color }) => {
  const navigate = useNavigate();

  const { totalAlbums } = useSelector((state) => state.cart);

  const handleClick = useCallback(() => {
    navigate("/cart");
  }, []);

  return (
    <Container onClick={handleClick}>
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
