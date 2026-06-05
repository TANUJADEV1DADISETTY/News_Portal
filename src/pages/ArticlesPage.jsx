import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { mockArticles } from '../data/mockArticles';

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div>
      <div className="search-section">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            data-testid="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
          />
          <button type="submit" data-testid="search-button">Search</button>
        </form>
      </div>

      <div data-testid="articles-list" className="articles-list">
        {mockArticles.map((article) => (
          <div key={article.id} data-testid={`article-card-${article.id}`} className="article-card">
            <img 
              src={article.featuredImage} 
              alt={article.title} 
              loading="lazy" 
              className="article-image"
            />
            <h2 data-testid={`article-title-${article.id}`}>{article.title}</h2>
            <p data-testid={`article-excerpt-${article.id}`}>{article.excerpt}</p>
            <Link data-testid={`article-link-${article.id}`} to={`/article/${article.id}`}>
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
