import React, { Component } from 'react';
import Navigation from './navigation/navigation';
import { ToastContainer } from 'react-toastify';
export default class App extends Component {
  render() {
    return (
      <div id='#wrapper' className='container'>
        <Navigation />
        <ToastContainer autoClose={2000} />
      </div>
    )
  }
}
