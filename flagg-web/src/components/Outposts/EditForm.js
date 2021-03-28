import React, {useEffect, useState} from "react";
import {Grid, TextField} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import GoogleMap from "google-map-react";
import CheckIcon from '@material-ui/icons/Check';
import GoogleMapReact from "google-map-react";
import MapMarker from "../MapMarker/MapMarker";

function updateOutpost(args) {
  return fetch(`http://localhost:3500/api/update`, {
    method: 'PUT',
    headers: {
      Authorization: `${localStorage.token}`,
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(args)
  })
    .then(data => data.json())
}

function getOutpost(args) {
  return fetch(`http://localhost:3500/api/outposts/${args.id}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
  })
    .then(data => data.json())
}


export default function EditForm({ action, id, getOutpostsForBeach }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [name, setName] = useState(null);
  
  useEffect(async () => {
    const result = await getOutpost({id});
    setLat(result.lat);
    setLon(result.lon);
    setName(result.name);
    setSelectedColor(result.flag);
  },[id, action]);
  
  const handleSubmit = async (e) => {
    const response = await updateOutpost({ outpost_id: id, flag: selectedColor});
    getOutpostsForBeach();
    return response;
  }
  
  return(
    <Grid container >
      <Paper elevation={6}>
        <Grid container justify={"center"} alignItems={"center"} alignContent={"center"}>
          <Grid item xs={false} sm={12} md={10} style={{paddingTop:20}}>
            <div style={{width: '100%', height:'50vh'}}>
              <GoogleMap
                bootstrapURLKeys={{ key: 'AIzaSyAm7jbvEP32s0PYWmi76wwpphF6j64iS14', language: "bg", region: "bg" }}
                defaultCenter={{ lat: 43.20209329901704, lng: 27.924128364563458 }}
                yesIWantToUseGoogleMapApiInternals={true}
                resetBoundsOnResize={true}
                defaultZoom={15}
              >{lat && lon && selectedColor && <MapMarker lat={lat} lng={lon} flag={selectedColor}></MapMarker>}
              </GoogleMap>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} square style={{padding:'20px'}}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            value={name}
            name="name"
            disabled
            autoFocus
          />
          <Grid container justify={'space-between'} direction={"row"} spacing={3} style={{paddingBottom:15}}>
            <Grid item xs={6} spacing={3} style={{paddingRight:0}}>
              <TextField
                variant="outlined"
                margin="normal"
                name="lat"
                placeholder={'Latitude'}
                value={lat}
                disabled
              />
            </Grid>
            <Grid item xs={6} spacing={3} style={{paddingLeft:0}}>
              <TextField
                variant="outlined"
                margin="normal"
                id="email"
                name="lon"
                disabled
                placeholder={'Longitude'}
                value={lon}
              />
            </Grid>
          </Grid>
          
          <Grid container alignItems={'center'} direction={'row'} style={{padding:10}}>
            <Grid item xs={3} >
              <Button style={{height:50, borderRadius:25, overflow:'hidden', borderWidth:1, borderStyle:'solid', borderColor:'black', backgroundColor: 'red', display:'block', margin:'auto'}} onClick={() => setSelectedColor('RED')}>
                {selectedColor === 'RED' && <CheckIcon></CheckIcon>}
              </Button>
            </Grid>
            <Grid item xs={3} style={{alignItems:'center'}}>
              <Button style={{height:50, borderRadius:25, overflow:'hidden', borderWidth:1, borderStyle:'solid', borderColor:'black', backgroundColor: 'yellow', display:'block', margin:'auto'}} onClick={() => setSelectedColor('YELLOW')}>
                {selectedColor === 'YELLOW' && <CheckIcon></CheckIcon>}
              </Button>
            </Grid>
            <Grid item xs={3} style={{alignItems:'center'}}>
              <Button style={{height:50, borderRadius:25, overflow:'hidden', borderWidth:1, borderStyle:'solid', borderColor:'black', backgroundColor: 'green', display:'block', margin:'auto'}} onClick={() => setSelectedColor('GREEN')}>
                {selectedColor === 'GREEN' && <CheckIcon style={{color: 'white'}}></CheckIcon>}
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button style={{height:50, borderRadius:25, overflow:'hidden', borderWidth:1, borderStyle:'solid', borderColor:'black', backgroundColor: 'black', display:'block', margin:'auto'}} onClick={() => setSelectedColor('BLACK')}>
                {selectedColor === 'BLACK' && <CheckIcon style={{color: 'white'}}></CheckIcon>}
              </Button>
            </Grid>
          </Grid>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => handleSubmit()}
          >
            Update Flag
          </Button>
        </Grid>
      </Paper>
    </Grid>
  )
}
