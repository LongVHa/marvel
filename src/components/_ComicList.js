import React, {Component} from 'react';
//import List from './../data/list.json'

class ComicList extends Component{
  render() {
   
    //iterate through results
    //console.log(this.props.data)
        let comics = this.props.data.map(comic => (
          
          <div className="content__wrapper col-lg-3 col-md-4 col-sm-6 col-xs-12 pt-4" key={comic.id}>
            <a href={"/comic/" + comic.id}>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            </a>
            <div className="content__comic-title"><h3>{comic.title}</h3></div>
            <div class="col-12 text-center font-weight-bold pb-1">&#163;{comic.prices[0].price}</div>
            <div className="col-12 text-center"><button type="button" class="btn btn-primary col-9 mb-4">Add To Basket</button></div>

          </div>
        ));
     
    // output results
    return <div className="content container-fluid">
              <div className="content__cat-title font-weight-bold"><h1>COMICS LISTING</h1></div>
              <div className="row justify-content-between p-0 m-0">{comics}</div>
           </div>;

  }
}

export default ComicList;