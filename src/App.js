import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import 'react-skeleton-css/styles/skeleton.2.0.4.css';
import MainList from './components/MainList';
import Register from './components/Register';
import MediaPageList from './components/MediaPageList';
import MediaPics from './components/MediaPics'
import MediaAddForm from './components/MediaAddForm'
import MediaPosts from './components/MediaPosts'
import MediaUpdateForm from './components/MediaUpdateForm'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/main" component={MainList}/>
            <Route path='/media/:name' component={MediaPageList}/>
            <Route path='/media/:name/:id/posts' component={MediaPics}/>
            <Route path='/media/addposts' component={MediaAddForm}/>
            <Route path='/media/deleteposts' component={MediaPosts}/>
            <Route path='/statuses/update' component={MediaPosts}/>
            <Route path='/media/update' component={MediaUpdateForm}/>
         </div>
        </Router>
      </div>
    );
  }
}

export default App;
