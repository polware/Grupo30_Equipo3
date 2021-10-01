<template>
  <div class="index">
    <section>
      <div class="form-group" style="width: 40%; height: 70%; position: relative; top: 25%; left: 50%; margin: -100px 0 0 -100px; box-sizing: border-box; box-shadow: -1px 0px 20px 6px #999; height: 460px; background-color:#e6e6e6">
        <h2 style="font-weight: 700!important; margin-bottom: 0!important; font-size: calc(1.325rem + .9vw); padding:30px">Inicia Sesión</h2>
        <div class="form-group" style="width: 80%;position: absolute;left: 10%;right: 10%; padding:30px; height: 465px">
          <input type="text" style="display: block; width: 100%; bottom: 5px; border-radius: 60px; text-align: center" placeholder="Usuario" class="form-control form-control-lg"/>
          <br>
          <input type="text" style="display: block; width: 100%; border-radius: 60px; text-align: center;" placeholder="Contraseña" class="form-control form-control-lg"/>
          <br>
          <router-link to="/CrearCuenta"><b-button variant="outline-primary" style="width:208px">Ingresar</b-button></router-link>
          <br>
          <br>
          <h6 style="font-size: 0.9em"><router-link to="/RecuperarCuenta">¿Olvidaste tu contraseña?</router-link></h6>
          <hr class="solid">
          <router-link to="/CrearCuenta" ><b-button variant="outline-success" style="width:208px">Crear Cuenta</b-button></router-link>
        </div>        
      </div>        
    </section>
  </div>
</template>
<style lang="scss">
section {
  height: 527px;
  font-family: Verdana, sans-serif;
  color: rgb(21, 43, 235);
  background: #fff;
  display: flex;  
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
footer {  
  font-family: Verdana, sans-serif;
  color: #fff;
  min-height: 190px;
  width: 100%;
  font-size: 80%;
  background: #0d6efd;
}
</style>
<script>
export default {
    data() {
        return {
            registro:[],
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },
    created() {
        this.axios.get('/estudiante')
            .then(res=>{                
                this.registro = res.data
            })
            .catch(e=>{
                console.log(e.response)
            })        
    },
    
    methods: {
        
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },

        alerta(){
            this.mensaje.color = 'danger';
            this.mensaje.texto = 'Probando alerta';
            this.showAlert();
        }       
                        
    },
  }
</script>