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
          <div class="form-group" v-if="!validado">
            <br>
            <input type="text" ref="groupId" class="form-group" placeholder="Digite No. Identificación">
            <br>
            <br>
            <b-button @click="consultarID()" class="btn-success my-2 mx-2">Buscar</b-button>
            <br>          
          </div>

          <form v-if="validado">
          <div class="content has-text-centered">
          <b-container class="bv-example-row">
            <b-row>
              <b-col sm><img src="../img/img_profile.jpg" alt="Perfil" width="150" height="150"></b-col>              
              <b-col sm><img src="../img/Update.png" alt="Perfil" width="150" height="150"></b-col>
              <b-col sm><img src="../img/Delete.png" alt="Perfil" width="150" height="150"></b-col>
              <b-col sm><img src="../img/Test.png" alt="Perfil" width="150" height="150"></b-col>
              <b-col sm><img src="../img/View_Results.png" alt="Perfil" width="150" height="150"></b-col>
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
              <b-col sm><br><router-link :to="{name: 'ActualizarDatos', params: {id:estudianteDatos._id} }" class="btn btn-primary">Actualizar Datos</router-link></b-col>
              <b-col sm><br><router-link :to="{name: 'BorrarPerfil', params: {id:estudianteDatos._id} }" class="btn btn-primary">Eliminar Perfil</router-link></b-col>
              <b-col sm><br><router-link :to="{name: 'Test', params: {id:estudianteDatos._id} }" class="btn btn-primary">Realizar Test</router-link></b-col>
              <b-col sm><br><router-link :to="{name: 'Resultados', params: {id:estudianteDatos._id} }" class="btn btn-primary">Ver Resultados</router-link></b-col>              
            </b-row>
          </b-container>              
      </div>
      </form>
  </div>  
</div>
</template>
<script>
export default {
    data() {
        return {
            registro:[],
            validado: false,
            usercode:'',
            estudianteDatos: {},
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

        encontrarID(){
            this.identidad = this.$refs.groupId.value;
            const aux = this.identidad;
            const num = this.registro.findIndex(n => n.numident === aux);
            return num;
        },

        consultarID(){
            const index = this.encontrarID();
            this.identidad = this.$refs.groupId.value;
            var item;
            this.item = []
            const cod = this.identidad;
            item = this.registro.filter(i => i.numident === cod);
            if (item.length > 0) {
                this.validado = true;
                this.estudianteDatos = {_id:this.registro[index]._id, numident:this.registro[index].numident, password:this.registro[index].password, nombre:this.registro[index].nombre, apellido:this.registro[index].apellido, correo:this.registro[index].correo, fechanac:this.registro[index].fechanac, colegio:this.registro[index].colegio, ciudad:this.registro[index].ciudad}
                //this.usercode = this.estudianteDatos.numident;
            }
            else {                
                alert("No se encontro su registro.")
                location.reload();
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
.section {
  min-height: 527px;
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
