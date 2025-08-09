import React from 'react';
import './NewsCard.css';

function NewsCard({ article }) {
  return (
    <div className="news-card">
      {article.image_url ? (
        <img src={article.image_url} alt={article.title} />
      ) : (
        <div className="no-image"></div>
      )}

      <div className="news-card-content">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
      </div>

      <a className="read-more-btn" href={article.link} target="_blank" rel="noreferrer">
        Read More
      </a>
    </div>
  );
}

export default NewsCard;