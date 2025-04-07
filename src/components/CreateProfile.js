import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import images from 'utils/images';
import './CreateProfile.css';

function CreateProfile() {
  const [profile, setProfile] = useState({
    username: '',
    avatar: '',
    links: [],
  });

  const navigate = useNavigate();

  console.log(images.webPageIcon);

  const socialOptions = [
    { name: 'Web page', icon: images.webPageIcon },
    { name: 'YouTube', icon: images.youtubeIcon },
    { name: 'Facebook', icon: "../images/facebook.svg" },
    { name: 'Instagram', icon: images.instagramIcon },
    { name: 'LinkedIn', icon: images.linkedInIcon },
    { name: 'Shopee', icon: images.shopeeIcon },
  ];

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleLinkChange = (index, e) => {
    const newLinks = [...profile.links];
    newLinks[index][e.target.name] = e.target.value;
    setProfile({ ...profile, links: newLinks });
  };

  const addLink = (selectedOption) => {
    if (profile.links.length >= 6) {
      alert('You can only add up to 6 links!');
      return;
    }
    const newLink = {
      platform: selectedOption.name,
      title: '',
      url: '',
      icon: selectedOption.icon,
    };
    setProfile({
      ...profile,
      links: [...profile.links, newLink],
    });
  };

  const removeLink = (index) => {
    const newLinks = profile.links.filter((_, i) => i !== index);
    setProfile({ ...profile, links: newLinks });
  };

  const previewProfile = () => {
    localStorage.setItem('profileData', JSON.stringify(profile));
    navigate('/preview');
  };
  return (
    <Fragment>
      <Header />

      <main class="py-4 bg-light">
        <div class="container-sm">
          <h1>Tạo Link-in-Bio cho riêng bạn</h1>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleInputChange}
              placeholder="Nhập username"
            />
          </div>

          <div className="form-group">
            <label>Avatar URL</label>
            <input
              type="text"
              name="avatar"
              value={profile.avatar}
              onChange={handleInputChange}
              placeholder="Nhập image URL"
            />
          </div>

          <h2>Social Links</h2>
          {profile.links.map((link, index) => (
            <div key={index} className="link-group">
              <span>{link.platform}</span>
              <input
                type="text"
                name="title"
                value={link.title}
                onChange={(e) => handleLinkChange(index, e)}
                placeholder="Tiêu đề link"
              />
              <input
                type="text"
                name="url"
                value={link.url}
                onChange={(e) => handleLinkChange(index, e)}
                placeholder="URL"
              />
              <button
                onClick={() => removeLink(index)}
                className="btn btn-sm btn-danger"
              >
                Xoá
              </button>
            </div>
          ))}

          {profile.links.length < 6 && (
            <div className="dropdown btn-group">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Thêm đường link của bạn
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {socialOptions.map((option) => (
                  <a
                    key={option.name}
                    className="dropdown-item"
                    onClick={() => addLink(option)}
                  >
                    {option.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          <button onClick={previewProfile} class="btn btn-primary">
            Xem trước trang của bạn
          </button>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}

export default CreateProfile;
