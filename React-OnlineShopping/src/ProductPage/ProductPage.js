import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductPage.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', maxPrice: Infinity });
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Fetch products from the API
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filtered products with all products
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  // Handle filtering based on category and max price
  useEffect(() => {
    const filtered = products.filter(product => {
      const matchCategory = filters.category === '' || product.category === filters.category;
      const matchPrice = product.price <= filters.maxPrice;
      return matchCategory && matchPrice;
    });
    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCart = () => {
    if (isAuthenticated) {
      navigate('/cart');
    } else {
      navigate('/login');
    }
  };

  const handleOrderHistory = () => {
    if (isAuthenticated) {
      navigate('/order-history');
    } else {
      navigate('/login');
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className="product-page">
      <header className="header">
        <div className="title">ProMart</div>
        <div className="nav-buttons">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleCart}>Cart</button>
          <button onClick={handleOrderHistory}>Order History</button>
        </div>
      </header>
      <div className="filters">
        <h2>Filters</h2>
        <div className="filter-item">
          <label>Category:</label>
          <select name="category" value={filters.category} onChange={handleFilterChange}>
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Sports">Sports</option>
            <option value="Books">Books</option>
          </select>
        </div>
        <div className="filter-item">
          <label>Max Price:</label>
          <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} />
        </div>
      </div>
      <main className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item" onClick={() => navigate(`/products/${product.id}`)}>
            <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.review}</p>
            <p>{product.category}</p>
            <p>{product.offers}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default ProductPage;
