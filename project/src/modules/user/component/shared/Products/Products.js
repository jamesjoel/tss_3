import React from 'react'

const Products = (props) => {
    let {title, price, detail, discout, category} = props.obj;
  return (
    <div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt=""/></a>
						</div>
						<h3>{title}</h3>
                        <h6>{category}</h6>
						<p className="product-price"><span>Price </span> {price}$ </p>
						<a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Buy</a>
					</div>
				</div>
  )
}

export default Products