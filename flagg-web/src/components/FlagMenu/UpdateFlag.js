import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { green, red, yellow } from "@material-ui/core/colors";
import FlagSelection from '../FlagSelection';
import InputFieldDisabled from '../InputFieldDisabled';
import GoogleMapComponent from '../GoogleMapComponent';

class UpdateFlag extends React.Component {
  constructor() {
    super();
    this.state = {
      latValue: '',
      longValue: '',
      flagName: '',
      flagColor: '',
      outpostId: '',
      outpostName: ''
    };
  }
  static defaultProps = {
    center: {
      lat: 43.2141,
      lng: 27.9147,
    },
    zoom: 16,
  };

  handleLatValue = (value) => {
    this.setState({latValue: value})
  }

  handleLongValue = (value) => {
    this.setState({longValue: value})
  }

  handleflagName = (value) => {
    this.setState({ flagName: value });
  };

  handleOutpostName = (e) => {
    this.setState({outpostName: e.target.value});
  }

  handleFlagColor = (colorVal) => {
    this.setState({flagColor: colorVal})
  }

handleCreatePost = () => { 
fetch('http://localhost:3500/api/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Latitute": this.state.latValue,
        "Longitute": this.state.longValue,
        "flagName": this.state.flagName,
        "OutpostId": this.state.outpostId,
        "OutpostName": this.state.outpostName
      })
    })
      .then(data => data.json())
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div style={{ height: "80vh", width: "100%" }}>

        <GoogleMapComponent latFunc={this.handleLatValue} lngFunc={this.handleLongValue} flag={this.state.flagName} flagCol={this.state.flagColor}/>

        <ButtonGroup variant="contained" aria-label="contained primary button group" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <FlagSelection flagValue="Green Flag" color={green} flagNameFunc={this.handleflagName} setColor={this.handleFlagColor} />
          <FlagSelection flagValue="Red Flag" color={red} flagNameFunc={this.handleflagName} setColor={this.handleFlagColor}/>
          <FlagSelection flagValue="Yellow Flag" color={yellow} flagNameFunc={this.handleflagName} setColor={this.handleFlagColor}/>
          <FlagSelection flagValue="Black Flag" color="#000" flagNameFunc={this.handleflagName} setColor={this.handleFlagColor}/>
        </ButtonGroup>

        <form onSubmit={this.handleCreatePost} style={{ display: 'grid', placeItems: 'center', marginTop: '50px' }}>

          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <InputFieldDisabled inputLabel="Outpost Name" inputValue={this.state.handleOutpostName} />
            <InputFieldDisabled inputLabel="Latitute" inputValue={this.state.latValue} />
            <InputFieldDisabled inputLabel ="Longitude" inputValue={this.state.longValue} />
          </div>

           <Button 
           onClick={this.handleCreatePost} 
           variant="contained" color="primary"
           style={{marginTop: '50px'}}
           >Update Flag</Button>
        </form>
      </div>
    );
  }
}

export default UpdateFlag;