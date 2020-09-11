import React, { Component } from 'react';

import classes from './FullPost.module.css';
import axios from 'axios';

class FullPost extends Component {
    state={
        loadedPost:null,
    }
    componentDidUpdate () {
        if ( this.props.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get( 'https://jsonplaceholder.typicode.com/posts/' + this.props.id )
                    .then( response => {
                        // console.log(response);
                
                    this.setState({loadedPost: response.data}); // here is one issue now as we are updating state in componentdid update. set state always render the page so this will be a infinite loop
                                                            // to handle this we are checking in if condition that the request will go ans update will reset only if this is the first request i.e. loadedPost is null
                                                            // or the id received in props is different from what already loaded. so if as set state wil be done the componentDidUpdate will be called again but this time 
                                                            // as re-rendring is due to sate chnage for same id the set state will not be called.
                    
                
                })
              .catch(error=>{
                  this.setState({error: true});// or do something in case of error.
              })
            }
         }
    }
    render () {
    let post = <p style={{textAlign:'center'}}> Please select a Post!</p>;
    if(this.props.id)
    {
        post = <p style={{textAlign:'center'}}> Loading....</p>;
    }
        if(this.state.loadedPost)
        {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

        );
        }
        return post;
    }
}

export default FullPost;