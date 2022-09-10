import React from 'react';

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
constructor (props){
    super(props);
    this.state ={lat:null, errorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
        (position)=> 
        
        {
           this.setState({lat: position.coords.latitude}); 
        },
        (err)=> {this.setState({errorMessage : err.message});
    } 
    )
};


    render(){
                
       if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>
       } else if (this.state.lat && !this.errorMessage) {
        return <div>Latitude: {this.state.lat}</div>
       } else
       return <div>Waiting for user permission!</div>
    }
}

export default App;