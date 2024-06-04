exports.login = {
    href:"/api_v1/users/login",
    title:"Iniciar sesion",
    method:"/POST"
    }
exports.Reservas = {
    href:"/api_v1/users/profile/reservas",
    title:"Ver mis reservas",
    method:"/GET"
    }
exports.Vuelos = {
    href:"/api_v1/users/vuelos",
    title:"Ver vuelos disponibles",
    method:"/GET"
    }
exports.Logout = {
    href:"/api_v1/users/logout",
    title:"Cerrar sesion",
    method:"/POST"
    }
exports.createReserva = {
    href:"api_v1/users/auth/reservas/:id",
    title:"Crear reserva",
    method:"/POST"
}

