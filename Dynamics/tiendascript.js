class Carrito {
    constructor(id, texto, precio) {
        this.id = id;
        this.texto = texto;
        this.precio = precio;
    }
    getTexto() {
        return this.texto;
    }
    getId() {
        return this.id;
    }
    getPrecio() {
        return this.precio;
    }
}

class ListaDeCompras {
    constructor() {
        this.lista = [];
    }

    push(elemento) {
        this.lista.push(elemento);
    }

    pop(indice) {
        return this.lista.splice(indice, 1)[0];
    }

    get() {
        return this.lista;
    }

    getTotal() {
        return this.lista.reduce((acc, item) => acc + item.getPrecio(), 0);
    }
}

const precios = {};
    precios["b1"] = 300;
    precios["b2"] = 150;
    precios["b3"] = 240;
    precios["b4"] = 320;
    precios["b5"] = 220;
    precios["b6"] = 200;
    precios["b7"] = 300;
    precios["b8"] = 620;
    precios["b9"] = 180;
    precios["b10"] = 300;
    precios["b11"] = 700;
    precios["b12"] = 400;
    precios["b13"] = 500;
    precios["b14"] = 1000;
    precios["b15"] = 2000;
const comprasLista = new ListaDeCompras();
let idv = 0;
const carritoDiv = document.getElementById('carrito');
const totalDiv = document.getElementById('total');

function agregarProducto(botonId){
    idv++;
    const precio = precios[botonId];
    const nombreProducto = "Producto " + botonId + " - $" + precio;
    const mas = new Carrito(idv, nombreProducto, precio);
    comprasLista.push(mas);
    const item = document.createElement('div');
    item.textContent = mas.getTexto();
    item.setAttribute('data-id', mas.getId());
    const btnQuitar = document.createElement('button');
    btnQuitar.textContent = 'Quitar';
    btnQuitar.style.marginLeft = '10px';
    btnQuitar.addEventListener('click',()=>{
    carritoDiv.removeChild(item);
    const lista = comprasLista.get();
        for (let i = 0; i < lista.length; i++) {
                if (lista[i].getId() === mas.getId()) {
                comprasLista.pop(i);
            }
        }
      actualizarTotal();
    });
}
    function actualizarTotal() {
      totalDiv.textContent = comprasLista.getTotal();
    }
    for (let i = 1; i <= 15; i++) {
        const btn = document.getElementById(`b${i}`);
        btn.classList.add("botonquitar");
        btn.addEventListener('click',()=>
        agregarProducto(`b${i}`));
    }