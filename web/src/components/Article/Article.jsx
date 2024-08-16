import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article className="article-card">
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="article-body">{article.body}</div>
      <p className="article-meta">Posted at: {article.createdAt}</p>
    </article>
  )
}

export default Article
