import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import { Link } from '../routes';

class Startups extends Component{
    static async getInitialProps(){
    
        let posts = [];
        try{
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          posts = response.data;
        }catch(err){
          console.log(err);
        }
    
        return { posts: posts.splice(0, 10) };
      }
    renderPosts(post){
        return post.map((post, index) => {
            return (
            <li key={index}>
                <Link route={`/startup/${post.id}`}>
                        <a style={{'fontSize': '18 px' }}>{post.title}</a>
                </Link>
            </li>
            )
        })
    }
    render(){
        const { posts } = this.props;
        return(
            <BaseLayout>
            <h1>This is the startups page</h1>
            <ul>{ this.renderPosts(posts) }</ul>
            </BaseLayout>
        )
    }
}

export default Startups;