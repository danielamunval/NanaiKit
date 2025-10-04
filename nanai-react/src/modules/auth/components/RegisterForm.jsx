import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    direccion: '',
    telefono: '',
    edad: '',
    genero: '',
    tipo_usuario: 'cliente'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre) {
      newErrors.nombre = 'El nombre es obligatorio';
    }
    
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    if (!formData.direccion) {
      newErrors.direccion = 'La dirección es obligatoria';
    }
    
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Preparar datos para enviar (sin confirmPassword)
    const { confirmPassword, ...userData } = formData;
    
    try {
      const result = await register(userData);
      
      if (result.success) {
        navigate('/login', { 
          state: { 
            message: '¡Registro exitoso! Ahora puedes iniciar sesión', 
            type: 'success' 
          } 
        });
      } else {
        setErrors({ general: result.error || 'Error al registrar usuario' });
      }
    } catch (error) {
      setErrors({ general: 'Error al conectar con el servidor' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      {errors.general && (
        <div className="error-message" role="alert">
          {errors.general}
        </div>
      )}
      
      <div className="form-field">
        <input
          type="text"
          className={errors.nombre ? 'has-error' : ''}
          id="nombre"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.nombre && <div className="error-text">{errors.nombre}</div>}
      </div>
      
      <div className="form-field">
        <input
          type="email"
          className={errors.email ? 'has-error' : ''}
          id="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.email && <div className="error-text">{errors.email}</div>}
      </div>
      
      <div className="form-field">
        <input
          type="password"
          className={errors.password ? 'has-error' : ''}
          id="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.password && <div className="error-text">{errors.password}</div>}
      </div>
      
      <div className="form-field">
        <input
          type="password"
          className={errors.confirmPassword ? 'has-error' : ''}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirmar contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}
      </div>
      
      <div className="form-field">
        <input
          type="text"
          className={errors.direccion ? 'has-error' : ''}
          id="direccion"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {errors.direccion && <div className="error-text">{errors.direccion}</div>}
      </div>
      
      <div className="form-row">
        <div className="form-field half-width">
          <input
            type="text"
            id="telefono"
            name="telefono"
            placeholder="Teléfono (opcional)"
            value={formData.telefono}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        
        <div className="form-field half-width">
          <input
            type="number"
            id="edad"
            name="edad"
            placeholder="Edad (opcional)"
            min="0"
            value={formData.edad}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-field half-width">
          <select
            id="genero"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">Género (opcional)</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="No binario">No binario</option>
            <option value="Otro">Otro</option>
            <option value="Prefiero no decirlo">Prefiero no decirlo</option>
          </select>
        </div>
        
    
      </div>
      
      <button 
        type="submit" 
        className="submit-button" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Registrando...' : 'Registrarse'}
      </button>
    </form>
  );
};

export default RegisterForm;