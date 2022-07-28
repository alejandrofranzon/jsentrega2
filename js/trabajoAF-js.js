

console.log("AF Creditos")
console.warn("necesitas un credito... te pasamos al simulador")
console.error("no te olvides de llenar todos los campos")

function mostrarSaludo() {
    let nombreCompleto = prompt ("Ingresar tu Nombre y Apellido:")
        console.log("Hola", nombreCompleto)
}

function Multiplicar () {
        numero1 = parseFloat(prompt("Ingrese monto del Credito"))
        numero2 = parseFloat(prompt("Ingrese plazo de su Credito"))
        resultadoMulti = calcular(numero1, numero2)
        console.log ("Importe de Cuota:", resultadoMulti)
}

function calcular(num1, num2) {
    return numero1 / numero2 * tasa
}

console.warn("quieres solicitarlo??")
