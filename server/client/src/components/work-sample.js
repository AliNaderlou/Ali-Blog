import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './styles/work-sample.scss';
import MediaContent from './media-content';
function WorkSample(props) {
  return (
    <div className="work-sample box-shadow">
      <section className="work-sample-info-container">
        <AwesomeSlider className="aws-btn">
          <div data-src="/images/1.jpg" />
          <div data-src="/images/722598.jpg" />
          <div data-src="/videos/1.mp4" />
        </AwesomeSlider>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        <div className="work-description">
          <p>{props.description}</p>
        </div>
      </section>
      {/* <footer>
        <button>Read more...</button>
      </footer> */}
    </div>
  );
}
export default WorkSample;
