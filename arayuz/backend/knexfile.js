module.exports = {
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
