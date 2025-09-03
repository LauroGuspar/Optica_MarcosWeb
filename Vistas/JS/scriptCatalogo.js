
const data = [
  {
    id: 1,
    nombre: "Producto 1",
    categoria: "hombre",
    forma: "forma",
    material: "material",
    color: "Negro",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto1.jpg",
    descripcion:
      "Lentes de Prueba",
  },
  {
    id: 2,
    nombre: "Producto 2",
    categoria: "unisex",
    forma: "forma",
    material: "material",
    color: "Negro",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto2.jpg",
    descripcion:
      "Lentes de Prueba",
  },
  {
    id: 3,
    nombre: "Producto 3",
    categoria: "mujer",
    forma: "forma",
    material: "material",
    color: "Negro",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto3.jpg",
    descripcion:
      "Lentes de Prueba",
  },
  {
    id: 4,
    nombre: "Producto 4",
    categoria: "hombre",
    forma: "cat-eye",
    material: "material",
    color: "Negro",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto1.jpg",
    descripcion: "Lentes de Prueba",
  },
  {
    id: 5,
    nombre: "Producto 5",
    categoria: "unisex",
    forma: "forma",
    material: "material",
    color: "Negro",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto2.jpg",
    descripcion:
      "Lentes de Prueba",
  },
  {
    id: 6,
    nombre: "Producto 6",
    categoria: "hombre",
    forma: "forma",
    material: "material",
    color: "Negro",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto3.jpg",
    descripcion:
      "Lentes de Prueba",
  },
  {
    id: 7,
    nombre: "Producto 7",
    categoria: "niño",
    forma: "forma",
    material: "material",
    color: "Rojo",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto1.jpg",
    descripcion:
      "Lentes de Prueba",
  },
  {
    id: 8,
    nombre: "Producto 8",
    categoria: "mujer",
    forma: "forma",
    material: "metal",
    color: "Rosa",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto2.jpg",
    descripcion: "Lentes de Prueba",
  },
  {
    id: 9,
    nombre: "Producto 9",
    categoria: "unisex",
    forma: "rectangular",
    material: "metal",
    color: "Negro",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto3.jpg",
    descripcion: "Lentes de Prueba",
  },
  {
    id: 10,
    nombre: "Producto 10",
    categoria: "unisex",
    forma: "redonda",
    material: "acetato",
    color: "Transparente",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto1.jpg",
    descripcion: "Lentes de Prueba",
  },
  {
    id: 11,
    nombre: "Titan Edge T11",
    categoria: "hombre",
    forma: "rectangular",
    material: "titanio",
    color: "Negro",
    precio: 350,
    precioOld: 400,
    img: "img/Catalogo/producto2.jpg",
    descripcion:
      "Lentes de Prueba",
  },
  {
    id: 12,
    nombre: "Producto 12",
    categoria: "mujer",
    forma: "rectangular",
    material: "acetato",
    color: "Negro",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto3.jpg",
    descripcion: "Lentes de Prueba",
  },
  {
    id: 13,
    nombre: "Producto 13",
    categoria: "unisex",
    forma: "aviador",
    material: "titanio",
    color: "negro",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto1.jpg",
    descripcion: "Lentes de Prueba",
  },
  {
    id: 14,
    nombre: "Producto 14",
    categoria: "niño",
    forma: "rectangular",
    material: "acetato",
    color: "Verde",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto2.jpg",
    descripcion: "Lentes de Prueba",
  },
  {
    id: 15,
    nombre: "Producto 15",
    categoria: "mujer",
    forma: "redonda",
    material: "metal",
    color: "Rosa",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto3.jpg",
    descripcion: "Lentes de Prueba",
  },
  {
    id: 16,
    nombre: "Producto 16",
    categoria: "unisex",
    forma: "rectangular",
    material: "acetato",
    color: "Negro Mate",
    precio: 100,
    precioOld: 380,
    img: "img/Catalogo/producto1.jpg",
    descripcion:
      "Lentes de Prueba",
  },
];

const state = {
  busqueda: "",
  filtros: { categoria: null, forma: null, material: null },
  precioMax: 400,
  orden: "relevancia",
  pagina: 1,
  porPagina: 12,
};

// Constructores
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const grid = $("#grid");
const contador = $("#contador");
const chipsActivos = $("#chipsActivos");
const paginacion = $("#paginacion");

function crearCard(p) {
  const col = document.createElement("div");
  col.className = "col-6 col-md-4 col-xl-3";
  col.innerHTML = `
        <div class="card h-100 product-card border-0 shadow-sm" data-id="${p.id
    }">
          <img class="card-img-top thumb" loading="lazy" src="${p.img}" alt="${p.nombre
    } - ${p.color}">
          <div class="card-body d-flex flex-column">
            <span class="text-muted small text-uppercase">${p.categoria}</span>
            <h6 class="mt-1 mb-2">${p.nombre}</h6>
            <div class="mb-2">
              <span class="price">S/ ${p.precio}</span>
              ${p.precioOld
      ? `<span class="old-price ms-1">S/ ${p.precioOld}</span>`
      : ""
    }
            </div>
            <div class="mt-auto d-flex gap-2">
              <button class="btn btn-outline-primary btn-sm w-100" data-action="ver" data-id="${p.id
    }" data-bs-toggle="modal" data-bs-target="#modalProducto">Ver</button>
              <button class="btn btn-primary btn-sm w-100" data-action="cotizar" data-id="${p.id
    }">Cotizar</button>
            </div>
          </div>
          <div class="card-footer bg-transparent border-0 pt-0 small text-muted">${p.forma
    } • ${p.material} • ${p.color}</div>
        </div>`;
  return col;
}

//Aplicar los filtros
function aplicaFiltros(items) {
  const { busqueda, filtros, precioMax } = state;
  return items.filter((p) => {
    const matchBusqueda = busqueda
      ? (p.nombre + " " + p.descripcion + " " + p.color)
        .toLowerCase()
        .includes(busqueda)
      : true;
    const matchCat = filtros.categoria
      ? p.categoria === filtros.categoria
      : true;
    const matchForma = filtros.forma ? p.forma === filtros.forma : true;
    const matchMat = filtros.material
      ? p.material === filtros.material
      : true;
    const matchPrecio = p.precio <= precioMax;
    return (
      matchBusqueda && matchCat && matchForma && matchMat && matchPrecio
    );
  });
}

// Ordenar los productos
function ordenar(items) {
  const arr = [...items];
  switch (state.orden) {
    case "precio-asc":
      return arr.sort((a, b) => a.precio - b.precio);
    case "precio-desc":
      return arr.sort((a, b) => b.precio - a.precio);
    case "nombre-asc":
      return arr.sort((a, b) => a.nombre.localeCompare(b.nombre));
    case "nombre-desc":
      return arr.sort((a, b) => b.nombre.localeCompare(a.nombre));
    default:
      return arr;
  }
}

function paginar(items) {
  const start = (state.pagina - 1) * state.porPagina;
  return items.slice(start, start + state.porPagina);
}

// funcion de renderizado
function render() {
  const filtrados = aplicaFiltros(data);
  const ordenados = ordenar(filtrados);
  const total = ordenados.length;
  const totalPag = Math.max(1, Math.ceil(total / state.porPagina));
  if (state.pagina > totalPag) state.pagina = totalPag;
  const visibles = paginar(ordenados);

  grid.innerHTML = "";
  visibles.forEach((p) => grid.appendChild(crearCard(p)));

  contador.textContent = `Mostrando ${visibles.length} de ${total} productos`;

  chipsActivos.innerHTML = "";
  Object.entries(state.filtros).forEach(([k, v]) => {
    if (v) {
      const chip = document.createElement("span");
      chip.className = "badge text-bg-primary";
      chip.textContent = `${k}: ${v}`;
      chip.role = "button";
      chip.onclick = () => {
        state.filtros[k] = null;
        activarChipUI(k, null);
        state.pagina = 1;
        render();
      };
      chipsActivos.appendChild(chip);
    }
  });
  if (state.busqueda) {
    const chip = document.createElement("span");
    chip.className = "badge text-bg-primary";
    chip.textContent = `busqueda: ${state.busqueda}`;
    chip.role = "button";
    chip.onclick = () => {
      state.busqueda = "";
      $("#inputBuscar").value = "";
      state.pagina = 1;
      render();
    };
    chipsActivos.appendChild(chip);
  }
  if (state.precioMax < 400) {
    const chip = document.createElement("span");
    chip.className = "badge text-bg-primary";
    chip.textContent = `≤ S/ ${state.precioMax}`;
    chip.role = "button";
    chip.onclick = () => {
      state.precioMax = 400;
      $("#rangoPrecio").value = 400;
      $("#lblPrecio").textContent = "S/ 400";
      state.pagina = 1;
      render();
    };
    chipsActivos.appendChild(chip);
  }

  paginacion.innerHTML = "";
  const addItem = (label, page, disabled = false, active = false) => {
    const li = document.createElement("li");
    li.className = `page-item ${disabled ? "disabled" : ""} ${active ? "active" : ""
      }`;
    const a = document.createElement("a");
    a.className = "page-link";
    a.href = "#";
    a.textContent = label;
    a.onclick = (e) => {
      e.preventDefault();
      if (!disabled) {
        state.pagina = page;
        window.scrollTo({ top: 0, behavior: "smooth" });
        render();
      }
    };
    li.appendChild(a);
    paginacion.appendChild(li);
  };
  addItem("«", Math.max(1, state.pagina - 1), state.pagina === 1);
  for (let i = 1; i <= totalPag; i++)
    addItem(i, i, false, i === state.pagina);
  addItem(
    "»",
    Math.min(totalPag, state.pagina + 1),
    state.pagina === totalPag
  );
}

// Activar chip de filtro
function activarChipUI(grupo, valor) {
  $$(".filter-chip").forEach((ch) => {
    if (ch.dataset.filterGroup === grupo) {
      ch.classList.remove("active");
    }
  });
  if (valor) {
    const el = $(
      `.filter-chip[data-filter-group="${grupo}"][data-value="${valor}"]`
    );
    if (el) el.classList.add("active");
  }
}

// Buscar
$("#inputBuscar").addEventListener("input", (e) => {
  state.busqueda = e.target.value.trim().toLowerCase();
  state.pagina = 1;
  render();
});
$("#rangoPrecio").addEventListener("input", (e) => {
  state.precioMax = Number(e.target.value);
  $("#lblPrecio").textContent = `S/ ${state.precioMax}`;
  state.pagina = 1;
  render();
});
$("#selectOrden").addEventListener("change", (e) => {
  state.orden = e.target.value;
  state.pagina = 1;
  render();
});

$$(".filter-chip").forEach((ch) => {
  ch.addEventListener("click", () => {
    const grupo = ch.dataset.filterGroup;
    const valor = ch.dataset.value;
    state.filtros[grupo] = state.filtros[grupo] === valor ? null : valor;
    activarChipUI(grupo, state.filtros[grupo]);
    state.pagina = 1;
    render();
  });
});

$("#btnLimpiar").addEventListener("click", () => {
  state.busqueda = "";
  $("#inputBuscar").value = "";
  state.filtros = { categoria: null, forma: null, material: null };
  state.precioMax = 400;
  $("#rangoPrecio").value = 400;
  $("#lblPrecio").textContent = "S/ 400";
  state.orden = "relevancia";
  $("#selectOrden").value = "relevancia";
  $$(".filter-chip").forEach((ch) => ch.classList.remove("active"));
  state.pagina = 1;
  render();
});

function getCart() {
  return JSON.parse(localStorage.getItem("optica_cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("optica_cart", JSON.stringify(cart));
}

function addToCart(producto) {
  let cart = getCart();
  const index = cart.findIndex((p) => p.id === producto.id);
  if (index >= 0) {
    cart[index].cantidad += 1; // si ya existe, aumentar cantidad
  } else {
    cart.push({ ...producto, cantidad: 1 });
  }
  saveCart(cart);
  actualizarBadge();
}

//botones Ver / Cotizar
let productoActual = null;
grid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const prod = data.find((p) => p.id == btn.dataset.id);
  if (!prod) return;
  if (btn.dataset.action === "ver") {
    $("#modalTitulo").textContent = prod.nombre;
    $("#modalImg").src = prod.img;
    $(
      "#modalCategoria"
    ).textContent = `${prod.categoria} • ${prod.forma}`;
    $("#modalNombre").textContent = prod.nombre;
    $("#modalPrecio").textContent = `S/ ${prod.precio}`;
    $("#modalPrecioOld").textContent = prod.precioOld
      ? `S/ ${prod.precioOld}`
      : "";
    $("#modalDescripcion").textContent = prod.descripcion;
    productoActual = prod;
    const specs = [
      ["Material", prod.material],
      ["Color", prod.color],
    ];
    const specsWrap = $("#modalSpecs");
    specsWrap.innerHTML = "";
    specs.forEach(([k, v]) => {
      const s = document.createElement("span");
      s.className = "badge text-bg-light";
      s.textContent = `${k}: ${v}`;
      specsWrap.appendChild(s);
    });
  }

  if (btn.dataset.action === "cotizar") {
    addToCart(prod);
    const toastElement = document.getElementById("liveToastPrimary");
    toastElement.querySelector(".toast-body").textContent = `Se ha añadido "${prod.nombre}" al carrito.`;
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
  document.getElementById("btnModalCotizar").addEventListener("click", () => {
    if (productoActual) {
      addToCart(productoActual);
      const toastElement = document.getElementById("liveToastPrimary");
      toastElement.querySelector(".toast-body").textContent = `Se ha añadido "${prod.nombre}" al carrito.`;
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    }
  });
});

function actualizarBadge() {
  const cart = getCart();
  const total = cart.reduce((acc, p) => acc + p.cantidad, 0);
  const badge = document.querySelector(".nav-link[title='Carrito'] .badge");
  if (badge) badge.textContent = total;
}


// Iniciador
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  render();
  actualizarBadge();
});