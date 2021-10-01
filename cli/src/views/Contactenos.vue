<template>
  <div class="contactenos">
      <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{mensaje.texto}}
    </b-alert>  
    <section class="t1">
        <div class="secc-contac">
            <form class="form_contac" type="text" @submit.prevent="agregarContacto()">
                <h2>Contáctenos</h2>
                <br>
                <h5>"Para nosotros es muy importante su opinión y estamos dispuestos a atender sus dudas y sugerencias"</h5><br>
                <label for="nomapellido">Nombre(s) y Apellido(s):</label>
                <input type="text" class="form-control-casilla" id="nomapellido" size="40" value="Escribe tu(s) Nombre(s) y Apellido(s)" v-model="objContacto.nombreapellido">
                <label for="institucion">Institución:</label>
                <input type="text" class="form-control-casilla" id="institucion" size="40" value="Nombre la Institución" v-model="objContacto.institucion"><br><br>    
                <label for="correo">Correo Electrónico:</label><br>
                <input type="email" class="form-control-casilla" id="correo" size="45" value="ejemplo@gmail.com" v-model="objContacto.correo"><br><br>
                <label for="mensaje">Mensaje</label><br>
                <div>
                    <textarea name="mensaje" class="form-control-casilla" rows="7" cols="80" v-model="objContacto.mensaje">Escribe aquí tu mensaje...</textarea>
                </div>
                <input type="submit" class="form-control-casilla" value="Enviar">
            </form>
        </div>
    </section>
</div>
</template>
<script>
export default {
    data() {
        return {
            contactos:[],
	        objContacto:{nombreapellido:'', correo:'', institucion:'', mensaje:''},
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },
    created() {        
         this.axios.get('/contacto')
            .then(res=>{
                console.log(res.data)
                this.contactos = res.data
            })
            .catch(e=>{
                console.log(e.response)
            })
    },

    methods: {
        
        agregarContacto(){
            this.axios.post('/nuevo-contacto', this.objContacto)
            .then(res=>{
                this.contactos.push(res.data)
                this.objContacto.nombreapellido='';
                this.objContacto.correo='';
                this.objContacto.institucion='';
                this.objContacto.mensaje='';
                //Limpieza de los campos
                this.mensaje.color='success';
                this.mensaje.texto='¡Sus datos han sido registrados!'
                this.showAlert()
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
