// Objeto para almacenar los detalles del producto

class Producto {
    constructor(id, nombre, color, precio) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
    }
}


// Array para almacenar los objetos de productos
let inventario = [];


function saludar(nombreUsuario) {
    alert("Hola " + nombreUsuario + ", bienvenido al control de stock de Ruma Sport!!!");
    //guardamos el parametro nombreUsuario en la variable global
    Nombre = nombreUsuario;
}

//Variable global para el nombre del usuario
let Nombre
saludar(prompt("Ingrese su nombre"));


//Variable que almacena la respuesta del usuario
let respuestaUsuario


//Función para bienvenida con opciones
function bienvenida() {
    respuestaUsuario = Number(prompt(`
        ¿qué desea hacer?
        1. Ver productos
        2. Agregar un producto nuevo
        3. Quitar un producto
        4. Salir`))

    switch (respuestaUsuario) {
        case 1:
            mostrarProductos()
            bienvenida()
            break;

        case 2:
            agregarProducto(inventario.length + 1, (prompt('ingrese el nombre del producto')), prompt('ingrese el color del producto'), Number(prompt('ingrese el precio del producto')))
            alert('Producto agregado!')
            bienvenida()
            break;

        case 3:
            let productoEliminado
            function eliminarProducto() {
                productoEliminado = prompt('Ingrese el N° del producto a Eliminar')
            }
            eliminarProducto()

            while (productoEliminado > inventario.length || isNaN(productoEliminado)) {
                alert('ingrese un valor válido')
                eliminarProducto()
            }
            delete (inventario[productoEliminado - 1]);
            alert(`El producto ${productoEliminado} ha sido eliminado`)
            bienvenida();
            break;

        case 4:
            alert('Hasta la próxima ' + Nombre + '!');
            break;

        default:
            alert('Ingrese una opción válida (1/2/3/4)')
            bienvenida()
    }
}

// Función para agregar productos al inventario
function agregarProducto(id, nombre, color, precio) {
    let producto = new Producto(id, nombre.toUpperCase(), color.toUpperCase(), precio);
    inventario.push(producto);
}

// Función para mostrar los productos
function mostrarProductos() {
    let mensajeUsuario = 'Lista: ';
    inventario.map(x => {
        mensajeUsuario += `
        N°: ${x.id}
        Nombre: ${x.nombre}
        Color: ${x.color}
        Precio: ${x.precio}
        `
    })
    alert(mensajeUsuario)

}

// Agregamos productos iniciales al inventario
agregarProducto(1, 'CAMISETA', 'rojo', 19.99);
agregarProducto(2, 'PANTALON', 'negro', 39.99);
agregarProducto(3, 'ZAPATILLAS', 'azul', 59.99);

bienvenida()
