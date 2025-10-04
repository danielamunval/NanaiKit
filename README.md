# 🪻 Nanai Kit - Plataforma de Bienestar Emocional 🪻

Nanai Kit es una **plataforma de ecommerce** especializada en kits de contención emocional. A través de productos cuidadosamente seleccionados y organizados por niveles de necesidad, brindamos herramientas accesibles y significativas para acompañar a las personas en sus procesos de bienestar emocional. 💖

## 🌟 **Características Principales**

- **Kits por Niveles**: Productos organizados según intensidad emocional (Preventivo, Alerta, SOS)
- **Autenticación Segura**: Sistema JWT con Spring Security
- **Gestión Completa**: CRUD de usuarios, inventario y pedidos
- **Panel Administrativo**: Gestión de productos, kits y usuarios
- **Responsive Design**: Interfaz adaptada para todos los dispositivos
- **API REST Completa**: Backend robusto y escalable

## 🛠️ **Stack Tecnológico**

### **Backend 💻**
- **Java 21** - Lenguaje principal
- **Spring Boot 3.5.4** - Framework principal
- **Spring Security** - Autenticación y autorización JWT
- **Spring Data JPA** - Persistencia de datos
- **Spring Web** - API REST
- **PostgreSQL 42.7.3** - Base de datos principal
- **Maven** - Gestor de dependencias

### **Frontend 🎨**
- **React** - Biblioteca de interfaces de usuario
- **Node.js 22.16.0** - Runtime de JavaScript

### **Despliegue 🚀**
- **Vercel** - Plataforma de despliegue
- **PostgreSQL** - Base de datos en la nube

---

## 📁 **Estructura del Proyecto**

```
NanaiKit/
├── backend/                    # API REST con Spring Boot
│   ├── src/
│   │   ├── main/java/com/nanai_kit/
│   │   │   ├── features/       # Módulos por funcionalidad
│   │   │   │   ├── kit/        # Gestión de kits
│   │   │   │   ├── pedido/     # Gestión de pedidos
│   │   │   │   ├── producto/   # Gestión de productos
│   │   │   │   └── usuario/    # Gestión de usuarios
│   │   │   ├── security/       # Configuración de seguridad JWT
│   │   │   └── exception/      # Manejo de excepciones
│   │   └── resources/
│   │       ├── application.yml
│   │       └── application-dev.yml
│   ├── .env                    # Variables de entorno
│   └── pom.xml                 # Configuración Maven
├── nanai-react/                # Frontend React
│   ├── src/                    # Código fuente React
│   ├── public/                 # Archivos públicos
│   └── package.json            # Dependencias Node.js
├── database/                   # Scripts de base de datos
│   ├── schema.sql             # Estructura de tablas
│   └── seed.sql               # Datos iniciales
└── README.md                  # Documentación del proyecto
```


---

## ⚙️ **Instalación y Configuración**

### **📋 Prerrequisitos**
- **Java 21** JDK
- **Node.js 22.16.0** 
- **PostgreSQL 42.7.3**
- **Maven 3.8+**
- **Git**

### **🗄️ Configuración de Base de Datos**

1. **Crear la base de datos:**
```sql
CREATE DATABASE nanai_kit;
```

2. **Ejecutar scripts de estructura:**
```bash
# Ejecutar schema.sql para crear las tablas
psql -d nanai_kit -f database/schema.sql

# Ejecutar seed.sql para datos iniciales
psql -d nanai_kit -f database/seed.sql
```

### **🔙 Configuración del Backend**

1. **Navegar al directorio backend:**
```bash
cd backend
```

2. **Crear archivo de variables de entorno (`.env`):**
```env
# Configuración de Base de Datos
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nanai_kit
DB_USERNAME=tu_usuario_postgresql
DB_PASSWORD=tu_contraseña_postgresql

# Configuración JWT
JWT_SECRET=tu_clave_secreta_muy_segura_aqui
JWT_EXPIRATION=86400000
```

3. **Instalar dependencias y compilar:**
```bash
mvn clean install
```

4. **Ejecutar el servidor:**
```bash
mvn spring-boot:run
```

### **🔜 Configuración del Frontend**

1. **Navegar al directorio frontend:**
```bash
cd nanai-react
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Ejecutar en modo desarrollo:**
```bash
npm start
```

## 🛣️ **API Endpoints Principales**

### **🔐 Autenticación** (`/api/auth`)
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión

### **👤 Usuarios** (`/api/usuarios`) 
- `GET /api/usuarios/profile` - Perfil del usuario
- `PUT /api/usuarios/profile` - Actualizar perfil
- `DELETE /api/usuarios/profile` - Eliminar cuenta

### **🎁 Kits** (`/api/kits`)
- `GET /api/kits` - Listar kits disponibles
- `GET /api/kits/{id}` - Detalle de kit específico
- `GET /api/kits/nivel/{nivel}` - Kits por nivel emocional

### **🛒 Pedidos** (`/api/pedidos`)
- `GET /api/pedidos` - Historial de pedidos
- `POST /api/pedidos` - Crear nuevo pedido
- `GET /api/pedidos/{id}` - Detalle de pedido

### **⚙️ Administración** (`/api/admin`) - Solo ADMIN
- `GET /api/admin/usuarios` - Gestionar usuarios
- `GET /api/admin/productos` - Gestionar inventario
- `POST /api/admin/kits` - Crear nuevos kits
- `PUT /api/admin/pedidos/{id}/estado` - Actualizar estado de pedidos

## 🗃️ **Arquitectura de Base de Datos**

### **📊 Modelo de Datos**
- **Usuario**: Información de clientes y administradores
- **Kit**: Productos principales (N1_PREVENTIVO, N2_ALERTA, N3_SOS)
- **Producto**: Inventario individual para armar kits
- **Pedido**: Transacciones de compra
- **Pedido Detalle**: Items específicos de cada pedido
- **Kit-Producto**: Relación de composición de kits

### **🔗 Niveles de Kits**
- **N1_PREVENTIVO**: Bienestar general y prevención
- **N2_ALERTA**: Situaciones de alerta emocional  
- **N3_SOS**: Crisis y primeros auxilios emocionales

## 🧪 **Testing**

### **Backend**
```bash
# Ejecutar todos los tests
mvn test

# Tests específicos
mvn test -Dtest=KitControllerTest

# Coverage report
mvn test jacoco:report
```

### **Frontend**
```bash
# Tests React
npm test

# Tests con coverage
npm test -- --coverage
```

## 🚀 **Despliegue**

### **🌐 Producción**
- **URL**: [En proceso de configuración]
- **Plataforma**: Vercel
- **Base de Datos**: PostgreSQL en la nube

## 🔒 **Seguridad**

- **Autenticación JWT** con Spring Security
- **Encriptación de contraseñas** con BCrypt
- **Roles y permisos** (USER/ADMIN)
- **Validación de datos** en backend y frontend
- **CORS configurado** para comunicación segura

## 📚 **Documentación Técnica**

Para información detallada de cada módulo:
- [Backend API Documentation](./backend/README.md)
- [Database Schema](./database/README.md)

## 💡 **Estado del Proyecto**

### **✅ Implementado**
- API REST completa con Spring Boot
- Sistema de autenticación JWT
- CRUD completo de usuarios, kits y pedidos
- Panel administrativo funcional
- Base de datos PostgreSQL optimizada
- Frontend React integrado
- Despliegue en Vercel

### **🚧 Próximas Funcionalidades**
- Sistema de pagos en línea
- Notificaciones por email
- Sistema de reviews y calificaciones
- Dashboard administrativo avanzado
- Contenido digital descargable

--

## 👥 Equipo de desarrollo 💖

🪻 **Dani Muñoz**  
🪻 **Marce Carreño**  
🪻 **Tais Socías**  
🪻 **Rodrigo Valderrama**  
🪻 **Claudio Hernández**

---

Desarrollado con 💖 para el proyecto **Nanai Kit 🪻**