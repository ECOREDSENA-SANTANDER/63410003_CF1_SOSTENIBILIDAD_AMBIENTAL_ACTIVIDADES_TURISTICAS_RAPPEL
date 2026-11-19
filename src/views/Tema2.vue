<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 #[i Rappel] y condiciones del escenario turístico
      
      
      .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.br-3.br-4.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block.br-4(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Las actividades de turismo de aventura presentan una relación estrecha con las características del espacio donde se desarrollan. El relieve, la pendiente, las formaciones geológicas, la cobertura natural, las condiciones meteorológicas o la disponibilidad de accesos pueden influir en la configuración del recorrido. En consecuencia, el escenario no representa únicamente el lugar físico donde ocurre la experiencia, sino un conjunto de condiciones territoriales que requieren reconocimiento previo.
          p.mb-0 En el #[i rappel], esta relación adquiere especial importancia debido a la utilización de superficies verticales o inclinadas para efectuar el descenso. Paredes rocosas, cañones, cascadas, estructuras naturales o espacios acondicionados pueden presentar características diferentes, por lo que su análisis requiere considerar tanto las particularidades físicas como los componentes ambientales presentes en el área de influencia de la actividad.
      
      p.mb-5 Desde la perspectiva del turismo sostenible, la caracterización del escenario permite comprender las interacciones que pueden producirse entre la práctica turística y el entorno. El análisis incluye las zonas de aproximación, los puntos de permanencia, el tramo destinado al descenso, las áreas de salida o retorno, además de otros espacios utilizados por participantes o prestadores durante el recorrido. Esta mirada integral facilita reconocer factores ambientales relevantes sin reducir el escenario exclusivamente al punto donde ocurre el descenso.
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .bg-color-1.p-5.mb-5
            p.mb-0 La Norma Técnica Sectorial NTS-AV 011 establece requisitos para la operación de actividades de rapel en turismo de aventura e incorpora aspectos relacionados con planificación, gestión del servicio, seguridad, equipos, información al turista o manejo de riesgos. Este referente permite reconocer que la operación turística del #[i rappel] requiere procedimientos previamente definidos, acordes con las características de la actividad (Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC], 2007).
          p.mb-0 La Norma Técnica Sectorial NTS-AV 011 establece requisitos para la operación de actividades de rapel en turismo de aventura e incorpora aspectos relacionados con planificación, gestión del servicio, seguridad, equipos, información al turista o manejo de riesgos. Este referente permite reconocer que la operación turística del #[i rappel] requiere procedimientos previamente definidos, acordes con las características de la actividad (Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC], 2007).
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.png')
      
      p.mb-0 En este componente, el análisis del #[i rappel] se concentra en comprender sus características generales, reconocer los escenarios donde puede desarrollarse, interpretar las condiciones del recorrido e identificar factores ambientales relevantes. Los procedimientos técnicos especializados de instalación, maniobra o rescate no forman parte del alcance formativo, debido a que requieren competencias específicas, entrenamiento práctico o certificaciones correspondientes.
      
      
      
      Separador
      #t_2_1.titulo-segundo.color-secundario(data-aos='fade-right')
        h2 2.1 #[i Rappel]: concepto y características
      
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/4.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 El término #[i rappel] hace referencia a una técnica de descenso controlado mediante cuerda, utilizada para desplazarse por superficies verticales o con inclinación pronunciada. En el contexto turístico, su incorporación dentro de una experiencia de aventura implica una operación organizada que contempla el escenario, las características de los participantes, los procedimientos establecidos, el equipamiento requerido y las condiciones de seguridad aplicables.
            p.mb-0 La Norma Técnica Sectorial NTS-AV 011 emplea la denominación rapel para establecer los requisitos aplicables a los prestadores de servicios turísticos que desarrollan esta actividad dentro del turismo de aventura (ICONTEC, 2007). Esta precisión resulta relevante debido a que en el lenguaje cotidiano también se utiliza ampliamente la expresión #[i rappel]. Para efectos del presente componente se conserva esta última denominación, dado que corresponde al nombre establecido para el programa de formación, mientras que al citar la norma se respeta su terminología oficial.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/3.png')
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características del #[i rappel] en el contexto turístico
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/5.svg')
            .tarjeta.bg-color-1
              .p-4
                h4.text-center.mb-3.mt-3 Componente técnico
                p.mb-0 La práctica requiere equipos, procedimientos, conocimientos especializados y condiciones operativas previamente establecidas, además del control necesario durante el descenso.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/6.svg')
            .tarjeta.bg-color-1
              .p-4
                h4.text-center.mb-3.mt-3 Escenario
                p.mb-0 Puede desarrollarse en espacios naturales o acondicionados con características físicas particulares que deben reconocerse antes de analizar las condiciones de la actividad.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/7.svg')
            .tarjeta.bg-color-1
              .p-4
                h4.text-center.mb-3.mt-3 Interacción con el entorno
                p.mb-0 La actividad utiliza accesos, superficies de descenso, zonas de preparación, permanencia y salida, generando diferentes formas de interacción con el escenario.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/8.svg')
            .tarjeta.bg-color-1
              .p-4
                h4.text-center.mb-3.mt-3 Condiciones externas
                p.mb-0 La precipitación, temperatura, viento, humedad, características del terreno y otros factores del escenario pueden influir en el desarrollo de la experiencia.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/9.svg')
            .tarjeta.bg-color-1
              .p-4
                h4.text-center.mb-3.mt-3 Contexto turístico y ambiental
                p.mb-0 Como experiencia de turismo de aventura, requiere reconocer las características del lugar, los elementos naturales presentes, la organización del recorrido, la seguridad y los referentes aplicables.
      
      
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Escenarios de práctica
      
      .row.justify-content-center.mb-5.bg-fondo-2(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t2/10.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t2/11.svg')
          p.mb-2 Los escenarios destinados al #[i rappel] pueden clasificarse de manera general en naturales o acondicionados, según las características del espacio utilizado. Los primeros aprovechan formaciones existentes en el territorio, mientras los segundos corresponden a estructuras o lugares intervenidos para facilitar el desarrollo controlado de la actividad.
          p.mb-0 En los escenarios naturales, las características del entorno tienen una incidencia directa. La geomorfología determina aspectos como inclinación, altura o configuración de las superficies; la vegetación puede encontrarse próxima a zonas de tránsito o permanencia; las condiciones meteorológicas pueden modificar temporalmente el escenario. Asimismo, la presencia de agua, fauna, material suelto u otros componentes requiere ser reconocida dentro de la caracterización del lugar.
      
      p.mb-5 Los escenarios acondicionados presentan condiciones diferentes, pero esto no elimina la necesidad de efectuar un análisis contextual. La localización de la infraestructura, los accesos, el entorno inmediato, la exposición a factores meteorológicos o la interacción con otros usos del espacio continúan siendo elementos relevantes para comprender las condiciones generales de la actividad.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 El tipo de escenario no define su nivel de riesgo

      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t2/12.png' data-aos='fade-right')
      p.mb-3 La clasificación de un escenario como natural o acondicionado no determina por sí sola su nivel de dificultad, riesgo o sostenibilidad. Estas condiciones requieren analizar variables específicas del recorrido, las características físicas del lugar, los factores ambientales presentes o los procedimientos aplicables.
      p.mb-0 Estas características proporcionan una base para profundizar en las condiciones ambientales y de seguridad que pueden presentarse en los escenarios turísticos de #[i rappel].
      
      
      Separador
      #t_2_2.titulo-segundo.color-secundario(data-aos='fade-right')
        h2 2.2 Condiciones ambientales y de seguridad
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5.br-1.br-2(data-aos='fade-right')
        .bloque-texto-g__img.br-1.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/13.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 El desarrollo de actividades turísticas de #[i rappel] requiere reconocer que las condiciones de un escenario pueden variar de acuerdo con sus características físicas, ambientales, meteorológicas o territoriales. Esta diversidad influye en la configuración del recorrido, las posibilidades de acceso, la interacción de los participantes con el entorno, además de los factores que deben ser considerados para analizar la actividad.
          p.mb-0 La caracterización del escenario permite reunir información sobre los elementos presentes antes, durante o después del descenso. Este proceso comprende el área de aproximación, las zonas de preparación, el punto de inicio, la superficie utilizada para la actividad, los espacios de llegada y las rutas de salida o retorno. Analizar estos sectores de manera integrada facilita reconocer condiciones que podrían pasar inadvertidas si la valoración se concentrara exclusivamente en la pared o superficie de descenso.
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/14.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/15.svg')
              .col-sm-12.col-lg-10
                  p.mb-0  En materia de turismo de aventura, la gestión de la seguridad requiere considerar las características de la actividad, el contexto donde se desarrolla, los participantes y los factores capaces de modificar las condiciones inicialmente previstas. La NTC-ISO 21101 establece requisitos para los sistemas de gestión de la seguridad aplicables a prestadores de actividades de turismo de aventura, bajo un enfoque orientado a gestionar los riesgos asociados con la prestación del servicio (Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC], 2014).
            p.mb-0 Desde el enfoque ambiental, esta lectura adquiere un alcance complementario. Una condición del entorno puede representar simultáneamente un elemento natural propio del escenario, un factor relevante para la seguridad o una variable que influye sobre la sensibilidad ambiental del lugar. Por ejemplo, una precipitación intensa puede modificar el estado de una superficie, aumentar procesos erosivos, alterar accesos o modificar temporalmente las condiciones del recorrido.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Condiciones físicas del escenario
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/16.png')
        .col-sm-12.col-lg-8
          .bg-color-1.p-4.mb-4
            p.mb-2 Las características físicas permiten comprender la configuración espacial donde se desarrolla la actividad. Entre ellas se encuentran la pendiente, altura, tipo de superficie, relieve, estabilidad aparente del terreno, presencia de material suelto, características de accesos o configuración de las áreas destinadas al tránsito de participantes.
            p.mb-0 La geología o geomorfología del lugar también puede influir en las particularidades del escenario. Las superficies naturales no presentan características uniformes; pueden existir fracturas, irregularidades, zonas húmedas, sectores erosionados o materiales con diferente comportamiento frente a factores externos. Su reconocimiento aporta información para caracterizar el espacio sin sustituir las evaluaciones técnicas especializadas que correspondan.
          p.mb-0 Las condiciones del suelo adquieren relevancia especialmente en las zonas de aproximación, preparación o salida. La pendiente, compactación, humedad, presencia de material orgánico o evidencias de erosión permiten identificar características relacionadas con el tránsito de visitantes. Cuando los recorridos se desarrollan de manera recurrente, estas áreas pueden presentar transformaciones asociadas con el uso turístico.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Condiciones meteorológicas

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/17.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 Las variables meteorológicas pueden modificar de manera temporal las características del escenario. Precipitación, temperatura, viento, humedad, tormentas o cambios repentinos en las condiciones atmosféricas pueden incidir sobre superficies, accesos, visibilidad o exposición de los participantes.
            p.mb-0 La lluvia adquiere particular importancia en escenarios de #[i rappel] debido a su capacidad para modificar la humedad de superficies, aumentar escorrentías o transformar las condiciones de senderos de aproximación. En espacios asociados a cascadas, quebradas o cañones, las precipitaciones ocurridas incluso fuera del punto específico de actividad pueden influir sobre las condiciones hidrológicas del lugar.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/18.png')
      
      .row.justify-content-center.mb-5.bg-fondo-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t2/19.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t2/20.svg')
          p.mb-4 El viento representa otra variable relevante en zonas expuestas, especialmente cuando existen cambios asociados con altitud, topografía o condiciones locales. La temperatura también puede variar considerablemente entre escenarios, horarios o épocas del año, razón por la cual debe comprenderse como parte de la caracterización ambiental del recorrido.
          p.mb-0 La relación entre estas variables permite reconocer que una valoración realizada en determinado momento no necesariamente representa las condiciones permanentes del escenario. El análisis requiere considerar tanto las características habituales como las variaciones previsibles asociadas con temporalidad o fenómenos meteorológicos.
      
      
      .cajon.color-acento-contenido.p-4.mb-4(data-aos='fade-right')
        p.mb-0 Los factores ambientales presentan relaciones entre sí. La precipitación puede modificar las características de una superficie; la topografía puede influir sobre escorrentías; la cobertura vegetal puede contribuir a la estabilidad del suelo; la disponibilidad de agua puede favorecer determinadas comunidades biológicas. Por este motivo, el análisis del escenario requiere una lectura integrada, evitando valorar cada variable de manera completamente aislada.
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Condiciones biológicas

      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t2/21.png' data-aos='fade-right')
      p.mb-3 La flora y la fauna presentes forman parte de las condiciones ambientales que caracterizan un escenario natural. Su reconocimiento resulta relevante debido a que determinados sectores pueden contener especies sensibles, áreas de refugio, sitios de alimentación, reproducción o tránsito. La intensidad de la interacción turística puede variar dependiendo de la ubicación de estos elementos respecto a los espacios utilizados durante la actividad.
      p.mb-5 La vegetación puede encontrarse en senderos de aproximación, bordes de superficies, zonas de preparación o puntos próximos al recorrido. El análisis debe considerar su presencia como componente del ecosistema, no únicamente como elemento físico del paisaje. De forma similar, la fauna puede utilizar sectores que coincidan temporal o permanentemente con áreas destinadas a visitantes.
      
      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        p.mb-0 La biodiversidad colombiana refuerza la importancia de esta valoración. La Política Nacional para la Gestión Integral de la Biodiversidad y sus Servicios Ecosistémicos plantea la conservación de la biodiversidad desde una perspectiva integral, reconociendo la necesidad de mantener la resiliencia de los sistemas socioecológicos y los servicios ecosistémicos asociados (Ministerio de Ambiente y Desarrollo Sostenible [MADS], 2012).
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Condiciones de acceso, aproximación o salida
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/22.png')
        .col-sm-12.col-lg-9
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-5.d-none.d-lg-block.bg-color-1.px-5.py-3
                img.wcus-2(src='@/assets/curso/temas/t2/23.svg')
              .col-sm-12.col-lg-7.bg-color-5.p-5
                  p.mb-0.mcus-5 Los accesos forman parte integral del escenario turístico. Una actividad puede disponer de una superficie adecuada para el descenso, pero presentar condiciones particulares en las rutas utilizadas para llegar o abandonar el lugar. Pendientes pronunciadas, pasos estrechos, cruces de agua, superficies inestables o cambios en el terreno pueden formar parte de la experiencia antes de iniciar la maniobra.
            p.mb-0 Desde la perspectiva ambiental, los accesos también representan espacios de interacción. El tránsito recurrente puede relacionarse con compactación del suelo, ampliación informal de senderos, afectación de cobertura vegetal o generación de rutas alternativas. Estas situaciones forman parte de la caracterización del escenario debido a que permiten comprender el área realmente utilizada durante la actividad turística.

      p.mb-5 Las zonas de preparación o espera merecen una consideración similar. La concentración de participantes puede producir una presión localizada diferente a la generada durante el desplazamiento. Reconocer su ubicación, dimensiones, características del suelo o proximidad a componentes sensibles aporta información para el posterior análisis de impactos.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre condiciones ambientales y seguridad

      p.mb-5 En turismo de aventura, ambiente y seguridad mantienen una relación estrecha. Las condiciones naturales pueden modificar las características del recorrido, mientras determinados cambios del escenario pueden generar nuevas situaciones que requieren valoración. Esta relación no significa que un elemento natural represente por sí mismo un peligro; su relevancia depende del contexto, la exposición, las características de la actividad o la interacción con los participantes.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 2.] Relación entre condiciones del entorno y factores asociados a la actividad de #[i rappel]
      .tabla-a.color-primario.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th Condición del entorno
              th Posible incidencia sobre la actividad
              th Información relevante para el análisis
          tbody
            tr
              td Lluvia intensa
              td Modificación de superficies, accesos o escorrentías.
              td Intensidad, duración, antecedentes recientes y características del terreno.
            tr
              td Material suelto
              td Cambios en las condiciones de tránsito o descenso.
              td Localización, cantidad, estabilidad aparente y zonas expuestas.
            tr
              td Viento fuerte
              td Variación de las condiciones en sectores expuestos.
              td Intensidad, ubicación, duración y características topográficas.
            tr
              td Presencia de agua
              td Modificación de superficies o sectores del recorrido.
              td Caudal, humedad, temporalidad y comportamiento del cuerpo de agua.
            tr
              td Vegetación sensible
              td Posible interacción durante tránsito o permanencia.
              td Ubicación, extensión y proximidad a zonas utilizadas.
            tr
              td Presencia de fauna
              td Coincidencia con espacios utilizados por visitantes.
              td Especies registradas, temporalidad y zonas de refugio o reproducción.
            tr
              td Erosión
              td Modificación progresiva de accesos o superficies.
              td Localización, extensión, causas aparentes y evolución del sector.

      .cajon.color-primario.p-4.mb-4(data-aos='fade-right')
        p.mb-0 La relación presentada permite diferenciar tres elementos fundamentales: la condición existente, su posible incidencia sobre la actividad y la información necesaria para analizarla. Esta diferenciación evita asumir automáticamente que cualquier condición ambiental corresponde a un riesgo, además de facilitar una caracterización sustentada en información del escenario.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Reconocimiento de riesgos, limitaciones ambientales y prohibición normativa.

      p.mb-5 Para diferenciar conceptos que pueden confundirse durante el análisis del escenario, se presentan las siguientes categorías:
      
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/24.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-4.p-4(titulo="Riesgo ambiental")
              p.mb-0 Puede comprenderse a partir de la posibilidad de que determinadas condiciones o interacciones generen consecuencias sobre los componentes naturales, el recorrido o las personas involucradas. Su identificación requiere considerar la fuente, el elemento expuesto, las características del lugar y las circunstancias en las que podría producirse el efecto.

            .tarjeta.bg-color-4.p-4(titulo="Limitación ambiental")
              p.mb-0 Corresponde a una condición que puede restringir el uso turístico de determinado espacio o requerir consideraciones especiales. Puede derivarse de sensibilidad ecológica, temporalidad, condiciones meteorológicas, características físicas, disposiciones de manejo territorial u otros factores relacionados con el escenario.

            .tarjeta.bg-color-4.p-4(titulo="Prohibición normativa")
              p.mb-0 A diferencia de una limitación ambiental derivada de las características del entorno, una prohibición responde a una disposición jurídica, administrativa o técnica que establece restricciones específicas. Ambas deben reconocerse durante el análisis, aunque su origen sea diferente.

      p.mb-5 La identificación de riesgos o limitaciones no implica todavía establecer las medidas para tratarlos. En correspondencia con el alcance del resultado de aprendizaje, esta etapa se concentra en reconocer, clasificar e interpretar las condiciones presentes. La planificación de acciones ambientales forma parte de un momento posterior del proceso formativo.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Una lectura integrada del escenario

      p.mb-3 Las condiciones ambientales de un escenario de #[i rappel] deben analizarse como un sistema de relaciones entre características físicas, variables meteorológicas, componentes biológicos, accesos, formas de uso y condiciones territoriales. Una modificación en alguno de estos elementos puede alterar las características generales del recorrido.
      p.mb-0 El análisis integrado proporciona información para caracterizar con mayor precisión el escenario turístico.



      Separador
      #t_2_3.titulo-segundo.color-secundario(data-aos='fade-right')
        h2 2.3 Ruta de descenso
      
      .row.justify-content-center.mb-5.bg-fondo-2(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t2/25.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t2/26.svg')
          p.mb-2 La ruta de descenso corresponde al trazado utilizado para desarrollar la actividad de #[i rappel] dentro de un escenario determinado. Desde una perspectiva turística y ambiental, su comprensión considera los diferentes espacios funcionales utilizados a lo largo del recorrido y no únicamente el segmento vertical o inclinado donde ocurre el descenso. Cada sector puede presentar características particulares que influyen en las condiciones ambientales, operativas o de seguridad.
          p.mb-0 En el turismo de aventura, las características de una ruta se encuentran estrechamente relacionadas con las particularidades del territorio. El relieve, la altura, la inclinación, el tipo de superficie, las condiciones meteorológicas, la presencia de agua o las características de los accesos pueden modificar la dinámica de la actividad. La NTS-AV 011 establece requisitos para la operación de actividades de rapel, incorporando aspectos asociados con planificación, información del recorrido, seguridad, equipos o gestión de riesgos (Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC], 2007).
      p.mb-5 Desde una perspectiva ambiental, caracterizar la ruta permite reconocer dónde se producen las principales interacciones entre participantes y entorno. El análisis espacial facilita diferenciar zonas de tránsito, sectores de concentración, superficies utilizadas para el descenso, áreas sensibles o lugares expuestos a determinadas condiciones naturales. Esta información proporciona una base para identificar posteriormente los posibles impactos relacionados con el desarrollo de la actividad.

      .titulo-tercer-nivel.mb-4(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características de la ruta

      p.mb-5 La caracterización de una ruta requiere reconocer diferentes elementos que permiten identificar las particularidades de cada recorrido.


      .titulo-tercer-nivel.mb-4(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos para caracterizar una ruta de #[i rappel]

      p.mb-5 La caracterización de una ruta requiere reconocer diferentes elementos que permiten identificar las particularidades de cada recorrido.

      SlyderF(columnas="col-lg-6 col-xl-4" data-aos='fade-right').mb-5
        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/27.svg')
          h4.text-center Localización
          p.mb-0.text-center Ubicación del escenario, contexto territorial y accesos disponibles.
        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/28.svg')
          h4.text-center Longitud
          p.mb-0.text-center Extensión del recorrido, incluida la aproximación, el descenso o el retorno cuando forman parte de la experiencia turística.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/29.svg')
          h4.text-center Altura
          p.mb-0.text-center Diferencia vertical asociada con el tramo de descenso.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/30.svg')
          h4.text-center Pendiente
          p.mb-0.text-center Grado de inclinación de las superficies o sectores del recorrido.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/31.svg')
          h4.text-center Superficie
          p.mb-0.text-center Tipo, textura, humedad, irregularidades y presencia de vegetación, agua o material suelto.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/32.svg')
          h4.text-center Condiciones ambientales
          p.mb-0.text-center Temperatura, precipitación, viento, humedad, presencia de agua y otras variables del entorno que pueden modificar temporalmente el recorrido.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/33.svg')
          h4.text-center Componentes biológicos
          p.mb-0.text-center Vegetación, fauna y otros elementos ecológicos presentes en las zonas utilizadas.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/34.svg')
          h4.text-center Acceso
          p.mb-0.text-center Condiciones de aproximación al punto donde se desarrolla la actividad.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/35.svg')
          h4.text-center Área de llegada
          p.mb-0.text-center Características del espacio donde finaliza el descenso.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/36.svg')
          h4.text-center Retorno
          p.mb-0.text-center Condiciones del trayecto utilizado para finalizar el recorrido turístico.
        
      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        p.mb-0 La caracterización integrada de estos elementos permite obtener una lectura más completa de la ruta. Dos descensos con una altura semejante pueden presentar condiciones muy diferentes debido al tipo de superficie, exposición, humedad, acceso o características ambientales. Por esta razón, la valoración de una ruta no debe sustentarse en una única variable.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de ruta según las características del escenario

      p.mb-5(data-aos='fade-right') Las rutas pueden diferenciarse según el tipo de espacio donde se desarrolla el descenso. Esta clasificación facilita organizar información sobre el escenario, aunque no reemplaza la caracterización particular de cada recorrido.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2  Escenarios asociados a las rutas de #[i rappel]
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t2/37.svg')
            h4.text-center Superficies rocosas
            p.text-small.mb-0 El descenso se desarrolla principalmente sobre formaciones naturales cuya configuración depende de las características geológicas o geomorfológicas del lugar. La textura, inclinación, presencia de material suelto, fracturas visibles o vegetación asociada forman parte de la información ambiental relevante.

        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t2/38.svg')
            h4.text-center Cascadas o cursos de agua
            p.text-small.mb-0 Incorporan condiciones relacionadas con humedad, flujo de agua, variaciones de caudal y características de las superficies mojadas. Estas condiciones pueden cambiar considerablemente como consecuencia de precipitaciones ocurridas en el área de influencia.

        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t2/39.svg')
            h4.text-center Cañones o formaciones encajonadas
            p.text-small.mb-0 La configuración del relieve puede generar condiciones particulares de acceso, exposición, circulación de agua, sombra o concentración de humedad. El análisis requiere considerar el recorrido completo.

        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.color-primario.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t2/40.svg')
            h4.text-center Escenarios acondicionados
            p.text-small.mb-0 Corresponden a estructuras destinadas o adaptadas para la práctica. Aunque presentan un mayor grado de intervención, requieren reconocimiento del entorno inmediato, condiciones meteorológicas, accesos e interacción con otros usos del espacio.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Duración del recorrido
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/42.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/41.svg')
              .col-sm-12.col-lg-10
                  p.mb-0  La duración representa otro elemento de caracterización debido a que permite reconocer el tiempo estimado de exposición e interacción de los participantes con el escenario. No corresponde únicamente al tiempo empleado durante el descenso. Puede comprender desplazamiento de aproximación, preparación, espera, actividad principal, salida o retorno.
            p.mb-0 Diversos factores pueden modificar esta duración. La longitud del acceso, las características del terreno, las condiciones ambientales, el tamaño del grupo, la organización de la actividad o situaciones imprevistas pueden generar diferencias entre el tiempo estimado y el tiempo real.
      p.mb-5(data-aos='fade-right') Desde el análisis ambiental, la duración permite comprender la permanencia de visitantes en determinados sectores. Una zona utilizada únicamente como tránsito presenta una dinámica diferente de otra donde el grupo permanece durante periodos prolongados. Esta distinción resulta relevante para identificar posteriormente posibles presiones sobre el entorno.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Nivel de riesgo de la ruta
      
      .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.br-3.br-4.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block.br-4(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/43.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 El riesgo en una actividad de turismo de aventura requiere comprender la relación entre peligros presentes, exposición o posibles consecuencias. La NTC-ISO 21101 aborda la gestión de la seguridad desde un enfoque sistemático orientado a identificar peligros, evaluar riesgos o establecer mecanismos para su tratamiento dentro de la prestación de servicios de turismo de aventura (ICONTEC, 2014).
          p.mb-0 En una ruta de #[i rappel] pueden existir factores relacionados con características físicas del terreno, condiciones meteorológicas, presencia de agua, material suelto, cambios de superficie, accesos o exposición. Su identificación forma parte del reconocimiento inicial del escenario; sin embargo, la determinación técnica del nivel de riesgo requiere procedimientos específicos de evaluación.

      p.mb-2(data-aos='fade-right') Por este motivo, expresiones como bajo, medio o alto no deberían asignarse únicamente a partir de una apreciación subjetiva. La valoración debe responder a criterios definidos por el prestador, procedimientos de gestión de riesgos, requisitos técnicos o información verificable del escenario.
      p.mb-5(data-aos='fade-right') Para organizar la lectura inicial de una ruta, pueden emplearse preguntas que orienten la identificación de sus principales características.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Preguntas para analizar una ruta de descenso

      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card" data-aos='fade-right').mb-5
        .row.justify-content-center.align-items-center.mb-0(titulo="Características físicas")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.px-4.py-4
                p.mb-0 ¿Qué condiciones presenta el terreno o la superficie utilizada?
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/44.png')

        .row.justify-content-center.align-items-center.mb-0(titulo="Condiciones meteorológicas")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.px-4.py-4
                p.mb-0 ¿Qué variables atmosféricas pueden modificar las características del recorrido?
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/45.png')

        .row.justify-content-center.align-items-center.mb-0(titulo="Accesibilidad")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.px-4.py-4
                p.mb-0 ¿Qué condiciones presentan los sectores de aproximación, entrada, salida o retorno?
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/46.png')

        .row.justify-content-center.align-items-center.mb-0(titulo="Componentes ambientales")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.px-4.py-4
                p.mb-0 ¿Qué elementos naturales se encuentran presentes en las zonas utilizadas?
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/47.png')

        .row.justify-content-center.align-items-center.mb-0(titulo="Temporalidad")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.px-4.py-4
                p.mb-0 ¿Las condiciones del escenario cambian según temporada, clima u horario?
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/48.png')

        .row.justify-content-center.align-items-center.mb-0(titulo="Exposición")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.px-4.py-4
                p.mb-0 ¿Qué sectores presentan condiciones particulares relacionadas con altura, viento, agua o configuración del relieve?
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/49.png')

        .row.justify-content-center.align-items-center.mb-0(titulo="Duración")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.px-4.py-4
                p.mb-0 ¿Cuánto tiempo requiere el recorrido completo o la permanencia en sus diferentes sectores?
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/50.png')

        .row.justify-content-center.align-items-center.mb-0(titulo="Uso turístico")
          .col-12.pcus-2
            .row.justify-content-center.mb-5
              .col-sm-12.col-lg-6.px-4.py-4
                p.mb-0 ¿Qué espacios concentran tránsito, permanencia o desarrollo de la actividad?
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/51.png')
      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        p.mb-0 Estas preguntas favorecen una lectura organizada de la ruta sin convertir la caracterización en una valoración exclusivamente técnica. La información obtenida permite relacionar las características físicas del recorrido con las condiciones ambientales, reconocer variaciones temporales o localizar los espacios donde se producen las principales interacciones turísticas.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Lectura integral de la ruta de descenso

      p.mb-5 La ruta puede comprenderse mediante una secuencia espacial formada por diferentes sectores funcionales.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 2.]  Secuencia espacial de una ruta turística de #[i rappel]
          figure.mb-0
            img.mb-4(src='@/assets/curso/temas/t2/52.svg', alt='Secuencia de una ruta de rappel: acceso, aproximación, preparación, inicio del descenso, descenso, llegada y salida o retorno.').mb-0
             
      .row.justify-content-center.mb-5.bg-fondo-2(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t2/53.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t2/54.svg')
          p.mb-3 Esta secuencia facilita reconocer que las condiciones ambientales pueden variar dentro de una misma experiencia. El acceso podría atravesar un sendero con determinada cobertura vegetal; la preparación podría concentrarse en un espacio reducido; el descenso podría desarrollarse sobre una superficie rocosa; la llegada podría localizarse cerca de un cuerpo de agua. Cada sector aporta información diferente al análisis.
          p.mb-0 Caracterizar la ruta desde esta perspectiva permite relacionar el escenario con las condiciones reales de uso turístico. Esta información adquiere especial importancia cuando se analizan los efectos derivados de la actividad, debido a que los impactos ambientales pueden presentarse en diferentes sectores del recorrido, responder a distintas causas o afectar diversos componentes del entorno.

      p.mb-0 La comprensión de las características del #[i rappel], las condiciones ambientales del escenario y la configuración de la ruta proporciona así la base para avanzar hacia el análisis de los impactos ambientales asociados a las actividades turísticas de #[i rappel], donde será necesario diferenciar su concepto, clasificación, causas y efectos.






  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
