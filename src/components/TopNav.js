import React from 'react'
import MediaPosts from './MediaPosts';
import logo from './newLogo.png';
import {Link} from 'react-router-dom';


export const TopNav = (props) => {

  return (
    <div>
      <div className="topnav" style={props.icon ? styles.topNavvv : styles.topNavv} id="myTopnav">
        <div className="row" style={styles.row}>
          <div className='col-md-6' style={styles.header} >
              <Link to='/main'>
                  {props.icon ? <img src={props.icon} style={styles.iconTopNav} /> : <Link to='/'> <img src={logo} style={styles.somaNav}/> </Link>}
              </Link>
              {props.name}
            </div>
            <div style={styles.header}>
          </div>
        </div>
      </div>
    </div>

  )
}

const styles = {
  name : {
    display:'inline-block',
    float:'left',

  },

  header : {
    fontWeight: 'lighter',
    fontSize: '50px',
    textShadow: '2px 2px 4px  silver',
    color: 'white',
    flex: '50%',
    marginRight: '200px'
  },

  iconn : {
    display:'block',
    float:'left'
  },

  topNavv : {
    width:'100%',
    height:'13vh',
    backgroundColor: 'black'
  },

  topNavvv : {
    width:'100%',
    height:'13vh',
    backgroundColor:'black'
  },

  iconTopNav : {
    width:50,
    height:50,
    flex: '50%'
  },

  somaNav : {
    width:'65%',
    height:'65%',
    textAlign: 'center',
    marginLeft:'500px',

  },

  row : {
    display: 'flex'
  },

  container : {
    flex: '50%'
  },

}

export default TopNav
