import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    };
    this.changeShowPortfolio = this.changeShowPortfolio.bind(this);
    this.resize = this.resize.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }
  resize() {
    this.setState((state) => {
      return { ...state, windowWidth: window.innerWidth };
    });
  }
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
          windowWidth={this.state.windowWidth}
          onPortfolioToggleClick={() => this.changeShowPortfolio()}
          showPortfolio={this.state.showPortfolio}
        />
      </React.Fragment>
    );
  }
}

export default App;
