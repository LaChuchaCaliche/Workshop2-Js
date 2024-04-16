// const userTravel = prompt(" Defina su destino: ")
// console.log(userTravel)
// document.write("Su destino definido fue : " +userTravel)
// let userDays = prompt(" Defina el número de dias de su estancia: ")
// console.log(" " +userDays)
// document.write(" Sus dias de estadia son  "+ userDays)
// let userMoney = prompt(" Defina el presupuesto inicial: ")
// console.log(userMoney)
// document.write(" El presupuesto ingresado fue "+ userMoney)
// const moneyPerDay = 150
// if (moneyPerDay*userDays<= userMoney){
//     document.write(" Presupuesto Suficiente ")
//     console.log(" Presupuesto Suficiente ")
// }
// if (moneyPerDay*userDays>=userMoney){
//     document.write(" Presupuesto insuficiente ")
//     console.log(" Presupuesto insuficiente ")
// }

// let souvenirArray = []
// while (true){
//     let newSouvenir = prompt(" Desea ingresar un nuevo elemento?: 1. Si 2. No")
//             if (newSouvenir == 1){
//             let souvenirInfo = []
//             let souvenirName = prompt(" Ingrese el nombre del souvernir: ")
//             let souvenirPrice = prompt(" Ingrese el valor del souvernir: ")
//             let souvenirDisp = prompt(" Ingrese el disponibilidad del souvernir: ")
//             souvenirInfo.push(souvenirName)
//             souvenirInfo.push(souvenirPrice)
//             souvenirInfo.push(souvenirDisp)
//             souvenirArray.push(souvenirInfo)
//             console.log(souvenirInfo)}
//             else {break;}
//             }
// console.log(souvenirArray)
souvenirQuantity = prompt(" Paquetes de souvenires : 1. 5 , 2.3 , 3. 1")
function addSouvenirs(array,a,b,c){
    
    array.push(a)
    console.log(typeof(a))
    array.push(b)
    console.log(typeof(b))
    if (c == 1){
        array.push(true)
        console.log(typeof(true))
    }
    if (c == 2){
        array.push(false)
        console.log(typeof(false))

    }
    
    return (souvenirs.push(array))
}
let souvenirs = []
let i = 5
let f = 3
let g = 1
if (souvenirQuantity == 1) {
    
    if (i =!0){
        let souvenirName = prompt("Ingrese nombre de souvenir ")
        let souvenirPrice = Number(prompt(" Ingrese el precio del souvenir "))
        let souvenirDisp = Number(prompt(" Ingrese disponibilidad 1. Disponible 2. No disponible"))
        let souvenir1 = []
        addSouvenirs(souvenir1,souvenirName,souvenirPrice,souvenirDisp)
        i =-1
        }
        if (i =! 0 ){
            let souvenirName = prompt("Ingrese nombre de souvenir ")
            let souvenirPrice = Number(prompt(" Ingrese el precio del souvenir "))
            let souvenirDisp = Number(prompt(" Ingrese disponibilidad 1. Disponible 2. No disponible"))
            let souvenir2 = []
            addSouvenirs(souvenir2,souvenirName,souvenirPrice,souvenirDisp)
            i =-1
        }
            if (i =! 0 ){
                let souvenirName = prompt("Ingrese nombre de souvenir ")
                let souvenirPrice = Number(prompt(" Ingrese el precio del souvenir "))
                let souvenirDisp = Number(prompt(" Ingrese disponibilidad 1. Disponible 2. No disponible"))
                let souvenir3 = []
                addSouvenirs(souvenir3,souvenirName,souvenirPrice,souvenirDisp)
                i =-1
                }
                if (i =! 0 ){
                    let souvenirName = prompt("Ingrese nombre de souvenir ")
                    let souvenirPrice = Number(prompt(" Ingrese el precio del souvenir "))
                    let souvenirDisp = Number(prompt(" Ingrese disponibilidad 1. Disponible 2. No disponible"))
                    let souvenir4 = []
                    addSouvenirs(souvenir4,souvenirName,souvenirPrice,souvenirDisp)
                    i =-1
                    }
                    if (i =! 0 ){
                        let souvenirName = prompt("Ingrese nombre de souvenir ")
                        let souvenirPrice = Number(prompt(" Ingrese el precio del souvenir "))
                        let souvenirDisp = Number(prompt(" Ingrese disponibilidad 1. Disponible 2. No disponible"))
                        let souvenir5 = []
                        addSouvenirs(souvenir5,souvenirName,souvenirPrice,souvenirDisp)
                        i =-1
                    }
            }
    
if (souvenirQuantity == 2) {
    if (f =! 0 ){
        let souvenirName = prompt("Ingrese nombre de souvenir ")
        let souvenirPrice = Number(prompt(" Ingrese el precio del souvenir "))
        let souvenirDisp = Number(prompt(" Ingrese disponibilidad 1. Disponible 2. No disponible")) 
        let souvenir1 = []
        addSouvenirs(souvenir1,souvenirName,souvenirPrice,souvenirDisp)
        f =-1
    }
        if (f =! 0 ){
            let souvenirName = prompt("Ingrese nombre de souvenir ")
            let souvenirPrice = Number(prompt(" Ingrese el precio del souvenir "))
            let souvenirDisp = Number(prompt(" Ingrese disponibilidad 1. Disponible 2. No disponible")) 
            let souvenir2 = []
            addSouvenirs(souvenir2,souvenirName,souvenirPrice,souvenirDisp)
            f =-1
        }
            if (f =! 0 ){
                let souvenirName = prompt("Ingrese nombre de souvenir ")
                let souvenirPrice = Number(prompt(" Ingrese el precio del souvenir "))
                let souvenirDisp = Number(prompt(" Ingrese disponibilidad 1. Disponible 2. No disponible"))
                let souvenir3 = []
                addSouvenirs(souvenir3,souvenirName,souvenirPrice,souvenirDisp)
                f =-1
            }
}
if (souvenirQuantity == 3){
    if (g =! 0 ){
        let souvenirName = prompt("Ingrese nombre de souvenir ")
        let souvenirPrice = Number(prompt(" Ingrese el precio del souvenir "))
        let souvenirDisp = Number(prompt(" Ingrese disponibilidad 1. Disponible 2. No disponible"))
        let souvenir1 = []
        addSouvenirs(souvenir1,souvenirName,souvenirPrice,souvenirDisp)
        g =-1}

}
document.write(souvenirs)
console.log(souvenirs)