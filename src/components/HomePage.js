import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import './HomePage.css';
import images from 'utils/images';

function HomePage() {
  return (
    <Fragment>
      <Header />
      <main class="bg-light">
        <section class="jumbotron text-center p-3 p-md-5 m-md-3">
          <div class="container">
            <h1 class="jumbotron-heading">Bio.io</h1>
            <p class="lead text-muted">
              Tạo trang link-in-bio chuyên nghiệp, nơi fan và followers có thể
              dễ dàng truy cập tất cả các nền tảng mạng xã hội của bạn chỉ với
              một cú nhấp chuột. Đơn giản, tinh tế, hiệu quả!
            </p>
            <p>
              <a href="/create" class="btn btn-primary my-2">
                Tạo ngay
              </a>
            </p>
          </div>
        </section>

        <section class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div class="bg-dark flex-fill pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div class="my-3 py-3">
              <h2 class="display-5">Mọi thứ trở nên đơn giản hơn</h2>
              <p class="lead">Chia sẻ mọi thứ bạn tạo ra, quản lý và bán từ Instagram, TikTok...</p>
            </div>
            <img
              src={images.example01}
              class="bg-light box-shadow mx-auto album__headline__image"
            />
          </div>

          <div class="bg-light flex-fill pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5">Tạo và cá nhân hoá nhanh chóng</h2>
              <p class="lead">Kết nối nhạc, podcast, sự kiện và nhiều hơn nữa.</p>
            </div>
            {/* <div class="bg-dark box-shadow mx-auto album__headline__image"></div> */}
            <img
              src={images.example02}
              class="bg-dark box-shadow mx-auto album__headline__image"
            />
          </div>
        </section>

        <section class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div class="bg-light flex-fill pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5">Công cụ liên kết nhanh, thân thiện.</h2>
              <p class="lead"></p>
            </div>
            {/* <div class="bg-dark box-shadow mx-auto album__headline__image"></div> */}
            <img
              src={images.example03}
              class="bg-dark box-shadow mx-auto album__headline__image"
            />
          </div>

          <div class="bg-primary flex-fill pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div class="my-3 p-3">
              <h2 class="display-5">Bắt đầu sử dụng miễn phí</h2>
              <p class="lead"></p>
            </div>
            {/* <div class="bg-light box-shadow mx-auto album__headline__image"></div> */}
            <img
              src={images.example04}
              class="bg-light box-shadow mx-auto album__headline__image"
            />
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
