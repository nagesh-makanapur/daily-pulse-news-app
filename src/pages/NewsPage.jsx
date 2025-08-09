import React, { useEffect, useState } from 'react';
import './NewsPage.css';
import NewsCard from '../components/NewsCard';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('technology');
  const [country, setCountry] = useState('in');

  const API_KEY = 'pub_13d9a5109ae749b9a800f289b6b051e3'; // Replace with your NewsData.io API Key
  const LANGUAGE = 'en';

  const categories = [
    'top',
    'business',
    'entertainment',
    'environment',
    'food',
    'health',
    'politics',
    'science',
    'sports',
    'technology',
    'tourism',
    'world',
  ];

  const countries = [
    { code: 'in', name: 'India' },
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'au', name: 'Australia' },
    { code: 'ca', name: 'Canada' },
    { code: 'de', name: 'Germany' },
    { code: 'fr', name: 'France' },
    { code: 'jp', name: 'Japan' },
    { code: 'ae', name: 'UAE' },
  ];

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${country}&category=${category}&language=${LANGUAGE}`
        );
        const data = await res.json();

        if (data && data.results && data.results.length > 0) {
          setArticles(data.results);
        } else {
          setArticles([]);
          console.warn('No articles found:', data);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, country]);

  return (
    <div className="app" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>
        📰 {category.charAt(0).toUpperCase() + category.slice(1)} News from {countries.find(c => c.code === country)?.name}
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        <div>
          <label>🌎 Select Country: </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={dropdownStyle}
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>{c.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>📂 Select Category: </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={dropdownStyle}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="posts-container">
        {loading ? (
          <p style={{ textAlign: 'center', fontSize: '1.2rem', gridColumn: '1 / -1' }}>Loading news...</p>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: 'gray', gridColumn: '1 / -1' }}>
            No news articles available for this selection. Try a different country or category.
          </p>
        )}
      </div>
    </div>
  );
}

const dropdownStyle = {
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#f9f9f9',
};

export default App;
