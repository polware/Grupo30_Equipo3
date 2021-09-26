<template>
  <div class="actualizardatos">
    <section class="t1">
        <div class="secc-actualizar">
            <form class="form_contac" type="text">
                <h2 style="font-weight: bold;">Actualizar Datos</h2>
                <h5>"Puedes actualizar tus datos y no perderemos contacto"</h5><br>
                <label for="nombre_actualizar">Nombre(s):</label>
                <input type="text" class="form-control-casilla" id="nombre_actualizar" size="40" value="Escribe tu(s) Nombre(s)">
                <label for="apellido_actualizar">Apellidos(s):</label>
                <input type="text" class="form-control-casilla" id="apellido_actualizar" size="40" value="Escribe tu(s) Apellido(s)"><br><br>    
                <label for="correo_actualizar">Nuevo Correo Electrónico:</label>
                <input type="text" class="form-control-casilla" id="correo_actualizar" size="35" value="Escribe nuevo correo electrónico">
                <label for="contrasena_actualizar">Nueva Contraseña:</label>
                <input type="text" class="form-control-casilla" id="contrasena_actualizar" size="35" value="Escribe nueva contraseña"><br><br>    
                <label for="nacimientos_actualizar">Fecha de Nacimiento:</label>
                <input type="date" class="form-control-casilla" id="nacimientos_actualizar" size="20">
                <label for="ciudad_actualizar">Ciudad</label>
                <input type="text" class="form-control-casilla" id="ciudad_actualizar" size="20">
                <label for="institucion_actualizar">Colegio/Institución</label>
                <input type="text" class="form-control-casilla" id="institucion_actualizar" size="20"><br><br>
                <input type="submit" class="form-control-casilla" value="Actualizar ">
            </form>
        </div>
    </section>
</div>
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
.secc-contac {
  flex: 50%;
  padding: 30px;
  justify-content: space-between;  
  text-align: center;
}

.secc-actualizar {
  flex: 50%;
  padding: 30px;
  justify-content: space-between;  
  text-align: center;
}
.form_contac{
  border: 1px solid rgb(21, 43, 235);
  border-radius: 50px;
  padding: 45px 45px 20px;
  margin-top: 1px;
  margin-right: 120px;
  margin-left: 120px;
  margin-bottom: 1px;
  background-color: #b3c9f1;
  box-shadow: 0px 5px 10px #b3c9f1, 0 0 0 5px #b3c9f1 inset;
}
</style>
