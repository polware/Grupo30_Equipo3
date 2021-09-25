<template>
    <section>
    <div class="modal-dialog text-center">    
      <div class="mb-3 row">                  
        <div class="modal-content">           
          <div class="col-12">                
            <br>
            <h2>Crea tu cuenta...</h2>
            <br>
          </div>
          <form class="row g-3">
            <div class="col-md-6">
              <input type="text" class="form-control casilla" placeholder="Nombre(s)">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control casilla" placeholder="Apellido(s)">
            </div>
            <div class="col-md-13">
              <input type="email" class="form-control casilla" placeholder="Correo electrónico">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control casilla" placeholder="Usuario">
            </div>
            <div class="col-md-6">
              <input type="password" class="form-control casilla" placeholder="Contraseña">
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-success casilla">Registrar</button>
              <br>
              <br>              
            </div>
          </form>
        </div>
      </div>
    </div>  
  </section> 
</template>

<style lang="scss">
section {
  height: 517px;
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

//Estilos de la pagina CrearCuenta
.modal-content{
    background-color: LightGray;
    opacity: .85;
    padding: 0 20px;
    box-shadow: 0px 0px 3px black;
}

.casilla{
    box-shadow: 0px 0px 3px black; 
}

.col-md-6 input{
    text-align: center;
}

.col-md-13 input{
    text-align: center;
}
</style>
