import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './styles/work-sample.scss';

function WorkSample(props) {
  return (
    <div className="work-sample box-shadow">
      <section className="work-sample-info-container">
        <AwesomeSlider className="aws-btn">
          {props.medias.map((item) => <div data-src={item.src} />)}
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
