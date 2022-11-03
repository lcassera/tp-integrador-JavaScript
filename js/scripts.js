function resumen() {
    const cantidadHtml = Number.parseInt(document.getElementById("cantidad").value)
    const categoriaHtml = document.getElementById("categoria").value
    const totalHtml = document.getElementById("total")
    const precioTicket = 200
    let totalAPagar = cantidadHtml * precioTicket //calculo el total a pagar sin descuento
    let descuento

    if (cantidadHtml <= 0) {  
        alert("La cantidad de tickets a comprar debe ser mayor a 0")//si la cantidad de tickets es 0 o un numero negativo muestra este alert
        document.getElementById("cantidad").value = "";//resetea el campo cantidad
        borrar()//borra el total a pagar si quedo un valor cargado previamente
    }
    else if (isNaN(cantidadHtml)) { 
        alert("Ingrese la cantidad de tickets a comprar")//si no se ingreso ningun valor en la cantidad de tickets a comprar muestra este alert
        borrar() //borra el total a pagar si quedo un valor cargado previamente
    }
    else {
        switch (categoriaHtml) {
            case "1":
                descuento = (80 / 100) //descuento estudiante
                break
            case "2":
                descuento = (50 / 100) //descuento trainee
                break
            case "3":
                descuento = (15 / 100) //descuento junior
                break
        }
        //calculo del total a pagar con descuento
        totalAPagar = totalAPagar - (totalAPagar * descuento)

        //Doy formato de moneda al total a pagar
        totalAPagar = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(totalAPagar)
        
        //Muestro el total a pagar en el formulario
        totalHtml.innerHTML = "Total a pagar: " + (totalAPagar.replace(/\s/g,''))//elimino los espacios en blanco del total a pagar
    }
}

function borrar() {//borro el total a pagar del formulario
    const totalHtml = document.getElementById("total")
    totalHtml.innerHTML = "Total a pagar: $"
}

