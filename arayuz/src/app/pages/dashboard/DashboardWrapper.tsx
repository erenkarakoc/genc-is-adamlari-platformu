import { useEffect, useState } from "react"
import axios from "axios"
// import { useIntl } from "react-intl"
import { PageLink, PageTitle } from "../../../_metronic/layout/core"
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  ListsWidget9,
  MixedWidget3,
  MixedWidget8,
  StatisticsWidget4,
  TablesWidget5,
  TablesWidget9,
} from "../../../_metronic/partials/widgets"

const dashboardBreadCrumbs: Array<PageLink> = [
  {
    title: "Home",
    path: "/dashboard",
    isSeparator: false,
    isActive: false,
  },
]

const DashboardPage = () => {
  const [users, setUsers] = useState<
    { id: string; username: string; email: string; password: string }[]
  >([])

  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById("kt_layout_toolbar")?.classList.remove("d-none")
    return () => {
      document.getElementById("kt_layout_toolbar")?.classList.add("d-none")
    }
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users")
      setUsers(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <button
        onClick={() => {
          axios
            .post("http://localhost:5000/api/users", {
              username: "newuser",
              email: "newuser@example.com",
              password: "password123",
            })
            .then((response) => console.log("User created:", response.data))
            .then(fetchUsers)
            .catch((error) => console.error("Error creating user:", error))
        }}
      >
        createUser
      </button>
      <button
        onClick={() => {
          axios
            .delete("http://localhost:5000/api/users")
            .then(fetchUsers)
            .catch((error) => console.error("Error removing users:", error))
        }}
      >
        removeAllUsers()
      </button>
      {/* begin::Row */}
      <div className="row gy-5 g-xl-8">
        {users.map((user, i) => (
          <ul key={i}>
            <li>{user.id}</li>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>{user.password}</li>
          </ul>
        ))}
        {/* begin::Col */}
        <div className="col-xxl-4">
          <MixedWidget3
            className="card-xl-stretch mb-xl-8"
            chartColor="primary"
            chartHeight="250px"
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className="col-xxl-8">
          <TablesWidget9 className="card-xxl-stretch mb-5 mb-xl-8" />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row gy-5 g-xl-8">
        {/* begin::Col */}
        <div className="col-xxl-4">
          <StatisticsWidget4
            className="card-xxl-stretch-50 mb-5 mb-xl-8"
            svgIcon="element-11"
            color="danger"
            description="Weekly Income"
            change="750$"
          />

          <StatisticsWidget4
            className="card-xxl-stretch-50 mb-xl-8"
            svgIcon="basket"
            color="success"
            description="Sales Change"
            change="+259"
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className="col-xxl-4">
          <ListsWidget9 className="card-xxl-stretch mb-xl-8" />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className="col-xxl-4">
          <ListsWidget4 className="card-xxl-stretch mb-5 mb-xl-8" />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row gy-5 g-xl-8">
        {/* begin::Col */}
        <div className="col-xxl-4">
          <ListsWidget3 className="card-xxl-stretch mb-xl-3" />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className="col-xxl-8">
          <TablesWidget9 className="card-xxl-stretch mb-5 mb-xl-8" />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row gy-5 g-xl-8">
        {/* begin::Col */}
        <div className="col-xl-4">
          <ListsWidget2 className="card-xl-stretch mb-xl-8" />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className="col-xl-4">
          <ListsWidget6 className="card-xl-stretch mb-xl-8" />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className="col-xl-4">
          <ListsWidget4 className="card-xl-stretch mb-5 mb-xl-8" items={5} />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-5 gx-xxl-8">
        {/* begin::Col */}
        <div className="col-xxl-4">
          <MixedWidget8
            className="card-xxl-stretch mb-xl-3"
            chartColor="success"
            chartHeight="150px"
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className="col-xxl-8">
          <TablesWidget5 className="card-xxl-stretch mb-5 mb-xxl-8" />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
    </>
  )
}

const DashboardWrapper = () => {
  // const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={dashboardBreadCrumbs}>Dashboard</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
