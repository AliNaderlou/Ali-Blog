import React from 'react';
import './styles/profile-info.scss';
function Profile_Info() {
  return (
    <section className="profile-info-container">
      <div className="user-image-container">
        <img src="images/profile.jpg" alt="Ali Naderlou" />
      </div>
      <div className="user-about-container">
        <p>
          Amet anim fugiat cillum tempor dolore dolor quis qui aliquip laboris
          consequat commodo ea consequat.
        </p>
      </div>
      <div className="user-social-medias-container">
        <ul>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Linkedin</li>
        </ul>
      </div>
    </section>
  );
}

export default Profile_Info;
