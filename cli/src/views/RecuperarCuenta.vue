<template>
  <div class="recuperar">
    <div class="container"> 
      <br>
      <form class="form-recup">
        <br>
        <br>
        <h2>Recuperar Cuenta</h2>
        <hr>
        <label for="email">Escribe tu correo electrónico para buscar tu cuenta:</label><br><br>
        <input type="email" id="email" name="email" /><br><br>
        <b-button class="btn-success my-2 mx-2" type="submit">Buscar</b-button>&nbsp;
        <b-button class="btn-primary my-2 mx-2" type="submit">Cancelar</b-button>
        <br>
        <br>
      </form>
    </div>
</div>
</template>
<style lang="scss">
.form-recup{
  min-height: 493px;
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
