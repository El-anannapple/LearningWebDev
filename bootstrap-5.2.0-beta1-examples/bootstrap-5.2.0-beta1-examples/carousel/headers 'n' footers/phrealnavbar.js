var block = `
	<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<a class="navbar-brand" href="#">
			<img src="https://beautifulpatterns.org/assets/img/logos/Patrones-Hermosos-1.png" width="40" height="40">
			PATRONES HERMOSOS
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
	  	</button>
		<div class="collapse navbar-collapse">
			<ul class="navbar-nav">
				<li class="nav-item active">
					<a class="nav-link" href="#impacto">Impacto</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Cursos
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<a class="dropdown-item" href="#temas">Temas</a>
						<a class="dropdown-item" href="#horario">Horario</a>
						<a class="dropdown-item" href="#proyectos">Proyectos</a>
						<a class="dropdown-item" href="#testimonios">Testimonios</a>
						<a class="dropdown-item" href="#inscribete">Inscríbete</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Playlists
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<a class="dropdown-item" href="#blockchain">Blockchain</a>
						<a class="dropdown-item" href="#github">Github</a>
						<a class="dropdown-item" href="#historias">Historias</a>
					</div>
				</li>
				<li class="nav-item active">
					<a class="nav-link" href="#campamentos">Campamentos</a>
				</li>
			</ul>
		</div>
	</nav>
`;

var navbar = document.getElementById('navbar');
navbar.innerHTML = block;