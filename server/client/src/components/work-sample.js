import React from 'react';
import './styles/work-sample.scss';
function WorkSample(props) {
  return (
    <div className="work-sample box-shadow">
      <section className="work-sample-info-container">
        <img className="image" src={props.image} alt={props.title}/>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        <div className="work-description">
          <p>{props.text}</p>
        </div>
      </section>
      {/* <footer>
        <button>Read more...</button>
      </footer> */}
    </div>
  );
}
export default WorkSample;
