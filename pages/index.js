import React from 'react'; 
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent{
  static async getInitialProps(){
    
    let userData = {};
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      userData = response.data;
    }catch(err){
      console.log(err);
    }

    return {initialData: [1, 2, 3, 4, 5], userData };
  }
  constructor(){  
    super();  
    this.state = {
      title: 'I am the Index Page'
    }
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
 componentDidUpdate(){
  console.log('componentDidUpdate')
 }
 componentWillUnmount(){
   console.log("ComponentWillUnmount")
 }
 updateTitle(){
    this.setState({'title': 'I am updated Index page'})
 }
  render(){
    debugger;
   const {title } = this.state;
   const {userData, initialData} = this.props;
    return(
      <BaseLayout>
         <h2 className="fromPage">Welcome to tekulcha.com. This has been updated </h2>
         <h2>{ title }</h2>
         <h2>{ userData.title }</h2>
          <button onClick={ () => this.updateTitle() }> ChangeTitle </button>
      </BaseLayout>
    )
  }  
}  
  export default Index;