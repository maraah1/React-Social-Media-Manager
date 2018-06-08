import React, { Component } from 'react';
import fetchButtons from '../redux/reducers/buttons'





export class Main extends Component {

  render() {
  console.log('this.props.buttons:', this.props)
  let {id, img_url, name, created_at} = this.props.button
    return(
      <div >
      <img src={img_url} className='buttons'/>
      </div>
    )
  }
}



export default Main
