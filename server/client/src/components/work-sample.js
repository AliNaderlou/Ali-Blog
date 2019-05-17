import React from 'react';
import './styles/work-sample.scss';
import MediaContent from './media-content';
function WorkSample(props) {
  return (
    <div className="work-sample box-shadow">
      <section className="work-sample-info-container">
        <MediaContent
          media={props.medias[0]}
          mediasCount={5}
          currentMedia={0}
        />
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
