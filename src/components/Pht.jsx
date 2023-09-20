import React, { Component } from 'react';
class Pht extends Component{
    render(){
      return (
        <div>
            <label htmlFor="Prix">Prix hors taxe : </label>
            <input type='number' name='prixHT' id='prixHT'/>
        </div>
        
      )
    }
  }
  export default Pht;