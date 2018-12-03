import React, { Component } from 'react';



export default class Main extends Component {

  render() {

    let {id, img_url, name, created_at} = this.props.button

    return (

      <div >
        <img src={img_url} className='buttons'/>
      </div>

    )
  }
}
