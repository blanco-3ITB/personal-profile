import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div>
        <a
          href="https://web.facebook.com/johncedric.blanco.5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white me-3"
        >
          <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
        </a>
        <a
          href="https://www.instagram.com/_blancoo.o/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white me-3"
        >
          <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
        </a>
        <a
          href="https://youtube.com/@johncedricblanco7025?si=YjhDQW5EssjGgWEV"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <i className="bi bi-youtube" style={{ fontSize: '1.5rem' }}></i>
        </a>
      </div>
      <p className="mt-2 mb-0">© 2025 Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
