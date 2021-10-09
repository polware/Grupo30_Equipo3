<template>
  <div class="profile">
  <b-alert
        :show="dismissCountDown"
        dismissible
        :variant="mensaje.color"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">
        {{mensaje.texto}}
  </b-alert>
  <div class="section">
          <br>
          <br>
          <h2>Perfil del Estudiante</h2>
          <hr>
          <br>
          <form>
          <div class="content has-text-centered">
          <b-container class="bv-example-row">
            <b-row>
              <b-col sm><img src="../img/img_profile.jpg" alt="Perfil" width="150" height="150"></b-col>              
              <b-col sm><img src="../img/Update.jpg" alt="Actualizar" width="180" height="180"></b-col>
              <b-col sm><img src="../img/Delete.png" alt="Borrar" width="150" height="150"></b-col>
              <b-col sm><img src="../img/Test.png" alt="Test" width="150" height="150"></b-col>
              <b-col sm><img src="../img/View_Results.png" alt="Resultados" width="150" height="150"></b-col>
            </b-row>
            <b-row>
              <b-col sm>ID de estudiante:</b-col>
              <b-col sm></b-col>
              <b-col sm></b-col>
              <b-col sm></b-col>
              <b-col sm></b-col>
            </b-row>
            <b-row>
              <b-col sm><br><input type="text" class="form-control" v-model="estudianteDatos.numident" disabled></b-col>
              <b-col sm><br><router-link :to="{name: 'ActualizarDatos', params: {numident:estudianteDatos.numident} }" class="btn btn-primary">Actualizar Datos</router-link></b-col>
              <b-col sm><br><router-link :to="{name: 'BorrarPerfil', params: {numident:estudianteDatos.numident} }" class="btn btn-primary">Eliminar Perfil</router-link></b-col>
              <b-col sm><br><router-link :to="{name: 'Test', params: {numident:estudianteDatos.numident} }" class="btn btn-primary">Realizar Test</router-link></b-col>
              <b-col sm><br><router-link :to="{name: 'Resultados', params: {numident:estudianteDatos.numident} }" class="btn btn-primary">Ver Resultados</router-link></b-col>              
            </b-row>
          </b-container>
      </div>
      </form>
  </div>  
</div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            registro:[],
            estudianteDatos:[],
            usercode:'',
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },
    created() {
        let apiURL = `http://localhost:3000/api/estudiante/${this.$route.params.numident}`;
        axios.get(apiURL).then((res) => {
                this.estudianteDatos = res.data
                this.$bvModal.msgBoxOk('Hola ' +this.estudianteDatos.nombre +'.\nBienvenid@ a su página de Perfil.', {
                    title: 'Bienvenida',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'primary',
                    headerClass: 'p-2 border-bottom-1',
                    footerClass: 'p-2 border-top-1',
                    headerBgVariant: 'primary',
                    headerTextVariant: 'light',
                    centered: true
                    })
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
<style lang="scss">
.section {
  min-height: 517px;
  font-family: Verdana, sans-serif;
  background: #fff;  
  overflow: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
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
