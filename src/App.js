import React from 'react';
import SeasonDisplay from './components/SeasonDisplay';
import Loader from './components/Loader';

// const App = ()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=> console.log(position),
//         (err)=> console.log(err)
//     );
//     return (

//         <div>Latitude:
//         <SeasonDisplay />
        
//         </div>
//     );
// };

class App extends React.Component {
// constructor (props){
//     super(props);
//     this.state ={lat:null, errorMessage: ''};

//     window.navigator.geolocation.getCurrentPosition(
//         (position)=> 
        
//         {
//            this.setState({lat: position.coords.latitude}); 
//         },
//         (err)=> {this.setState({errorMessage : err.message});
//     } 
//     )
// };

state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent(){
    if ((this.state.errorMessage && !this.state.lat)) {
      return <div>Error: {this.state.errorMessage}</div>
     } else if ((this.state.lat && !this.errorMessage)&&(this.state.lat > 0)) {
      return <div>Latitude: {this.state.lat} and it is in Northern Hemisphere
          <div><SeasonDisplay
                  lat ={this.state.lat}

                  />
          </div>
      </div>
     } 
     else if ((this.state.lat && !this.errorMessage)&&(this.state.lat < 0)) {
      return <div>Latitude: {this.state.lat} and it is in Southern Hemisphere
      <div><SeasonDisplay
                  lat ={this.state.lat}

                  />
          </div>
      </div>
     }
     else {
     return <div><Loader
     message='Please allow app to access to your location' /></div>
     }

  }

    render(){
              return(
                <div className='border red'>{this.renderContent()}</div>
              ) ; 
       
    }
}

export default App;