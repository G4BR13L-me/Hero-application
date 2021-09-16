let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
  let request = new XMLHttpRequest();

  // Returns a random integer from 1 to 731:
  let id = Math.floor(Math.random() * 731) + 1;

  request.open('GET', `https://www.superheroapi.com/api.php/2066907446795886/${id}`);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      let data = JSON.parse(request.responseText);
      console.log(data)
      renderHTML(data)
    } else {
      console.log('We connected to the server, but it returned an error.');
    }
    
  };

  request.onerror = function() {
    console.log('Connection error');
  };

  request.send();
});

function renderHTML(data) {
  let heroName = document.getElementById('hero-name');
  heroName.innerHTML = data.name;
  
  let heroImg = document.getElementById('hero-img');
  heroImg.innerHTML = `<img src="${data.image.url}" alt="Hero Image" style="width:100%">`;
  
  let heroPublisher = document.getElementById('hero-publisher');
  heroPublisher.innerHTML = '<strong>' + 'Editor(a): '+ '</strong>' + data.biography.publisher;

  let heroAppearance = document.getElementById('hero-first-appearance');
  if (data.biography["first-appearance"] != '-')
    heroAppearance.innerHTML = '<strong>' + 'Primeira aparição: ' +  '</strong>' + data.biography["first-appearance"];
  else
    heroAppearance.innerHTML = '';
  
  let heroOccupation = document.getElementById('hero-occupation');
  if (data.work.occupation != '-')
    heroOccupation.innerHTML = '<strong>' + 'Ocupação: ' + '</strong>' + data.work.occupation;
  else 
    heroOccupation.innerHTML = '';
}