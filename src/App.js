import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/_Header'
import Home from './components/_Home'
import Comic from './components/_Comic'
import ComicList from './components/_ComicList'
import Character from './components/_Character'
import CharacterList from './components/_CharacterList'
import Footer from './components/_Footer'

class App extends Component {

  state = {
    apiKey: "8f83e1faee032b8faf9c09407a482ef7",
    comics: [],
    characters: [], 
    copyright:"",
    }

  //fetch data by URL and format 
  fetchList = (url, format) => {
   
    fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('API unavailable');
      }
    }).then(res => {
      //console.log('app js',res)
      this.setState({
        [format]: res.data.results,
        copyright: res.copyright
      });

    }).catch(error => {
      console.log(error)
    })

  }
  
  componentDidMount() {
    const URLlist = [
                      { format: "comics", url: "https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=title&apikey=" + this.state.apiKey  },
                      { format: "characters", url: "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=" + this.state.apiKey }
                    ];

    //fetch data using URL list
    if (URLlist.length !== 0) {
      URLlist.forEach(link => {
        this.fetchList(link.url, link.format);
      })
    } else {
      console.log('Insert a link!')
    }
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" render={(props) => <Home {...props} data={this.state.comics} />} exact />
            <Route path="/comic/:id"  render={(props) => <Comic {...props} apiKey={this.state.apiKey} />} exact/>
            <Route path="/comics"  render={(props) => <ComicList {...props} data={this.state.comics} />} exact/>
            <Route path="/characters" render={(props) => <CharacterList {...props} data={this.state.characters} />} exact />
            <Route path="/character/:id" render={(props) => <Character {...props} apiKey={this.state.apiKey} />} exact/>
          </Switch>
          <Footer copyright={this.state.copyright} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
