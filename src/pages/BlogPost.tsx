import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router';
import { SEO } from '../components/SEO';
import { blogArticles, BlogArticleId } from './blogData';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id || !(id in blogArticles)) {
    return <Navigate to="/" replace />;
  }

  const article = blogArticles[id as BlogArticleId];
  const [head, tail] = article.title.split(':');

  return (
    <>
      <SEO title={`${article.title} | Mikaella Yamaguchi`} description={article.content[0]?.text.slice(0, 155) ?? article.title} />

      <header className="article article-head">
        <Link to="/#blog" className="back mono muted">
          <ArrowLeft /> Back to journal
        </Link>
        <p className="mono accent">{article.category}</p>
        <h1 className="display">
          {tail ? (
            <>
              {head}:<span className="serif-i">{tail.trim()}</span>
            </>
          ) : (
            article.title
          )}
        </h1>
        <div className="article-meta mono muted">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      <figure className="article-hero">
        <img src={article.image} alt="" />
      </figure>

      <article className="article prose">
        {article.content.map((block: { type: string; text: string }, index: number) => {
          if (block.type === 'paragraph-first') return <p key={index} className="lead">{block.text}</p>;
          if (block.type === 'h2') return <h2 key={index}>{block.text}</h2>;
          if (block.type === 'quote') return <blockquote key={index}>“{block.text}”</blockquote>;
          return <p key={index}>{block.text}</p>;
        })}

        <div className="prose__end">
          <span className="mono muted">Thanks for reading.</span>
          <Link to="/#blog" className="btn btn--solid">
            More articles <ArrowRight />
          </Link>
        </div>
      </article>
    </>
  );
}
