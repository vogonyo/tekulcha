import { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Startup extends Component{
    static async getInitialProps({query}){
        const startupId = query.id;
        let startup = {};

        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${startupId}`);
            startup = response.data;
        }
        catch(err){
            console.error(err);
        }
        return {startup};
    }

    render(){
        const { startup } = this.props;
        return(
            <BaseLayout>
              <h1>{startup.id + ". " + startup.title }</h1>
              <p>{ startup.body }</p>
            </BaseLayout>
        )
    }
}

export default withRouter(Startup);