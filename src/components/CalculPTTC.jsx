import React, { Component } from 'react';
import Pht from './Pht';
import Tva from './Tva';
import Calculer from './calculer';
import Res from './Res';
class CalculPTTC extends Component{
    render(){
      return (
        <div>
            <fieldset>
                <legend> Calcul de PTTC</legend>
                    <Pht/>
                    <Tva/>
                    <Calculer/>
                    <Res/> 
            </fieldset>
        </div>
        
      )
    }
  }
  export default CalculPTTC;