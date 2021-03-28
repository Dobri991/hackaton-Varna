import React from "react";
import {Grid, Container, Paper} from "@material-ui/core"
import OutpostsTable from "./OutpostTable";
import EditForm from "./EditForm";
import CreateForm from "./CreateForm";

class Outposts extends React.Component {
  constructor() {
    super();
    this.state = {
      outposts: [],
      action: 'CREATE',
      selectedId: null
    };
  }

  setAction = (action) => {
    this.setState({ action })
  }
  
  setSelectedId = (id) => {
    this.setState({ selectedId: id })
  }
  
  getOutpostsForBeach = () => {
    fetch("http://localhost:3500/api/outposts", {
      method: "GET",
      headers: {
        "Authorization": `${localStorage.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ outposts: data }))
      .catch((error) => console.log(JSON.parse(localStorage.token).token));
  };

  componentDidMount = () => {
    this.getOutpostsForBeach();
  }

  render() {
    return (
      <Container style={{align:'center', justify:'center', alignItems:'center'}}>
        <Grid container style={{justifyItems:'center', alignItems:'center'}}>
          <Grid item xs={8} style={{paddingLeft: '20px',height: '80vh'}}>
            <OutpostsTable setSelectedId={this.setSelectedId} setAction={this.setAction} outposts={this.state.outposts} />
          </Grid>
          <Grid item xs={4} style={{paddingLeft: '20px',height: '80vh'}}>
            <Paper>
              {this.state.action === 'EDIT' ?
                <EditForm getOutpostsForBeach={this.getOutpostsForBeach} id={this.state.selectedId}/> :
                <CreateForm getOutpostsForBeach={this.getOutpostsForBeach} />}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Outposts;
