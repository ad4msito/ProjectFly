# ProjectFly

API REST para la reserva de vuelos.

Este proyecto consiste en una API REST que te permitirá, mediante endpoints (públicos y privados), acceder a la creación de un usuario. El usuario puede ser cliente o vendedor.

## Entidades

1. **Usuario**:
   - Relación de composición entre Cliente y Vendedor.

2. **Reservas**:
   - Contiene el ID del usuario y el ID del vuelo.

3. **Vuelo**:
   - Atributos: aeropuerto_origen, aeropuerto_destino, fecha y aerolínea.

4. **Aerolínea**:
   - Posee el nombre de la aerolínea.

5. **Aeropuerto**:
   - Posee el nombre del aeropuerto.

## Endpoints Públicos

- **Crear Usuario**:
  - `POST /api/usuario`

- **Iniciar Sesión** (Devuelve un token para los endpoints):
  - `POST /api/auth/login`
  - Cuerpo de la solicitud (Content-Type: application/json):
    ```json
    {
      "email": "example@mail.com",
      "password": "example"
    }
    ```

- **Ver Vuelos**:
  - `GET /api/vuelos`

## Endpoints Privados

### Usuario Cliente

- **Obtener Reservas del Usuario**:
  - `GET /api/cliente/reservas`

- **Realizar Reserva**:
  - `POST /api/cliente/reservas`

- **Cancelar Reserva**:
  - `DELETE /api/cliente/reservas/:id`

### Usuario Vendedor

- **Crear Vuelo**:
  - `POST /api/vendedor/vuelos`

- **Actualizar Vuelo**:
  - `PUT /api/vendedor/vuelos/:id`

- **Eliminar Vuelo**:
  - `DELETE /api/vendedor/vuelos/:id`

