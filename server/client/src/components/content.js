import React from 'react';
import WorkSample from './work-sample';
import './styles/content.scss';
function Content(props) {
  return (
    <section className="content-container">
      <header className="box-shadow unselectable">
        <div className="title">Portfolio</div>
        <i
          onClick={props.onPortfolioToggleClick}
          className={
            props.showPortfolio
              ? 'icon fas fa-angle-up'
              : 'icon fas fa-angle-down'
          }
        />
      </header>
      <section
        className={
          'portfolio-container ' +
          (props.showPortfolio ? '' : 'hide-visibility')
        }
      >
        <section className="portfolio-col1">
          <WorkSample
            text="Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing. Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing.Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing. Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing.Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing. Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing.Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing. Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing.Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing. Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing. Quis consequat est cupidatat aliquip cillum in adipisicing eu nostrud elit. Officia commodo voluptate minim consequat dolor aute nostrud fugiat ea laborum voluptate dolore. Dolore commodo cillum consectetur anim dolor ut pariatur cupidatat fugiat sint. Qui labore irure ad Lorem qui non non labore exercitation consectetur."
            title="Instagram Schaduler"
            image="images/The-Last-of-Us-2.jpg"
          />
          <WorkSample
            text="Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
        culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
        deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
        Labore occaecat non occaecat proident magna nulla anim ullamco in
        adipisicing. Incididunt veniam excepteur consectetur tempor qui nisi sint laboris deserunt irure sit mollit."
            title="Instagram Schaduler"
            image="images/The-Last-of-Us-2.jpg"
          />

          <WorkSample
            text="Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
        culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
        deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
        Labore occaecat non occaecat proident magna nulla anim ullamco in
        adipisicing."
            title="Instagram Schaduler"
            image="images/screenshot.png"
          />
        </section>
        <section className="portfolio-col2">
          <WorkSample
            text="Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing."
            title="Instagram Schaduler"
            image="images/screenshot.png"
          />
          <WorkSample
            text="Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing."
            title="Instagram Schaduler"
            image="images/screenshot.png"
          />
          <WorkSample
            text="Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
            culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
            deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
            Labore occaecat non occaecat proident magna nulla anim ullamco in
            adipisicing."
            title="Instagram Schaduler"
            image="images/screenshot.png"
          />
          <WorkSample
            text="Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do
        culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiat
        deserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.
        Labore occaecat non occaecat proident magna nulla anim ullamco in
        adipisicing."
            title="Instagram Schaduler"
            image="images/screenshot.png"
          />
        </section>
      </section>
    </section>
  );
}
export default Content;
