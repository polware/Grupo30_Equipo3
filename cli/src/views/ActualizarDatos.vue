<template>
  <div class="actualizardatos">
    <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{mensaje.texto}}
    </b-alert>
    <section>
        <div class="secc-actualizar">
            <form class="form_contac" @submit.prevent="manejarDatos(estudianteEditar)" type="text">
                <h2>Actualizar Datos</h2>
                <h5>"Puedes actualizar tus datos y no perderemos contacto"</h5><br>
                <label for="id_estudiante">Id del Usuario:</label>
                <input type="string" class="form-control-casilla" id="id_estudiante" size="40" value="id_usuario" v-model="estudianteEditar.numident" disabled><br><br>
                <label for="nombre_actualizar">Nombre(s):</label>
                <input type="text" class="form-control-casilla" id="nombre_actualizar" size="40" value="Escribe tu(s) Nombre(s)" v-model="estudianteEditar.nombre" required>&nbsp;
                <label for="apellido_actualizar">Apellidos(s):</label>
                <input type="text" class="form-control-casilla" id="apellido_actualizar" size="40" value="Escribe tu(s) Apellido(s)" v-model="estudianteEditar.apellido" required><br><br>    
                <label for="correo_actualizar">Nuevo Correo Electrónico:</label>
                <input type="email" class="form-control-casilla" id="correo_actualizar" size="35" value="Escribe nuevo correo electrónico" v-model="estudianteEditar.correo" required>&nbsp;
                <label for="contrasena_actualizar">Nueva Contraseña:</label>
                <input type="password" class="form-control-casilla" id="contrasena_actualizar" size="35" value="Escribe nueva contraseña" v-model="estudianteEditar.password" required><br><br>    
                <label for="nacimientos_actualizar">Fecha de Nacimiento:</label>
                <input type="date" class="form-control-casilla" id="nacimientos_actualizar" size="20" v-model="estudianteEditar.fechanac" required>&nbsp;
                <label for="ciudad_actualizar">Ciudad:</label>
                <input type="text" class="form-control-casilla" id="ciudad_actualizar" size="20" v-model="estudianteEditar.ciudad" required>&nbsp;
                <label for="institucion_actualizar">Colegio/Institución:</label>
                <input type="text" class="form-control-casilla" id="institucion_actualizar" size="20" v-model="estudianteEditar.colegio" required><br><br>
                <b-button class="btn-warning my-2 mx-2" type="submit">Guardar</b-button>
                <router-link :to="{name: 'Profile', params: {id:estudianteEditar._id} }" class="btn btn-secondary">Cancelar</router-link>
            </form>
        </div>
    </section>
</div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            estudianteEditar: {},
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },
    created() {        
        let apiURL = `http://localhost:3000/api/estudiante/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
                this.estudianteEditar = res.data
            })
            .catch(e=>{
                console.log(e.response)
            })
    },

    methods: {   
        
        manejarDatos(registro) {
            this.axios.put(`/estudiante/${registro._id}`, registro)
            .then(res=>{
                console.log(res)
                this.$router.push('/ActualizarDatos')
                this.mensaje.color='success';
                this.mensaje.texto='¡Datos actualizados!'
                this.showAlert()
                this.estudianteEditar.numident='';
                this.estudianteEditar.password='';
                this.estudianteEditar.nombre='';                
                this.estudianteEditar.apellido='';
                this.estudianteEditar.correo='';
                this.estudianteEditar.fechanac='';
		        this.estudianteEditar.colegio='';
                this.estudianteEditar.ciudad='';
            })
            .catch(error => {
                console.log(error)
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
footer {
  font-family: Verdana, sans-serif;
  color: #fff;
  min-height: 190px;
  width: 100%;
  font-size: 80%;
  background: #0d6efd;
  }
section {
  height: 527px;
  font-family: Verdana, sans-serif;
  color: rgb(21, 43, 235);
  background: #fff;
  overflow-y: scroll;  
  display: flex;
  flex-wrap: wrap;
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
