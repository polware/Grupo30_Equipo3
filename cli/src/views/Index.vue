<template>
  <div class="index">
    <section>
      <div class="form-group" style="width: 40%; height: 70%; position: relative; top: 25%; left: 50%; margin: -100px 0 0 -100px; box-sizing: border-box; box-shadow: -1px 0px 20px 6px #999; height: 460px; background-color:#e6e6e6">
        <h2 style="font-weight: 700!important; margin-bottom: 0!important; font-size: calc(1.325rem + .9vw); padding:30px">Inicia Sesión</h2>
        <div class="form-group" style="width: 80%;position: absolute;left: 10%;right: 10%; padding:30px; height: 465px">
          <input type="text" ref="usertext" style="display: block; width: 100%; bottom: 5px; border-radius: 60px; text-align: center" placeholder="Usuario" class="form-control form-control-lg"/>
          <br>
          <input type="password" ref="passtext" style="display: block; width: 100%; border-radius: 60px; text-align: center;" placeholder="Contraseña" class="form-control form-control-lg"/>
          <br>
          <b-button v-b-modal.modal-tall @click.prevent="BuscarUser()" variant="outline-primary" style="width:208px" type="submit">Ingresar</b-button>
                    <b-modal id="modal-tall" title="ERROR:" ok-only>
                        <p class="pre-formatted">{{aviso}}</p>
                    </b-modal>
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
<script>
export default {
    data() {
        return {
            usuarioID:'',
            usuarioPASS:'',
            aviso:'',
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

        validando(){
            this.usuarioID = this.$refs.usertext.value;
            this.usuarioPASS = this.$refs.passtext.value;
            const cod = this.usuarioID;
            const pass = this.usuarioPASS;
            if(this.estudianteDatos.numident === cod && this.estudianteDatos.password === pass){                
                this.$router.push({name: 'Profile', params: {id:this.estudianteDatos._id} })
            }
            else {                
                this.aviso = "Por favor verifique los datos, uno de ellos no coincide.";
            }
        },

        BuscarUser(){
            this.usuarioID = this.$refs.usertext.value;
            const aux = this.usuarioID;
            var item;
            this.item = []
            item = this.registro.filter(i => i.numident === aux);
            if (item.length > 0) {
                const index = this.registro.findIndex(n => n.numident === aux);
                this.estudianteDatos = {_id:this.registro[index]._id, numident:this.registro[index].numident, password:this.registro[index].password}
                this.validando();
            }
            else {                
                this.aviso = "No se encontró su registro.\nPor favor verifique los datos ingresados.";
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
section {
  height: 527px;
  font-family: Verdana, sans-serif;
  color: rgb(21, 43, 235);
  display: flex;
  background-image: url("../img/Fondo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
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
.modal-footer{
    background-color: #ffffff;
    min-height: 15%;
}
.pre-formatted {
  white-space: pre;
}
</style>