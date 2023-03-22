import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="top-header-area" style={{backgroundColor : 'black', position : 'relative'}} id="sticker">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-sm-12 text-center">
					<div className="main-menu-wrap">
						
						<div className="site-logo">
							<NavLink to="/">
								<img src="assets/img/logo.png" alt=""/>
							</NavLink>
						</div>
						

						
						<nav className="main-menu">
							<ul>
								<li><NavLink to="/">Home</NavLink></li>
								<li><NavLink to="/about">About</NavLink></li>
								<li><NavLink to="/contact">Contact</NavLink></li>
								<li><NavLink to="/signup">Signup</NavLink></li>
								<li><NavLink to="/login">Login</NavLink></li>
								{/* <li><a href="#">Pages</a>
									<ul className="sub-menu">
										<li><a href="404.html">404 page</a></li>
										<li><a href="about.html">About</a></li>
										<li><a href="cart.html">Cart</a></li>
										<li><a href="checkout.html">Check Out</a></li>
										<li><a href="contact.html">Contact</a></li>
										<li><a href="news.html">News</a></li>
										<li><a href="shop.html">Shop</a></li>
									</ul>
								</li> */}
								
								<li>
									<div className="header-icons">
										{/* <a className="shopping-cart" href="cart.html"><i className="fas fa-shopping-cart"></i></a>
										<a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a> */}
									</div>
								</li>
							</ul>
						</nav>
						
						
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Navbar