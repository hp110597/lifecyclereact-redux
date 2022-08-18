import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {


    constructor(props){
        super(props);
        this.state={

        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDerivedStateFromProps');
        return null
    }

  render() {
    console.log('render');
    return (
      <div className='container mt-2'>
        <Child/>
      </div>
    )
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
}
