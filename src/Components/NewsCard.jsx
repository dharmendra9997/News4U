import React from 'react'


const NewsCard = ({title,content,src,url}) => {
  return (
    
      <div className="card bg-dark text-light d-inline-block my-3 mx-3 px-2 py-2 col-md-2 mb-4 " style={{ Width: '360px', Height: '450px'}}>
        <img src={src} style={{ height: '200px', objectFit: 'cover' }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{height:'72px'}}>{title.slice(0,75)}</h5>
          <p className="card-text py-2" style={{height:'72px'}}>
           {content.slice(0,90)}
          </p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    
  )
}

export default NewsCard
