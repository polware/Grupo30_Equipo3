<template>
  <div class="test">
        <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{mensaje.texto}}
        </b-alert>
        <div class="cabecera">
        <br>
        <h2>Test De Orientación Vocacional Chaside</h2>
        <hr>
        <h5>Antes de empezar, tener en cuenta:</h5>
            <ul>
                <li>Lee atentamente cada pregunta.</li>
                <li>Encierra con un círculo únicamente el número de la pregunta que contestes afirmativamente.</li>
                <li>Responde a todas las preguntas sin omitir ninguna.</li>
            </ul>
        <p>Tiempo estimado de la prueba: 7~9 minutos.</p>
        <hr>
        </div>
        <section>
            <div v-for="(n, index) in numpreguntas" :key="index">
                {{listadopreg[index].text}}
                <div>
                    <input type="radio" :value="listadopreg[index].num" v-model="objetoresp[index].valor">
                    <label >Si</label>
                </div>
                <div>
                    <input type="radio" value="0" v-model="objetoresp[index].valor">
                    <label >No</label>
                </div>
                <br>
            </div>
            <div>            
                <b-button v-on:click.self.prevent @click="validarPreg()" variant="outline-primary">Ver Resultado</b-button>
            </div>
            <br>
        </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            aviso:'',
            finalizado:false,
            mensaje: {color: '', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,
            respuestas:[],
            arregloaux1:[],
            arregloaux2:[],
            intereses:[ {text:''} ],
            aptitudes:[ {text:''} ],
            numpreguntas: 98,
            identidad: '',
            estudiantes:[],
            student:[],            
            estudianteEditar: {},
            objetoresp: [ { id: 1, valor: '' }, { id: 2, valor: '' }, { id: 3, valor: '' }, { id: 4, valor: '' }, { id: 5, valor: '' },
                { id: 6, valor: '' }, { id: 7, valor: '' }, { id: 8, valor: '' }, { id: 9, valor: '' }, { id: 10, valor: '' }, { id: 11, valor: '' },
                { id: 12, valor: '' }, { id: 13, valor: '' }, { id: 14, valor: '' }, { id: 15, valor: '' }, { id: 16, valor: '' },
                { id: 17, valor: '' }, { id: 18, valor: '' }, { id: 19, valor: '' }, { id: 20, valor: '' }, { id: 21, valor: '' },
                { id: 22, valor: '' }, { id: 23, valor: '' }, { id: 24, valor: '' }, { id: 25, valor: '' }, { id: 26, valor: '' },
                { id: 27, valor: '' }, { id: 28, valor: '' }, { id: 29, valor: '' }, { id: 30, valor: '' }, { id: 31, valor: '' },
                { id: 32, valor: '' }, { id: 33, valor: '' }, { id: 34, valor: '' }, { id: 35, valor: '' }, { id: 36, valor: '' },
                { id: 37, valor: '' }, { id: 38, valor: '' }, { id: 39, valor: '' }, { id: 40, valor: '' }, { id: 41, valor: '' },
                { id: 42, valor: '' }, { id: 43, valor: '' }, { id: 44, valor: '' }, { id: 45, valor: '' }, { id: 46, valor: '' },
                { id: 47, valor: '' }, { id: 48, valor: '' }, { id: 49, valor: '' }, { id: 50, valor: '' }, { id: 51, valor: '' },
                { id: 52, valor: '' }, { id: 53, valor: '' }, { id: 54, valor: '' }, { id: 55, valor: '' }, { id: 56, valor: '' },
                { id: 57, valor: '' }, { id: 58, valor: '' }, { id: 59, valor: '' }, { id: 60, valor: '' }, { id: 61, valor: '' },
                { id: 62, valor: '' }, { id: 63, valor: '' }, { id: 64, valor: '' }, { id: 65, valor: '' }, { id: 66, valor: '' },
                { id: 67, valor: '' }, { id: 68, valor: '' }, { id: 69, valor: '' }, { id: 70, valor: '' }, { id: 71, valor: '' },
                { id: 72, valor: '' }, { id: 73, valor: '' }, { id: 74, valor: '' }, { id: 75, valor: '' }, { id: 76, valor: '' },
                { id: 77, valor: '' }, { id: 78, valor: '' }, { id: 79, valor: '' }, { id: 80, valor: '' }, { id: 81, valor: '' },
                { id: 82, valor: '' }, { id: 83, valor: '' }, { id: 84, valor: '' }, { id: 85, valor: '' }, { id: 86, valor: '' },
                { id: 87, valor: '' }, { id: 88, valor: '' }, { id: 89, valor: '' }, { id: 90, valor: '' }, { id: 91, valor: '' },
                { id: 92, valor: '' }, { id: 93, valor: '' }, { id: 94, valor: '' }, { id: 95, valor: '' }, { id: 96, valor: '' },
                { id: 97, valor: '' }, { id: 98, valor: '' }
            ],            
            listintereses: [
            { name: 'intereses_C', numpreg: [1,12,20,53,64,71,78,85,91,98], resultado: 'C – Administrativas y Contables.\nIntereses:\nOrganizativo\nSupervisión\nOrden\nAnálisis y síntesis\nColaboración\nCálculo\n'},
            { name: 'intereses_H', numpreg: [9,25,34,41,56,67,74,80,89,95], resultado: 'H – Humanísticas y Sociales.\nIntereses:\nPrecisión Verbal\nOrganización\nRelación de Hechos\nLingüística\nOrden\njusticia\n'},
            { name: 'intereses_A', numpreg: [3,5,11,21,28,36,45,57,81,96], resultado: 'A – Artísticas.\nIntereses:\nEstético\nArmónico\nManual\nVisual\nAuditivo\n'},
            { name: 'intereses_S', numpreg: [8,16,23,33,44,52,62,70,87,92], resultado: 'S – Medicina y Ciencias de la Salud.\nIntereses:\nAsistir\nInvestigativo\nPrecisión\nSenso-Perceptivo\nAnalítico\nAyudar\n'},
            { name: 'intereses_I', numpreg: [6,19,27,38,47,54,60,75,83,97], resultado: 'I – Ingeniería y Computación.\nIntereses:\nCálculo\nCientífico\nManual\nExacto\nPlanificar\n'},
            { name: 'intereses_D', numpreg: [5,14,24,31,37,48,58,65,73,84], resultado: 'D – Defensa y Seguridad.\nIntereses:\njusticia\nEquidad\nColaboración\nEspíritu de Equipo\nLiderazgo\n'},
            { name: 'intereses_E', numpreg: [17,32,35,42,49,61,68,77,88,93], resultado: 'E – Ciencias Exactas y Agrarias.\nIntereses:\nInvestigación\nOrden\nOrganización\nAnálisis y Síntesis\nNumérico\nClasificar\n'}
            ],
            listaptitudes: [
            { name: 'aptitudes_C', numpreg: [2,15,46,51], resultado: 'C – Administrativas y Contables.\nAptitudes:\nPersuasivo\nObjetivo\nPráctico\nTolerante\nResponsable\nAmbicioso\n'},
            { name: 'aptitudes_H', numpreg: [30,63,72,86], resultado: 'H – Humanísticas y Sociales.\nAptitudes:\nResponsable\njusto\nConciliador\nPersuasivo\nSagaz\nImaginativo\n'},
            { name: 'aptitudes_A', numpreg: [22,39,76,82], resultado: 'A – Artísticas.\nAptitudes:\nSensible\nImaginativo\nCreativo\nDetallista\nInnovador\nIntuitivo\n'},
            { name: 'aptitudes_S', numpreg: [4,29,40,69], resultado: 'S – Medicina y Ciencias de la Salud.\nAptitudes:\nAltruista\nSolidario\nPaciente\nComprensivo\nRespetuoso\nPersuasivo\n'},
            { name: 'aptitudes_I', numpreg: [10,26,59,90], resultado: 'I – Ingeniería y Computación.\nAptitudes:\nPreciso\nPráctico\nCrítico\nAnalítico\nRígido\n'},
            { name: 'aptitudes_D', numpreg: [13,18,43,66], resultado: 'D – Defensa y Seguridad.\nAptitudes:\nArriesgado\nSolidario\nValiente\nAgresivo\nPersuasivo\n'},
            { name: 'aptitudes_E', numpreg: [7,55,79,94], resultado: 'E – Ciencias Exactas y Agrarias.\nAptitudes:\nMetódico\nAnalítico\nObervador\nIntrovertido\nPaciente\nSeguro\n'}
            ],
            listadopreg: [
            { num: '1', text: '1. ¿Aceptarías trabajar escribiendo artículos en la sección económica de un diario?'},
            { num: '2', text: '2. ¿Te ofrecerías para organizar la despedida de soltero de uno de tus amigos?'},
            { num: '3', text: '3. ¿Te gustaría dirigir un proyecto de urbanización en tu ciudad o municipio?'},
            { num: '4', text: '4. ¿Ante una frustración siempre contrapones un pensamiento positivo?'},
            { num: '5', text: '5. ¿Te dedicarías a socorrer a personas accidentadas o atacadas por asaltantes?'},
            { num: '6', text: '6. ¿Cuando eras pequeñ@, te interesaba saber cómo estaban construidos tus juguetes?'},
            { num: '7', text: '7. ¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?'},
            { num: '8', text: '8. ¿Escuchas atentamente los problemas que te comentan tus amigos?'},
            { num: '9', text: '9. ¿Te ofrecerías para explicar a tus compañeros un determinado tema que ellos no entendieron?'},
            { num: '10', text: '10. ¿Eres exigente y crítico con tu equipo de trabajo?'},
            { num: '11', text: '11. ¿Te atrae armar rompecabezas o puzzles?'},
            { num: '12', text: '12. ¿Puedes establecer la diferencia conceptual entre macroeconomía y microeconomía?'},
            { num: '13', text: '13. ¿Usar uniforme te hace sentir distinto, importante?'},
            { num: '14', text: '14. ¿Participarías como profesional en un espectáculo de acrobacia aérea?'},
            { num: '15', text: '15. ¿Organizas tu dinero de manera que te alcance hasta el próximo pago?'},
            { num: '16', text: '16. ¿Convences fácilmente a otras personas sobre la validez de tus argumentos?'},
            { num: '17', text: '17. ¿Estás informado sobre los nuevos descubrimientos que se están realizando sobre la Teoría del Big-Bang?'},
            { num: '18', text: '18. ¿Ante una situación de emergencia actuas rápidamente?'},
            { num: '19', text: '19. ¿Cuando tienes que resolver un problema matemático, perseveras hasta encontrar la solución?'},
            { num: '20', text: '20. ¿Si te convocara tu club preferido para planificar, organizar y dirigir un campo de deportes, aceptarías?'},
            { num: '21', text: '21. ¿Eres el que pone un toque de alegría en las fiestas?'},
            { num: '22', text: '22. ¿Crees que los detalles son tan importantes como el todo?'},
            { num: '23', text: '23. ¿Te sentirías a gusto trabajando en un ámbito hospitalario?'},
            { num: '24', text: '24. ¿Te gustaría participar para mantener el orden ante grandes desórdenes y cataclismos?'},
            { num: '25', text: '25. ¿Pasarías varias horas leyendo algún libro de tu interés?'},
            { num: '26', text: '26. ¿Planificas detalladamente tus trabajos antes de empezar?'},
            { num: '27', text: '27. ¿Entablas una relación casi personal con tu computadora?'},
            { num: '28', text: '28. ¿Disfrutas modelando con arcilla?'},
            { num: '29', text: '29. ¿Ayudas habitualmente a los no videntes a cruzar la calle?'},
            { num: '30', text: '30. ¿Consideras importante que desde la escuela primaria se fomente la actitud crítica y la participación activa?'},
            { num: '31', text: '31. ¿Aceptarías que las mujeres formaran parte de las fuerzas armadas bajo las mismas normas que los hombres?'},
            { num: '32', text: '32. ¿Te gustaría crear nuevas técnicas para descubrir las patologías de algunas enfermedades a través del microscopio?'},
            { num: '33', text: '33. ¿Participarías en una campaña de prevención contra una enfermedad parasitaria?'},
            { num: '34', text: '34. ¿Te interesan los temas relacionados al pasado y a la evolución del hombre?'},
            { num: '35', text: '35. ¿Te incluirías en un proyecto de investigación de los movimientos sísmicos y sus consecuencias?'},
            { num: '36', text: '36. ¿Fuera de los horarios escolares, dedicas algún día de la semana a la realización de actividades corporales?'},
            { num: '37', text: '37. ¿Te interesan las actividades de mucha acción y de reacción rápida en situaciones imprevistas y de peligro?'},
            { num: '38', text: '38. ¿Te ofrecerías para colaborar como voluntario en los gabinetes espaciales de la NASA?'},
            { num: '39', text: '39. ¿Te gusta más el trabajo manual que el trabajo intelectual?'},
            { num: '40', text: '40. ¿Estarías dispuesto a renunciar a un momento placentero para ofrecer tu servicio como profesional?'},
            { num: '41', text: '41. ¿Participarías de una investigación sobre la violencia en el fútbol?'},
            { num: '42', text: '42. ¿Te gustaría trabajar en un laboratorio mientras estudias?'},
            { num: '43', text: '43. ¿Arriesgarías tu vida para salvar la vida de otro que no conoces?'},
            { num: '44', text: '44. ¿Te agradaría hacer un curso de primeros auxilios?'},
            { num: '45', text: '45. ¿Tolerarías empezar tantas veces como fuese necesario hasta obtener el logro deseado?'},
            { num: '46', text: '46. ¿Distribuyes tu horario del día adecuadamente para poder hacer todo lo planeado?'},
            { num: '47', text: '47. ¿Harías un curso para aprender a fabricar los instrumentos y/o piezas de las máquinas o aparatos con que trabajas?'},
            { num: '48', text: '48. ¿Elegirías una profesión en la tuvieras que estar algunos meses alejado de tu familia, por ejemplo, el marino?'},
            { num: '49', text: '49. ¿Te radicarías en una zona agrícola-ganadera para desarrollar tus actividades como profesional?'},
            { num: '50', text: '50. ¿Cuando estás en un grupo trabajando, te entusiasma producir ideas originales y que sean tenidas en cuenta?'},
            { num: '51', text: '51. ¿Te resulta fácil coordinar un grupo de trabajo?'},
            { num: '52', text: '52. ¿Te resultó interesante el estudio de las ciencias biológicas?'},
            { num: '53', text: '53. ¿Si una gran empresa solicita un profesional como gerente de comercialización, te sentirías a gusto desempeñando ese rol?'},
            { num: '54', text: '54. ¿Te incluirías en un proyecto nacional de desarrollo de la principal fuente de recursos de tu ciudad o municipio?'},
            { num: '55', text: '55. ¿Tienes interés por saber cuales son las causas que determinan ciertos fenómenos, aunque saberlo no altere tu vida?'},
            { num: '56', text: '56. ¿Descubriste algún filósofo o escritor que haya expresado tus mismas ideas con antelación?'},
            { num: '57', text: '57. ¿Desearías que te regalen algún instrumento musical para tu cumpleaños?'},
            { num: '58', text: '58. ¿Aceptarías colaborar con el cumplimiento de las normas en lugares públicos?'},
            { num: '59', text: '59. ¿Crees que tus ideas son importantes, y haces todo lo posible para ponerlas en práctica?'},
            { num: '60', text: '60. ¿Cuando se descompone un aparato en tu casa, te dispones a repararlo pronto?'},
            { num: '61', text: '61. ¿Formarías parte de un equipo de trabajo orientado a la preservación de la flora y la fauna en extinción?'},
            { num: '62', text: '62. ¿Acostumbras a leer revistas relacionadas con los últimos avances científicos y tecnológicos en el área de la salud?'},
            { num: '63', text: '63. ¿Preservar las raíces culturales de tu país, te parece importante y necesario?'},
            { num: '64', text: '64. ¿Te gustaría realizar una investigación que contribuyera a hacer más justa la distribución de la riqueza?'},
            { num: '65', text: '65. ¿Te gustaría realizar tareas auxiliares en un barco, como por ejemplo izado y arriado de velas, pintura y conservación del casco, arreglo de averías, conservación de motores, etc?'},
            { num: '66', text: '66. ¿Crees que un país debe poseer la más alta tecnología armamentista a cualquier precio?'},
            { num: '67', text: '67. ¿La libertad y la justicia son valores fundamentales en tu vida?'},
            { num: '68', text: '68. ¿Aceptarías hacer una práctica en una industria de productos alimenticios en el sector de control de calidad?'},
            { num: '69', text: '69. ¿Consideras que la salud pública debe ser prioritaria, gratuita y eficiente para todos?'},
            { num: '70', text: '70. ¿Te interesaría investigar sobre alguna nueva vacuna?'},
            { num: '71', text: '71. ¿En un equipo de trabajo, prefieres el rol de coordinador?'},
            { num: '72', text: '72. ¿En una discusión entre amigos, te ofreces como mediador?'},
            { num: '73', text: '73. ¿Estás de acuerdo con la formación de un cuerpo de soldados profesionales?'},
            { num: '74', text: '74. ¿Lucharías por una causa justa hasta las últimas consecuencias?'},
            { num: '75', text: '75. ¿Te gustaría investigar científicamente sobre cultivos agrícolas?'},
            { num: '76', text: '76. ¿Harías un nuevo diseño de una prenda pasada de moda, ante una reunión imprevista?'},
            { num: '77', text: '77. ¿Visitarías un observatorio astronómico para conocer en acción el funcionamiento de los aparatos?'},
            { num: '78', text: '78. ¿Dirigirías el área de importación y exportación de una empresa?'},
            { num: '79', text: '79. ¿Te inhibes al entrar a un lugar nuevo con gente desconocida?'},
            { num: '80', text: '80. ¿Te gratificaría el trabajar con niños?'},
            { num: '81', text: '81. ¿Harías el diseño de un afiche para una campaña contra el sida?'},
            { num: '82', text: '82. ¿Dirigirías un grupo de teatro independiente?'},
            { num: '83', text: '83. ¿Enviarías tu curriculum a una empresa automotriz que solicita gerente para su área de producción?'},
            { num: '84', text: '84. ¿Participarías en un grupo de defensa internacional dentro de alguna fuerza armada?'},
            { num: '85', text: '85. ¿Te costearías tus estudios trabajando en una auditoría?'},
            { num: '86', text: '86. ¿Eres de los que defiende causas perdidas?'},
            { num: '87', text: '87. ¿Ante una emergencia epidémica participarías en una campaña brindando tu ayuda?'},
            { num: '88', text: '88. ¿Sabrías responder qué significa ADN y ARN?'},
            { num: '89', text: '89. ¿Elegirías una carrera cuyo instrumento de trabajo fuese la utilización de un idioma extranjero?'},
            { num: '90', text: '90. ¿Trabajar con objetos te resulta más gratificante que trabajar con personas?'},
            { num: '91', text: '91. ¿Te resultaría gratificante ser asesor contable en una empresa reconocida?'},
            { num: '92', text: '92. ¿Ante un llamado solidario, te ofrecerías para cuidar a un enfermo?'},
            { num: '93', text: '93. ¿Te atrae investigar sobre los misterios del universo, por ejemplo, los agujeros negros?'},
            { num: '94', text: '94. ¿El trabajo individual te resulta más rápido y efectivo que el trabajo grupal?'},
            { num: '95', text: '95. ¿Dedicarías parte de tu tiempo a ayudar a personas de zonas desamparadas?'},
            { num: '96', text: '96. ¿Cuando eliges tu ropa o decoras un ambiente, tienes en cuenta la combinación de los colores, las telas o el estilo de los muebles?'},
            { num: '97', text: '97. ¿Te gustaría trabajar como profesional dirigiendo la construcción de una empresa hidroeléctrica?'},
            { num: '98', text: '98. ¿Sabes qué es el PIB?'}
            ]            
        }
    },
    created() {        
        let apiURL = `http://localhost:3000/api/estudiante/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
                this.student = res.data
            })
            .catch(e=>{
                console.log(e.response)
            })        
    },

    beforeMount() {
        this.axios.get('/estudiante')
                .then(res=>{                    
                    console.log(res.data)
                    this.estudiantes = res.data                    
                })
                .catch(e=>{
                    console.log(e.response)
                })
    },

    methods: {
        
        validarPreg(){
            this.sinresp = [];
            for(let i = 0; i < 98; i++) {
                if(this.objetoresp[i].valor === ''){
                    this.sinresp.push(i+1);
                }
            }
            const tam = this.sinresp.length;
            if(tam > 0){
                alert("Por favor responder la(s) pregunta(s) No: " +this.sinresp)
            }
            else {
                this.calcularRes();
            }
        },

        calcularRes(){
            for(let j = 0; j < 98; j++) {
                var valor1 = this.objetoresp[j].valor;
                var valor2 = this.listadopreg[j].num;
                if(valor1 === valor2){
                    this.respuestas.push(j+1);                    
                }
            }
            var arr1 = this.respuestas;
            for(let i = 0; i < 7; i++) {                
                var arr2 = this.listintereses[i].numpreg;
                var arr3 = this.listaptitudes[i].numpreg;                
                const compint = (arr2.every(val => arr1.includes(val)));
                const compapt = (arr3.every(val => arr1.includes(val)));
                if(compint || compapt){
                    if(i === 0){
                        this.intereses.text = this.listintereses[i].resultado;
                        this.aptitudes.text = this.listaptitudes[i].resultado;
                    }
                    else{
                        this.arregloaux1 = this.listintereses[i].resultado;
                        this.arregloaux2 = this.listaptitudes[i].resultado;
                        this.intereses.text = this.arregloaux1.concat(this.intereses.text);
                        this.aptitudes.text = this.arregloaux2.concat(this.aptitudes.text);
                    }            
                }                
            }
            this.student.intereses = this.intereses.text;
            this.student.aptitudes = this.aptitudes.text;
            this.estudianteEditar = {_id:this.student._id, numident:this.student.numident, password:this.student.password, nombre:this.student.nombre, apellido:this.student.apellido, correo:this.student.correo, fechanac:this.student.fechanac, colegio:this.student.colegio, ciudad:this.student.ciudad, intereses:this.student.intereses, aptitudes:this.student.aptitudes};
            this.guardarResult(this.estudianteEditar);
            alert("Resultado del test:\n" +this.student.intereses +"\n" +this.student.aptitudes)
            this.finalizado = true;
            this.ruta();
            setTimeout(() => this.finalizado = false, 4000);
        },

        ruta(){
            this.$router.push({name: 'Profile', params: {id:this.student._id} })
	    },

        guardarResult(registro){
            this.axios.put(`/estudiante/${registro._id}`, registro)
            .then(res => {
            const indice = this.estudiantes.findIndex(n => n._id === res.data._id);
            this.estudiantes[indice].numident = res.data.numident;
            this.estudiantes[indice].password = res.data.password;
            this.estudiantes[indice].nombre = res.data.nombre;
            this.estudiantes[indice].apellido = res.data.apellido;
            this.estudiantes[indice].correo = res.data.correo;
            this.estudiantes[indice].fechanac = res.data.fechanac;
	        this.estudiantes[indice].colegio = res.data.colegio;
            this.estudiantes[indice].ciudad = res.data.ciudad;
            this.estudiantes[indice].intereses = res.data.intereses;
            this.estudiantes[indice].aptitudes = res.data.aptitudes;
            this.mensaje.color = 'success';
            this.mensaje.texto = '¡Sus resultados han sido almacenados!';
            this.showAlert();
            })
            .catch(e => {
                console.log(e.response);
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
.cabecera{
    font-family: Verdana, sans-serif;
    font-size: 90%;
    color: rgb(21, 43, 235);
    padding-left: 22%;
    padding-right: 22%;
    align-items: center;
    text-align: justify;
    justify-content: center;
}
section {  
  height: 262px;
  font-family: Verdana, sans-serif;
  color: rgb(21, 43, 235);
  background: #fff;  
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  text-align: center;
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
