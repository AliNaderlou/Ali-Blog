import React, { Component } from 'react';
import './styles/_mq.scss';
import './styles/fontawesome-free-5.8.2-web/css/all.min.css';
import './styles/normalize.scss';
import './styles/index.scss';
import Profile from './components/profile';
import Content from './components/content';
import Loading from 'react-loading-bar';
import ScrollToUpButton from './components/scroll-to-up-button';
import 'react-loading-bar/dist/index.css';
import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortfolio: true,
      windowWidth: window.innerWidth,
      workSamples: [],
      showLoading: true,
      isFirstLoad: true,
    };
    this.changeShowPortfolio = this.changeShowPortfolio.bind(this);
    this.resize = this.resize.bind(this);
    this.handleScrollPortrait = this.handleScrollPortrait.bind(this);
    this.handleScrollLandscape = this.handleScrollLandscape.bind(this);
    this.loadMoreWorkSamples = this.loadMoreWorkSamples.bind(this);
    this.changeShowLoading = this.changeShowLoading.bind(this);
   

  }
  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('scroll', this.handleScrollPortrait);
    this.resize();
    this.loadMoreWorkSamples({ isFirstLoad: true });
    scrollSpy.update();
  }
  resize() {
    this.setState((state) => {
      return { ...state, windowWidth: window.innerWidth };
    });
  }
  handleScrollPortrait = () => {
    // const bottom =
    //   window.innerHeight + window.pageYOffset >= document.body.scrollHeight;
    // if (bottom) {
    //   this.loadMoreWorkSamples({ isFirstLoad: false });
    // }
  };
  handleScrollLandscape = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      this.loadMoreWorkSamples({ isFirstLoad: false });
    }
  };
  loadMoreWorkSamples = ({ isFirstLoad }) => {
    if (!isFirstLoad) {
      this.changeShowLoading();
    }
    fetch(`http://${window.location.hostname}:5000/`)
      .then((response) => {
        return response.json();
      })
      .then((workSamples) => {
        const loadedWorkSamples = workSamples;
        this.setState((state) => {
          let workSamples = state.workSamples.concat(loadedWorkSamples);
          if (isFirstLoad) {
            workSamples[0] = { ...workSamples[0], isFirstChiled: true };
          }
          return {
            workSamples,
            isFirstLoad,
          };
        });
        this.changeShowLoading();
      });
  };
  changeShowPortfolio() {
    this.setState((state) => {
      return { ...state, showPortfolio: !state.showPortfolio };
    });
  }
  changeShowLoading() {
    this.setState((state) => {
      return { ...state, showLoading: !state.showLoading };
    });
  }
  render() {
    return (
      <React.Fragment>
        <ScrollToUpButton
          show={true}
          to="FirstElement"
          containerId="portfolio-container"
        />
        <Loading
          show={this.state.showLoading}
          color="#05a19c"
          showSpinner={false}
        />
        <Profile />
        <Content
          onScrollButtonPortfolio={this.handleScrollLandscape}
          windowWidth={this.state.windowWidth}
          onPortfolioToggleClick={() => this.changeShowPortfolio()}
          showPortfolio={this.state.showPortfolio}
          workSamples={this.state.workSamples}
        />
      </React.Fragment>
    );
  }
}

export default App;
