import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPosts } from '../redux/actions/posts'



class MediaAddForm extends Component {

  state = {
    image: '',
    post: '',
    day: '',
    time: '',
    isToggle: false

  }

handleSubmit = (e) => {
 e.preventDefault()
 let newPost = {
   image: this.state.image,
   post: this.state.post,
   day: this.state.day,
   time: this.state.time
 }
 this.props.addPosts( newPost, this.props.buttonsId)
}




render(){

  return(
    <div>
    <button onClick={(e) => this.setState({isToggle: !this.state.isToggle})}>Add Post</button>
    {this.state.isToggle ?
      <form onSubmit={this.handleSubmit} >
      <div className="container" >
      <h1>Add Post</h1>
          <div className="col-md-6" >
            <div >
              <input
                type="text"
                name="post"
                placeholder="What do you want to post?"
                value={this.state.post}
                onChange={(e)=> this.setState({post: e.target.value})}
                />
              </div>
            <div >
            <input
              type="text"
              name="day"
              placeholder="What day would you like to post?"
              value={this.state.day}
              onChange={(e)=> this.setState({day: e.target.value})}
              />
            </div>
            <div >
            <input
              type="text"
              name="time"
              placeholder="What time would you like to post?"
              value={this.state.time}
              onChange={(e)=> this.setState({time: e.target.value})}
              />
            </div>
       </div>
          <div className="col-md-6">
          <input
            type="text"
            name="image"
            placeholder="Posting a picture?"
            value={this.state.image}
            onChange={(e)=> this.setState({image: e.target.value})}
            />
          </div>
      </div>
<input className="button-primary" type="submit" value="Submit" onClick={this.handleSubmit}/>
      </form>
      :null}
    </div>

    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addPosts
}, dispatch)


export default connect(null, mapDispatchToProps)(MediaAddForm)
