<template>
  <div class="recuperar">
    <div class="container"> 
      <br>
      <form class="form-recup">
        <br>
        <br>
        <h2>Recuperar Contraseña</h2>
        <hr>
        <label for="email">Digita tu correo electrónico para buscar tu contraseña:</label><br><br>
        <input type="email" ref="emailtext" name="email" /><br><br>
        <b-button class="btn-success my-2 mx-2" @click.prevent="buscarEmail()" type="submit">Buscar</b-button>&nbsp;
        <router-link to="/"><b-button class="btn-primary my-2 mx-2" >Regresar</b-button></router-link>
        <br>
        <br>
      </form>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            usuarioEmail:'',
            registro:[],
            estudianteDatos: {},
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,
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

        buscarEmail(){
            this.usuarioEmail = this.$refs.emailtext.value;
            const aux = this.usuarioEmail;
            var item;
            this.item = []
            item = this.registro.filter(i => i.correo === aux);            
            if (item.length > 0) {
                const index = this.registro.findIndex(n => n.correo === aux);
                this.estudianteDatos = {_id:this.registro[index]._id, numident:this.registro[index].numident, password:this.registro[index].password}
                this.$bvModal.msgBoxOk("La contraseña de su cuenta es: " +this.estudianteDatos.password, {
                    title: 'Confirmación:',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'success',
                    headerClass: 'p-2 border-bottom-1',
                    footerClass: 'p-2 border-top-1',
                    centered: true
                    })
            }
            else {
                  this.$bvModal.msgBoxOk('El correo electrónico ingresado no existe en la base de datos.', {
                    title: 'ERROR:',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'warning',
                    headerClass: 'p-2 border-bottom-1',
                    footerClass: 'p-2 border-top-1',
                    centered: true
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
.form-recup{
  min-height: 503px;
  font-family: Verdana, sans-serif;
  padding-left: 310px;
  width: 990px;
  align-content: center;
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
  text-shadow: -0.0075em 0.0075em 0
    mix(#fff, #b3c9f1, 94%),
      0.005em 0.005em 0
        mix(#fff, #b3c9f1, 60%),
          0.01em 0.01em 0
            mix(#fff, #b3c9f1, 62%),
              0.015em 0.015em
                mix(#fff, #b3c9f1, 64%),
                  0.02em 0.02em 0
                    mix(#fff, #b3c9f1, 66%),
                      0.025em 0.025em 0
                        mix(#fff, #b3c9f1, 68%),
                          0.03em 0.03em 0
                            mix(#fff, #b3c9f1, 70%),
                              0.035em 0.035em 0 mix(#fff, #b3c9f1, 72%);
}
</style>
