import React from "react";
import Button from "@material-ui/core/Button";
import InputFieldDisabled from '../InputFieldDisabled';
import GoogleMapComponent from '../GoogleMapComponent';

class DeleteOutpost extends React.Component {
  constructor() {
    super();
    this.state = {
        latValue: '',
        longValue: '',
        outpostId: '',
        outpostName: ''
    };
  }

  handleLatValue = (value) => {
    this.setState({latValue: value})
  }

  handleLongValue = (value) => {
    this.setState({longValue: value})
  }

  render() {
      return (
        <div style={{ height: "80vh", width: "100%" }}>

        <GoogleMapComponent latFunc={this.handleLatValue} lngFunc={this.handleLongValue} />

        <form onSubmit={this.handleCreatePost} style={{ display: 'grid', placeItems: 'center', marginTop: '50px' }}>

          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <InputFieldDisabled inputLabel="Outpost Name" inputValue={this.state.handleOutpostName} />
            <InputFieldDisabled inputLabel="Latitute" inputValue={this.state.latValue} />
            <InputFieldDisabled inputLabel ="Longitude" inputValue={this.state.longValue} />
          </div>

           <Button 
           onClick={this.handleDeletePost} 
           variant="contained" color="secondary"
           style={{marginTop: '50px'}}
           >Delete</Button>
        </form>
      </div>
      )
  }

}

export default DeleteOutpost;