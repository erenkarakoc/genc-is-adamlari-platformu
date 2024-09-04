import { useState } from "react"
import * as Yup from "yup"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import { getUserByToken, login } from "../core/_requests"
import { useAuth } from "../core/Auth"

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Lütfen geçerli bir e-posta girin")
    .min(3, "E-posta en az 3 karakterden oluşmalıdır")
    .max(50, "E-posta en fazla 50 karakterden oluşmalıdır")
    .required("E-posta alanı gereklidir"),
  password: Yup.string()
    .min(3, "Şifre en az 3 karakterden oluşmalıdır")
    .max(50, "Şifre en fazla 50 karakterden oluşmalıdır")
    .required("Şifre alanı gereklidir"),
})

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const { saveAuth, setCurrentUser } = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
      try {
        const { data: auth } = await login(values.email, values.password)
        saveAuth(auth)
        const { data: user } = await getUserByToken(auth.api_token)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus("Girdiğiniz bilgiler hatalı, lütfen tekrar deneyin.")
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <form
      className="form w-100"
      onSubmit={formik.handleSubmit}
      noValidate
      id="kt_login_signin_form"
    >
      {/* begin::Heading */}
      <div className="text-center mb-11">
        <h1 className="text-gray-900 fw-bolder mb-3">Giriş Yap</h1>
      </div>
      {/* begin::Heading */}

      {formik.status ? (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      ) : (
        <div className="mb-10 bg-light-success p-8 rounded">
          <div className="text-success">
            Genç İş Adamları Platformu üyeliğinizi{" "}
            <strong>yöneteceğiniz</strong> yönetim arayüzüne gitmek için lütfen
            giriş yapın.
          </div>
        </div>
      )}

      {/* begin::Form group */}
      <div className="fv-row mb-8">
        <label className="form-label fs-6 fw-bolder text-gray-900">
          E-posta
        </label>
        <input
          placeholder="E-posta"
          {...formik.getFieldProps("email")}
          className={clsx(
            "form-control bg-transparent",
            { "is-invalid": formik.touched.email && formik.errors.email },
            {
              "is-valid": formik.touched.email && !formik.errors.email,
            }
          )}
          type="email"
          name="email"
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <span role="alert">{formik.errors.email}</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="fv-row mb-3">
        <label className="form-label fw-bolder text-gray-900 fs-6 mb-0">
          Şifre
        </label>
        <input
          type="password"
          autoComplete="off"
          {...formik.getFieldProps("password")}
          className={clsx(
            "form-control bg-transparent",
            {
              "is-invalid": formik.touched.password && formik.errors.password,
            },
            {
              "is-valid": formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}
      <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div />

        {/* begin::Link */}
        <Link to="/auth/forgot-password" className="link-primary">
          Şifreni mi unuttun?
        </Link>
        {/* end::Link */}
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className="d-grid mb-10">
        <button
          type="submit"
          id="kt_sign_in_submit"
          className="btn btn-primary"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className="indicator-label">Devam et</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              Lütfen bekleyin...
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}

      <div className="text-gray-500 text-center fw-semibold fs-6">
        Üyeliğin yok mu?{" "}
        <Link to="/" className="link-primary">
          Aramıza katıl.
        </Link>
      </div>
    </form>
  )
}
