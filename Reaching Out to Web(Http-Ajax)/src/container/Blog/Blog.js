import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from  './Blog.module.css';
import axios from 'axios';


class Blog extends Component {

    state={
        posts:[],
        selectedId:null,
        error: false
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts') // using axios to get the posts from the link.url simply provides the fake online  REST API for testing and prototyping
                .then(response=>{
                    const posts=response.data.slice(0,4);// as the resposne.data has 100 elements and here we are only taking first 4 element
                    // let also in post we add auther name as well
                    const updatedPosts = posts.map(post=>{
                        return{

                            ...post,
                            author:'Jitendra'
                        }
                    });
                    //this.setState({posts:response.data}); 
                    this.setState({posts:updatedPosts});    // as we know this api request is asynchronus mean this line of code will execute ane will not wait for response from
                                                            // api and will execute the next executable line of code. In the axios we have promises which wait for the promise to complet 
                                                            // and return response. .then is the method to wait for completion of request. 
                                                            // Do console.log(response) and check in the console of developer tool to know about the response object 
                                                            // as soon as the reponse will return function pointed to response object will execute
                    console.log(response);
                })    
                .catch(error=>{ // in case of error the code will come here.

                this.setState({error: true})
                })  ;                                       
    }

    postClickedHandler=(id)=>{
        this.setState({selectedId:id});
    }
    render () {
        let posts=<p style={{textAlign:'center'}}>Something went wrong</p>
        if(!this.state.error)
        {
         posts=this.state.posts.map(post=>{

            return <Post key={post.id} title={post.title} author={post.author} clicked={()=>this.postClickedHandler(post.id)}/>
            
        })
    }
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;