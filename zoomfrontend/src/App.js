import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IntroductionPage from './IntroductionPage/IntroductionPage';
import JoinRoomPage from './JoinRoomPage/JoinRoomPage';
import RoomPage from './RoomPage/RoomPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IntroductionPage}/>
        <Route path="/join" component={JoinRoomPage}/>
        <Route path="/room" component={RoomPage}/>
      </Switch>
    </Router>
  );
}

export default App;
