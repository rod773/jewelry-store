import logo from "assets/img/logo.png";
import prodruct_1 from "assets/img/product-1.jpg";
import prodruct_2 from "assets/img/product-2.jpg";
import prodruct_3 from "assets/img/product-3.jpg";
import cancel from "assets/img/cancel.png";

import * as bootstrap from "bootstrap";

const Header = () => {
  const openSearch = function () {};

  const closeSearch = function () {};

  var modal2 = new bootstrap.Modal(document.getElementById("ModalSearch"), {});

  return (
    <div>
      {/* <!--== Header Area Start ==--> */}
      <header id="header-area">
        <div className="ruby-container">
          <div className="row">
            {/* <!-- Logo Area Start --> */}
            <div className="col-3 col-lg-1 col-xl-2 m-auto">
              <a href="index.html" className="logo-area">
                <img src={logo} alt="Logo" className="img-fluid" />
              </a>
            </div>
            {/* <!-- Logo Area End -->

            <!-- Navigation Area Start --> */}
            <div className="col-3 col-lg-9 col-xl-8 m-auto">
              <div className="main-menu-wrap">
                <nav id="mainmenu">
                  <ul>
                    <li className="dropdown-show">
                      <a href="index.html">
                        Home
                        {/* <i className="bi bi-chevron-down"></i> */}
                      </a>
                      <ul className="dropdown-nav sub-dropdown">
                        <li>
                          <a href="index.html">Home Layout 1</a>
                        </li>
                        <li>
                          <a href="index2.html">Home Layout 2</a>
                        </li>
                        <li>
                          <a href="index3.html">Home Layout 3</a>
                        </li>
                        <li>
                          <a href="index4.html">Home Layout 4</a>
                        </li>
                        <li>
                          <a href="index5.html">Home Layout 5</a>
                        </li>
                        <li>
                          <a href="index6.html">Home Layout 6</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-show">
                      <a href="#">Shop</a>
                      <ul className="mega-menu-wrap dropdown-nav">
                        <li className="mega-menu-item">
                          <a href="shop.html" className="mega-item-title">
                            Shop Layout
                          </a>
                          <ul>
                            <li>
                              <a href="shop.html">Shop Left Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Shop Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-left-full-wide.html">
                                Shop Left Full Wide
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-full-wide.html">
                                Shop Right Full Wide
                              </a>
                            </li>
                            <li>
                              <a href="shop-full-wide.html">
                                Shop Without Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="mega-menu-item">
                          <a
                            href="single-product.html"
                            className="mega-item-title"
                          >
                            Single Products
                          </a>
                          <ul>
                            <li>
                              <a href="single-product.html">Single Product</a>
                            </li>
                            <li>
                              <a href="single-product-normal.html">
                                Single Product Normal
                              </a>
                            </li>
                            <li>
                              <a href="single-product-group.html">
                                Single Product Group
                              </a>
                            </li>
                            <li>
                              <a href="single-product-external.html">
                                Single Product External
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-show">
                      <a href="#">Pages</a>
                      <ul className="dropdown-nav">
                        <li>
                          <a href="cart.html">Shopping Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="compare.html">Compare</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="login-register.html">Login & Register</a>
                        </li>
                        <li>
                          <a href="my-account.html">My Account</a>
                        </li>
                        <li>
                          <a href="404.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-show">
                      <a href="#">Men</a>
                      <ul className="mega-menu-wrap dropdown-nav">
                        <li className="mega-menu-item">
                          <a
                            href="shop-left-full-wide.html"
                            className="mega-item-title"
                          >
                            Shirt
                          </a>
                          <ul>
                            <li>
                              <a href="shop.html">Tops & Tees</a>
                            </li>
                            <li>
                              <a href="shop.html">Polo Short Sleeve</a>
                            </li>
                            <li>
                              <a href="shop.html">Graphic T-Shirts</a>
                            </li>
                            <li>
                              <a href="shop.html">Jackets & Coats</a>
                            </li>
                            <li>
                              <a href="shop.html">Fashion Jackets</a>
                            </li>
                          </ul>
                        </li>

                        <li className="mega-menu-item">
                          <a
                            href="shop-left-full-wide.html"
                            className="mega-item-title"
                          >
                            Jeans
                          </a>
                          <ul>
                            <li>
                              <a href="shop.html">Crochet</a>
                            </li>
                            <li>
                              <a href="shop.html">Sleeveless</a>
                            </li>
                            <li>
                              <a href="shop.html">Stripes</a>
                            </li>
                            <li>
                              <a href="shop.html">Sweaters</a>
                            </li>
                            <li>
                              <a href="shop.html">Hoodies</a>
                            </li>
                          </ul>
                        </li>

                        <li className="mega-menu-item">
                          <a
                            href="shop-left-full-wide.html"
                            className="mega-item-title"
                          >
                            Shoes
                          </a>
                          <ul>
                            <li>
                              <a href="shop.html">Tops & Tees</a>
                            </li>
                            <li>
                              <a href="shop.html">Polo Short Sleeve</a>
                            </li>
                            <li>
                              <a href="shop.html">Graphic T-Shirts</a>
                            </li>
                            <li>
                              <a href="shop.html">Jackets & Coats</a>
                            </li>
                            <li>
                              <a href="shop.html">Fashion Jackets</a>
                            </li>
                          </ul>
                        </li>

                        <li className="mega-menu-item">
                          <a
                            href="shop-left-full-wide.html"
                            className="mega-item-title"
                          >
                            Watches
                          </a>
                          <ul>
                            <li>
                              <a href="shop.html">Crochet</a>
                            </li>
                            <li>
                              <a href="shop.html">Sleeveless</a>
                            </li>
                            <li>
                              <a href="shop.html">Stripes</a>
                            </li>
                            <li>
                              <a href="shop.html">Sweaters</a>
                            </li>
                            <li>
                              <a href="shop.html">Hoodies</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-show">
                      <a href="shop-left-full-wide.html">Women</a>
                      <ul className="mega-menu-wrap dropdown-nav">
                        <li className="mega-menu-item">
                          <a
                            href="shop-left-full-wide.html"
                            className="mega-item-title"
                          >
                            Kamiz
                          </a>
                          <ul>
                            <li>
                              <a href="shop.html">Tops & Tees</a>
                            </li>
                            <li>
                              <a href="shop.html">Polo Short Sleeve</a>
                            </li>
                            <li>
                              <a href="shop.html">Graphic T-Shirts</a>
                            </li>
                            <li>
                              <a href="shop.html">Jackets & Coats</a>
                            </li>
                            <li>
                              <a href="shop.html">Fashion Jackets</a>
                            </li>
                          </ul>
                        </li>

                        <li className="mega-menu-item">
                          <a
                            href="shop-left-full-wide.html"
                            className="mega-item-title"
                          >
                            Life Style
                          </a>
                          <ul>
                            <li>
                              <a href="shop.html">Crochet</a>
                            </li>
                            <li>
                              <a href="shop.html">Sleeveless</a>
                            </li>
                            <li>
                              <a href="shop.html">Stripes</a>
                            </li>
                            <li>
                              <a href="shop.html">Sweaters</a>
                            </li>
                            <li>
                              <a href="shop.html">Hoodies</a>
                            </li>
                          </ul>
                        </li>

                        <li className="mega-menu-item">
                          <a
                            href="shop-left-full-wide.html"
                            className="mega-item-title"
                          >
                            Shoes
                          </a>
                          <ul>
                            <li>
                              <a href="shop.html">Tops & Tees</a>
                            </li>
                            <li>
                              <a href="shop.html">Polo Short Sleeve</a>
                            </li>
                            <li>
                              <a href="shop.html">Graphic T-Shirts</a>
                            </li>
                            <li>
                              <a href="shop.html">Jackets & Coats</a>
                            </li>
                            <li>
                              <a href="shop.html">Fashion Jackets</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-show">
                      <a href="#">Blog</a>
                      <ul className="dropdown-nav">
                        <li>
                          <a href="blog.html">Blog Right Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-grid.html">Blog Grid Layout</a>
                        </li>
                        <li>
                          <a href="single-blog.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* <!-- Navigation Area End -->

            <!-- Header Right Meta Start --> */}
            <div className="col-6 col-lg-2 m-auto">
              <div className="header-right-meta text-right">
                <ul>
                  <li>
                    <a href="#" className="modal-active" onClick={openSearch}>
                      <i className="bi bi-search"></i>
                    </a>
                  </li>
                  <li className="settings">
                    <a href="#">
                      <i className="fa fa-cog"></i>
                    </a>
                    <div className="site-settings d-block d-sm-flex">
                      <dl className="currency">
                        <dt>Currency</dt>
                        <dd className="current">
                          <a href="#">USD</a>
                        </dd>
                        <dd>
                          <a href="#">AUD</a>
                        </dd>
                        <dd>
                          <a href="#">CAD</a>
                        </dd>
                        <dd>
                          <a href="#">BDT</a>
                        </dd>
                      </dl>

                      <dl className="my-account">
                        <dt>My Account</dt>
                        <dd>
                          <a href="#">Dashboard</a>
                        </dd>
                        <dd>
                          <a href="#">Profile</a>
                        </dd>
                        <dd>
                          <a href="#">Sign</a>
                        </dd>
                      </dl>

                      <dl className="language">
                        <dt>Language</dt>
                        <dd className="current">
                          <a href="#">English (US)</a>
                        </dd>
                        <dd>
                          <a href="#">English (UK)</a>
                        </dd>
                        <dd>
                          <a href="#">Chinees</a>
                        </dd>
                        <dd>
                          <a href="#">Bengali</a>
                        </dd>
                        <dd>
                          <a href="#">Hindi</a>
                        </dd>
                        <dd>
                          <a href="#">Japanees</a>
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li className="shop-cart">
                    <a href="#">
                      <i className="fa fa-shopping-bag"></i>{" "}
                      <span className="count">3</span>
                    </a>
                    <div className="mini-cart">
                      <div className="mini-cart-body">
                        <div className="single-cart-item d-flex">
                          <figure className="product-thumb">
                            <a href="#">
                              <img
                                className="img-fluid"
                                src={prodruct_1}
                                alt="Products"
                              />
                            </a>
                          </figure>

                          <div className="product-details">
                            <h2>
                              <a href="#">Sprite Yoga Companion</a>
                            </h2>
                            <div className="cal d-flex align-items-center">
                              <span className="quantity">3</span>
                              <span className="multiplication">X</span>
                              <span className="price">$77.00</span>
                            </div>
                          </div>
                          <a href="#" className="remove-icon">
                            <i className="fa fa-trash-o"></i>
                          </a>
                        </div>
                        <div className="single-cart-item d-flex">
                          <figure className="product-thumb">
                            <a href="#">
                              <img
                                className="img-fluid"
                                src={prodruct_2}
                                alt="Products"
                              />
                            </a>
                          </figure>
                          <div className="product-details">
                            <h2>
                              <a href="#">Yoga Companion Kit</a>
                            </h2>
                            <div className="cal d-flex align-items-center">
                              <span className="quantity">2</span>
                              <span className="multiplication">X</span>
                              <span className="price">$6.00</span>
                            </div>
                          </div>
                          <a href="#" className="remove-icon">
                            <i className="fa fa-trash-o"></i>
                          </a>
                        </div>
                        <div className="single-cart-item d-flex">
                          <figure className="product-thumb">
                            <a href="#">
                              <img
                                className="img-fluid"
                                src={prodruct_3}
                                alt="Products"
                              />
                            </a>
                          </figure>
                          <div className="product-details">
                            <h2>
                              <a href="#">Sprite Yoga Companion Kit</a>
                            </h2>
                            <div className="cal d-flex align-items-center">
                              <span className="quantity">1</span>
                              <span className="multiplication">X</span>
                              <span className="price">$116.00</span>
                            </div>
                          </div>
                          <a href="#" className="remove-icon">
                            <i className="fa fa-trash-o"></i>
                          </a>
                        </div>
                      </div>
                      <div className="mini-cart-footer">
                        <a href="checkout.html" className="btn-add-to-cart">
                          Checkout
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Header Right Meta End --> */}
          </div>
        </div>
      </header>
      {/* <!--== Header Area End ==--> */}
      {/* <!--== Search Box Area Start ==--> */}
      <div className="body-popup-modal-area">
        <span className="modal-close">
          <img src="assets/img/cancel.png" alt="Close" className="img-fluid" />
        </span>
        <div className="modal-container d-flex">
          <div className="search-box-area">
            <div className="search-box-form">
              <form action="#" method="post">
                <input type="search" placeholder="type keyword and hit enter" />
                <button className="btn" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--== Search Box Area End ==--> */}
    </div>
  );
};

export default Header;
