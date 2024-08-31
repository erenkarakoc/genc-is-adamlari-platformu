import "./Breadcrumbs.css"

interface Props {
  pages: { title: string; path: string }[]
}

const Breadcrumbs: React.FC<Props> = ({ pages }) => {
  return (
    <nav className="breadcrumbs">
      <ul className="container">
        {pages.map((page, idx) => (
          <li key={idx}>
            {page.path ? (
              <span>
                <a href={page.path}>{page.title}</a>
              </span>
            ) : (
              <span>{page.title}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
