// Obtener referencias al carrito y al total
const carrito = document.getElementById("carrito");
const totalDiv = document.getElementById("total");

// Productos con nombre y precio
const productos = [
  { nombre: "Amanecer rosado", precio: 300 },
  { nombre: "Destellos de ternura", precio: 150 },
  { nombre: "Ramo del recuerdo", precio: 240 },
  { nombre: "Caricia de pétalos", precio: 320 },
  { nombre: "Pétalos de Alba", precio: 220 },
  { nombre: "Flor de luna", precio: 200 },
  { nombre: "Corazón silvestre", precio: 300 },
  { nombre: "Rosa pastel", precio: 620 },
  { nombre: "Sueño floral", precio: 180 },
  { nombre: "Dulce primavera", precio: 300 },
  { nombre: "Brisa de amor", precio: 700 },
  { nombre: "Rosa en eternidad", precio: 400 },
  { nombre: "Encanto natural", precio: 500 },
  { nombre: "Suspiro del rocío", precio: 1000 },
  { nombre: "Noche de rosas", precio: 2000 },
];

// Inicializar total
let total = 0;

// Función para agregar al carrito
function agregarProducto(index) {
  const producto = productos[index];

  // Crear div para el producto en el carrito
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `
    <div class="item-text">${producto.nombre}<br>$${producto.precio}</div>
  `;

  carrito.appendChild(item);

  // Sumar al total
  total += producto.precio;
  totalDiv.textContent = total;
}

// Asignar eventos a los botones
for (let i = 1; i <= productos.length; i++) {
  const boton = document.getElementById(`b${i}`);
  if (boton) {
    boton.addEventListener("click", () => agregarProducto(i - 1));
  }
}
