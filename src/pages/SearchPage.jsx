import { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { mockArticles } from '../data/mockArticles';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';

  const results = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return mockArticles.filter(article => 
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.content.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="search-page">
      <Link to="/articles" className="back-link">
        &larr; Back to Articles
      </Link>
      <h1>Search Results</h1>
      <p>
        Showing results for: <strong data-testid="search-query-display">{query}</strong>
      </p>
      <p>
        Found <span data-testid="results-count">{results.length}</span> results.
      </p>

      <div data-testid="search-results-list" className="articles-list">
        {results.map((article) => (
          <div key={article.id} className="article-card">
            <h2 data-testid={`article-title-${article.id}`}>{article.title}</h2>
            <p data-testid={`article-excerpt-${article.id}`}>{article.excerpt}</p>
            <Link to={`/article/${article.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
