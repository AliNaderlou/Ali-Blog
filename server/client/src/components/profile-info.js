import React from 'react';
import './styles/profile-info.scss';
function Profile_Info() {
  return (
    <section className="profile-info-container">
      <div className="profile-body">
        <div className="user-image-container">
          <img src="images/profile.jpg" alt="Ali Naderlou" />
        </div>
        <div className="user-about-container">
          <h1>Ali Naderlou</h1>
          <h2>Full stack web developer</h2>
        </div>
        <div className="user-quote-container">
          <p>
            “The only way to do great work is to love what you do.” – Steve Jobs
          </p>
        </div>
      </div>
      <div className="user-social-medias-container">
        <ul>
          <li>
            <i className="fab fa-telegram" />
          </li>
          <li>
            <i className="fab fa-instagram" />
          </li>
          <li>
            <i className="fab fa-facebook" />
          </li>
          <li>
            <i className="fab fa-twitter" />
          </li>
          <li>
            <i className="fab fa-linkedin" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Profile_Info;
