import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Alvin mureithi',
        bio: 'Software Developer',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'farmer'
      },
      shows: false,
      elapsedTime: 0
    };
    this.timer = null;
  }

  componentDidMount() {
    // Start a timer to update elapsed time every second
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: Math.floor((Date.now() - this.startTime) / 1000)
      }));
    }, 1000);

    // Record the start time
    this.startTime = Date.now();
  }

  componentWillUnmount() {
    // Clean up the timer when the component unmounts
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, elapsedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt="Profile" />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
