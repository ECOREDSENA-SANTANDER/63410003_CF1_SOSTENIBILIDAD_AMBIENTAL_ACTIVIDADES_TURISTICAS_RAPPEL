<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .bg-color-1.p-4.mb-3
          p.mb-0 El turismo de aventura se desarrolla en escenarios que demandan una interacción directa entre las personas, el territorio y los recursos presentes en el entorno. Esta relación requiere comprender las características ambientales del lugar, las particularidades de cada actividad y los posibles efectos derivados de su práctica. En este contexto, la sostenibilidad aporta principios para armonizar el aprovechamiento turístico con la conservación de los espacios donde se desarrollan las experiencias, especialmente en actividades como el #[i rappel], cuyas condiciones físicas, ambientales y climáticas inciden en las características del recorrido.
        p.mb-0 Este componente formativo aborda fundamentos relacionados con sostenibilidad, turismo sostenible, #[i rappel], rutas de descenso, condiciones del escenario, impactos ambientales, normativa aplicable y ética turística. A través de estos contenidos, el aprendiz podrá reconocer los factores que intervienen en la relación entre la actividad turística y el entorno, con el propósito de analizar las condiciones ambientales y de sostenibilidad asociadas a las actividades turísticas de #[i rappel], considerando las características particulares del recorrido y los referentes aplicables a su desarrollo responsable.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/BjOqVRmmyew?si=jYYi8tqbSRKJdCGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
