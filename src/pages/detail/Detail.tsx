import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListCard from "../../component/listProduct/listCard/ListCard";
import { RootState } from "../../store";
import { getProducDetailtAct } from "../../store/product/product.action";
import style from "./detail.module.scss";

function Detail() {
  const [quatity, setQuatity] = useState<number>(1);
  const param = useParams();
  const dispatch = useDispatch();
  const { productDetail } = useSelector(
    (state: RootState) => state.productReducer
  );
  useEffect(() => {
    dispatch(getProducDetailtAct(param.idProduct));
  }, []);
  console.log(productDetail);

  return (
    <div className={`${style.detail}`}>
      <div className="detailProduct">
        <div className="image">
          <img src={productDetail.image} alt={productDetail.name} />
        </div>
        <div className="infoProduct">
          <div className="productName">{productDetail.name}</div>
          <p>{productDetail.description}</p>
          <h4 className="availableSize">Availabel size</h4>
          <div className="size">
            {productDetail.size.map((item) => (
              <button key={item} className="sizeNumber">
                {item}
              </button>
            ))}
          </div>
          <div className="totalMoney">{quatity * productDetail.price}$</div>
          <div className="changeQuantity">
            <button
              className="plus"
              onClick={() => setQuatity((prev) => prev + 1)}
            >
              +
            </button>
            <span className="quanlity">{quatity}</span>
            <button
              className="increate"
              onClick={() => quatity > 1 && setQuatity((prev) => prev - 1)}
            >
              -
            </button>
          </div>
          <button className="addToCart">Add to cart</button>
        </div>
      </div>

      <div>
        <div className="realateProduct">- Realate Product -</div>
        <ListCard product={productDetail?.relatedProducts} />
      </div>
    </div>
  );
}

export default Detail;
