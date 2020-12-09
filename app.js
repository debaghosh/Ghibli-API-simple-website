const app = document.querySelector('#root');

const logo = document.createElement('img');
logo.src="https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png";

const container = document.createElement('div');
container.className = 'container';


app.appendChild(logo);
app.appendChild(container);
console.log(app);


//Fetch API
fetch('https://ghibliapi.herokuapp.com/films').then((response)=>{
	return response.json();

}).then((data)=>{

	//work with the data here
	  data.forEach((film)=>{

	  const card = document.createElement('div');
	  card.className='card';

	  const h1 = document.createElement('h1');
	  h1.textContent = film.title;
	  console.log(1);

	  const p = document.createElement('p');
	  film.description = film.description.substring(0, 300);
	  p.textContent = `${film.description}...`;
	  console.log(2);

	  container.appendChild(card);

	  card.appendChild(h1);
	  card.appendChild(p);
	  console.log(film.title);
	})

	
}).catch((err)=>{
	  console.log('error');
	  const h1 = document.createElement('h3');
	  h1.textContent = 'Error 💩';
	  h1.className = 'error';
	  app.appendChild(h1);
})

