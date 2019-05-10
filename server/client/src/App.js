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
      workSamples: [
        {
          title: 'A Test Application',
          imageSrc: 'images/The-Last-of-Us-2.jpg',
          description:
            'Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do  culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiatdeserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.Labore occaecat non occaecat proident magna nulla anim ullamco in adipisicing. Incididunt veniam excepteur consectetur tempor qui nisi sint laboris deserunt irure sit mollit.',
        },
        {
          title: 'A Test Application',
          imageSrc: 'images/The-Last-of-Us-2.jpg',
          description:
            'Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do  culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiatdeserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.Labore occaecat non occaecat proident magna nulla anim ullamco in adipisicing. Incididunt veniam excepteur consectetur tempor qui nisi sint laboris deserunt irure sit mollit.',
        },
        {
          title: 'A Test Application',
          imageSrc: 'images/The-Last-of-Us-2.jpg',
          description:
            'Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do  culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiatdeserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.Labore occaecat non occaecat proident magna nulla anim ullamco in adipisicing. Incididunt veniam excepteur consectetur tempor qui nisi sint laboris deserunt irure sit mollit.',
        },
        {
          title: 'A Test Application',
          imageSrc: 'images/The-Last-of-Us-2.jpg',
          description:
            'Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do  culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiatdeserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.Labore occaecat non occaecat proident magna nulla anim ullamco in adipisicing. Incididunt veniam excepteur consectetur tempor qui nisi sint laboris deserunt irure sit mollit.',
        },
        {
          title: 'A Test Application',
          imageSrc: 'images/The-Last-of-Us-2.jpg',
          description:
            'Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do  culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiatdeserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.Labore occaecat non occaecat proident magna nulla anim ullamco in adipisicing. Incididunt veniam excepteur consectetur tempor qui nisi sint laboris deserunt irure sit mollit.',
        },
        {
          title: 'A Test Application',
          imageSrc: 'images/The-Last-of-Us-2.jpg',
          description:
            'Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do  culpa cupidatat tempor officia sit ipsum nulla non.Enim magna fugiatdeserunt officia. Eu ad eu cillum occaecat ipsum fugiat irure sunt.Labore occaecat non occaecat proident magna nulla anim ullamco in adipisicing. Incididunt veniam excepteur consectetur tempor qui nisi sint laboris deserunt irure sit mollit.',
        },
      ],
    };
    this.changeShowPortfolio = this.changeShowPortfolio.bind(this);
    this.resize = this.resize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

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
  handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { alert('fuck') }
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
          onScrollButtonPortfolio={this.handleScroll}
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
