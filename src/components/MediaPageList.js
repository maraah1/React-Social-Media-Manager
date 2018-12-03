import React, { Component } from 'react';
import { Link, hashHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPictures } from '../redux/actions/pictures';
import { bindActionCreators} from 'redux';
import MediaPics from './MediaPics';
import MediaAddForm from './MediaAddForm';
import TopNav from './TopNav';



class MediaPageList extends Component {




 componentWillMount() {

   this.props.fetchPictures({name: this.props.match.params.name})
 }


  render() {

    let listOfMediaPictures = this.props.pictures ? this.props.pictures
        .map(picture => <MediaPics key={picture.id} picture={picture}/>) : null

      return (
          <div>
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
