import React, { Component } from 'react';

class Character extends Component{
    
    state = {
        data: []
    }

    fetchCharData = (charId) => {
        const url = "https://gateway.marvel.com:443/v1/public/characters/"+ charId +"?apikey=" + this.props.apiKey;

        
         fetch(url).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Cannot find Character');
            }
         }).then(res => {
            
             const results = res.data.results[0];
            
            this.setState({
                data: {
                    name: results.name,
                    description: results.description,
                    thumbnailPath: results.thumbnail.path,
                    thumbnailExt: results.thumbnail.extension
                }
            });
            
        }).catch(error => {
            console.log(error)
        }) 

    }

    componentDidMount() {
        const charId = this.props.match.params.id;
        this.fetchCharData(charId); //get Character's data
    }

    render() {
   
        const character = this.state.data;

        return (
            <div className="content mt-12 character character__wrapper">
                <a className="btn btn-primary" href="/characters" role="button">BACK TO CHARACTER LISTING</a>
                <div className="row d-lg-flex justify-content-center">
                    
                    <h1 className="font-weight-bold pt-4 pb-4">{character.name}</h1>
                    <img className="col-12"
                        src={`${character.thumbnailPath}.${character.thumbnailExt}`}
                        alt={character.name}
                    />
                    <div className="col-12 d-lg-flex p-4 font-weight-bold"><p>{character.description}</p></div>
                </div>
            </div>
        )
    }
}

export default Character;