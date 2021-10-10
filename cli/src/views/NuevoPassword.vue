<template>
  <div class="nuevopassword">
    <div class="container">
        <br>
        <b-card bg-variant="light">
            <h2>Crear Nueva Contraseña</h2>
            <hr>
            <br>            
            <p>Por favor ingresa la misma contraseña en ambos campos:</p>           
            <div class="input-fields">
              <input id="pass-one" ref="pass1" name="password" type="password" placeholder="Contraseña Nueva" >&nbsp;
              <input id="pass-two" ref="passtext" name="password_confirmation" type="password" placeholder="Repita Contraseña Nueva">
              <br>
            </div>
            <br>
            <b-button class="btn-success my-2 mx-2" @click.prevent="verificar()" type="submit">Guardar</b-button>&nbsp;
            <router-link to="/"><b-button class="btn-primary my-2 mx-2" >Salir</b-button></router-link>
            <br>
        </b-card>
        <br>
      </div>
</div>
</template>
<script>
import axios from "axios";
import bcrypt from 'bcryptjs';
export default {
    data() {
        return {
            registro:{},
            estudianteDatos: {},
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,
        }
    },
    
    created() {
        let apiURL = `http://localhost:3000/api/estudiante/${this.$route.params.numident}`;
        axios.get(apiURL).then((res) => {
                this.registro = res.data
            })
            .catch(e=>{
                console.log(e.response)
            })
    },

    methods: {
        verificar(){
            var pass1 = document.getElementById("pass-one");
            var pass2 = document.getElementById("pass-two");            
            var newpassword = this.$refs.passtext.value;
            if (pass1.value !== pass2.value) {
                pass1.style.border = '3px solid red';
                pass2.style.border = '3px solid red';
                this.$bvModal.msgBoxOk('¡Las contraseñas no coinciden!', {
                    title: 'ERROR:',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    headerClass: 'p-2 border-bottom-1',
                    footerClass: 'p-2 border-top-1',
                    headerBgVariant: 'danger',
                    headerTextVariant: 'light',
                    footerTextVariant: 'light',
                    centered: true
                    })
            } 
            else {
                pass1.style.border = '3px solid green';
                pass2.style.border = '3px solid green';
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(newpassword, salt)
                this.registro.password = hash;
                this.estudianteDatos = {_id:this.registro._id, numident:this.registro.numident, password:this.registro.password, nombre:this.registro.nombre, apellido:this.registro.apellido, correo:this.registro.correo, fechanac:this.registro.fechanac, colegio:this.registro.colegio, ciudad:this.registro.ciudad};
                this.actualizarpass(this.estudianteDatos);
            }
        },

        actualizarpass(registro) {
            this.axios.put(`/estudiante/${registro._id}`, registro)
            .then(res=>{
                console.log(res)
                this.$bvModal.msgBoxOk('¡Su contraseña ha sido modificada!', {
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
                this.$refs["passtext"].value = "";
                this.$refs["pass1"].value = "";
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
.nuevopassword{
    font-family: Verdana, sans-serif;
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
</style>
