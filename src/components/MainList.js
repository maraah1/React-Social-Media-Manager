import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import {Link, withRouter, UpdateBlocker, location} from 'react-router-dom';



class MainList extends Component {
 render() {

 let listOfButtons = this.props.buttons ? this.props.buttons
    .map(button =>
       <Link key={button.id} to={`/media/${button.name}/${button.id}`}>
          <Main button={button} />
       </Link>
): null

    console.log('props:', this.props)
    console.log('listOfButtons:', listOfButtons)

    return (
    <div>
     {listOfButtons}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { buttons: state.buttons }
}


export default withRouter(connect(mapStateToProps)(MainList))
