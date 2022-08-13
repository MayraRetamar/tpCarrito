let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let calcular = document.getElementById("btn-calcular");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let aplicar = document.getElementById("btn-aplicar");
let descuento = document.getElementById("descuento");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;

function agregarAlCarrito() {
  productos.push(producto.value);
  precios.push(precio.value);

  lista?.innerHTML += `<li> ${producto.value} $${precio.value} </li>`;
  producto.value = "";
  precio.value = "";
}

function calcularTotal() {
  for (let i: number = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  total?.innerHTML = suma;
}
agregar?.addEventListener("click", agregarAlCarrito);
calcular?.addEventListener("click", calcularTotal);

function calcularDescuento() { 
    if(suma > 2500) { 
      descuento.innerHTML = ` Su compra supera los $2500 accede a un descuento del 10% total con descuento:  ${suma - suma * 0.1}`;

    } else { 
      descuento.innerHTML = `Con su compra de más de $2500 accede un descuento`;
    }
};

aplicar?.addEventListener("click", calcularDescuento);
