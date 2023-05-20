import React from 'react';

const ProductData = (props) => {
  const { img, price, desc, title } = props;

  // console.log(props);

  return (
    // <div className='col-md-4'>
     <div className='catSect'>
      <figure className="catalogue product-selections text-center">
        <img src={img} className="img-fluid rounded menu-img" alt={title} />
        <figcaption className="product-caption product-price text-center">${price}</figcaption>
        <figcaption className="product-caption product-title text-center">{title}</figcaption>
        <figcaption className="product-caption product-desc text-end">{desc}</figcaption>
      </figure>
     </div>
    // </div>
  );
};

export default ProductData;
