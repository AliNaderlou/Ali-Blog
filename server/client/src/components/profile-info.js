import React from 'react';
import './styles/profile-info.scss';
function Profile_Info() {
  return (
    <section className="profile-info-container">
      <div className="user-image-container">
        <img src="images/profile.jpg" alt="Ali Naderlou" />
      </div>
      <div className="user-about-container">
        <h1>Ali Naderlou</h1>
        <h2>Full stack web developer</h2>
      </div>
      <div className="user-social-medias-container">
        <ul>
          <li><i class="fab fa-instagram"></i></li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </section>
  );
}

export default Profile_Info;
