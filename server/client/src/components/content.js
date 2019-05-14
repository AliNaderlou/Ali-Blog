import React from 'react';
import WorkSample from './work-sample';
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
      >
        <section className="portfolio">
          {props.workSamples.map((item) => {
            return <WorkSample {...item} key={item._id} />;
          })}
        </section>
      </section>
    </section>
  );
}
export default Content;
