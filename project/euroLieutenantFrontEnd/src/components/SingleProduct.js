import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductData from './ProductData';

const SingleProduct = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/product/${id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <ProductData
            key={data.product_id}
            img={data.image}
            price={data.price}
            desc={data.description}
            title={data.name}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
