import "./PageHeader.css"
import Breadcrumbs from "./../Breadcrumbs/Breadcrumbs"

interface Props {
  pageTitle: string
  pageDesc?: string
  breadcrumbs?: { title: string; path: string }[]
}

const PageHeader: React.FC<Props> = ({ pageTitle, pageDesc, breadcrumbs }) => {
  return (
    <div className="page-header">
      <div className="container">
        <h3 className="page-title">{pageTitle}</h3>
        {pageDesc ? (
          <p
            className="page-desc"
            dangerouslySetInnerHTML={{ __html: pageDesc }}
          ></p>
        ) : (
          ""
        )}
      </div>
      {breadcrumbs ? <Breadcrumbs pages={breadcrumbs} /> : ""}
    </div>
  )
}

export default PageHeader
