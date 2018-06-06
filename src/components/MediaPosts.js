import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { deletePosts } from '../redux/actions/posts';



class MediaPosts extends Component {

state = {
    image: '',
    post: '',
    day: '',
    time: ''
  }


handleSubmit = (e) => {
  e.preventDefault()
  this.props.deletePosts(this.state)
}


render() {

let {buttons_id, created_at, day, id, image, post, time, updated_at} = this.props.post

  return(
    <div>
    {post}
    <button>Post</button>
    <button onClick={this.handleSubmit}>Delete</button>
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
  deletePosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MediaPosts)
