import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { deletePosts } from '../redux/actions/posts';
import { postTweet } from '../redux/actions/posts';
import MediaUpdateForm from './MediaUpdateForm';

const card = {
  backgroundColor: 'white',
  borderStyle: 'groove',
  width:'50%',
  margin:'auto'
};

const postt = {
  display: 'flex',
  float:'left'
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
}


render() {

let {buttons_id, created_at, day, id, image, post, time, updated_at, status} = this.props.post
console.log('post props:', this.props)

  return(
  <div className="card" style={card}>
    <div className="row">
     <div className="container">
      <div style={postt}>
      
        post: {post}
      </div>
      <div style={buttons}>
          <button onClick={(e) => this.handlePostSubmit(id, e)}>{status === 'posted' ? "Posted" : "Post"}</button>
          <button onClick={(e) => this.handleSubmit(id, e)}>Delete</button>
          {status === "posted" ? null: <button onClick={(e) => this.setState({isToggle: !this.state.isToggle})}><i className="fas fa-pencil-alt"></i></button> }
          {this.state.isToggle ? <MediaUpdateForm post={this.props.post} /> : null }
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
