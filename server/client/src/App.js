import React from 'react';
import './styles/_mq.scss';
import './styles/fontawesome-free-5.8.2-web/css/all.min.css';
import './styles/normalize.scss';
import './styles/index.scss';
import Profile from './components/profile';
import Content from './components/content';

function App() {
  return (
    <React.Fragment>
    <Profile />
    <Content />
    </React.Fragment>
  );
}

export default App;
