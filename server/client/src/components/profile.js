import React from 'react';
import './styles/profile.scss';
function Profile() {
  return (
    <section className="profile-info-container box-shadow">
      <div className="profile-body">
        <div className="user-image-container unselectable">
          <img src="images/profile.jpg" alt="Ali Naderlou" />
        </div>
        <div className="user-about-container">
          <h1>Ali Naderlou</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <div className="user-quote-container">
          <p>
            “The only way to do great work is to love what you do.”
            <br/> – Steve Jobs
          </p>
        </div>
      </div>
      <div className="user-social-medias-container">
        <ul>
          <li className="telegram">
            <a
              href="https://telegram.me/AliNaderlou"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-telegram" />
            </a>
          </li>
          <li className="instagram">
            <a
              href="https://instagram.com/Ali_Naderlou"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li className="facebook">
            <a
              href="https://www.facebook.com/AliNaderloo77"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li className="twitter">
            <a
              href="https://www.twitter.com/AliNaderlou"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="likedin">
            <a
              href="https://www.linkedin.com/in/ali-naderlou-3692bb129/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Profile;
