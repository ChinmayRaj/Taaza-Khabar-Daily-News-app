import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span className=" position-absolute top-0 translate-middle badge bg-info" style={{left:'90%',zIndex:'1'}}>{source}</span>
  <img src={!imageUrl?"https://www.fortaleza.ce.gov.br/images/images1/000Abril2022/00%2020%2004%202022%20Posto%20(37).jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}..</p>
    <p className="card-text"><small className ="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>
    <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More..</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem;
