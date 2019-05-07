import React, { Component } from 'react';

class Home extends Component{
 
    render() {

        let picks = this.props.data.slice(0,4).map(comic => (

            <div className="content__wrapper col-lg-3 col-md-4 col-sm-6 col-xs-12 pt-4" key={comic.id}>
                <a href={"/comic/" + comic.id}>
                    <img
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt={comic.title}
                    />
                </a>
                <div className="content__comic-title"><h3>{comic.title}</h3></div>
                <div className="col-12 text-center font-weight-bold pb-1">&#163;{comic.prices[0].price}</div>
                <div className="col-12 text-center"><button type="button" className="btn btn-primary col-9 mb-4">Add To Basket</button></div>

            </div>
        ));

        return (
            <div className="content">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg" alt="First slide" />
                            <div className="carousel-caption d-md-block fixed-top">
                                <h1>New Comic Releases</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli minim veniam</p>
                                <a className="btn btn-primary font-weight-bold" href="/comics" role="button">View New Releases</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="Second slide" />
                            <div className="carousel-caption d-md-block fixed-top">
                                <h1>Trending Characters</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli minim veniam</p>
                                <a className="btn btn-primary font-weight-bold" href="/characters" role="button">View Characters</a>
                            </div>
                        </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                </div>
                                
                <div className="p-0 mt-4 container-fluid">
                        <div className="content__cat-title font-weight-bold"><h1>Our Picks</h1></div>
                        <div className="row justify-content-between p-0 m-0">{picks}</div>
                    </div>
            </div>  
            
        )
    }

}

export default Home;