<template>
<div class="resultados">
        <b-alert
        :show="dismissCountDown"
        dismissible
        :variant="mensaje.color"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">
        {{mensaje.texto}}
        </b-alert>
        <br>
        <h2>Resultados del Test</h2>
        <hr>
        <table class="table table-hover table-striped table-responsive">
            <thead>
                <tr tr class="table-secondary">
                <th scope="col">ID Estudiante</th>
                <th scope="col">Resultado Intereses Letra</th>
                <th scope="col">Resultado Intereses Puntaje</th>
                <th scope="col">Rama Sugerida Intereses</th>                        
                <th scope="col">Resultado Aptitudes Letra</th>                
                <th scope="col">Resultado Aptitudes Puntaje</th>
                <th scope="col">Rama Sugerida Aptitudes</th>
                <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-primary">
                <td>{{resultados.numident}}</td>
                <td>{{resultados.letraintereses}}</td>
                <td>{{resultados.puntajeintereses}}</td>
                <td>{{resultados.ramasugerint}}</td>
                <td>{{resultados.letraaptitudes}}</td>
                <td>{{resultados.puntajeaptitudes}}</td>
                <td>{{resultados.ramasugerapt}}</td>
                <b-td>
                    <b-button @click="confirmacion(resultados.numident)" class="btn-warning btn-sm">Repetir Test</b-button>
                </b-td>
                </tr>
            </tbody>
        </table>
        <table class="table table-hover table-striped table-responsive">    
            <thead>
                <tr class="table-secondary">
                <th scope="col">Preguntas Afirmativas</th>                
                </tr>
            </thead>
            <tbody>
                <tr class="table-primary">
                <td>{{resultados.preafirm}}</td>
                </tr>
            </tbody>
            </table>
          <br>
          <div> 
          <img src="../img/Tabla_Chaside.jpg" alt="Tabla Chaside" width="680" height="300">
          </div>
          <br>
          <router-link :to="{name: 'Profile', params: {numident:resultados.numident} }" class="btn btn-secondary">Regresar</router-link>
          <br>
</div>
</template>
<script>
export default {
    props:{
    numident:String
    },
    data() {
        return {
            opcion: '',
	    ID:'',
            activarepetir: false,
            resultados:[],
            resultadoEditar: {},
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },
    created() {        
        this.axios.get(`/resultado/${this.numident}`)
            .then(res => {
                this.resultados = res.data
		this.ID = this.resultados.numident;
            })
            .catch(e=>{
                console.log(e.response)
            })
    },

    methods: {

      confirmacion(id){                
                this.opcion = '';
                this.$bvModal.msgBoxConfirm('¿Está seguro que desea repetir el Test Chaside?\nEl resultado actual de su perfil será reemplazado por el nuevo.', {
                    title: 'Por favor confirme:',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'warning',
                    okTitle: 'Si',
                    cancelTitle: 'No',
                    footerClass: 'p-2',
                    headerBgVariant: 'warning',
                    hideHeaderClose: true,
                    centered: true
                    })
                .then(value => {
                        this.opcion = value;
                        if(this.opcion){
                            this.activarRepetir(id);
                        }
                })
                .catch(error => {
                        console.log(error)
                })
        },

        activarRepetir(numident){
            var text = '';
            this.axios.get(`/resultado/${numident}`)
            .then(res => {
                this.resultadoEditar = res.data;
                this.resultadoEditar = {_id:this.resultados._id, numident:this.resultados.numident, letraintereses:text, puntajeintereses:text, ramasugerint:text, letraaptitudes:text, puntajeaptitudes:text, ramasugerapt:text, preafirm:text};
                this.activarepetir = true;
                this.limpiarTest(this.resultadoEditar);                
                setTimeout(() => this.activarepetir = false, 5000);
		        this.ruta();
            })
            .catch(e => {
               console.log(e.response);
            })
        },

        limpiarTest(registro) {
            this.axios.put(`/resultado/${registro._id}`, registro)
            .then(res=>{
                console.log(res)                
                this.$bvModal.msgBoxOk('Se ha limpiado su registro para guardar uno nuevo.\nPor favor responda el Test.', {
                    title: 'Confirmación:',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'success',
                    headerClass: 'p-2 border-bottom-1',
                    footerClass: 'p-2 border-top-1',
                    headerBgVariant: 'success',
                    headerTextVariant: 'light',
                    centered: true
                    })
            })
            .catch(error => {
                console.log(error)
            })
        },

      ruta(){
            this.$router.push({name: 'Test', params: {numident:this.ID} })
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
.table{
    table-layout: fixed;
    max-width: 1000px;
}
.table > tbody > tr > td {
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis; 
}
.resultados{
    font-family: Verdana, sans-serif;
    overflow: auto;
    height: 527px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
footer {
  font-family: Verdana, sans-serif;
  color: #fff;
  min-height: 190px;
  width: 100%;
  font-size: 80%;
  background: #0d6efd;
  }
section {
  height: 517px;
  overflow: auto;
  padding-top: 20%;
  padding-left: 15%;
  padding-right: 15%;
  font-family: Verdana, sans-serif;
  background: #fff;
  //display: flex;
  flex-direction: column;
  align-items: center;  
  text-align: center;
  justify-content: center;
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