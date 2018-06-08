import React from 'react'
import MediaPosts from './MediaPosts';
import logo from './newLogo.png';
import {Link} from 'react-router-dom';

const name = {
  display:'inline-block',
  float:'left',

}

const header = {
  fontWeight: 'lighter',
  fontSize: '50px',
  textShadow: '2px 2px 4px  silver',
  color: 'white',
  flex: '50%',
  marginRight: '200px'
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
  height:50,
  flex: '50%'
}

const somaNav = {
  width:'65%',
  height:'65%',
  textAlign: 'center',
  marginLeft:'500px',

}

const row = {
  display: 'flex'
}

const container = {
  flex: '50%'
}


export const TopNav = (props) => {
  return (
<div>
  <div className="topnav" style={props.icon ? topNavvv : topNavv} id="myTopnav">
   <div className="row" style={row}>
    <div className='col-md-6' style={header} >
    <Link to='/main'>
    {props.icon ? <img src={props.icon} style={iconTopNav} /> : <Link to='/'> <img src={logo} style={somaNav}/> </Link>}
  </Link>
    {props.name}
    </div>
    <div style={header}>


    </div>
  </div>
 </div>
</div>

  )
}

export default TopNav
