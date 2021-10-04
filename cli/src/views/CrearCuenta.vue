<template>
  <div class="crearcuenta">
      <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{mensaje.texto}}
    </b-alert>  
    <section>
        <div class="modal-dialog text-center">
        <div class="modal-content">
          <div class="col-12">                
            <br>
            <h2>Crear Cuenta</h2>
            <br>
          </div>
          <form class="row g-3" @submit.prevent="agregarEstud()">
            <div class="col-md-6">
              <input type="text" class="form-control casilla" placeholder="Nombre(s)" v-model="objEstudiante.nombre">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control casilla" placeholder="Apellido(s)" v-model="objEstudiante.apellido">
            </div>
            <div class="col-md-13">
              <input type="email" class="form-control casilla" placeholder="Correo electrónico" v-model="objEstudiante.correo">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control casilla" placeholder="No. ID de usuario" v-model="objEstudiante.numident">
            </div>
            <div class="col-md-6">
              <input type="password" class="form-control casilla" placeholder="Contraseña" v-model="objEstudiante.password">
            </div>
            <div class="col-12">
              <br>
              <b-button type="submit" class="btn btn-success casilla">Registrar</b-button>
              <br>
              <br>              
            </div>
          </form>
        </div>
        </div>
    </section>
</div>
</template>
<script>
export default {
    data() {
        return {
            estudiantes:[],
            objEstudiante:{numident:'', password:'', nombre:'', apellido:'', correo:'', fechanac:'', colegio:'', ciudad:''},
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },
    created() {        
         this.axios.get('/estudiante')
            .then(res=>{
                console.log(res.data)
                this.estudiantes = res.data
            })
            .catch(e=>{
                console.log(e.response)
            })
    },

    methods: {
        
        agregarEstud(){
            this.axios.post('/nuevo-estudiante', this.objEstudiante)
            .then(res=>{
                this.estudiantes.push(res.data)
                this.objEstudiante.numident='';
                this.objEstudiante.password='';
                this.objEstudiante.nombre='';
                this.objEstudiante.apellido='';
                this.objEstudiante.correo='';
                this.objEstudiante.fechanac='';
		            this.objEstudiante.colegio='';
                this.objEstudiante.ciudad='';
                this.$bvModal.msgBoxOk('¡Su cuenta ha sido creada!', {
                    title: 'Confirmación:',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'success',
                    headerClass: 'p-2 border-bottom-1',
                    footerClass: 'p-2 border-top-1',
                    bodyBgVariant: 'light',
                    centered: true
                    })
            })
            .catch(e=>{
                console.log(e.response);
                if(e.response.data.error.errors.nombre.message){
                    this.mensaje.texto = e.response.data.error.errors.nombre.message
                } else{
                    this.mensaje.texto = '¡Error del Sistema!';
                }
                this.mensaje.color = 'danger';
                this.showAlert()
            })
        },        

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
<style lang="scss">
section {
  height: 527px;
  font-family: Verdana, sans-serif;
  color: rgb(21, 43, 235);
  background: #fff;
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
    padding: 20px;
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