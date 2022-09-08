import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ListCard from "./listCard/ListCard";
import style from "./listProduct.module.scss";

function ListProduct() {
  const { product } = useSelector((state: RootState) => state.productReducer);
  return (
    <>
      <div className={`${style.title}`}>- Product Feature -</div>

      <ListCard product={product} />
    </>
  );
}

export default ListProduct;
