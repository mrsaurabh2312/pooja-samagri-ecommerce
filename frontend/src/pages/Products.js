import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => alert('Could not fetch products'));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p._id} style={{border: '1px solid #ccc', margin: 5, padding: 10}}>
          <h4>{p.name}</h4>
          <p>{p.description}</p>
          <b>₹{p.price}</b>
        </div>
      ))}
    </div>
  );
}

export default Products;
