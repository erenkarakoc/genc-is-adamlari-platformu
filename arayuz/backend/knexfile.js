module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "162.0.214.98",
      user: "remote_user",
      password: "S!DGKIm(z6YHg^)K",
      database: "gencisdb",
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
  production: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "gencisdbuser",
      password: "S!DGKIm(z6YHg^)K",
      database: "gencisdb",
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
}
