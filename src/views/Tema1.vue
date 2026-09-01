<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos='fade-right')
        .titulo-principal__numero
          span 1
        h1 Sostenibilidad aplicada al turismo de aventura
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5.br-1.br-2(data-aos='fade-right')
        .bloque-texto-g__img.br-1.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-2 La sostenibilidad representa un referente fundamental para orientar el desarrollo turístico en espacios naturales, especialmente cuando las actividades implican contacto directo con ecosistemas, paisajes o recursos de valor ambiental. Su aplicación supone reconocer que el aprovechamiento turístico debe responder a las características del territorio, procurando mantener los procesos ecológicos, favorecer beneficios sociales, además de promover una actividad económica viable en el tiempo.
          p.mb-0 En Colombia, este enfoque ha adquirido especial relevancia dentro de la planificación turística. La Política de Turismo Sostenible plantea la necesidad de fortalecer la sostenibilidad como factor de competitividad del sector, mediante una gestión responsable del capital natural, la generación de valor para las comunidades receptoras, así como la adopción de prácticas que reduzcan los efectos negativos derivados de la actividad turística (Ministerio de Comercio, Industria y Turismo [MINCIT], 2020).
      
      
      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/2.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/3.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 En el turismo de aventura, la sostenibilidad adquiere características particulares debido al tipo de escenarios utilizados para desarrollar las actividades. Montañas, formaciones rocosas, cañones, cavernas, cascadas u otros espacios naturales pueden presentar condiciones de fragilidad que requieren reconocer las dinámicas propias del entorno antes de establecer formas de aprovechamiento turístico. La interacción con estos escenarios demanda comprender los efectos que pueden generarse sobre sus componentes ambientales, además de las responsabilidades asociadas al comportamiento de prestadores, guías o visitantes.
            p.mb-0 Desde esta perspectiva, analizar una actividad turística de #[i rappel] no se limita a reconocer las condiciones necesarias para efectuar el descenso. También requiere interpretar las características ambientales del escenario, las particularidades de la ruta, los posibles impactos derivados de la actividad, así como los referentes normativos o éticos aplicables. La sostenibilidad proporciona, por tanto, un marco para comprender la relación entre actividad turística, territorio, conservación y responsabilidad.
      
      Separador
      #t_1_1.titulo-segundo.color-secundario(data-aos='fade-right')
        h2 1.1 Sostenibilidad: conceptos y principios
      
      .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.br-3.br-4.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block.br-4(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/4.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-2 El concepto de sostenibilidad se relaciona con la posibilidad de satisfacer las necesidades actuales sin comprometer las condiciones necesarias para que las generaciones futuras puedan atender las propias. Este enfoque tiene como uno de sus antecedentes fundamentales el informe Nuestro futuro común, en el cual se define el desarrollo sostenible como aquel que “satisface las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer las propias” (Comisión Mundial sobre Medio Ambiente y Desarrollo [CMMAD], 1987, p. 59).
          p.mb-0 Esta concepción permite comprender la sostenibilidad como un proceso que trasciende la protección aislada de los recursos naturales. Su alcance incorpora dimensiones ambientales, sociales y económicas que interactúan dentro de un territorio. En el ámbito turístico, estas dimensiones permiten analizar de manera integral las relaciones generadas entre visitantes, prestadores de servicios, comunidades receptoras, actividades económicas y recursos utilizados para desarrollar la experiencia.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Dimensiones de la sostenibilidad
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/5.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-4.p-4(titulo="Dimensión ambiental")
              p.mb-0 Se orienta a la conservación de los ecosistemas, el uso responsable de los recursos naturales, la prevención de impactos y el mantenimiento de las condiciones ecológicas necesarias para el funcionamiento de los territorios. En actividades de aventura, resulta especialmente relevante debido a la utilización directa de espacios naturales como soporte de la experiencia turística.
            .tarjeta.bg-color-4.p-4(titulo="Dimensión social")
              p.mb-0 Considera aspectos relacionados con el respeto hacia las comunidades receptoras, sus dinámicas territoriales, valores culturales, formas de vida y derechos. Una actividad turística sostenible reconoce que el territorio no corresponde únicamente a un espacio para el disfrute del visitante, sino también a un entorno donde existen relaciones sociales, culturales y productivas que deben ser respetadas.
            
            .tarjeta.bg-color-4.p-4(titulo="Dimensión económica")
              p.mb-0 Comprende la capacidad de la actividad turística para generar beneficios, favorecer oportunidades de desarrollo local y mantener su viabilidad sin deteriorar los recursos que sustentan la experiencia. La conservación del patrimonio natural también guarda relación con la permanencia de la propia actividad turística, debido a que la pérdida de calidad ambiental puede reducir el valor del escenario como espacio de visita.
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .bg-color-1.p-5.mb-5
            p.mb-0 La Organización Mundial del Turismo señala que los principios de sostenibilidad deben considerar de manera equilibrada las dimensiones ambiental, económica y sociocultural del desarrollo turístico, buscando garantizar su permanencia en el largo plazo (Organización Mundial del Turismo [OMT], s. f.). Este planteamiento permite trasladar la sostenibilidad desde una formulación general hacia criterios aplicables a la gestión de destinos, productos o actividades turísticas.
          p.mb-0 Entre los principios asociados a la sostenibilidad se encuentran el uso responsable de los recursos, la conservación de la biodiversidad, la prevención de impactos, el respeto por las comunidades locales, la responsabilidad de los actores involucrados, además de la búsqueda de beneficios compatibles con la capacidad del territorio. Estos principios proporcionan referentes para analizar si una actividad turística mantiene una relación adecuada con el espacio donde se desarrolla.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/6.png')

      p.mb-0(data-aos='fade-right') En el caso del #[i rappel] turístico, su aplicación implica reconocer las condiciones del escenario antes de valorar la actividad desde una perspectiva sostenible. Aspectos relacionados con la sensibilidad del entorno, las características de la ruta, la presencia de especies, las condiciones del terreno, la intensidad de uso o las posibles alteraciones permiten comprender la relación entre la práctica turística y el espacio natural. De esta manera, la sostenibilidad funciona como criterio de análisis para reconocer las condiciones bajo las cuales puede desarrollarse una experiencia turística responsable.


      Separador
      #t_1_2.titulo-segundo.color-secundario(data-aos='fade-right')
        h2 1.2 Turismo sostenible y su aplicación en el turismo de aventura
      
      .row.justify-content-center.mb-5.bg-fondo-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t1/7.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t1/8.svg')
          p.mb-2  El turismo sostenible traslada los principios generales de la sostenibilidad al funcionamiento de destinos, empresas, productos, servicios o experiencias turísticas. Su enfoque parte del reconocimiento de que el turismo genera relaciones económicas, sociales, culturales y ambientales en los territorios donde se desarrolla. Por esta razón, la sostenibilidad no corresponde exclusivamente a una modalidad turística, sino a un criterio transversal que puede aplicarse a diferentes formas de turismo.
          p.mb-0 La Organización Mundial del Turismo plantea que las directrices para el desarrollo sostenible del turismo son aplicables a todas sus modalidades, incluidos los distintos tipos de destinos. Desde este enfoque, resulta necesario mantener un equilibrio entre las dimensiones ambiental, económica y sociocultural para favorecer la sostenibilidad a largo plazo (Organización Mundial del Turismo [OMT], s. f.). En consecuencia, una actividad no adquiere la condición de sostenible únicamente por desarrollarse en un entorno natural; requiere incorporar criterios que orienten la relación entre operación turística, visitantes, comunidades receptoras y recursos del territorio.


      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/9.png')
        .col-sm-12.col-lg-9
            .row.justify-content-center.mb-4
              .col-sm-12.col-lg-5.d-none.d-lg-block.bg-color-1.px-5.py-3
                img.wcus-2(src='@/assets/curso/temas/t1/10.svg')
              .col-sm-12.col-lg-7.bg-color-5.p-4
                  p.mb-0.mcus-2 En Colombia, la Política de Turismo Sostenible: Unidos por la Naturaleza reconoce la riqueza natural como uno de los principales activos para la competitividad turística del país. Al mismo tiempo, identifica la necesidad de prevenir o mitigar los impactos derivados del desarrollo turístico, fortalecer la gestión de los destinos, promover comportamientos responsables e incorporar la sostenibilidad en las decisiones de los actores del sector (Ministerio de Comercio, Industria y Turismo [MINCIT], 2020).
            p.mb-0 Esta perspectiva resulta particularmente relevante para el turismo de aventura. A diferencia de actividades desarrolladas principalmente en espacios urbanos o instalaciones convencionales, una parte importante de las experiencias de aventura utiliza escenarios naturales cuyas características forman parte esencial del producto turístico. Relieve, cuerpos de agua, formaciones rocosas, cuevas, cañones, bosques, montañas o condiciones climáticas pueden determinar el tipo de actividad posible, su nivel de exigencia, las características del recorrido o las condiciones para su desarrollo.


      .titulo-tercer-nivel.mb-4(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Turismo de aventura: relación entre experiencia, actividad y entorno

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5.br-1.br-2(data-aos='fade-right')
        .bloque-texto-g__img.br-1.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/11.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-2 El turismo de aventura comprende experiencias que generalmente combinan desplazamiento, interacción con el entorno, actividad física, percepción de riesgo o utilización de determinadas técnicas para realizar el recorrido. Su desarrollo puede involucrar escenarios con características naturales particulares, por lo cual la calidad de la experiencia depende, en buena medida, de las condiciones del territorio.
          p.mb-0 La relación entre turismo de aventura y sostenibilidad puede comprenderse desde dos perspectivas complementarias. Por una parte, los espacios naturales ofrecen recursos que hacen posible la experiencia turística. Por otra, la actividad genera interacciones capaces de producir cambios sobre esos mismos espacios.

      p.mb-5(data-aos='fade-right') El tránsito frecuente, la concentración de visitantes, la generación de residuos, el ruido, la alteración de superficies o determinados comportamientos pueden producir efectos cuya magnitud depende de las características del escenario, la intensidad de uso, la temporalidad o las prácticas adoptadas.


      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/12.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/13.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 Por este motivo, la sostenibilidad aplicada al turismo de aventura requiere reconocer las particularidades ambientales del lugar antes de analizar las condiciones de desarrollo de una actividad. No todos los escenarios presentan la misma sensibilidad, capacidad de recuperación o exposición frente a las intervenciones humanas. Una práctica que puede generar efectos reducidos en determinado espacio podría ocasionar mayores alteraciones en otro con características ecológicas diferentes.
            p.mb-0 La Política de Turismo Sostenible plantea precisamente la necesidad de fortalecer la gestión ambiental del turismo mediante herramientas que permitan prevenir impactos negativos sobre el capital natural, promover prácticas responsables o mejorar la capacidad de los actores para tomar decisiones relacionadas con el uso turístico del territorio (MINCIT, 2020). Esta orientación permite comprender que la sostenibilidad requiere pasar de principios generales a criterios observables dentro de la operación turística.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios del turismo sostenible aplicados al turismo de aventura
      
      p.mb-5(data-aos='fade-right') La aplicación de la sostenibilidad en actividades de aventura puede organizarse mediante diferentes ámbitos de análisis.
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 1.] Principios del turismo sostenible aplicados al turismo de aventura
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .tabla-a.color-acento-contenido.mb-0
            table
              thead
                tr
                  th Principio
                  th Aplicación en turismo de aventura
              tbody
                tr
                  td Conservación del entorno
                  td Reconocimiento del valor de los ecosistemas, paisajes, especies o elementos naturales presentes en los escenarios utilizados.
                tr
                  td Uso responsable de recursos
                  td Desarrollo de prácticas orientadas a evitar el deterioro innecesario de los recursos naturales.
                tr
                  td Prevención de impactos
                  td Identificación de actividades, comportamientos o condiciones que pueden generar alteraciones en el escenario.
                tr
                  td Respeto por el territorio
                  td Reconocimiento de las características ambientales, sociales o culturales propias del espacio donde se desarrolla la actividad.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/14.png')

      p.mb-5(data-aos='fade-right') Estos principios permiten comprender que la sostenibilidad no depende de una acción aislada. La conservación del entorno se relaciona con el uso responsable de los recursos; la prevención requiere conocer previamente las características del escenario; el comportamiento del visitante influye sobre los efectos generados durante el recorrido. De forma similar, la continuidad de una actividad turística depende de conservar las condiciones del entorno.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sostenibilidad más allá del escenario natural

      p.mb-5(data-aos='fade-right') La localización de una actividad en un espacio natural no permite calificarla automáticamente como sostenible. La sostenibilidad depende de la forma en que se planifica, desarrolla, controla o evalúa la actividad, además de su relación con las características ambientales, sociales o económicas del territorio.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación de la sostenibilidad en actividades turísticas de #[i rappel]
      
      .row.justify-content-center.mb-5.bg-fondo-1(data-aos='fade-right')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t1/16.svg')
          p.mb-2 En el #[i rappel], la relación con el entorno presenta particularidades que requieren análisis específico. La actividad implica un descenso controlado mediante técnicas, equipos o sistemas destinados a permitir el desplazamiento vertical o inclinado. Cuando forma parte de una experiencia turística desarrollada en un escenario natural, la superficie de descenso, los puntos de acceso, las zonas de aproximación, los espacios de espera o las rutas utilizadas por los participantes pasan a formar parte del área de interacción turística.

          p.mb-0 Desde una perspectiva ambiental, el análisis no debe concentrarse únicamente en el punto donde se realiza el descenso. El recorrido comienza antes de llegar a la zona de práctica. Los accesos utilizados por los grupos, las áreas destinadas a preparación, los lugares de permanencia o las rutas de salida también pueden presentar condiciones ambientales relevantes. De esta manera, el escenario turístico de #[i rappel] debe comprenderse como un espacio de interacción más amplio que el tramo vertical utilizado durante la maniobra.  
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-3
          img(src='@/assets/curso/temas/t1/15.png')
      
      p.mb-3(data-aos='fade-right') Las características del lugar pueden modificar las condiciones ambientales asociadas a la actividad. Una pared rocosa ubicada en un ecosistema seco presenta dinámicas diferentes a una cascada, un cañón húmedo o una formación situada en un área de alta montaña. Factores como pendiente, cobertura vegetal, humedad, precipitación, presencia de fauna, estabilidad del terreno o sensibilidad de determinados componentes naturales permiten caracterizar el contexto en el cual se desarrolla la experiencia.

      p.mb-5(data-aos='fade-right') En consecuencia, aplicar criterios de sostenibilidad requiere reconocer previamente esas particularidades. El propósito no consiste solamente en establecer si una actividad puede realizarse técnicamente, sino en comprender cómo interactúa con el escenario, qué componentes podrían resultar afectados, cuáles condiciones requieren especial atención o qué referentes deben considerarse para interpretar su desarrollo responsable.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sostenibilidad como criterio de análisis


      .row.justify-content-center.mb-4(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block.bg-color-1.px-5.py-3
          img(src='@/assets/curso/temas/t1/17.svg')
        .col-sm-12.col-lg-5.bg-color-5.p-4
            p.mb-3.mcus-4 Para efectos de este componente formativo, la sostenibilidad se aborda principalmente como criterio para analizar las condiciones de una actividad turística de #[i rappel]. Esto implica recopilar información sobre el escenario, reconocer las características de la ruta, identificar factores ambientales relevantes, diferenciar posibles impactos o relacionar los hallazgos con los referentes aplicables.
            p.mb-0 Este enfoque mantiene correspondencia con el resultado de aprendizaje, cuyo alcance se concentra en analizar condiciones ambientales o de sostenibilidad. Las decisiones posteriores relacionadas con medidas de manejo, buenas prácticas, organización de grupos, capacidad de carga, gestión de residuos o seguimiento ambiental requieren primero una comprensión adecuada del escenario.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/18.png')

      p.mb-5(data-aos='fade-right') La relación entre estos elementos puede representarse mediante una secuencia que vincula las características del entorno, las condiciones de la actividad, la interacción con el escenario, los posibles impactos y el análisis de sostenibilidad.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 1.]  Elementos para el análisis de sostenibilidad en actividades turísticas de aventura
          figure.mb-0
            img.mb-4(src='@/assets/curso/temas/t1/19.svg', alt='Secuencia para analizar la sostenibilidad en turismo de aventura: entorno, actividad, interacción con el escenario, impactos y evaluación.').mb-0
            figcaption Nota. Elaboración propia con base en Ministerio de Comercio, Industria y Turismo (2020) y Organización Mundial del Turismo (s. f.).

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-12
          .cajon.color-acento-contenido.p-5
            p.mb-0 Cada elemento aporta información al siguiente. Las características del entorno permiten comprender las condiciones en las que ocurre la actividad; estas determinan formas particulares de interacción; dicha interacción puede generar efectos positivos o negativos. Finalmente, el análisis conjunto permite valorar la relación existente entre la actividad turística, las características del recorrido o la conservación del escenario.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 El escenario natural también tiene funciones propias
      

      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/20.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 En turismo de aventura, analizar la sostenibilidad implica reconocer que el escenario natural forma parte del producto turístico, pero conserva funciones ecológicas, sociales o territoriales independientes de su aprovechamiento recreativo. Por ello, su valoración no debe limitarse a la utilidad que representa para la actividad.
            p.mb-0 La incorporación de estos principios permite avanzar desde una comprensión general de la sostenibilidad hacia el análisis específico de las actividades turísticas de #[i rappel]. A partir de esta base, posteriormente se abordarán los referentes jurídicos, turísticos y técnicos aplicables a la actividad.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/21.png')








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
