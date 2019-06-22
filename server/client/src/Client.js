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
import Cookie from 'react-cookies';
import { scrollSpy } from 'react-scroll';

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortfolio: true,
      workSamples: [],
      workSamplesLoadCount: 0,
      showLoading: true,
      isFirstLoad: true,
    };
    this.changeShowPortfolio = this.changeShowPortfolio.bind(this);
    this.handleScrollPortrait = this.handleScrollPortrait.bind(this);
    this.loadMoreWorkSamples = this.loadMoreWorkSamples.bind(this);
    this.changeShowLoading = this.changeShowLoading.bind(this);
    if (!Cookie.load('userIp')) {
      fetch(`/api/submit-ip-address`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          Cookie.save(
            'userIp',
            response.userIp,
            { path: '/' },
            { maxAge: 900000 },
          );
        });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollPortrait);
    this.loadMoreWorkSamples({ isFirstLoad: true });
    scrollSpy.update();
  }
  handleScrollPortrait = () => {
    const bottom =
      window.innerHeight + window.pageYOffset >= document.body.scrollHeight;
    if (bottom) {
      this.loadMoreWorkSamples({ isFirstLoad: false });
    }
  };
  loadMoreWorkSamples = ({ isFirstLoad }) => {
    if (!isFirstLoad) {
      this.changeShowLoading();
    }
    fetch(
      `/api/get-worksamples/${
        this.state.workSamplesLoadCount
      }`,
    )
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
          let workSamplesLoadCount = state.workSamplesLoadCount + 1;
          return {
            workSamples,
            isFirstLoad,
            workSamplesLoadCount,
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
        <ScrollToUpButton show={true} to="FirstElement" />
        <Loading
          show={this.state.showLoading}
          color="#05a19c"
          showSpinner={false}
        />
        <Profile />
        <Content
          onPortfolioToggleClick={() => this.changeShowPortfolio()}
          showPortfolio={this.state.showPortfolio}
          workSamples={this.state.workSamples}
        />
      </React.Fragment>
    );
  }
}

export default Client;
