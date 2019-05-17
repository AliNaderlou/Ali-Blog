import React, { Component } from 'react';
import './styles/_mq.scss';
import './styles/fontawesome-free-5.8.2-web/css/all.min.css';
import './styles/normalize.scss';
import './styles/index.scss';
import Profile from './components/profile';
import Content from './components/content';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortfolio: true,
      windowWidth: window.innerWidth,
      workSamples: []
    };
    this.changeShowPortfolio = this.changeShowPortfolio.bind(this);
    this.resize = this.resize.bind(this);
    this.handleScrollPortrait = this.handleScrollPortrait.bind(this);
    this.handleScrollLandscape = this.handleScrollLandscape.bind(this);
    this.loadMoreWorkSamples = this.loadMoreWorkSamples.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('scroll', this.handleScrollPortrait);
    this.resize();
    this.loadMoreWorkSamples();
  }
  resize() {
    this.setState((state) => {
      return { ...state, windowWidth: window.innerWidth };
    });
  }
  handleScrollPortrait = () => {
    const bottom =
      window.innerHeight + window.pageYOffset >= document.body.scrollHeight;
    if (bottom) {
      this.loadMoreWorkSamples();
    }
  };
  handleScrollLandscape = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      this.loadMoreWorkSamples();
    }
  };
  loadMoreWorkSamples = () => {
    fetch(`http://${window.location.hostname}:5000/`)
      .then((response) => {
        return response.json();
      })
      .then((workSamples) => {
        const loadedWorkSamples = workSamples;
        this.setState((state) => {
          const workSamples = state.workSamples.concat(loadedWorkSamples);
          return {
            workSamples,
          };
        });
      });
  };
  changeShowPortfolio() {
    this.setState((state) => {
      return { ...state, showPortfolio: !state.showPortfolio };
    });
  }
  render() {
    return (
      <React.Fragment>
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
