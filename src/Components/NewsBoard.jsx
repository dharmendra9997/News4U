import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

const NewsBoard = ({category,search}) => {
    const[articles,setArticle] = useState([])
    
    useEffect(()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${search}&apiKey=c65b2e447e774426add7451df7688f81`;
        fetch(url).then(response=> response.json()).then(data=> setArticle(data.articles));
    },[category,search])
  return (
       
    <div className="d-flex justify-content-center flex-wrap">
      
      {articles.map((news, index) => (
                <NewsCard
                    key={index}
                    title={news.title || 'No title available'}
                    content={news.description || 'No content available'}
                    src={news.urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJmZlQS9nHSyyyQ0Etj_ydePvrQ47LrAOgg&s'}
                    url={news.url || '#'}
                />
            ))}
    </div>
  )
}

export default NewsBoard
