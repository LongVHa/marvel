import React, { Component } from 'react';

class Comic extends Component{

    state = {
                data: []
            }

     fetchComicData = (comicId) => {
        const url = "https://gateway.marvel.com:443/v1/public/comics/"+ comicId +"?apikey=" + this.props.apiKey;
        
        //console.log(url)
         fetch(url).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Cannot find comic');
            }
         }).then(res => {
            
             //console.log('comic', res.data.results[0].prices)
             const results = res.data.results[0];

            this.setState({
                data: {
                    title: results.title,
                    prices: results.prices,
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
        const comicId = this.props.match.params.id;
        
        this.fetchComicData(comicId); //gets comic
    }

    render() {
        
        //prices placeholder
        let printPrice = "N/A";
        let digitalPrice = "N/A";

        //get price
        if (this.state.data.prices) {
            printPrice = this.state.data.prices[0].price
            digitalPrice = this.state.data.prices[1].price
        }

        const comic = this.state.data;

        return (
            <div className="content mt-12 comic comic__wrapper">
                <a className="btn btn-primary" href="/comics" role="button">BACK TO COMIC LISTING</a>
                <div className="row d-lg-flex justify-content-center">
                    
                    <h1 className="font-weight-bold p-4">{comic.title}</h1>
                    <img className="col-12"
                        src={`${comic.thumbnailPath}.${comic.thumbnailExt}`}
                        alt={comic.title}
                    />
                    <div className="col-12 p-4 font-weight-bold"><p>{comic.description}</p></div>

                    <div className="prices justify-content-center text-center row mt-4 mb-4">
                        <div className="col-6 p-3">Print Price: {printPrice}<button type="button" className="btn btn-primary col-11 mt-2">Buy Now</button></div>
                        <div className="col-6 p-3">Digital Price: {digitalPrice}<button type="button" className="btn btn-primary col-11 mt-2">Buy Now</button></div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Comic;