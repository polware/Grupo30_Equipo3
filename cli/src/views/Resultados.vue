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
      <div class="container">
      <br>
      <br>
      <h2>Resultados del Test</h2>
      <hr>
      <br>      
      <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="primary">Aptitudes</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ texto1 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="primary">Intereses</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ texto2 }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
       </div>
      
       <br>
  </div>  
</div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            estudiantes:[],
            estudianteresult:{},
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,
            texto1:'',
            texto2:'',
            text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry labore VHS.`
        }
    },
    created() {        
        let apiURL = `http://localhost:3000/api/estudiante/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
                this.estudianteresult = res.data
                this.texto1 = this.estudianteresult.aptitudes;
                this.texto2 = this.estudianteresult.intereses;
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
footer {
  font-family: Verdana, sans-serif;
  color: #fff;
  min-height: 190px;
  width: 100%;
  font-size: 80%;
  background: #0d6efd;
  }
.accordion {
  min-height: 351px;
  font-family: Verdana, sans-serif;
  padding-left: 340px;
  width: 950px;
  align-content: center;
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