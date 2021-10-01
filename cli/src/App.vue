<template>
  <div id="app">
  <div id="nav">
    <nav class="container navbar navbar-expand-lg navbar-light bg-primary">
      <a class="navbar-brand" href="#" >
      <img src="./img/Logo.jpg" alt="Logo" width="200" height="134"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav mx-auto">
              <router-link to="/" class="nav-item nav-link">Inicio</router-link>
              <router-link to="/Profile" class="nav-item nav-link">Mi Perfil</router-link>
	      <router-link to="/Quienes" class="nav-item nav-link">Quiénes Somos</router-link>
              <router-link to="/Contactenos" class="nav-item nav-link">Contáctenos</router-link>
          </div>
      </div>
  </nav>
 </div>
  <router-view/>
  <footer class="footer">
      <div class="content has-text-centered">
          <b-container class="bv-example-row">
            <b-row>
              <b-col sm><br><br><img src="./img/Eslogan.jpeg" alt="Growing Skills" width="226" height="87"></b-col>
              <b-col sm><br><h5>Integrantes Equipo 3</h5>Paul H. Vargas<br />Juan Pablo Pinzón<br />Jessica D. Páez<br />Laura Pacheco<br />Andrés Felipe Cruz</b-col>
              <b-col sm><br><h5>Agradecimientos</h5>Ministerio TIC<br />Universidad Tecnológica de Pereira<br />Grace Fernández<br />Carlos A. Peña R.</b-col>
              <b-col sm><br><br><a class="navbar-brand" href="https://www.misiontic2022.gov.co/portal/" target="_blank">
                  <img src="./img/Logo-MisionTIC2022.jpg" alt="MisionTIC" width="147" height="88"></a></b-col>
            </b-row>
            <b-row>
              <b-col sm><p style="font-weight: bold;">&copy; 2021 Derechos Reservados</p></b-col>
              <b-col sm></b-col>
              <b-col sm></b-col>
              <b-col sm></b-col>
            </b-row>
          </b-container>              
      </div>
    </footer>
  </div>
</template>
<style lang="scss">
#app {  
  font-family: Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#nav {
  min-height: 180px;
  padding: 30px;
  font-family: Verdana, sans-serif;
  text-align: center;
  background: #0d6efd;

  a {
    font-weight: bold;
    color: #eee4c2;    

    &.router-link-exact-active {
        color: rgb(92, 87, 87);
        background: #b3c9f1;
        border-radius: .5rem;    
    }
  }  
}
</style>
<script>
export default {
  name: 'FooterSection',
};
</script>
