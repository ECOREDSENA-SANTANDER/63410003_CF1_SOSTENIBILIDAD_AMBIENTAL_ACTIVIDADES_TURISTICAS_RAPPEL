<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La sostenibilidad aplicada al turismo de aventura permite comprender la relación entre la actividad turística, las características del territorio y la conservación de los recursos naturales. En las actividades turísticas de <i>rappel</i>, este análisis comprende el reconocimiento de las condiciones físicas, ambientales, meteorológicas y biológicas del escenario, así como las características de la ruta de descenso, los accesos, las zonas de permanencia y los factores que pueden influir en la seguridad y el uso del territorio. A partir de esta caracterización es posible identificar impactos ambientales, diferenciar sus causas y efectos, reconocer riesgos y limitaciones y organizar la información obtenida mediante evidencias verificables. De manera complementaria, la interpretación de los referentes ambientales, turísticos y técnicos permite relacionar la actividad con las disposiciones aplicables al escenario, mientras que los principios éticos y de responsabilidad ambiental orientan una actuación coherente con la conservación y el desarrollo responsable del turismo de aventura.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre sostenibilidad, condiciones del escenario, impactos ambientales, normativa y ética aplicadas al rappel turístico.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
