<template>
  <div class="quienes">
    <section>
            <div class="secc-info">
              <h2>Quiénes Somos</h2>
              <hr>
              <p>Somos un grupo de 5 estudiantes, que hace parte del programa MISIÓN TIC del gobierno nacional, que tiene como propósito formar programadores en todo el territorio nacional colombiano. Con el programa MISIÓN TIC el gobierno se propone formar en el año 2021 a 50.000 colombianos, y para el año 2022 su meta es alcanzar 100.0000 jóvenes formados.
                Nuestro proyecto nace de la idea necesidad que tiene cada estudiante para elegir la carrera profesional que estudiará y obtendrá como título en su futuro. En este sitio web encontrarán una encuesta de orientación vocacional, en la cual el estudiante se registra y responde la encuesta de aptitudes; dónde de acuerdo a sus respuestas se ofrecerán algunas opciones de programas de universidad para que el/la estudiante tome una decisión más acertada.
              </p>
            </div>
            <div class="secc-info">            
              <hr>
              <p style="text-align:center;">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/UitwvU_ln0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
              <hr>
          </div>
    </section>        
    
  </div>
</template>
<style lang="scss">
section {
  min-height: 517px;
  font-family: Verdana, sans-serif;
  color: rgb(21, 43, 235);
  background: #fff;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
}

footer {
  font-family: Verdana, sans-serif;
  color: #fff;
  min-height: 190px;
  width: 100%;
  font-size: 80%;
  background: #0d6efd;
  }

.secc-info {
  flex: 50%;
  padding: 30px;
  justify-content: space-around;  
  text-align: justify;
}
h2 {
  font-family: "Inter", sans-serif;
	color: mix(#fff, #152beb, 10%);
	font-size: calc(0.5em + 1.2vw);
	font-weight: 800;
	text-shadow: 
		-0.0075em 0.0075em 0 mix(#fff, #b3c9f1, 94%),
		0.005em 0.005em 0 mix(#fff, #b3c9f1, 60%),
		0.01em 0.01em 0 mix(#fff, #b3c9f1, 62%), 
		0.015em 0.015em mix(#fff, #b3c9f1, 64%), 
		0.02em 0.02em 0 mix(#fff, #b3c9f1, 66%), 
		0.025em 0.025em 0 mix(#fff, #b3c9f1, 68%),
		0.03em 0.03em 0 mix(#fff, #b3c9f1, 70%),
		0.035em 0.035em 0 mix(#fff, #b3c9f1, 72%);
}
</style>
