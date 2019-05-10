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
        className={'portfolio-container ' + (props.showPortfolio ? '' : 'hide')}
      >
        {props.windowWidth > 980 ? (
          <React.Fragment>
            <section className="portfolio-col1">
              {props.workSamples.map((item, i) => {
                if (i % 2 === 0) {
                  return <WorkSample {...item} />;
                }
              })}
            </section>
            <section className="portfolio-col2">
              {props.workSamples.map((item, i) => {
                if (i % 2 !== 0) {
                  return <WorkSample {...item} />;
                }
              })}
            </section>
          </React.Fragment>
        ) : (
          <section className="portfolio">
            {props.workSamples.map((item) => {
              return <WorkSample {...item} />;
            })}
          </section>
        )}
      </section>
    </section>
  );
}
export default Content;
