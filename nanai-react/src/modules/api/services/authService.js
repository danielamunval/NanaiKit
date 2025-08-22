import axios from 'axios';
import { API_URL } from '../config/apiConfig';
import { users } from '../../auth/utils/dummydata';

const authService = {
  /**
   * Iniciar sesión de usuario
   * @param {Object} credentials - Credenciales del usuario
   * @param {string} credentials.email - Correo electrónico
   * @param {string} credentials.password - Contraseña
   * @returns {Promise<Object>} - Datos del usuario autenticado
   */

  login: async (credentials) => {
    try {
      const payload = { email: credentials.email, contrasena: credentials.password };
      const { data } = await axiosInstance.post(`${AUTH_URL}/login`, payload);
      // Estructura esperada backend: { nombre, email, rol, token [, roles, id] }
      const storage = credentials.rememberMe ? localStorage : sessionStorage;
      if (data?.token) {
        const normalizedUser = {
          id: data.id ?? data.userId ?? null,
          nombre: data.nombre ?? data.name ?? '',
          email: data.email ?? '',
          rol: data.rol ?? (Array.isArray(data.roles) ? data.roles[0] : undefined),
          roles: Array.isArray(data.roles) ? data.roles : (data.rol ? [data.rol] : []),
          token: data.token
        };
        storage.setItem('usuario', JSON.stringify(normalizedUser));
        storage.setItem('token', data.token);
        return normalizedUser;
      }
      return data;
    } catch (error) {
      console.error('Error en login:', error);
      throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
    }
  },

  /**
   * Registrar nuevo usuario
   * @param {Object} userData - Datos del nuevo usuario
   * @returns {Promise<Object>} - Datos del usuario creado
   */
  register: async (userData) => {
    try {
      const payload = {
        nombre: userData.nombre,
        email: userData.email,
        contrasena: userData.password,
        rol: userData.tipo_usuario === 'admin' ? 'ADMIN' : undefined,
        telefono: userData.telefono || undefined,
        comuna: userData.comuna || undefined,
        direccion: userData.direccion || undefined
      };
      const { data } = await axiosInstance.post(`${AUTH_URL}/register`, payload);
      // Estructura esperada: { nombre, email, rol, token }
      return data;
    } catch (error) {
      console.error('Error en registro:', error);
      throw new Error(error.response?.data?.message || 'Error al registrar usuario');
    }
  },

  /**
   * Verificar token de autenticación
   * @returns {Promise<Object>} - Datos del usuario autenticado
   */
  verifyToken: async () => {
    try {
      // No hay endpoint de verificación; validamos existencia del token local
      const storedUser = localStorage.getItem('usuario');
      if (!storedUser) return null;
      const user = JSON.parse(storedUser);
      // Opcional: intentar un ping a un endpoint protegido para validar token
      try {
        await axiosInstance.get('/api/pedido'); // cualquier endpoint protegido GET
        return user;
      } catch (_) {
        localStorage.removeItem('usuario');
        return null;
      }
    } catch (error) {
      console.error('Error al verificar token:', error);
      throw new Error('Sesión inválida');
    }
  },

  /**
   * Obtener lista de usuarios registrados
   * @returns {Promise<Array>} - Lista de usuarios
   */
  getRegisteredUsers: async () => {
    try {
      const response = await axiosInstance.get('/api/usuarios');
      return response.data;
    } catch (error) {
      console.error('Error al obtener usuarios registrados:', error);
      throw new Error(error.response?.data?.message || 'Error al obtener usuarios');
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('usuario');
    sessionStorage.removeItem('usuario');
  },

  getCurrentUser: () => {
    const raw = localStorage.getItem('usuario') || sessionStorage.getItem('usuario');
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (_) {
      return null;
    }
  },

  isAuthenticated: () => {
    try {
      const raw = localStorage.getItem('usuario') || sessionStorage.getItem('usuario');
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      return !!parsed?.token;
    } catch (_) {
      return false;
    }
  },

  hasRole: (role) => {
    const user = authService.getCurrentUser();
    const roles = user?.roles || (user?.rol ? [user.rol] : []);
    return Array.isArray(roles) && roles.includes(role);
  }
};

export default authService;