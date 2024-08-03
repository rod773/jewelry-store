import React from "react";

const Banner = () => {
  return (
    <section id="banner-area">
      <div class="ruby-container">
        <div class="row">
          <div class="col-lg-12">
            <div id="banner-carousel" class="owl-carousel">
              {/* <!-- Banner Single Carousel Start -->
                    <div class="single-carousel-wrap slide-item-1"> */}
              <div class="banner-caption text-center text-lg-left">
                <h4>Rubby Store</h4>
                <h2>Ring Solitaire Princess</h2>
                <p>
                  Eodem modo typi, qui nunc nobis videntur parum clari, fiant
                  sollemnes in futurum.
                </p>
                <a href="#" class="btn-long-arrow">
                  Shop Now
                </a>
              </div>
            </div>
            {/* <!-- Banner Single Carousel End --> */}

            {/* <!-- Banner Single Carousel Start --> */}
            <div class="single-carousel-wrap slide-item-2">
              <div class="banner-caption text-center text-lg-left">
                <h4>New Collection 2017</h4>
                <h2>Beautiful Earrings</h2>
                <p>
                  Eodem modo typi, qui nunc nobis videntur parum clari, fiant
                  sollemnes in futurum.
                </p>
                <a href="#" class="btn-long-arrow">
                  Shop Now
                </a>
              </div>
            </div>
            {/* <!-- Banner Single Carousel End --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
