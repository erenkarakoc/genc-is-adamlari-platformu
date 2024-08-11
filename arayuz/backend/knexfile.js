module.exports = {
  production: {
    client: "mysql2",
    connection: {
      host: process.env.VITE_APP_DB_HOST,
      user: process.env.VITE_APP_DB_USER,
      password: process.env.VITE_APP_DB_PASSWORD,
      database: process.env.VITE_APP_DB_NAME,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
}
