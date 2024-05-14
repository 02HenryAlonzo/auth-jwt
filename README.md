# Sistema de Autenticación JWT

Este proyecto implementa un sistema de autenticación básico utilizando JSON Web Tokens (JWT) en Node.js con Express. Permite a los usuarios obtener un token tras autenticarse y verificar este token en futuras solicitudes a rutas protegidas.

## Tecnologías Utilizadas
- Node.js
- Express.js
- JWT (jsonwebtoken)
- dotenv

## Estructura del Proyecto

```plaintext
auth-jwt/
├── src/
│   ├── config/
│   │   └── index.js          # Configuraciones y variables de entorno
│   ├── controllers/
│   │   └── authController.js # Controladores para el manejo de la autenticación
│   ├── middleware/
│   │   └── verifyToken.js    # Middleware para verificar el token JWT
│   ├── routes/
│   │   └── authRoutes.js     # Rutas relacionadas con la autenticación
│   └── app.js                # Archivo principal de la aplicación
├── .env                      # Variables de entorno
├── package.json
└── README.md
```

## Configuración del Proyecto

Para configurar y ejecutar este proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto y ejecuta `npm install` para instalar las dependencias.
3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

PORT=3000
JWT_SECRET=your_jwt_secret

4. Para iniciar el servidor, ejecuta `node src/app.js` desde la terminal.

## Uso

Para usar este sistema de autenticación, realiza las siguientes solicitudes:

### Login

Envía una solicitud `POST` a `/api/auth/login` con un cuerpo JSON conteniendo `username` y `password`.

Ejemplo de cuerpo de la solicitud:
```json
{
"username": "user1",
"password": "password123"
}
```
Si las credenciales son correctas, recibirás un token JWT que puedes usar para acceder a rutas protegidas.

### Verificar Token

Envía una solicitud `GET` a `/api/auth/verify` con el header `Authorization` configurado como `Bearer <your_token>`.

Si el token es válido, recibirás una respuesta indicando que el token es válido.

### Pruebas

Para probar las rutas, puedes usar herramientas como Postman o Thunder Client. Asegúrate de incluir el token JWT adecuadamente en los headers de las solicitudes a rutas protegidas.