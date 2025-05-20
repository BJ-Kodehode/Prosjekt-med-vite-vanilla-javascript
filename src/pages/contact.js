import axios from 'axios';
import { format } from 'date-fns';

export function loadContact(container) {
  const today = format(new Date(), 'dd.MM.yyyy');

  container.innerHTML = `
    <h1>Kontakt Meg</h1>
    <p>Dato: ${today}</p>
    <p>Send meg gjerne en melding!</p>
    <button id="quote-btn">Hent et tilfeldig sitat</button>
    <div id="quote" style="margin-top: 1rem;"></div>
  `;

  const quoteBtn = document.getElementById('quote-btn');
  const quoteBox = document.getElementById('quote');

  quoteBtn.addEventListener('click', async () => {
    try {
      quoteBox.innerText = 'Henter sitat...';
      const res = await axios.get('https://api.quotable.io/random');
      quoteBox.innerHTML = `"${res.data.content}"<br><small>– ${res.data.author}</small>`;
    } catch (err) {
      quoteBox.innerText = 'Kunne ikke hente sitat. Prøv igjen senere.';
    }
    try {
        const res = await axios.get('https://type.fit/api/quotes');
const quotes = res.data;
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteBox.innerHTML = `"${randomQuote.text}"<br><small>– ${randomQuote.author || 'Ukjent'}</small>`;

    }
    catch(err2){
        quoteBox.innerText = 'Kunne ikke hente sitat. Prøv igjen senere.';
    }
  });
}
