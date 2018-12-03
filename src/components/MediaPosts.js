import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { deletePosts } from '../redux/actions/posts';
import { postTweet } from '../redux/actions/posts';
import MediaUpdateForm from './MediaUpdateForm';

const a:hover = {
  color: '#fdec6e',
  textShadow:'0px 0px 30px #fdec6e',
  mozTransition: 'all 0.2s ease-in',
  oTransition: 'all 0.2s ease-in',
  webkitTransition:' all 0.2s ease-in',
  transition: 'all 0.2s ease-in',
}

class MediaPosts extends Component {

  state = {
    isToggle: false
  }



  handleSubmit = (postId, e) => {
    e.preventDefault()
    this.props.deletePosts(postId)
  }

  handlePostSubmit = (id, e) => {
    this.props.postTweet(id)
    e.target.innerHTML = 'Posted'

  }


  render() {

    let {buttons_id, created_at, day, id, image, post, time, updated_at, status} = this.props.post
    let isToggle = this.state.isToggle

      return (
          <div className="card " style={styles.card}>
            <div className="row" style={styles.row}>
              <div style={styles.info}>
                <div className="container" style={styles.container}>
                  <div style={styles.postt}>
                     <h5>Post:</h5>
                     <div>
                        {image ? <img style={styles.postedPics} src={image} /> : null}
                        <h5 style={styles.submission}>{post}</h5>
                     </div>
                  </div>
                 { day &&
                  <div style={styles.postt}>
                     <h5>Day:</h5>
                     <div>
                        <h5 style={styles.submission}>{day}</h5>
                     </div>
                  </div> }
                { time &&
                  <div style={styles.postt}>
                     <h5>Time:</h5>
                     <div>
                        <h5 style={styles.submission}>{time}</h5>
                     </div>
                  </div> }
              </div>
          </div>

          <div className="container" style={styles.container}>

              <div style={styles.buttons}>

                  {status === "posted" ? null :
                    <button  style={styles.lightGrey} onClick={(e) => ({isToggle: !this.state.isToggle})}>
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                  }

                  {isToggle && <MediaUpdateForm post={post} />}

                  <button style={styles.blue} onClick={(e) => this.handlePostSubmit(id, e)}>
                      {status === 'posted' ? "Posted" : "Post"}
                  </button>

                  <button style={styles.red} onClick={(e) => this.handleSubmit(id, e)}>Delete</button>
              </div>

          </div>
        </div>
      </div>
      )
   }
}

const styles = {
  lightGrey : {
    backgroundColor: "#DCDCDC",
    borderStyle: 'solid',
    borderColor: '#DCDCDC',
    margin: '5px',
    color: 'black',
    boxShadow: '0 8px 6px -7px black'

  },

  blue : {
    backgroundColor: "#46D0F3",
    borderStyle: 'solid',
    borderColor: '#46D0F3',
    margin: '5px',
    color: 'black',
    boxShadow: '0 8px 6px -7px black'
  },

  red : {
    backgroundColor: '#D22424',
    borderStyle: 'solid',
    borderColor: '#D22424',
    margin: '5px',
    color: 'black',
    boxShadow: '0 8px 6px -7px black'
  },

  info : {
    marginLeft: '20px',
    color: 'grey',
    marginTop: '5px'
  },

  row : {
    display: 'flex'
  },

  container : {
    flex: '50%'
  },

  postedPics : {
    width: 100,
    height: 100
  },

  submission : {
    marginLeft: '10px',
    color: 'black',
    textShadow: '0px 0px 0px'
  },

  card : {
    backgroundColor: 'white',
    borderWidth: '1px',
    borderColor: 'grey',
    margin:'10px',
    textShadow: '2px 2px 4px lightGrey',
    boxShadow: '0 8px 6px -6px grey'
  },

  postt : {
    display: 'flex',
    float:'left',
    marginRight:'200px',

  },

  buttons : {
    display: 'flex',
    float: 'right',
    textAlign: 'right',
    paddingTop: '33px'
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deletePosts,
  postTweet
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MediaPosts)
