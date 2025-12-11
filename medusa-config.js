module.exports = {
  projectConfig: {
    // ВАЖНО: порт для Render
    port: parseInt(process.env.PORT || 9000, 10),
    
    // База данных
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    
    // Секретные ключи
    jwt_secret: process.env.JWT_SECRET || "default_jwt_secret_change_in_production",
    cookie_secret: process.env.COOKIE_SECRET || "default_cookie_secret_change_in_production",
    
    // CORS настройки
    store_cors: process.env.STORE_CORS || "http://localhost:3000,exp://*",
    admin_cors: process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001",
    auth_cors: process.env.AUTH_CORS || "http://localhost:3000",
    
    // Redis (опционально)
    redis_url: process.env.REDIS_URL,
  },
  
  plugins: [],
  
  modules: {},
};