import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import IMAGES from "assets/img/index.js";

const SingleCarousel1 = styled.div`
  background-image: url(${IMAGES.slide_img_1});
`;

const SingleCarousel2 = styled.div`
  background-image: url(${IMAGES.slide_img_2});
`;

const BannerSlider = () => {
  return (
    <>
      {/* <!--== Banner // Slider Area Start ==--> */}
      <section id="banner-area">
        <div className="ruby-container">
          <div className="row">
            <div className="col-lg-12">
              <div id="banner-carousel" className="owl-carousel">
                <Carousel>
                  <Carousel.Item>
                    {/* <!-- Banner Single Carousel Start --> */}
                    <SingleCarousel1 className="single-carousel-wrap slide-item-1">
                      <div className="banner-caption text-center text-lg-left">
                        <Fade direction="up" duration="1000">
                          <h4>Rubby Store</h4>
                          <h2>Ring Solitaire Princess</h2>
                          <p>
                            Eodem modo typi, qui nunc nobis videntur parum
                            clari, fiant sollemnes in futurum.
                          </p>
                          <a href="#" className="btn-long-arrow">
                            Shop Now
                          </a>
                        </Fade>
                      </div>
                    </SingleCarousel1>
                  </Carousel.Item>
                  {/* <!-- Banner Single Carousel End -->

                  <!-- Banner Single Carousel Start --> */}
                  <Carousel.Item>
                    <SingleCarousel2 className="single-carousel-wrap slide-item-2">
                      <div className="banner-caption text-center text-lg-left">
                        <Fade direction="up" duration="1000">
                          <h4>New Collection 2017</h4>
                          <h2>Beautiful Earrings</h2>
                          <p>
                            Eodem modo typi, qui nunc nobis videntur parum
                            clari, fiant sollemnes in futurum.
                          </p>
                          <a href="#" className="btn-long-arrow">
                            Shop Now
                          </a>
                        </Fade>
                      </div>
                    </SingleCarousel2>
                  </Carousel.Item>

                  {/* <!-- Banner Single Carousel End --> */}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--== Banner Slider End ==--> */}
    </>
  );
};

export default BannerSlider;
