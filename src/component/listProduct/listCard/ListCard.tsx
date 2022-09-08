import { useNavigate } from 'react-router-dom';
import { productType } from '../../../@type/productType';
import style from './listCard.module.scss'



function ListCard( props: { product: productType[]}) {
    const navigate = useNavigate()
    const product = props.product
    return (
      <div className={`${style.listProduct}`}>
        <div className="listCard">
          { product?.map((item) => { 
            return (<div className="card" key={ item.id}>
            <div className="contentCard">
              <div className="cardImg">
                <img
                  src={item.image}
                  alt={ item.name}
                  width={"60%"}
                />
              </div>
              <div className="cardInfo">
                <div className="productName">
                  <p>{item.name}</p>
                </div>
                <div className="sortDescription">
                  <p>{item.shortDescription}</p>
                </div>
                <div className="actionUser">
                  <button className='buyNow' onClick= { () => { 
                    navigate(`/detail/${item.id}`)
                  }}>Buy now</button>
                  <button className="price">{item.price}$</button>
                </div>
              </div>
            </div>
          </div>)
          })}
          
        </div>
      </div>
    );
  }
  
  export default ListCard;