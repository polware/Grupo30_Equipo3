<template>
  <div class="recuperar">
    <h1>Esta es la página de Recuperar Cuenta/Contraseña</h1>
    <br />
    <form>
      <h1>Recupera tu cuenta</h1>
      <label for="email">Escribe tu correo para buscar tu cuenta</label><br />
      <input type="text" id="email" name="email" /><br />
      <input type="submit" value="Cancelar" />
      <input type="submit" value="Buscar" />
    </form>
  </div>
</template>
<style lang="scss">
section {
  height: 517px;
  font-family: Verdana, sans-serif;
  color: rgb(21, 43, 235);
  background: #fff;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
}
footer {
  font-family: Verdana, sans-serif;
  color: #fff;
  min-height: 190px;
  width: 100%;
  font-size: 80%;
  background: #0d6efd;
}
.secc-info {
  flex: 50%;
  padding: 30px;
  justify-content: space-around;
  text-align: justify;
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
