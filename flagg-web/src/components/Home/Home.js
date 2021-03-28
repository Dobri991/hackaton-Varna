import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import FlagInfo from '../FlagInfo/FlagInfo';
import GoogleMap from 'google-map-react';
import { Container, Divider, Grid, Paper } from '@material-ui/core';
import MapMarker from '../MapMarker/MapMarker';
import FlagInfoItem from './FlagInfoItem';

async function getOutposts() {
  return fetch('http://localhost:3500/api/outposts/all', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  })
    .then((data) => data.json())
    .catch((data) => {
      console.log(`some weird stuff ${JSON.stringify(data)}`);
      return undefined;
    });
}

export default function Home() {
  const [outposts, setOutposts] = useState();

  useEffect(() => {
    getOutposts().then((res) => setOutposts(res));
  }, []);

  return (
    <>
      <Grid container style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: 30 }}>
        <Grid item xs={12} sm={7} md={8} lg={9} xl={10} style={{ height: '80vh' }}>
          <GoogleMap
            bootstrapURLKeys={{
              key: 'AIzaSyAm7jbvEP32s0PYWmi76wwpphF6j64iS14',
              language: 'bg',
              region: 'bg'
            }}
            defaultCenter={{ lat: 43.20209329901704, lng: 27.924128364563458 }}
            yesIWantToUseGoogleMapApiInternals={true}
            resetBoundsOnResize={true}
            defaultZoom={15}>
            {outposts &&
              outposts.map(({ lat, lon, flag }, id) => {
                return <MapMarker key={id} lat={lat} lng={lon} flag={flag} />;
              })}
          </GoogleMap>
        </Grid>
        <Grid
          container
          xs={12}
          sm={5}
          md={4}
          lg={3}
          xl={2}
          direction="column"
          alignContent="center"
          justify="center">
          <Paper style={{ marginLeft: 20 }}>
            <FlagInfoItem
              flagColor="#000000"
              title="Black Flag"
              description="Black flag means water is closed to the public."
            />
            <Divider style={{ marginRight: 20, marginLeft: 20 }} />
            <FlagInfoItem
              flagColor="#FF0000"
              title="Red Flag"
              description="Red flag is high hazard meaning high surf and/or strong currents."
            />
            <Divider style={{ marginRight: 20, marginLeft: 20 }} />
            <FlagInfoItem
              flagColor="#FFDF29"
              title="Yellow Flag"
              description="Yellow flag is medium hazard meaning moderate surf and/or currents."
            />
            <Divider style={{ marginRight: 20, marginLeft: 20 }} />
            <FlagInfoItem
              flagColor="#1DB954"
              title="Green Flag"
              description="Green flag is low hazard meaning calm conditions, exercise caution."
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
