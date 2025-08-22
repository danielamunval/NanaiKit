// Configuración de la API

// URL base de la API
export const API_URL = 'https://api.nanaikit.com/api/v1';

// Configuración por defecto para Axios
export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 60000 // 60 segundos
};

// Códigos de error comunes
export const ERROR_CODES = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};