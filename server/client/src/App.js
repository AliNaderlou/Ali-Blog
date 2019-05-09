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
    };
    this.changeShowPortfolio = this.changeShowPortfolio.bind(this);
  }
  changeShowPortfolio() {
    this.setState((state) => {
      return { showPortfolio: !state.showPortfolio };
    });
  }
  render() {
    return (
      <React.Fragment>
        <Profile />
        <Content
          onPortfolioToggleClick={() => this.changeShowPortfolio()}
          showPortfolio={this.state.showPortfolio}
        />
      </React.Fragment>
    );
  }
}

export default App;
