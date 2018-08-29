import React, { Component } from 'react';
import ImdbForm from './ImdbForm';

const apikey = "a3a0be7f"

class ImdbData extends Component {
    
  getImdbData = async (e)  =>{
      e.preventDefault()
      const api_call = await fetch (`http://www.omdbapi.com/?apikey=${apikey}&s=batman`)
      const data = api_call.json()
      console.log(data)
  }
    
    
    
    
    
    render() {
        return (
            <div>
                <ImdbForm getImdbData={this.getImdbData}/>
            </div>
        );
    }
}

export default ImdbData;