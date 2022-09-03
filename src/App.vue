<script setup></script>

<template>
  <!-- header section starts  -->
  <header class="header">
    <a href="#" class="logo" style="display: flex; align-items: center">
      <img src="src/image/logo-piwulang-becik.png" alt="Logo" width="50" style="padding-right: 12px" />
      Piwulang Becik Shop
    </a>

    <nav class="navbar" style="display: block">
      <a href="#home">Beranda</a>
      <!-- <a href="#about">Tentang</a> -->
      <a href="#features">Jasa</a>
      <a href="#products">Produk</a>
      <!-- <a href="#categories">Categories</a> -->
    </nav>

    <div class="icons">
      <div class="fas fa-bars" id="menu-btn"></div>
      <div class="fas fa-search" id="search-btn"></div>
      <!-- <div class="fas fa-shopping-cart" id="cart-btn"></div> -->
      <!-- <div class="fas fa-user" id="login-btn"></div> -->
    </div>

    <form class="search-form">
      <input type="search" id="search" placeholder="search here..." />
      <label for="search" class="fas fa-search"></label>
    </form>

    <!-- <div class="shopping-cart">
            <div class="box">
                <i class="fas fa-trash"></i>
                <img src="image/cart-img-1.png" alt="">
                <div class="content">
                    <h3>watermelon</h3>
                    <span class="price">$4.99/-</span>
                    <span class="quantity">qty : 1</span>
                </div>
            </div>
            <div class="box">
                <i class="fas fa-trash"></i>
                <img src="image/cart-img-2.png" alt="">
                <div class="content">
                    <h3>onion</h3>
                    <span class="price">$4.99/-</span>
                    <span class="quantity">qty : 1</span>
                </div>
            </div>
            <div class="box">
                <i class="fas fa-trash"></i>
                <img src="image/cart-img-3.png" alt="">
                <div class="content">
                    <h3>chicken</h3>
                    <span class="price">$4.99/-</span>
                    <span class="quantity">qty : 1</span>
                </div>
            </div>
            <div class="total"> total : $19.69/- </div>
            <a href="#" class="btn">checkout</a>
        </div> -->

    <!-- <form action="" class="login-form">
            <h3>login now</h3>
            <input type="email" placeholder="your email" class="box">
            <input type="password" placeholder="your password" class="box">
            <p>forget your password <a href="#">click here</a></p>
            <p>don't have an account <a href="#">create now</a></p>
            <input type="submit" value="login now" class="btn">
        </form> -->
  </header>
  <!-- header section ends -->

  <!-- home section starts  -->
  <section class="home" id="home">
    <div class="content">
      <h3><span>Piwulang Becik</span> Shop</h3>

      <a href="#products" class="btn">Belanja Sekarang</a>
    </div>
  </section>
  <!-- home section ends -->

  <!-- Jasa section starts  -->
  <section class="features" id="features">
    <h1 class="heading"><span>Jasa</span></h1>

    <div class="box-container">
      <div class="box">
        <img src="src/image/jasa/1.png" alt="Membuat Website" />
        <h3>Membuat Website</h3>
        <p>Jasa Membuat Wesite oleh Milan</p>
        <p>
          <a style="color: #ff7800" href="#bekasi" class="links"> <i class="fas fa-map-marker-alt"></i> Bekasi, Indonesia </a>
        </p>

        <br />

        <a href="https://wa.link/5dzz41" class="btn" target="_blank">Kontak</a>
      </div>

      <div class="box">
        <img src="src/image/jasa/2.png" alt="Desain Interior dan Exhibition" />
        <h3>Desain</h3>
        <p>Jasa Desain Interior dan Exhibition oleh David</p>
        <p>
          <a style="color: #ff7800" href="#bekasi" class="links"> <i class="fas fa-map-marker-alt"></i> Bekasi, Indonesia </a>
        </p>

        <br />

        <a href="https://wa.link/5dzz41" target="_blank" class="btn">Kontak</a>
      </div>
    </div>
  </section>
  --> -->
  <!-- Jasa section ends -->

  <!-- products section starts  -->
  <section class="products" id="products">
    <h1 class="heading"><span>Produk</span></h1>

    <div class="swiper product-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide box">
          <img src="src/image/product/sappo.png" />
          <h3>Sappo</h3>
          <div class="price">Rp 190.00</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <a href="https://wa.link/70iwgt" target="_blank" class="btn">Kontak Penjual</a>
        </div>

        <div class="swiper-slide box">
          <img src="src/image/product/sammo.png" />
          <h3>Sammo</h3>
          <div class="price">Rp 190.000</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <a href="https://wa.link/70iwgt" target="_blank" class="btn">Kontak Penjual</a>
        </div>

        <div class="swiper-slide box">
          <img src="src/image/product/minyak-angin.png" />
          <h3>Minyak Angin Sagha</h3>
          <div class="price">Rp 70.000</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <a href="https://wa.link/70iwgt" target="_blank" class="btn">Kontak Penjual</a>
        </div>
      </div>
    </div>

    <div class="swiper product-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide box">
          <img src="src/image/product/5.png" />
          <h3>Kentang Segar</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <a href="#products" target="_blank" class="btn">Kontak Penjual</a>
        </div>

        <div class="swiper-slide box">
          <img src="src/image/product/6.png" />
          <h3>Alpukat Segar</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <a href="#products" target="_blank" class="btn">Kontak Penjual</a>
        </div>

        <div class="swiper-slide box">
          <img src="src/image/product/7.png" />
          <h3>Wortel Segar</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <a href="#products" target="_blank" class="btn">Kontak Penjual</a>
        </div>

        <div class="swiper-slide box">
          <img src="src/image/product/8.png" />
          <h3>Lemon Hijau</h3>
          <div class="price">$4.99/- - 10.99/-</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <a href="#products" target="_blank" class="btn">Kontak Penjual</a>
        </div>
      </div>
    </div>
  </section>
  <!-- products section ends -->

  <!-- footer section starts  -->
  <section class="footer">
    <div class="box-container">
      <div class="box">
        <h3 style="display: flex; align-items: center">
          Piwulang Becik Shop
          <img src="src/image/logo-piwulang-becik.png" alt="Logo" width="50" style="padding-left: 12px" />
        </h3>

        <p style="font-size: 20px; color: #130f40">
          <b> Sosial Media </b>
        </p>

        <div class="share">
          <a href="https://www.facebook.com/piwulangbecik" class="fab fa-facebook-f" target="_blank"></a>
          <a href="https://twitter.com/piwulangbecik" class="fab fa-twitter" target="_blank"></a>
          <a href="https://www.instagram.com/piwulangbecikx/" class="fab fa-instagram" target="_blank"></a>
          <a href="https://www.linkedin.com/in/aris-prasetya-soebianto/" class="fab fa-linkedin" target="_blank"></a>
        </div>
      </div>

      <div class="box">
        <h3>Kontak Info</h3>
        <a href="#contact" class="links"> <i class="fas fa-phone"></i> +123-456-7890 </a>
        <a href="#contact" class="links"> <i class="fas fa-envelope"></i> piwulangbecik@gmail.com </a>
        <a href="#contact" class="links"> <i class="fas fa-map-marker-alt"></i> Salatiga, Indonesia </a>
      </div>

      <div class="box">
        <h3>Tautan</h3>
        <a href="#home" class="links"> <i class="fas fa-arrow-right"></i> Beranda </a>
        <!-- <a href="#about" class="links"> <i class="fas fa-arrow-right"></i> Tentang </a> -->
        <a href="#features" class="links"> <i class="fas fa-arrow-right"></i> Jasa </a>
        <a href="#products" class="links"> <i class="fas fa-arrow-right"></i> Produk </a>
        <!-- <a href="#categories" class="links"> <i class="fas fa-arrow-right"></i> Categories </a> -->
      </div>
    </div>

    <div class="credit">Created by <span> Milan Lizriadi </span> | All Rights Reserved</div>
  </section>
  <!-- footer section ends -->
</template>
