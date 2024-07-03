import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product details!', error);
      });
  }, [productId]);

  const handleAddToCart = () => {
    // Implement add to cart functionality
  };

  const handleBuyNow = () => {
    // Implement buy now functionality
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  // Construct the full image path
  const imagePath = `${process.env.PUBLIC_URL}/${product.image}`;

  return (
    <div className="product-detail-page">
      <div className="product-detail">
        <img
          src={imagePath}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `${process.env.PUBLIC_URL}/images/default-product.png`; // Fallback image
          }}
        />
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Rating: {product.review}</p>
        <p>Delivery Date: {product.deliveryDate}</p>
        <p>Out of Stock: {product.outOfStock ? 'Yes' : 'No'}</p>
        <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
        <button onClick={handleBuyNow} className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
