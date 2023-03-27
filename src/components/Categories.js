import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

//*style
import "./Categories.css";

const Categories = () => {
  const { department } = useParams();

  const url = "https://fakestoreapi.com/products/category/" + department;
  const { data: products, error, loading } = useFetch(url);

  return (
    <div className="categories">
      <div>
        {loading && <div className="loading"> Loading... </div>}
        {error && <div className="error">{error}</div>}
        {products &&
          products.map((product) => (
            <div key={product.id} className="cat-details-info">
              <img src={product.image} alt="product image" />

              <div className="cat-details-text">
                <h3>{product.title}</h3>
                <div className="cat-details-rating">
                  <span className="rate">Rating: {product.rating.rate}</span>
                  <span className="count">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                <div className="cat-details-price">${product.price}</div>
                <h5>Category: {product.category}</h5>

                <div className="cat-product-info-button">
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
