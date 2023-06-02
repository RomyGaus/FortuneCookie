import React , {Component} from 'react';
import FortuneCookie from './FortuneCookie';
import OpenFortuneCookie from './OpenFortuneCookie';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fortune: '',
      isOpen: false,
    }
  }

  componentDidMount() {
    this.fetchFromAPI()
  }

  fetchFromAPI = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(jsonData => this.setState({ fortune: jsonData.slip.advice }))
  }

  handleOpenFortuneClicked = (event) => {
    if (this.state.isOpen) {
      this.fetchFromAPI()
    }
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  render() {
    return(
    <div>
      <div className='header' style={{width:"100%"}} >
        <img style={{width: "10%", height: "100%", objectFit: 'contain'}} alt='dragon' src={require('.//Images/lion-dance.png')} />
        <div style={{display: 'inline-block'}}>
          <h1>Fortune Cookies</h1>
          <h3>Advices that will change your Life!</h3>
        </div>
        <img style={{width: "10%", height: "100%", objectFit: 'contain'}} alt='dragon' src={require('.//Images/lion-dance.png')} />
      </div>
      { this.state.isOpen
        ? <OpenFortuneCookie message= {this.state.fortune}></OpenFortuneCookie>
        : <FortuneCookie></FortuneCookie>
      }
      <div>
        <button 
          className='btn' 
          type='button' 
          onClick={this.handleOpenFortuneClicked}>
          { this.state.isOpen
            ? 'New Cookie'
            : 'Open'
          }
        </button>
      </div> 
    </div>
    )
  }
}

export default App;
