import React, { Component } from 'react';
import SimpleCard from './SimpleCard'

class App extends Component {
  state = {
      latitude: null,
      longitude: null,
      loading: true
  }


componentDidMount() {
  const showMap = (pos) => {
    this.setState({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
      loading: false
    })
   }

   setTimeout(()=> navigator.geolocation.getCurrentPosition(showMap), 2500)
}

  render() {
      return (
         <SimpleCard latitude={this.state.latitude} longitude={this.state.longitude} loading={this.state.loading}/>
      );

  }
}

export default App;
