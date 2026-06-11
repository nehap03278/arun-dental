/* =========================================
   components.js
   Dynamically injects Navbar & Footer into every page.
   Usage: include this script at the bottom of each HTML page.
   It reads #navbar-placeholder and #footer-placeholder
   and fills them with the shared HTML.
   ========================================= */

// ── NAVBAR HTML ──────────────────────────────────────────
const navbarHTML = `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="nav-container">
    <!-- Logo -->
    <a href="index.html" class="nav-logo" aria-label="Sky Dental Home">
      <div class="logo-icon"><img src="images/teeth.jpeg" alt="Sky Dental logo" width="44" height="44" loading="eager" /></div>
      <span class="logo-text">SKY DENTAL</span>
    </a>

    <!-- Desktop Navigation Links -->
    <ul class="nav-links" role="list">
      <li><a href="index.html" data-page="index">Home</a></li>
      <li><a href="about.html" data-page="about">About</a></li>
      <li><a href="services.html" data-page="services">Services</a></li>
      <li><a href="testimonials.html" data-page="testimonials">Testimonials</a></li>
      <li><a href="appointment.html" class="btn-nav" data-page="appointment">Book Appointment</a></li>
    </ul>

    <!-- Mobile Hamburger Button -->
    <button class="hamburger" aria-label="Toggle menu" aria-expanded="false" id="hamburger-btn">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  <!-- Mobile Navigation Menu -->
  <ul class="mobile-nav" id="mobile-nav" role="list" aria-hidden="true">
    <li><a href="index.html" data-page="index">Home</a></li>
    <li><a href="about.html" data-page="about">About</a></li>
    <li><a href="services.html" data-page="services">Services</a></li>
    <li><a href="testimonials.html" data-page="testimonials">Testimonials</a></li>
    <li><a href="appointment.html" class="btn-nav" data-page="appointment">Book Appointment</a></li>
  </ul>
</nav>
`;

// ── FOOTER HTML ──────────────────────────────────────────
const footerHTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">

      <!-- Brand Column -->
      <div class="footer-brand">
        <span class="logo-text" style="display:block;margin-bottom:14px;">SKY DENTAL</span>
        <p>
          Dedicated to transforming smiles with cutting-edge technology and expertise.
          Dr. Arun is committed to providing top-quality dental care for the whole family.
        </p>
        <!-- Social Links -->
        <div class="footer-socials">
          
          <a href="#" class="social-link" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://wa.me/919000000000" class="social-link" aria-label="WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.83L0 24l6.344-1.501A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.576-.504-5.058-1.377l-.362-.214-3.766.89.935-3.652-.236-.374A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
          </a>
   
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Our Services</a></li>
          <li><a href="testimonials.html">Testimonials</a></li>
          <li><a href="appointment.html">Book Appointment</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div class="footer-col">
        <h4>Our Services</h4>
        <ul>
          <li><a href="services.html">Cosmetic Dentistry</a></li>
          <li><a href="services.html">Dental Implants</a></li>
          <li><a href="services.html">Orthodontics</a></li>
          <li><a href="services.html">Root Canal</a></li>
          <li><a href="services.html">Teeth Whitening</a></li>
          <li><a href="services.html">General Dentistry</a></li>
        </ul>
      </div>
  

      <!-- Contact Info -->
      <div class="footer-col">
        <h4>Contact Us</h4>
        <div class="footer-contact-item">
          <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
          <p>Sky Dental, 2-89/8, Tellapur Rd, Gachibowil, Nallagandla, Telangana 500046</p>
        </div>
        <div class="footer-contact-item">
          <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.37a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.8-1.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
          <p><a href="tel:+919000000000">+91 9676306667</a></p>
        </div>
        <div class="footer-contact-item">
          <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
          <p><a href="mailto:info@skydental.in">info@skydental.in</a></p>
        </div>
        <div class="footer-contact-item">
          <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <p>Mon–Sat: 9:30 AM – 8:30 PM<br>Sunday: 10:00 AM – 2:00 PM</p>
        </div>
      </div>
    </div>

    
   <!-- Footer Bottom Bar -->
     <div class="footer-bottom">
      <p>© 2025 Sky Dental. All rights reserved.</p>

       <!--<p>Designed with ❤️ for Dr. Arun Teja</p> -->
    </div>
  </div>
  
</footer>
`;

// ── INJECT COMPONENTS ────────────────────────────────────
/**
 * Injects navbar and footer HTML into their placeholder elements,
 * then activates the current page link and sets up the mobile menu toggle.
 */
function loadComponents() {
  // 1. Inject Navbar
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = navbarHTML;
    highlightActiveNavLink();
    initMobileMenu();
  }

  // 2. Inject Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }
}

/**
 * Reads the current page filename and adds 'active' class
 * to the matching nav link.
 */
function highlightActiveNavLink() {
  const path = window.location.pathname;
  // Get filename, e.g. "about.html" → "about"
  const pageName = path.split('/').pop().replace('.html', '') || 'index';

  // Mark matching links in both desktop and mobile nav
  const links = document.querySelectorAll('.nav-links a[data-page], .mobile-nav a[data-page]');
  links.forEach(link => {
    if (link.dataset.page === pageName) {
      link.classList.add('active');
    }
  });
}

/**
 * Toggles the mobile menu open/closed when the hamburger is clicked.
 * Also closes the menu when a link is selected.
 */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    }
  });
}

// ── RUN ON DOM READY ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', loadComponents);
