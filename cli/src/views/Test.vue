<template>
  <div class="test">
    <section>
            <div class="container">
              <br>
              <h2>Test De Orientación Vocacional Chaside</h2>
              <hr>
              <b-card bg-variant="light">
                <b-form-group
                  label-cols-lg="9"
                  label="Antes de empezar tener en cuenta:"
                  label-size="lg"
                  label-class="font-weight-bold pt-0"
                  class="mb-0"
                >
                <ul>
                  <li>Lee atentamente cada pregunta.</li>
                  <li>Encierra con un círculo únicamente el número de la pregunta que contestes afirmativamente.</li>
                  <li>Responde a todas las preguntas sin omitir ninguna.</li>
                </ul>
                  <b-form-group
                    label="¿Aceptarías trabajar escribiendo artículos en la sección económica de un diario?"
                    label-for="pregunta 1"
                    label-cols-sm="15"
                    label-align-sm="left"                  >
                    <b-form-radio-group
                      class="pt-2"
                      :options="['Si', 'No']"
                      :aria-describedby="ariaDescribedby"
                    ></b-form-radio-group>
                  </b-form-group>
                  <br>
                  <b-form-group
                    label="¿Te ofrecerías para organizar la despedida de soltero de uno de tus amigos?"
                    label-for="pregunta 2"
                    label-cols-sm="15"
                    label-align-sm="left"                  >
                    <b-form-radio-group
                      class="pt-2"
                      :options="['Si', 'No']"
                      :aria-describedby="ariaDescribedby"
                    ></b-form-radio-group>
                  </b-form-group>
                  <br>
                  <b-form-group
                    label="¿Te gustaría dirigir un proyecto de urbanización en tu ciudad o municipio?"
                    label-for="pregunta 3"
                    label-cols-sm="15"
                    label-align-sm="left"                  >
                    <b-form-radio-group
                      class="pt-2"
                      :options="['Si', 'No']"
                      :aria-describedby="ariaDescribedby"
                    ></b-form-radio-group>
                  </b-form-group>

                </b-form-group>
              </b-card>
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
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
}
footer {
  font-family: Verdana, sans-serif;
  color: #fff;
  min-height: 190px;
  width: 100%;
  font-size: 80%;
  background: #0d6efd;
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
