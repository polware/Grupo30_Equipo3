<template>    
    <div class="borrarperfil">
        <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{mensaje.texto}}
        </b-alert>
        <br>
        <form class="contenido">
        <b-card bg-variant="light">
            <h2>Eliminar Perfil</h2>
            <hr>
            <b-container fluid>
                <b-row class="my-2">
                    <b-col sm="4"><label for="input-none">No. de identificación:</label></b-col>
                    <b-col sm="6">
                    <b-form-input type="text" id="input-none" :state="null" placeholder="No. de Identificación Personal" v-model="estudianteBorrar.numident" disabled></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-2">
                    <b-col sm="4"><label for="input-none">Contraseña:</label></b-col>
                    <b-col sm="6">
                    <b-form-input type="password" id="input-none" :state="null" placeholder="Contraseña" v-model="estudianteBorrar.password" disabled></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-2">
                    <b-col sm="4"><label for="input-none">Nombre(s):</label></b-col>
                    <b-col sm="6">
                    <b-form-input type="text" id="input-none" :state="null" placeholder="Nombre(s)" v-model="estudianteBorrar.nombre" disabled></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-2">
                    <b-col sm="4"><label for="input-none">Apellido(s):</label></b-col>
                    <b-col sm="6">
                    <b-form-input type="text" id="input-none" :state="null" placeholder="Apellido(s)" v-model="estudianteBorrar.apellido" disabled></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-2">
                    <b-col sm="4"><label for="input-none">Correo electrónico:</label></b-col>
                    <b-col sm="6">
                    <b-form-input type="text" id="input-none" :state="null" placeholder="Correo electrónico" v-model="estudianteBorrar.correo" disabled></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-2">
                    <b-col sm="4"><label for="input-none">Fecha de nacimiento:</label></b-col>
                    <b-col sm="6">
                    <b-form-input type="date" id="input-none" :state="null" placeholder="Fecha de nacimiento" v-model="estudianteBorrar.fechanac" disabled></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-2">
                    <b-col sm="4"><label for="input-none">Colegio:</label></b-col>
                    <b-col sm="6">
                    <b-form-input type="text" id="input-none" :state="null" placeholder="Colegio" v-model="estudianteBorrar.colegio" disabled></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-2">
                    <b-col sm="4"><label for="input-none">Ciudad:</label></b-col>
                    <b-col sm="6">
                    <b-form-input type="text" id="input-none" :state="null" placeholder="Ciudad" v-model="estudianteBorrar.ciudad" disabled></b-form-input>
                    </b-col>
                </b-row>
                <br>
                    <b-button @click.prevent="borrarPerfil(estudianteBorrar._id)" class="btn-danger my-2 mx-2">Eliminar</b-button>
                    <router-link :to="{name: 'Profile', params: {id:estudianteBorrar._id} }" class="btn btn-secondary">Cancelar</router-link>
                <br>
            </b-container>
            </b-card>
            </form>
            <br>
</div>
</template>
<script>
import axios from "axios";
export default {    
    data() {
        return {
            estudianteBorrar:[],
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },
    created() {        
        let apiURL = `http://localhost:3000/api/estudiante/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
                this.estudianteBorrar = res.data
            })
            .catch(e=>{
                console.log(e.response)
            })
    },

    methods: {
        
        borrarPerfil(id){            
                if (window.confirm("¿Está seguro que desea borrar la cuenta?")) {
                    this.axios.delete(`/estudiante/${id}`)
                    .then(() => {
                        const index = this.estudianteBorrar.findIndex(item => item._id === res.data._id);
                        this.estudianteBorrar.splice(index, 1);
                        this.mensaje.color = 'danger';
                        this.mensaje.texto = '¡Su perfil ha sido eliminado!';
                        this.showAlert();
                        this.estudianteBorrar.numident='';
                        this.estudianteBorrar.password='';
                        this.estudianteBorrar.nombre='';                
                        this.estudianteBorrar.apellido='';
                        this.estudianteBorrar.correo='';
                        this.estudianteBorrar.fechanac='';
                        this.estudianteBorrar.colegio='';
                        this.estudianteBorrar.ciudad='';
                    }).catch(error => {
                        console.log(error)
                        })
                }
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
.contenido{
    font-family: Verdana, sans-serif;
    overflow-y: scroll;
    display: flex;
    align-items: center;
    justify-content: center;    
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
    text-align: center;
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