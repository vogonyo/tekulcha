import { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends Component{
    constructor(){
        super();
        this.name = "Victor Ogonyo";
    }
     alertName(title){
        alert(title);
     }

    render(){
        return(
            <BaseLayout>
            <h1>This is the blog</h1>
            </BaseLayout>
        )
    }
}

export default SuperComponent;
