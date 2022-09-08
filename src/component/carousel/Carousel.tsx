import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getProductAct } from "../../store/product/product.action";
import { RootState } from "../../store";
import style from "./carousel.module.scss";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "yellow" }}
      onClick={onClick}
    >
      <img src="image/nextArrow.png" alt="" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <img src="image/prevArrow.png" />
    </div>
  );
}

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state.productReducer);
  useEffect(() => {
    dispatch(getProductAct());
    return () => {};
  }, []);


  return (
    <>
      <div
        className={`${style.carousel}`}
        style={{ backgroundImage: 'url("image/image-6.png")' }}
      >
        <Slider {...settings}>
          {product.map((item) => {
            return (
              <div className="productItem" key={item.id}>
                <img src={item.image} alt={item.name} />
                <span className="infoProduct">
                  <h2>{item.name}</h2>
                  <p>{item.shortDescription}</p>
                  <button className="buyNow">Buy now</button>
                </span>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
