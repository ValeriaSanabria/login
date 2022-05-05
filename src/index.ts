rotulo1.innerHTML = "Por favor, ingrese el usuario";
rotulo2.innerHTML = "Por favor, ingrese la clave";

let usuario: string = "Juan";
let contraseña: string = "claveJuan";

let userIngresado: string = "Jose";
let contraseñaIngresada: string = "claveJuan";

if (usuario == userIngresado && contraseñaIngresada) {
  console.log("Bienvenido");
} else {
  console.log("El usuario o la contraseña son incorrectos");
}
