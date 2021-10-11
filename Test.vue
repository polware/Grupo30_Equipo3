<template>
  <div class="test">
    <section>
        <div class="Titulo">
            <h1>TEST DE ORIENTACIÓN VOCACIONAL CHASIDE</h1>
            <h5 style="text-align: left;">Antes de empezar, tener en cuenta:</h5>
            <ol style="text-align: left; ">
                <li style="color: #152beb;">Lee atentamente cada pregunta.</li>
                <li style="color: #152beb;">Marca un SI el número de la pregunta que contestes afirmativamente y NO si la pregunta no es afirmativa.</li>
                <li style="color: #152beb;">Responde a todas las preguntas sin omitir ninguna.</li>
            </ol>
            <ol style="text-align: left;">
                <li>¿Aceptarías trabajar escribiendo artículos en la sección económica de un diario?</li>
                <b-button v-on:click="validateButton(1,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(1,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te ofrecerías para organizar la despedida de soltero de uno de tus amigos?</li>
                <b-button v-on:click="validateButton(2,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(2,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te gustaría dirigir un proyecto de urbanización en tu ciudad o municipio?</li>
                <b-button v-on:click="validateButton(3,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(3,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Ante una frustración siempre contrapones un pensamiento positivo?</li>
                <b-button v-on:click="validateButton(4,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(4,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te dedicarías a socorrer a personas accidentadas o atacadas por asaltantes?</li>
                <b-button v-on:click="validateButton(5,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(5,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Cuando eras pequeñ@, te interesaba saber cómo estaban construidos tus juguetes?</li>
                <b-button v-on:click="validateButton(6,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(6,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?</li>
                <b-button v-on:click="validateButton(7,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(7,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Escuchas atentamente los problemas que te comentan tus amigos?</li>
                <b-button v-on:click="validateButton(8,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(8,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Te ofrecerías para explicar a tus compañeros un determinado tema que ellos no entendieron?</li>
                <b-button v-on:click="validateButton(9,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(9,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Eres exigente y crítico con tu equipo de trabajo?</li>
                <b-button v-on:click="validateButton(10,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(10,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Te atrae armar rompecabezas o puzzles?</li>
                <b-button v-on:click="validateButton(11,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(11,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Puedes establecer la diferencia conceptual entre macroeconomía y microeconomía?</li>
                <b-button v-on:click="validateButton(12,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(12,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Usar uniforme te hace sentir distinto, importante?</li>
                <b-button v-on:click="validateButton(13,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(13,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Participarías como profesional en un espectáculo de acrobacia aérea?</li>
                <b-button v-on:click="validateButton(14,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(14,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Organizas tu dinero de manera que te alcance hasta el próximo pago?</li>
                <b-button v-on:click="validateButton(15,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(15,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Convences fácilmente a otras personas sobre la validez de tus argumentos?</li>
                <b-button v-on:click="validateButton(16,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(16,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Estás informado sobre los nuevos descubrimientos que se están realizando sobre la Teoría del Big-Bang?</li>
                <b-button v-on:click="validateButton(17,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(17,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Ante una situación de emergencia actuas rápidamente?</li>
                <b-button v-on:click="validateButton(18,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(18,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Cuando tienes que resolver un problema matemático, perseveras hasta encontrar la solución?</li>
                <b-button v-on:click="validateButton(19,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(19,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Si te convocara tu club preferido para planificar, organizar y dirigir un campo de deportes, aceptarías?</li>
                <b-button v-on:click="validateButton(20,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(20,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Eres el que pone un toque de alegría en las fiestas?</li>
                <b-button v-on:click="validateButton(21,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(21,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Crees que los detalles son tan importantes como el todo?</li>
                <b-button v-on:click="validateButton(22,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(22,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Te sentirías a gusto trabajando en un ámbito hospitalario?</li>
                <b-button v-on:click="validateButton(23,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(23,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Te gustaría participar para mantener el orden ante grandes desórdenes y cataclismos?</li>
                <b-button v-on:click="validateButton(24,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(24,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Pasarías varias horas leyendo algún libro de tu interés?</li>
                <b-button v-on:click="validateButton(25,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(25,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Planificas detalladamente tus trabajos antes de empezar?</li>
                <b-button v-on:click="validateButton(26,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(26,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Entablas una relación casi personal con tu computadora?</li>
                <b-button v-on:click="validateButton(27,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(27,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Disfrutas modelando con arcilla?</li>
                <b-button v-on:click="validateButton(28,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(28,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Ayudas habitualmente a los no videntes a cruzar la calle?</li>
                <b-button v-on:click="validateButton(29,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(29,0)" variant="outline-primary" style="width:50px">No</b-button>
                 <li>¿Consideras importante que desde la escuela primaria se fomente la actitud crítica y la participación activa?</li>
                <b-button v-on:click="validateButton(30,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(30,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Aceptarías que las mujeres formaran parte de las fuerzas armadas bajo las mismas normas que los hombres?</li>
                <b-button v-on:click="validateButton(31,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(31,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te gustaría crear nuevas técnicas para descubrir las patologías de algunas enfermedades a través del microscopio?</li>
                <b-button v-on:click="validateButton(32,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(32,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Participarías en una campaña de prevención contra una enfermedad parasitaria?</li>
                <b-button v-on:click="validateButton(33,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(33,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te interesan los temas relacionados al pasado y a la evolución del hombre?</li>
                <b-button v-on:click="validateButton(34,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(34,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te incluirías en un proyecto de investigación de los movimientos sísmicos y sus consecuencias?</li>
                <b-button v-on:click="validateButton(35,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(35,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Fuera de los horarios escolares, dedicas algún día de la semana a la realización de actividades corporales?</li>
                <b-button v-on:click="validateButton(36,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(36,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te interesan las actividades de mucha acción y de reacción rápida en situaciones imprevistas y de peligro?</li>
                <b-button v-on:click="validateButton(37,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(37,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te ofrecerías para colaborar como voluntario en los gabinetes espaciales de la NASA?</li>
                <b-button v-on:click="validateButton(38,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(38,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te gusta más el trabajo manual que el trabajo intelectual?</li>
                <b-button v-on:click="validateButton(39,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(39,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Estarías dispuesto a renunciar a un momento placentero para ofrecer tu servicio como profesional?</li>
                <b-button v-on:click="validateButton(40,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(40,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Participarías de una investigación sobre la violencia en el fútbol?</li>
                <b-button v-on:click="validateButton(41,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(41,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te gustaría trabajar en un laboratorio mientras estudias?</li>
                <b-button v-on:click="validateButton(42,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(42,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Arriesgarías tu vida para salvar la vida de otro que no conoces?</li>
                <b-button v-on:click="validateButton(43,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(43,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te agradaría hacer un curso de primeros auxilios?</li>
                <b-button v-on:click="validateButton(44,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(44,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Tolerarías empezar tantas veces como fuese necesario hasta obtener el logro deseado?</li>
                <b-button v-on:click="validateButton(45,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(45,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Distribuyes tu horario del día adecuadamente para poder hacer todo lo planeado?</li>
                <b-button v-on:click="validateButton(46,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(46,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Harías un curso para aprender a fabricar los instrumentos y/o piezas de las máquinas o aparatos con que trabajas?</li>
                <b-button v-on:click="validateButton(47,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(47,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Elegirías una profesión en la tuvieras que estar algunos meses alejado de tu familia, por ejemplo, el marino?</li>
                <b-button v-on:click="validateButton(48,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(48,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te radicarías en una zona agrícola-ganadera para desarrollar tus actividades como profesional?</li>
                <b-button v-on:click="validateButton(49,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(49,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Cuando estás en un grupo trabajando, te entusiasma producir ideas originales y que sean tenidas en cuenta?</li>
                <b-button v-on:click="validateButton(50,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(50,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te resulta fácil coordinar un grupo de trabajo?</li>
                <b-button v-on:click="validateButton(51,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(51,1)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te resultó interesante el estudio de las ciencias biológicas?</li>
                <b-button v-on:click="validateButton(52,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(52,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Si una gran empresa solicita un profesional como gerente de comercialización, te sentirías a gusto desempeñando ese rol?</li>
                <b-button v-on:click="validateButton(53,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(53,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te incluirías en un proyecto nacional de desarrollo de la principal fuente de recursos de tu ciudad o municipio?</li>
                <b-button v-on:click="validateButton(54,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(54,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Tienes interés por saber cuales son las causas que determinan ciertos fenómenos, aunque saberlo no altere tu vida?</li>
                <b-button v-on:click="validateButton(55,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(55,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Descubriste algún filósofo o escritor que haya expresado tus mismas ideas con antelación?</li>
                <b-button v-on:click="validateButton(56,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(56,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Desearías que te regalen algún instrumento musical para tu cumpleaños?</li>
                <b-button v-on:click="validateButton(57,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(57,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Aceptarías colaborar con el cumplimiento de las normas en lugares públicos?</li>
                <b-button v-on:click="validateButton(58,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(58,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Crees que tus ideas son importantes, y haces todo lo posible para ponerlas en práctica?</li>
                <b-button v-on:click="validateButton(59,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(59,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Cuando se descompone un aparato en tu casa, te dispones a repararlo pronto?</li>
                <b-button v-on:click="validateButton(60,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(60,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Formarías parte de un equipo de trabajo orientado a la preservación de la flora y la fauna en extinción?</li>
                <b-button v-on:click="validateButton(61,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(61,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Acostumbras a leer revistas relacionadas con los últimos avances científicos y tecnológicos en el área de la salud?</li>
                <b-button v-on:click="validateButton(62,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(62,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Preservar las raíces culturales de tu país, te parece importante y necesario?</li>
                <b-button v-on:click="validateButton(63,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(63,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te gustaría realizar una investigación que contribuyera a hacer más justa la distribución de la riqueza?</li>
                <b-button v-on:click="validateButton(64,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(64,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te gustaría realizar tareas auxiliares en un barco, como por ejemplo izado y arriado de velas, pintura y conservación del casco, arreglo de averías, conservación de motores, etc?</li>
                <b-button v-on:click="validateButton(65,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(65,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Crees que un país debe poseer la más alta tecnología armamentista a cualquier precio?</li>
                <b-button v-on:click="validateButton(66,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(66,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿La libertad y la justicia son valores fundamentales en tu vida?</li>
                <b-button v-on:click="validateButton(67,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(67,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Aceptarías hacer una práctica en una industria de productos alimenticios en el sector de control de calidad?</li>
                <b-button v-on:click="validateButton(68,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(68,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Consideras que la salud pública debe ser prioritaria, gratuita y eficiente para todos?</li>
                <b-button v-on:click="validateButton(69,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(69,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te interesaría investigar sobre alguna nueva vacuna?</li>
                <b-button v-on:click="validateButton(70,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(70,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿En un equipo de trabajo, prefieres el rol de coordinador?</li>
                <b-button v-on:click="validateButton(71,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(71,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿En una discusión entre amigos, te ofreces como mediador?</li>
                <b-button v-on:click="validateButton(72,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(72,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Estás de acuerdo con la formación de un cuerpo de soldados profesionales?</li>
                <b-button v-on:click="validateButton(73,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(73,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Lucharías por una causa justa hasta las últimas consecuencias?</li>
                <b-button v-on:click="validateButton(74,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(74,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te gustaría investigar científicamente sobre cultivos agrícolas?</li>
                <b-button v-on:click="validateButton(75,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(75,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Harías un nuevo diseño de una prenda pasada de moda, ante una reunión imprevista?</li>
                <b-button v-on:click="validateButton(76,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(76,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Visitarías un observatorio astronómico para conocer en acción el funcionamiento de los aparatos?</li>
                <b-button v-on:click="validateButton(77,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(77,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Dirigirías el área de importación y exportación de una empresa?</li>
                <b-button v-on:click="validateButton(78,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(78,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te inhibes al entrar a un lugar nuevo con gente desconocida?</li>
                <b-button v-on:click="validateButton(79,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(79,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te gratificaría el trabajar con niños?</li>
                <b-button v-on:click="validateButton(80,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(80,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Harías el diseño de un afiche para una campaña contra el sida?</li>
                <b-button v-on:click="validateButton(81,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(81,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Dirigirías un grupo de teatro independiente?</li>
                <b-button v-on:click="validateButton(82,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(82,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Enviarías tu curriculum a una empresa automotriz que solicita gerente para su área de producción?</li>
                <b-button v-on:click="validateButton(83,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(83,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Participarías en un grupo de defensa internacional dentro de alguna fuerza armada?</li>
                <b-button v-on:click="validateButton(84,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(84,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te costearías tus estudios trabajando en una auditoría?</li>
                <b-button v-on:click="validateButton(85,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(85,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Eres de los que defiende causas perdidas?</li>
                <b-button v-on:click="validateButton(86,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(86,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Ante una emergencia epidémica participarías en una campaña brindando tu ayuda?</li>
                <b-button v-on:click="validateButton(87,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(87,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Sabrías responder qué significa ADN y ARN?</li>
                <b-button v-on:click="validateButton(88,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(88,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Elegirías una carrera cuyo instrumento de trabajo fuese la utilización de un idioma extranjero?</li>
                <b-button v-on:click="validateButton(89,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(89,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Trabajar con objetos te resulta más gratificante que trabajar con personas?</li>
                <b-button v-on:click="validateButton(90,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(90,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te resultaría gratificante ser asesor contable en una empresa reconocida?</li>
                <b-button v-on:click="validateButton(91,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(91,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Ante un llamado solidario, te ofrecerías para cuidar a un enfermo?</li>
                <b-button v-on:click="validateButton(92,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(92,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te atrae investigar sobre los misterios del universo, por ejemplo, los agujeros negros?</li>
                <b-button v-on:click="validateButton(93,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(93,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿El trabajo individual te resulta más rápido y efectivo que el trabajo grupal?</li>
                <b-button v-on:click="validateButton(94,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(94,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Dedicarías parte de tu tiempo a ayudar a personas de zonas desamparadas?</li>
                <b-button v-on:click="validateButton(95,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(95,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Cuando eliges tu ropa o decoras un ambiente, tienes en cuenta la combinación de los colores, las telas o el estilo de los muebles?</li>
                <b-button v-on:click="validateButton(96,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(96,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Te gustaría trabajar como profesional dirigiendo la construcción de una empresa hidroeléctrica?</li>
                <b-button v-on:click="validateButton(97,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(97,0)" variant="outline-primary" style="width:50px">No</b-button>
                <li>¿Sabes qué es el PIB?</li>
                <b-button v-on:click="validateButton(98,1)" variant="outline-primary" style="width:50px; margin: 5px">Si</b-button>
                <b-button v-on:click="validateButton(98,0)" variant="outline-primary" style="width:50px">No</b-button>
            </ol>
            <b-button v-on:click="validateAnswer()" variant="outline-success" style="width:208px; text-align: center;">Siguiente</b-button>
            <br>
        </div>
    </section>
    <br>
    <br>
  </div>
</template>
<script>
export default {
    data() {
        return {
            listadopreg: [  
            { num: '1',  res: ''},
            { num: '2',  res:''},
            { num: '3',  res:''},
            { num: '4',  res:''},
            { num: '5',  res:''},
            { num: '6',  res:''},
            { num: '7',  res:''},
            { num: '8',  res:''},
            { num: '9',  res:''},
            { num: '10',  res:''},
            { num: '11',  res:''},
            { num: '12',  res:''},
            { num: '13',  res:''},
            { num: '14',  res:''},
            { num: '15',  res:''},
            { num: '16',  res:''},
            { num: '17',  res:''},
            { num: '18',  res:''},
            { num: '19',  res:''},
            { num: '20',  res:''},
            { num: '21',  res:''},
            { num: '22',  res:''},
            { num: '23',  res:''},
            { num: '24',  res:''},
            { num: '25',  res:''},
            { num: '26',  res:''},
            { num: '27',  res:''},
            { num: '28',  res:''},
            { num: '29',  res:''},
            { num: '30',  res:''},
            { num: '31',  res:''},
            { num: '32',  res:''},
            { num: '33',  res:''},
            { num: '34',  res:''},
            { num: '35',  res:''},
            { num: '36',  res:''},
            { num: '37',  res:''},
            { num: '38',  res:''},
            { num: '39',  res:''},
            { num: '40',  res:''},
            { num: '41',  res:''},
            { num: '42',  res:''},
            { num: '43',  res:''},
            { num: '44',  res:''},
            { num: '45',  res:''},
            { num: '46',  res:''},
            { num: '47',  res:''},
            { num: '48',  res:''},
            { num: '49',  res:''},
            { num: '50',  res:''},
            { num: '51',  res:''},
            { num: '52',  res:''},
            { num: '53',  res:''},
            { num: '54',  res:''},
            { num: '55',  res:''},
            { num: '56',  res:''},
            { num: '57',  res:''},
            { num: '58',  res:''},
            { num: '59',  res:''},
            { num: '60',  res:''},
            { num: '61',  res:''},
            { num: '62',  res:''},
            { num: '63',  res:''},
            { num: '64',  res:''},
            { num: '65',  res:''},
            { num: '66',  res:''},
            { num: '67',  res:''},
            { num: '68',  res:''},
            { num: '69',  res:''},
            { num: '70',  res:''},
            { num: '71',  res:''},
            { num: '72',  res:''},
            { num: '73',  res:''},
            { num: '74',  res:''},
            { num: '75',  res:''},
            { num: '76',  res:''},
            { num: '77', res:''},
            { num: '78',  res:''},
            { num: '79',  res:''},
            { num: '80',  res:''},
            { num: '81',  res:''},
            { num: '82',  res:''},
            { num: '83',  res:''},
            { num: '84',  res:''},
            { num: '85',  res:''},
            { num: '86',  res:''},
            { num: '87',  res:''},
            { num: '88',  res:''},
            { num: '89',  res:''},
            { num: '90',  res:''},
            { num: '91',  res:''},
            { num: '92',  res:''},
            { num: '93',  res:''},
            { num: '94',  res:''},
            { num: '95',  res:''},
            { num: '96',  res:''},
            { num: '97',  res:''},
            { num: '98',  res:''},],
            resultados:[], 
            studentresult: [],            
        }
    },
    created() {
      let apiURL = `http://localhost:3000/api/resultado/${this.$route.params.numident}`;
      axios.get(apiURL).then((res) => {
        this.studentresult = res.data
      })
      .catch(e=>{
        console.log(e.response)
     })      
    },
    beforeMount() {
        this.axios.get('/estudiante')
                .then(res=>{                    
                    console.log(res.data)
                    this.resultados = res.data                    
                })
                .catch(e=>{
                    console.log(e.response)
                })
    },
    methods: {    
        validateButton: function(num, answer) {
          var question = this.listadopreg[num-1];  
          question.res =answer;
          this.listadopreg[num-1]=question;
          console.log(question)           
        },
        validateAnswer(){
          let message = "Estimado usuario no ha contestado la pregunta: ";
          var c=0, h=0, a=0, s=0, i=0, d=0,e=0, C=0, H=0, A=0, S=0, I=0, D=0, E=0, letraIntereses='', letraAptitudes='', ramaSugerInt='', ramaSugerApt='', Preafirm=0;
          let x = false;
          
            for(let j=0; j<this.listadopreg.length; j++)
            {
              if(this.listadopreg[j].res !== '')
              {
                  continue;
              }
              else
              {
                x=true;
                var y = new Number(i+1);
                message=message.concat(y.toString())
                message=message.concat(", ")
              }
              
            }
            if (x) {
              alert(message)
            }
            else {
              alert("Ha contestado todas las preguntas.")
            }
            for (let l=0;l<this.listadopreg.length; l++ ) {
              if(this.listadopreg[l].res === 1){
                  {
                let intereses = [98,9,21,33,75,84,77,12,34,45,92,6,31,42,64,80,96,70,19,48,88,53,25,57,8,38,73,17,85,95,28,87,60,5,93,1,67,11,62,27,65,32,78,41,5,23,83,14,68,20,74,3,44,54,37,49,71,56,81,16,47,58,35,91,89,36,52,97,24,61];
                let aptitudes = [15,63,22,69,26,13,94,51,30,39,40,59,66,7,2,72,76,29,90,18,79,46,86,82,4,10,43,55];
                let Ccategory1 = [98,12,64,53,85,1,78,20,71,91];
                let Hcategory1 = [9,34,80,25,95,67,41,74,56,89];
                let Acategory1 = [21,45,96,57,28,11,5,3,81,36];
                let Scategory1 = [33,92,70,8,87,62,23,44,16,52];
                let Icategory1 = [75,6,19,38,60,27,83,54,47,97];
                let Dcategory1 = [84,31,48,73,5,65,14,37,58,24];
                let Ecategory1 = [77,42,88,17,93,32,68,49,35,61];
                let Ccategory2 = [15,51,2,46];
                let Hcategory2 = [63,30,72,86];
                let Acategory2 = [22,39,76,82];
                let Scategory2 = [69,40,29,4];
                let Icategory2 = [26,59,90,10];
                let Dcategory2 = [13,66,18,43];
                let Ecategory2 = [94,7,79,55];
                var evaluador = parseInt(this.listadopreg[l].num)
                if (intereses.includes(evaluador)) {
                  if (Ccategory1.includes(evaluador))
                  {
                    c=++c;
                  }
                  if (Hcategory1.includes(evaluador))
                  {
                    h=++h;
                  }
                  if (Acategory1.includes(evaluador))
                  {
                    a=++a;
                  }
                  if (Scategory1.includes(evaluador))
                  {
                    s=++s;
                  }
                  if (Icategory1.includes(evaluador))
                  {
                    i=++i;
                  }
                  if (Dcategory1.includes(evaluador))
                  {
                    d=++d;
                  }
                  if (Ecategory1.includes(evaluador))
                  {
                    e=++e;
                  }
                }
                if (aptitudes.includes(evaluador)) {
                  if (Ccategory2.includes(evaluador))
                  {
                    C=++C;
                  }
                  if (Hcategory2.includes(evaluador))
                  {
                    H=++H;
                  }
                  if (Acategory2.includes(evaluador))
                  {
                    A=++A;
                  }
                  if (Scategory2.includes(evaluador))
                  {
                    S=++S;
                  }
                  if (Icategory2.includes(evaluador))
                  {
                    I=++I;
                  }
                  if (Dcategory2.includes(evaluador))
                  {
                    D=++D;
                  }
                  if (Ecategory2.includes(evaluador))
                  {
                    E=++E;
                  }
                }
                  
                }
               
              }
            }
            var respuestaIntereses= [c,h,a,s,i,d,e];
            var respuestaAptitudes = [C,H,A,S,I,D,E];
            var calMaximoIntereses = Math.max(...respuestaIntereses);
            var calMaximoAptitudes = Math.max(...respuestaAptitudes);
            Preafirm=c+h+a+s+i+d+e+C+H+A+S+I+D+E;
             if(respuestaIntereses[0]==calMaximoIntereses) {
                alert('C - Administrativas y Contables')
                letraIntereses='C';
                ramaSugerInt='Administrativas y Contables';

            }
            if(respuestaIntereses[1]==calMaximoIntereses){
              alert('H - Humanisticas y sociales')
              letraIntereses='H';
              ramaSugerInt='Humanisticas y sociales';
            }
            if(respuestaIntereses[2]==calMaximoIntereses){
              alert('A - Artisticas ')
              letraIntereses='A';
              ramaSugerInt='Artisticas';
            }
            if(respuestaIntereses[3]==calMaximoIntereses){
              alert('S - Medicina y Cs de la salud')
              letraIntereses='S';
              ramaSugerInt='Medicina y Cs de la salud';
            }
            if(respuestaIntereses[4]==calMaximoIntereses){
              alert('I - Ingenieria y Computacion')
              letraIntereses='I';
              ramaSugerInt='Ingenieria y Computacion';
            }
            if(respuestaIntereses[5]==calMaximoIntereses){
               alert('D - Defensa y seguridad')
              letraIntereses='D';
              ramaSugerInt=' Defensa y seguridad';
            }
            if(respuestaIntereses[6]==calMaximoIntereses){
               alert('E - Ciencias exactas y agrarias')
              letraIntereses='E';
              ramaSugerInt=' Ciencias exactas y agrarias';
            }
            if(respuestaAptitudes[0]==calMaximoAptitudes) {
              alert('C - Administrativas y Contables')
              letraAptitudes='C';
              ramaSugerApt='Administrativas y Contables';
            }
            if(respuestaAptitudes[1]==calMaximoAptitudes) {
              alert('H - Humanisticas y sociales')
              letraAptitudes='H';
              ramaSugerApt='Humanisticas y sociales';
            }
            if(respuestaAptitudes[2]==calMaximoAptitudes) {
              alert('A - Artisticas ')
              letraAptitudes='A';
              ramaSugerApt='Artisticas';
            }
            if(respuestaAptitudes[3]==calMaximoAptitudes) {
              alert('S - Medicina y Cs de la salud')
              letraAptitudes='S';
              ramaSugerApt='Medicina y Cs de la salud';
            }
            if(respuestaAptitudes[4]==calMaximoAptitudes) {
                alert('I - Ingenieria y Computacion')
                letraAptitudes='I';
                ramaSugerApt='Ingenieria y Computacion';
            }
            if(respuestaAptitudes[5]==calMaximoAptitudes) {
                alert('D - Defensa y seguridad')
                letraAptitudes='D';
                ramaSugerApt='Defensa y seguridad';
            }
            if(respuestaAptitudes[6]==calMaximoAptitudes) {
                alert('E - Ciencias exactas y agrarias')
                letraAptitudes='E';
                ramaSugerApt='Ciencias exactas y agrarias';
            }
            var nouso = '';
            this.studentresult.letraintereses = letraIntereses;
            this.studentresult.letraaptitudes = letraAptitudes;
            this.studentresult.ramasugerint = ramaSugerInt;
            this.studentresult.ramasugerapt = ramaSugerApt;
            this.studentresult.preafirm = Preafirm;
            this.estudianteEditar = {_id:this.studentresult._id, numident:this.studentresult.numident, estado:nouso, letraintereses:this.studentresult.letraintereses, puntajeintereses:nouso, ramasugerint:this.studentresult.ramasugerint, letraaptitudes:this.studentresult.letraaptitudes, puntajeaptitudes:nouso, ramasugerapt:this.studentresult.ramasugerapt, preafirm:this.studentresult.preafirm};
            this.guardarResult(this.estudianteEditar);

        },
        ruta(){
	        this.$router.push({name: 'Resultados', params: {numident:this.studentresult.numident} })
	      },
        guardarResult(registro){
          this.axios.put(`/resultado/${registro._id}`, registro)
          .then(res => {
            const indice = this.resultados.findIndex(n => n._id === res.data._id);
            this.resultados[indice].numident = res.data.numident;
            this.resultados[indice].estado = res.data.estado;
            this.resultados[indice].letraintereses = res.data.letraintereses;
            this.resultados[indice].puntajeintereses = res.data.puntajeintereses;
            this.resultados[indice].ramasugerint = res.data.ramasugerint;
            this.resultados[indice].letraaptitudes = res.data.letraaptitudes;
	          this.resultados[indice].puntajeaptitudes = res.data.puntajeaptitudes;
            this.resultados[indice].ramasugerapt = res.data.ramasugerapt;
            this.resultados[indice].preafirm = res.data.preafirm;
            
          })
          .catch(e => {
            console.log(e.response);
          })
        },                    
    },
  }

</script>

<style lang="scss">