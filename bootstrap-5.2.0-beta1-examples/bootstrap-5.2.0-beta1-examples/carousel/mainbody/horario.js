var block =`
    <hr class="featurette-divider">

    <div class="row featurette"  id="horario">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">Horario<br><span class="text-muted">Disponibilidad</span></h2>
        <p class="lead">Aquí va la info de los horarios de los cursos</p>
      </div>
      <div class="col-md-5">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>
`


var horario = document.getElementById('horario');
horario.innerHTML = block;