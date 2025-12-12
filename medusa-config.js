// medusa-config.js - ОКОНЧАТЕЛЬНАЯ ВЕРСИЯ
module.exports = {
  projectConfig: {
    // ⚠️ ⚠️ ВАЖНО: порт ДОЛЖЕН быть из process.env из переменной окружения
    port: parseInt(process.env.PORT || 9000, 10),
    
    // ⚠️ ВАЖНО: используем ваш DATABASE_URL
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    
    // Секретные ключи
    jwt_secret: process.env.JWT_SECRET || "change_this_in_production",
    cookie_secret: process.env.COOKIE_SECRET || "change_this_in_production",
    
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
