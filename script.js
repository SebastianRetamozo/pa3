// Inicializar AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// DOM Elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const contactForm = document.getElementById('contact-form');
const preloader = document.querySelector('.preloader');

// Navegación entre páginas
function navigateTo(pageId) {
  // Oculta todas las páginas
  pages.forEach(page => {
    page.classList.remove('active');
  });

  // Muestra la página seleccionada
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Actualiza el estado activo en los enlaces de navegación
  navLinks.forEach(link => {
    if (link.dataset.target === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Cierra el menú móvil si está abierto
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
  }

  // Vuelve al inicio de la página
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle menú móvil
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
}

// Eventos de navegación
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const target = link.dataset.target;
    if (target) {
      navigateTo(target);
    }
  });
});

// Envío de formulario de contacto (si existe)
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el formulario
    alert('¡Mensaje enviado!');
    contactForm.reset();
  });
}

// Oculta el preloader cuando la página está cargada
window.addEventListener('load', () => {
  setTimeout(() => {
    if (preloader) {
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }
  }, 500);
});

// Preferencia de tema (oscuro/claro) usando localStorage
function saveThemePreference(isDark) {
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

function loadThemePreference() {
  const savedDarkMode = localStorage.getItem('darkMode');
  return savedDarkMode ? savedDarkMode === 'true' : true; // Por defecto oscuro
}

const isDarkMode = loadThemePreference();
// Aquí podrías aplicar clases para el tema si lo deseas

// Scroll suave para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});