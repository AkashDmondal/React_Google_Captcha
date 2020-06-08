import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false
      
    }
  }

  recaptchaLoaded() {
    console.log('capcha successfully loaded');
  }

  handleSubscribe() {
    if (this.state.isVerified) {
      alert('You have successfully subscribed!');
    } else {
      alert('Please verify that you are a human!');
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Captcha</h1>
        </header>
        <div className="App-intro">
       

          <div
            className="convert"
            onClick={this.handleSubscribe}
          >Submit
          </div>
          <div class="g-signin2" data-onsuccess="onSignIn"></div>

          <Recaptcha
            sitekey="6LdnX9IUAAAAAKJyCd-mKcG9pBQn0AQYbGrIuwGR"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
        </div>
      </div>
    );
  }
}

export default App;