import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>{article.body}</div>
      <p>Posted at: {article.createdAt}</p>
    </article>
  )
}

export default Article
