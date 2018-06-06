import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/posts';
import { bindActionCreators } from 'redux';
import MediaPosts from './MediaPosts';
import MediaAddForm from './MediaAddForm'
const pics = {
  fontSize : '20px'
}

class MediaPics extends Component {

  componentWillMount(){
    console.log("asldfljkasdjklf");
    this.props.fetchPosts({name: this.props.picture.name, id: this.props.picture.id})
  }


render(){
  console.log('mmedia props:', this.props.posts.length)

  let listOfMediaPosts = this.props.posts.length > 0 ? this.props.posts
    .filter(post => post.buttons_id == this.props.picture.id : null)
    .map(post => <MediaPosts key={post.id} post={post}/> ) : null

  return (
   <div >
   <img src={this.props.picture.img_url} style={pics} />
   {listOfMediaPosts}
   <MediaAddForm buttonsId={this.props.picture.id}  />
   </div>
  )
 }
}


const mapStateToProps = (state) => {
  return {posts: state.posts}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MediaPics)