import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updatePosts} from '../redux/actions/posts'


class MediaUpdateForm extends Component {

  state = {
    image: this.props.post.image,
    post: this.props.post.post,
    day: this.props.post.day,
    time: this.props.post.time
  }

  handleUpdateSubmit = (id, e) => {
    e.preventDefault()
    this.props.updatePosts(id, this.state)
  }

  render(){

      return (
        <div>
           <form onSubmit={(e) => this.handleUpdateSubmit(this.props.post.id, e)}>
             <div className="col-md-6" >
               <div >
                 <input
                   style={styles.inputFields}
                   type="text"
                   name="post"
                   value={this.state.post}
                   onChange={(e) => this.setState({post: e.target.value})}
                   />
                 </div>
                <div >
                   <select
                     style={styles.inputFields}
                     type="text"
                     name="day"
                     placeholder="What day would you like to post?"
                     value={this.state.day}
                     onChange={(e)=> this.setState({day: e.target.value})}
                     >
                         <option>Monday</option>
                         <option>Tuesday</option>
                         <option>Wednesday</option>
                         <option>Thursday</option>
                         <option>Friday</option>
                         <option>Saturday</option>
                         <option>Sunday</option>
                   </select>
                </div>
                <div >
                   <input
                     style={styles.inputFields}
                     type="text"
                     name="time"
                     value={this.state.time}
                     onChange={(e) => this.setState({time: e.target.value})}
                     />
               </div>
             </div>
             <div className="col-md-6">
                 <input
                   style={styles.inputFields}
                   type="text"
                   name="image"
                   value={this.state.image}
                   onChange={(e) => this.setState({image: e.target.value})}
                  />
             </div>
             <input style={styles.inputFields} className="button-primary" type="submit" value="Submit" />
           </form>
        </div>
      )
   }
}

const styles = {
  inputFields : {
    border: '1px solid none',
    boxShadow: '1px 1px 1px 1px lightGrey',
    width: '250px'
  },
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updatePosts
}, dispatch)

export default connect(null, mapDispatchToProps)(MediaUpdateForm)
