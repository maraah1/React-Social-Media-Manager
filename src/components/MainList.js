import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import {
  Link,
  withRouter,
  UpdateBlocker,
  location
} from 'react-router-dom';
import TopNav from './TopNav';

const body = {
  backgroundColor: 'lightGrey'
}




class MainList extends Component {
  render() {

    let listOfButtons = this.props.buttons ? this.props.buttons
      .map(button =>
        <Link key={button.id} to={`/media/${button.name}/${button.id}`}>
            <Main button={button}/>
        </Link>
      ) : null


    return (
      <div>
        <div>
          <TopNav / >
          <div className='list'>
            {listOfButtons}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    buttons: state.buttons
  }
}


export default withRouter(connect(mapStateToProps)(MainList))
