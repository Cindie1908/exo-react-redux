import React, {Component} from 'react';
import {connect} from 'react-redux';

const addAction1 = {type: 'ADD1',};
const addAction10 = {type: 'ADD10',};
const resetAction = {type: 'RESET',};
const removeAction1 = {type: 'REMOVE1',};
const removeAction10 = {type: 'REMOVE10',};

class LightComponent extends Component {
    
  render (){
    const {light, dispatch}=this.props;
    return(
    <div>
      <p>{light}</p>
      <button onClick={()=>dispatch((addAction1))}>+1</button>
      <button onClick={()=>dispatch((removeAction1))}>-1</button>
      <button onClick={()=>dispatch((addAction10))}>+10</button>
      <button onClick={()=>dispatch((removeAction10))}>-10</button>
      <button onClick={()=>dispatch((resetAction))}>reset</button>
    </div>  
    );
  } 
}
const mapStateToProps = state =>({
  light:state
});

const LightContainer = connect(mapStateToProps)(LightComponent)

export default LightContainer;