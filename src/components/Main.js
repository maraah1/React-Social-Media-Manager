import React, { Component } from 'react';
import fetchButtons from '../redux/reducers/buttons'


const buttons = {
  display: 'block',
  float: 'left',
  textAlign: 'center',

}


export class Main extends Component {

  render() {
  console.log('this.props.buttons:', this.props)
  let {id, img_url, name, created_at} = this.props.button
    return(
      <div style={buttons} >
      <img src={img_url} style={{width: 200, height: 200 }}/>
      </div>
    )
  }
}



export default Main
