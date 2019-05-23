import React from 'react';
import WorkSample from './work-sample';
import Masonry from 'react-masonry-component';

import './styles/content.scss';
function Content(props) {
  return (
    <section className="content-container">
      <div className="header box-shadow unselectable">
        <div className="title">Portfolio</div>
        <i
          onClick={props.onPortfolioToggleClick}
          className={
            props.showPortfolio
              ? 'icon fas fa-angle-up'
              : 'icon fas fa-angle-down'
          }
        />
      </div>
      <section
        onScroll={props.onScrollButtonPortfolio}
        className={'portfolio-container ' + (props.showPortfolio ? '' : 'hide')}
        id="portfolio-container"
      >
        {props.workSamples.length === 0 ? (
          <div />
        ) : (
          <Masonry
            className={'portfolio'} // default ''
            options={{ transitionDuration: 800 }} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
            {props.workSamples.map((item, i) => {
              return (
                <WorkSample
                  isFirstChild={i === 0 ? true : false}
                  {...item}
                  key={item._id}
                />
              );
            })}
          </Masonry>
        )}
      </section>
    </section>
  );
}
export default Content;
