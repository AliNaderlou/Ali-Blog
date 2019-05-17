import React from 'react';
import './styles/media-content.scss';
function MediaContent(props) {
  return (
    <div className="media-container">
      <i class="fas fa-chevron-left" />
      <img className="image" src={props.media.src} alt={props.title} />
      <i class="fas fa-chevron-right" />
    </div>
  );
}
export default MediaContent;
