
import { useParams, Link } from 'react-router-dom';
import { mockArticles } from '../data/mockArticles';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = mockArticles.find(a => a.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-detail">
      <Link data-testid="back-to-articles" to="/articles" className="back-link">
        &larr; Back to Articles
      </Link>
      <h1 data-testid="article-title">{article.title}</h1>
      <div className="article-meta">
        <span data-testid="article-author">By {article.author}</span>
        <span data-testid="article-date"> | {article.date}</span>
      </div>
      <img 
        src={article.featuredImage} 
        alt={article.title} 
        data-testid="article-featured-image" 
        className="detail-image"
      />
      <div data-testid="article-content" className="article-content">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetailPage;
