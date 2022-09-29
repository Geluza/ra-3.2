
import propTypes from 'prop-types';


function Article({item}) {

  let {url, MainImage, title, currency_code, price, quantity} = item;

  let img = MainImage && MainImage.url_570xN;

  let titleStr = '';
   if (title) {
       titleStr = title.length > 50 ? `${title.substring(0, 50)}...` : title;
   }
  
  if(currency_code === "USD"){
    currency_code = "$"
  } else if(currency_code==="EUR"){
    currency_code = "€"
  }
 
    let quantityStyle;
  if(quantity < 10){
    quantityStyle = " level-low"
  } else if(quantity < 20) {
    quantityStyle = "level-medium"
  } else if (quantity >= 20) {
    quantityStyle = "level-high";
  }


  return (
    <div className="item">
    <div className="item-image">
      <a href={url}>
        <img src={img} alt="img"></img>
      </a>
    </div>
    <div className="item-details">
       <p className="item-title">{titleStr}</p>
      <p className="item-price">{currency_code}{price}</p>
      <p className={`item-quantity ${quantityStyle}`}>{quantity}left</p>
    </div>
  </div> 
  );
}


Article.propTypes = {
 listing_id: propTypes.number,
 url: propTypes.string,
 title: propTypes.string,
 currency_code: propTypes.string,
 price: propTypes.string,
 quantity: propTypes.number,
 MainImage: propTypes.object,
 url_570xN: propTypes.string

}
export default Article;
