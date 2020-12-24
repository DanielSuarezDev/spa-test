import getData from '../utils/getData';

const Home = async () =>{
const character = await getData();
  const view = `
  <div class="characters">
    ${character.results.map(character => `
    <article class="character-item">
      <a href="#/${character.id}/">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </a>
    </article>
    `).join('')}/* el join es para que no aparezca la coma que separa cada elemento */
  </div>
  `;

  return view
};

export default Home;