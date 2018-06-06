import React, { Component } from 'react';
import fetchButtons from '../redux/reducers/buttons'


const buttons = {
  fontSize: '50px',
  display: 'block',
  float: 'left',
  marginRight: '5px',

}


export class Main extends Component {

  render() {
  console.log('this.props.buttons:', this.props)
  let {id, img_url, name, created_at} = this.props.button
    return(
      <div style={buttons} >
      <img src={img_url} style={{width: 100, height: 100 }}/>
      </div>
    )
  }
}



export default Main
