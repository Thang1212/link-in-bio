// import './Header.css';

function Header() {
  return (
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">Về chúng tôi</h4>
              <p class="text-muted">
                Bạn là một content creator, influencer, hay chỉ đơn giản là
                người muốn chia sẻ câu chuyện của mình? Bio.io chính là công cụ
                hoàn hảo giúp bạn tạo ra một trang 'link-in-bio' cá nhân hóa,
                nơi tập hợp mọi liên kết mạng xã hội của bạn chỉ trong vài cú
                nhấp chuột. Không cần phức tạp - chỉ cần nhập thông tin, thêm
                link, và để Bio.io biến chúng thành một giao diện đẹp mắt, hiện
                đại.
              </p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Liên hệ</h4>
              <ul class="list-unstyled">
                <li>
                  <a
                    href="https://www.linkedin.com/in/duy-thang-co-162712358/"
                    class="text-white"
                    target="_blank"
                  >
                    Theo dõi trên LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Thang1212"
                    class="text-white"
                    target="_blank"
                  >
                    Thích trên Github
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:thangduy.co1212@gmail.com?subject=Hello%20from%20Bio.io&body=I%20found%20you%20on%20Bio.io!"
                    class="text-white"
                  >
                    Email cho chúng tôi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
          <a href="/" class="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            <strong class="">Bio.io</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
