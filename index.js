console.log("hola")

// 1. VARIABLES 

const nombre        = document.getElementById("capturar-nombre")

const btnSaludar    = document.getElementById("btn-saludar")
 
const areaSaludo    = document.getElementById("area-saludo")


// 2. FUNCIONES
const saludar = () => {

    const saludo = `Hola ${name}!!!`

    areaSaludo.innerHTML = saludo

}

// 3. EVENTOS
btnSaludar.addEventListener("click", () => {
    const nameValue = nombre.value
    console.log("Hola Mundo")
    saludar(nameValue)
})