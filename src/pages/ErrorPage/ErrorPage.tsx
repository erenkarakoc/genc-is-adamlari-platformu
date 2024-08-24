
import Error404Page from "./components/404"
import Error500Page from "./components/500"

const Error: React.FC = () => {
  return (
    <div className="container">
      <Error404Page />
      <Error500Page />
    </div>
  )
}

export default Error
