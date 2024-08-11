module.exports = {
  apps: [
    {
      name: "gencis",
      script: "./backend/app.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
}
