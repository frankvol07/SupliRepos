const carousel = document.querySelector('.carousel'); // Get the carousel element
const prevBtn = document.querySelector('.prev-btn'); // Get the previous button element
const nextBtn = document.querySelector('.next-btn'); // Get the next button element

const productos = [ // Array of product objects
  {
    id: 1,
    img: 'IMG/Anuncio.png',
    titulo: 'Producto 1',
    descripcion: 'Descripción del producto 1',
    precio: 20.00
  },
  {
    id: 2,
    img: 'IMG/Anuncio.png',
    titulo: 'Producto 2',
    descripcion: 'Descripción del producto 2',
    precio: 35.00
  },
  {
    id: 3,
    img: 'IMG/Anuncio.png',
    titulo: 'Producto 3',
    descripcion: 'Descripción del producto 3',
    precio: 49.99
  },
  // Add more product objects here
];

let currentSlide = 0; // Track the current slide index (starts at 0)

const generateProductHTML = (producto) => { // Function to generate HTML for each product
  return `
    <div class="producto">
      <img src="${producto.img}" alt="${producto.titulo}">
      <h3>${producto.titulo}</h3>
      <p>${producto.precio.toFixed(2)}</p>
      <p>${producto.descripcion}</p>
    </div>
  `;
};

const renderProductos = () => { // Function to render products on the carousel
  carousel.innerHTML = ''; // Clear existing products

  productos.forEach((producto, index) => {
    const productHTML = generateProductHTML(producto);
    const productElement = document.createElement('div');
    productElement.innerHTML = productHTML;
    productElement.classList.add('producto');

    carousel.appendChild(productElement);
  });

  // Update button visibility based on current slide
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === productos.length - 1;
};

renderProductos(); // Render products initially

prevBtn.addEventListener('click', () => { // Previous button click event
  if (currentSlide > 0) {
    currentSlide--;
    carousel.style.transform = `translateX(-${currentSlide * 300}px)`; // Move carousel to the left
    renderProductos(); // Re-render products to update button visibility
  }
});

nextBtn.addEventListener('click', () => { // Next button click event
  if (currentSlide < productos.length - 1) {
    currentSlide++;
    carousel.style.transform = `translateX(-${currentSlide * 300}px)`; // Move carousel to the right
    renderProductos(); // Re-render products to update button visibility
  }
});






const slider = document.querySelector('.productos-slider');
    const slides = document.querySelectorAll('.productos-slider img');
    const slideWidth = slides[0].clientWidth;

    // Clonar la primera imagen al final (opcional, para una transición más suave)
    const firstSlide = slides[0].cloneNode(true);
    firstSlide.classList.add('clone');
    slider.appendChild(firstSlide);

    let slidePosition = -slideWidth; // Iniciamos en la primera imagen clonada
    const slideInterval = setInterval(() => {
      slidePosition = slidePosition - slideWidth;
      slider.style.transform = `translateX(${slidePosition}px)`;

      // Si llegamos al final, volvemos al principio
      if (Math.abs(slidePosition) >= slideWidth * (slides.length - 1)) {
        slidePosition = -slideWidth;
      }
    }, 3000);
    // Detener el desplazamiento al pasar el mouse sobre el carrusel
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(() => {
        slidePosition = slidePosition - slideWidth;
        slider.style.transform = `translateX(${slidePosition}px)`;
      }, 3000);
    });


