import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { deletePosts } from '../redux/actions/posts';
import { postTweet } from '../redux/actions/posts';
import MediaUpdateForm from './MediaUpdateForm';

const a:hover = {
  color: '#fdec6e',
  textShadow:'0px 0px 30px #fdec6e',
  mozTransition: 'all 0.2s ease-in',
  oTransition: 'all 0.2s ease-in',
  webkitTransition:' all 0.2s ease-in',
  transition: 'all 0.2s ease-in',
}



const lightGrey = {
  backgroundColor: "#DCDCDC",
  borderStyle: 'solid',
  borderColor: '#DCDCDC',
  margin: '5px',
  color: 'black',
  boxShadow: '0 8px 6px -7px black'

}


const blue = {
  backgroundColor: "#46D0F3",
  borderStyle: 'solid',
  borderColor: '#46D0F3',
  margin: '5px',
  color: 'black',
  boxShadow: '0 8px 6px -7px black'
}

const red = {
  backgroundColor: '#D22424',
  borderStyle: 'solid',
  borderColor: '#D22424',
  margin: '5px',
  color: 'black',
  boxShadow: '0 8px 6px -7px black'
}

const info = {
  marginLeft: '20px',
  color: 'grey',
  marginTop: '5px'
}

const row = {
  display: 'flex'
}

const container = {
  flex: '50%'
}


const postedPics = {
  width: 100,
  height: 100
}


const submission = {
  marginLeft: '10px',
  color: 'black',
  textShadow: '0px 0px 0px'
}


const card = {
  backgroundColor: 'white',
  borderWidth: '1px',
  borderColor: 'grey',
  margin:'10px',
  textShadow: '2px 2px 4px lightGrey',
  boxShadow: '0 8px 6px -6px grey'


};

const postt = {
  display: 'flex',
  float:'left',
  marginRight:'200px',

};

const buttons = {
  display: 'flex',
  float: 'right',
  textAlign: 'right',
  paddingTop: '33px'
};

class MediaPosts extends Component {

state = {
  isToggle: false
}



handleSubmit = (postId, e) => {
  e.preventDefault()
  this.props.deletePosts(postId)
}

handlePostSubmit = (id, e) => {
  this.props.postTweet(id)
   e.target.innerHTML = 'Posted'
   // setTimeOut(function() )
}


render() {

let {buttons_id, created_at, day, id, image, post, time, updated_at, status} = this.props.post
console.log('post props:', this.props)

  return(
  <div className="card " style={card}>
    <div className="row" style={row}>
  <div style={info}>
    <div className="container" style={container}>
      <div style={postt}>
         <h5>Post:</h5>
         <div>
          {this.props.post.image ? <img style={postedPics} src={image} /> : null}
          <h5 style={submission}>{post}</h5>
        </div>
    </div>
    {this.props.post.day ?
    <div style={postt}>
       <h5>Day:</h5>
       <div>
        <h5 style={submission}>{day}</h5>
    </div>
  </div> : null}
  {this.props.post.time ?
  <div style={postt}>
     <h5>Time:</h5>
     <div>
      <h5 style={submission}>{time}</h5>
  </div>
</div> : null}
</div>
</div>
<div className="container" style={container}>
      <div style={buttons}>
        {status === "posted" ? null: <button  style={lightGrey} onClick={(e) => this.setState({isToggle: !this.state.isToggle})}><i className="fas fa-pencil-alt"></i></button> }
        {this.state.isToggle ? <MediaUpdateForm post={this.props.post} /> : null }
          <button style={blue} onClick={(e) => this.handlePostSubmit(id, e)}>{status === 'posted' ? "Posted" : "Post"}</button>
          <button style={red} onClick={(e) => this.handleSubmit(id, e)}>Delete</button>
      </div>
    </div>
  </div>
</div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deletePosts,
  postTweet
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MediaPosts)
