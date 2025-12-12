module.exports = {
  projectConfig: {
    port: 9000,  // ⚠️ Жёстко заданный порт
    database_url: "sqlite:///medusa.db",  // ⚠️ SQLite
    database_type: "sqlite",
    jwt_secret: "test",
    cookie_secret: "test",
    store_cors: "*",
    admin_cors: "*",
    auth_cors: "*",
  },
  plugins: [],
};