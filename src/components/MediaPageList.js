import React, { Component } from 'react';
import { Link, hashHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPictures } from '../redux/actions/pictures';
import { bindActionCreators} from 'redux';
import MediaPics from './MediaPics'
import MediaAddForm from './MediaAddForm'



class MediaPageList extends Component {




 componentWillMount(){
   console.log("asldfljkasdjklf");
   this.props.fetchPictures({name: this.props.match.params.name})
 }


render() {
  console.log('media props:', this.props.pictures)

  let listOfMediaPictures = this.props.pictures ? this.props.pictures
      .map(picture => <MediaPics key={picture.id} picture={picture}/>) : null

    return (
      <div>
       {this.props.match.params.name}
       {listOfMediaPictures}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPictures
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MediaPageList)