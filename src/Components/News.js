import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner  from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps={
    country:'in',
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string
  }
   capitalizeFirstLetter(string){
    return string[0].toUpperCase() + string.slice(1);
}
    constructor(props){
        super(props);
        this.state={
articles:[],
loading:false
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)}-Taaza Khabar`;
    }
   async componentDidMount(){
    this.props.setProgress(0);
        let url=`https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`;
        this.setState({loading:true});
        let data=await fetch(url);
        this.props.setProgress(30);
        let parsedData=await data.json();
        this.props.setProgress(70);
        console.log(parsedData)
        this.setState({articles:parsedData.articles,
          loading:false
        })
        this.props.setProgress(100);
    }
  render() {
    return (
      <div className='container my-3'>
        <h3>Taaza Khabar-Top News Headlines</h3>
       {this.state.loading && <Spinner/>}


        <div className="row">
        {this.state.articles.map((element)=>{
              return <div className="col-md-3" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""}
              imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
              </div>
              
        })}
       </div>
    </div>
    )
  }
}

export default News
