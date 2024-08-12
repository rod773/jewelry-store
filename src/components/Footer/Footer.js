import IMAGES from "assets/img/index.js";
import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <div>
      <footer id="footer-area">
        {/* <!-- Footer Call to Action Start --> */}
        <div className="footer-callto-action">
          <div className="ruby-container">
            <div className="callto-action-wrapper">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  {/* <!-- Single Call-to Action Start --> */}
                  <div className="single-callto-action d-flex">
                    <figure className="callto-thumb">
                      <img src={IMAGES.air_plane} alt="WorldWide Shipping" />
                    </figure>
                    <div className="callto-info">
                      <h2>Free Shipping Worldwide</h2>
                      <p>On order over $150 - 7 days a week</p>
                    </div>
                  </div>
                  {/* <!-- Single Call-to Action End --> */}
                </div>

                <div className="col-lg-3 col-md-6">
                  {/* <!-- Single Call-to Action Start --> */}
                  <div className="single-callto-action d-flex">
                    <figure className="callto-thumb">
                      <img src={IMAGES.support} alt="Support" />
                    </figure>
                    <div className="callto-info">
                      <h2>24/7 CUSTOMER SERVICE</h2>
                      <p>Call us 24/7 at 000 - 123 - 456k</p>
                    </div>
                  </div>
                  {/* <!-- Single Call-to Action End --> */}
                </div>

                <div className="col-lg-3 col-md-6">
                  {/* <!-- Single Call-to Action Start --> */}
                  <div className="single-callto-action d-flex">
                    <figure className="callto-thumb">
                      <img src={IMAGES.money_back} alt="Money Back" />
                    </figure>
                    <div className="callto-info">
                      <h2>MONEY BACK Guarantee!</h2>
                      <p>Send within 30 days</p>
                    </div>
                  </div>
                  {/* <!-- Single Call-to Action End --> */}
                </div>

                <div className="col-lg-3 col-md-6">
                  {/* <!-- Single Call-to Action Start --> */}
                  <div className="single-callto-action d-flex">
                    <figure className="callto-thumb">
                      <img src={IMAGES.cog} alt="Guide" />
                    </figure>
                    <div className="callto-info">
                      <h2>SHOPPING GUIDE</h2>
                      <p>Quis Eum Iure Reprehenderit</p>
                    </div>
                  </div>
                  {/* <!-- Single Call-to Action End --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Call to Action End -->

    <!-- Footer Follow Up Area Start --> */}
        <div className="footer-followup-area">
          <div className="ruby-container">
            <div className="followup-wrapper">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="follow-content-wrap">
                    <a href="index.html" className="logo">
                      <Image src={IMAGES.logo} alt="logo" fluid />
                    </a>
                    <p>
                      Eodem modo typi, qui nunc nobis videntur parum clari,
                      fiant sollemnes in futurum
                    </p>

                    <div className="footer-social-icons">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-flickr"></i>
                      </a>
                    </div>

                    <a href="#">
                      <img src={IMAGES.payment} alt="Payment Method" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Follow Up Area End -->

    <!-- Footer Image Gallery Area Start --> */}
        <div className="footer-image-gallery">
          <div className="ruby-container">
            <div className="image-gallery-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <Carousel className="imgage-gallery-carousel owl-carousel">
                    <Carousel.Item>
                      <Stack direction="horizontal">
                        <div className="gallery-item">
                          <a href="#">
                            <Image
                              src={IMAGES.gallery_img_1}
                              alt="Gallery"
                              fluid
                            />
                          </a>
                        </div>
                        <div className="gallery-item">
                          <a href="#">
                            <Image
                              src={IMAGES.gallery_img_2}
                              alt="Gallery"
                              fluid
                            />
                          </a>
                        </div>
                        <div className="gallery-item">
                          <a href="#">
                            <Image
                              src={IMAGES.gallery_img_3}
                              alt="Gallery"
                              fluid
                            />
                          </a>
                        </div>
                      </Stack>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Stack direction="horizontal">
                        <div className="gallery-item">
                          <a href="#">
                            <Image
                              src={IMAGES.gallery_img_4}
                              alt="Gallery"
                              fluid
                            />
                          </a>
                        </div>
                        <div className="gallery-item">
                          <a href="#">
                            <Image
                              src={IMAGES.gallery_img_3}
                              alt="Gallery"
                              fluid
                            />
                          </a>
                        </div>
                        <div className="gallery-item">
                          <a href="#">
                            <Image
                              src={IMAGES.gallery_img_2}
                              alt="Gallery"
                              fluid
                            />
                          </a>
                        </div>
                      </Stack>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Image Gallery Area End -->

    <!-- Copyright Area Start --> */}
        {/* <div className="copyright-area">
          <div className="ruby-container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="copyright-text">
                  <p>
                    <a target="_blank" href="https://linktr.ee/dnxempire">
                      DNX
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Copyright Area End --> */}
      </footer>
    </div>
  );
};

export default Footer;
