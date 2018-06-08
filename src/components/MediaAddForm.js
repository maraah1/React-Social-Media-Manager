import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPosts } from '../redux/actions/posts';

const ex = {
  marginLeft: '500px',
  textShadow:'2px 0px 5px',
  fontSize: '15px'
}

const box = {
  border: '3px solid lightGrey',
  boxShadow: '12px 12px 2px 1px lightGrey',
  width:'500px',
  margin: 'auto',
  marginTop:'50px',
  animationName: 'forms',
  animationDuration: '1s',
}

const addButton = {
  fontSize: '275px',
  color: 'lightGrey',
  paddingTop: '150px'
}


class MediaAddForm extends Component {
state = {
        isToggle: false,
        isForm: false
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

  {this.state.isForm ? null :
    <i onClick={(e) => {this.setState({isToggle: !this.state.isToggle}); this.setState({isForm: !this.state.isForm})}} style={addButton} className="fas fa-plus-circle"></i>}

    {!this.state.isToggle ? null :
         <div style={box}>
            <form onSubmit={this.handleSubmit} >
             <div className="container" >
                <i  style={ex} class="fas fa-times" onClick={(e) => {this.setState({isToggle: !this.state.isToggle}); this.setState({isForm: !this.state.isForm})}}></i>
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

                  <input className="button-primary" type="submit" value="Submit"/>

                </div>
              </form>
         </div> }
      </div>
     )
   }
 }



const mapDispatchToProps = dispatch => bindActionCreators({
  addPosts
}, dispatch)


export default connect(null, mapDispatchToProps)(MediaAddForm)
