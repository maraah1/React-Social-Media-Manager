import React, {Component} from 'react';
import { connect } from 'react-redux';
import MediaPosts from './MediaPosts'


class PicsForPosts extends Component {
  render(){
    console.log('request:', this.props.postpics)
  let listOfPostPictures = this.props.postpics ? this.props.postpics
        .map(picture => <MediaPosts key={picture.id} picture={picture}/>) : null

    return (
      {listOfPostPictures}
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postpics: state.pictures
  }
}


export default connect(mapStateToProps)(PicsForPosts)
