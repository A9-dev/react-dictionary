import axios from 'axios'
import { Card, CardContent, TextField, Grid, Button, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export class App extends Component {
  state = {
    word: "",
    definitions: []
  }
  definitionClicked = () => {
    const getDefinitions = async () => {
      const url = `https://wordsapiv1.p.rapidapi.com/words/${this.state.word}/definitions`
      try {
        const { data } = await axios.get(url, {
          headers: {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
          }
        })
        const definitions = data.definitions
        this.setState({ definitions: definitions })
      } catch (error) {
        console.log(error);
      }
    }
    getDefinitions()
  }
  wordChange = (e) => {
    this.setState({ word: e.target.value })
  }


  render() {
    return (
      <div style={{ padding: 15 }}>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item >
            <TextField id="wordEntry" label="Enter word:" variant="filled" onChange={this.wordChange} />
          </Grid>
          <Grid item>
            <Button size="large" variant="contained" color="primary" onClick={this.definitionClicked}><Typography variant="button">Get definition</Typography></Button>
          </Grid>
        </Grid>
        <div style={{ padding: 15 }}>
          <Grid container spacing={3} justify="center">
            {this.state.definitions.map((definition, i) => {
              return (
                <Grid item xs={3} key={i}>
                  <Card>
                    <CardContent>
                      <Typography variant="body1">{definition.definition.charAt(0).toUpperCase() + definition.definition.slice(1) + "."}</Typography>
                      <Typography variant="body2">{definition.partOfSpeech.charAt(0).toUpperCase() + definition.partOfSpeech.slice(1)
                      }</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div >
    )
  }
}

export default App

