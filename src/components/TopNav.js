import React from 'react'
import MediaPosts from './MediaPosts';

const name = {
  display:'inline-block',
  float:'left',

}

const header = {
  fontWeight: 'lighter',
  fontSize: '50px',
  textShadow: '2px 2px 4px  silver',
  color: 'white'
}

const iconn = {
  display:'block',
  float:'left'
}

const topNavv = {
  width:'100%',
  height:'13vh',
  backgroundColor: 'black'
}

const topNavvv = {
  width:'100%',
  height:'13vh',
  backgroundColor:'black'
}

const iconTopNav = {
  width:50,
  height:50
}

export const TopNav = (props) => {
  return (
<div>
  <div className="topnav" style={props.icon ? topNavvv : topNavv} id="myTopnav">
   <div className="row" style={name}>
    <div className='col-md-6' style={header} >
    {props.icon ? <img src={props.icon} style={iconTopNav} /> : null}
    {props.name}
    </div>
  </div>
 </div>
</div>

  )
}

export default TopNav
