import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductData from './ProductData';

const Catalogue = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/product")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          {data.map(item => (
            <Link to={`/product/${item.product_id}`} key={item.product_id}>
              <ProductData
                img={item.image}
                price={item.price}
                desc={item.description}
                title={item.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;