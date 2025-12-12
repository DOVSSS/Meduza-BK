module.exports = {
  projectConfig: {
    // ⚠️ ВАЖНО: порт из переменной окружения
    port: parseInt(process.env.PORT || 9000, 10),
    
    // ⚠️ ВАЖНО: используем ваш DATABASE_URL
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    
    // Секреты (должны быть в Environment Variables)
    jwt_secret: process.env.JWT_SECRET,
    cookie_secret: process.env.COOKIE_SECRET,
    
    // CORS
    store_cors: "*",
    admin_cors: "*",
    
    // Отключаем фронтенд
    admin_frontend: false,
    telemetry_enabled: false,
  },
  
  plugins: [],
  
  featureFlags: {
    instrument: false,
    admin: false,
  },
  
  modules: {},
};
