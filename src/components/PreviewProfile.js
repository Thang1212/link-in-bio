import React, { useEffect, useState } from 'react';
import './PreviewProfile.css';

function PreviewProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profileData'));
    setProfile(savedProfile);
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <main className="preview__main">
      <div className="preview__container">
        <div className="profile__content">
          <header className="profile__header">
            {profile.avatar && <img src={profile.avatar} alt="Profile" />}
            {!profile.avatar && <img src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/6420b9355c9e1927f6f571d7193a2008~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=970b6b68&x-expires=1743832800&x-signature=EoxLRjc0UZf9gIwW6VBWI%2Be6qu0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="Profile" />}
            <h1>@{profile.username}</h1>
          </header>
          <ul className="profile__link">
            {profile.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {/* {link.icon && (
                    <img src={link.icon} alt={link.title} width="20" />
                  )} */}
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default PreviewProfile;
