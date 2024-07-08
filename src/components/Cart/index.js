import Left from "./Left";
import Right from "./Right";

const Cart = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-7 ps-0">
          <Left />
        </div>
        <div className="col-5 pe-0">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Cart;
