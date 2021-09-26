<template>
  <div class="recuperar">
    <h1>Tu historial de resultados se muestra a continuación</h1>
    <br />
    <h2>HTML Table</h2>

    <table >
      <tr>
        <th>Prueba</th>
        <th>Estado</th>
        <th>Resultado</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Realizada</td>
        <td>si</td>
      </tr>
      <tr>
        <td>2</td>
        <td>No realizada</td>
        <td>Si</td>
      </tr>
      <tr>
        <td>3</td>
        <td>No Realizada</td>
        <td>No</td>
      </tr>
      <tr>
        <td>4</td>
        <td>No realizada</td>
        <td>No</td>
      </tr>
      <tr>
        <td>5</td>
        <td>No Realizada</td>
        <td>No</td>
      </tr>
    </table>
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
