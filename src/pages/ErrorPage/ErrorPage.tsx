import PageHeader from "../../components/PageHeader/PageHeader"
import "./ErrorPage.css"
import Error404Page from "./components/404"
import Error500Page from "./components/500"

const Error: React.FC = () => {
  return (
    <div className="page" id="page-error">
      <PageHeader
        pageTitle="404"
        pageDesc="Bu sayfa kaldırılmış veya hiç var olmamış olabilir."
      />
      <div className="container d-none">
        <Error404Page />
        <Error500Page />
      </div>
    </div>
  )
}

export default Error
