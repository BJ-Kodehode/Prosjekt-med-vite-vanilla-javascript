export function loadNavbar() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
      <nav>
        <a href="#home">Hjem</a>
        <a href="#about">Om Meg</a>
        <a href="#contact">Kontakt Meg</a>
      </nav>
    `;
  }
  