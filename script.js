function bestMentor() {
	var test = document.getElementById("test");
	var element = document.createElement("h1");
	element.innerHTML = "yoann le meilleur mentor";
	test.appendChild(element);
}

function appendMoviesList() {
	var movies = document.getElementById("movies");
	//pour supprimer les elements avant de réecrire les autres , SI il y en a
	movies.innerHTML = "";
	fetch("http://localhost:8000/api/v1/titles")
		.then((res) => res.json())
		.then((data) => {
			// manière de destructure l'objet data equivalent à const results = data.results
			const { results } = data;
			// la fonction map renvoie un tableau d'elements en fonction du code
			const movieList = results.map((movie) => {
				var paragraphe = document.createElement("p");
				paragraphe.innerHTML = movie.title;
				// ne pas oubliez de mettre un return dans la fonction map
				return paragraphe;
			});
			//on itere sur chaque élements du tableau pour ajouter les elements html
			movieList.forEach((movie) => movies.appendChild(movie));
		});
}
