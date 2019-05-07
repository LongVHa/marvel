import React, { Component } from 'react';
//import Charactr from "./../data/characters.json";

class Characters extends Component {

    render() {
        //iterate through results

        let characters = this.props.data.map(characters => (
            <div className="content__wrapper col-lg-3 col-md-4 col-sm-6 col-xs-12 pt-4" key={characters.id}>
                <a href={"/character/" + characters.id}>
                    <img
                        src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
                        alt={characters.title}
                    />
                </a>
                <div className="content__characters-title">
                    <h3>{characters.title}</h3>
                    <h2>{characters.name}</h2>
                </div>

            </div>
        ));

        // output results
        return <div className="content container-fluid">
            <div className="content__cat-title font-weight-bold"><h1>CHARACTERS LISTING</h1></div>
            <div className="row justify-content-between p-0 m-0">{characters}</div>
        </div>;

    }

}

export default Characters;