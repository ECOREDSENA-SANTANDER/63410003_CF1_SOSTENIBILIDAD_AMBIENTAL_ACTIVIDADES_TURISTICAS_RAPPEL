export default {
  global: {
    Name: 'Fundamentos ambientales y normativos para actividades turísticas de rappel.',
    Description: 'El componente formativo aborda fundamentos de sostenibilidad aplicados al turismo de aventura, características del rappel, rutas de descenso, condiciones ambientales y requerimientos de seguridad, junto con la identificación de impactos, riesgos y limitaciones ambientales. Integra referentes normativos, técnicos y éticos para analizar responsablemente actividades turísticas de rappel, de acuerdo con las características del recorrido y las condiciones del entorno.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
    menuPrincipal: {
  "menu": [
    {
      "nombreRuta": "inicio",
      "icono": "fas fa-home",
      "titulo": "Volver al inicio"
    },
    {
      "nombreRuta": "introduccion",
      "icono": "fas fa-info-circle",
      "titulo": "Introducción",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "tema1",
      "numero": "1",
      "titulo": "Sostenibilidad aplicada al turismo de aventura",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "1.1",
          "titulo": "Sostenibilidad: conceptos y principios",
          "hash": "t_1_1"
        },
        {
          "numero": "1.2",
          "titulo": "Turismo sostenible y su aplicación en el turismo de aventura",
          "hash": "t_1_2"
        }
      ]
    },
    {
      "nombreRuta": "tema2",
      "numero": "2",
      "titulo": "<i>Rappel</i> y condiciones del escenario turístico",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "2.1",
          "titulo": "<i>Rappel</i>: concepto y características",
          "hash": "t_2_1"
        },
        {
          "numero": "2.2",
          "titulo": "Condiciones ambientales y de seguridad",
          "hash": "t_2_2"
        },
        {
          "numero": "2.3",
          "titulo": "Ruta de descenso",
          "hash": "t_2_3"
        }
      ]
    },
    {
      "nombreRuta": "tema3",
      "numero": "3",
      "titulo": "Impactos ambientales en actividades turísticas de <i>Rappel</i>",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "3.1",
          "titulo": "Impacto ambiental: concepto y clasificación",
          "hash": "t_3_1"
        },
        {
          "numero": "3.2",
          "titulo": "Causas y efectos de los impactos ambientales",
          "hash": "t_3_2"
        },
        {
          "numero": "3.3",
          "titulo": "Identificación de impactos, riesgos y limitaciones ambientales",
          "hash": "t_3_3"
        }
      ]
    },
    {
      "nombreRuta": "tema4",
      "numero": "4",
      "titulo": "Normativa y ética en actividades turísticas de <i>Rappel</i>",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "4.1",
          "titulo": "Normativa ambiental y turística aplicable",
          "hash": "t_4_1"
        },
        {
          "numero": "4.2",
          "titulo": "Normativa técnica para actividades turísticas de <i>Rappel</i>",
          "hash": "t_4_2"
        },
        {
          "numero": "4.3",
          "titulo": "Ética turística y responsabilidad ambiental",
          "hash": "t_4_3"
        }
      ]
    }
  ],
  "subMenu": [
    {
      "icono": "fas fa-sitemap",
      "titulo": "Síntesis",
      "nombreRuta": "sintesis",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "actividad",
      "icono": "far fa-question-circle",
      "titulo": "Actividad didáctica",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "glosario",
      "icono": "fas fa-sort-alpha-down",
      "titulo": "Glosario"
    },
    {
      "icono": "fas fa-book",
      "titulo": "Referencias bibliográficas",
      "nombreRuta": "referencias"
    },
    {
      "icono": "fas fa-file-pdf",
      "titulo": "Descargar PDF",
      "download": "downloads/dist.pdf"
    },
    {
      "icono": "fas fa-download",
      "titulo": "Descargar material",
      "download": "downloads/material.zip"
    },
    {
      "icono": "far fa-registered",
      "titulo": "Créditos",
      "nombreRuta": "creditos"
    }
  ]
},
  glosario: [
    {
      termino: 'Actividad turística de <i>rappel</i>',
      significado: 'experiencia de turismo de aventura que comprende el descenso controlado mediante cuerda en superficies verticales o inclinadas, desarrollada bajo condiciones técnicas, ambientales, de seguridad y normativas aplicables.',
    },
    {
      termino: 'Condición ambiental',
      significado: 'característica física, biológica o territorial presente en un escenario que permite comprender las particularidades del entorno donde se desarrolla una actividad turística.',
    },
    {
      termino: 'Ética turística',
      significado: 'conjunto de principios que orientan comportamientos responsables en la actividad turística, considerando el respeto por las personas, las comunidades, el patrimonio, los recursos naturales y las disposiciones aplicables.',
    },
    {
      termino: 'Impacto ambiental',
      significado: 'alteración producida sobre uno o varios componentes del ambiente como consecuencia de una acción, actividad o intervención.',
    },
    {
      termino: 'Limitación ambiental',
      significado: 'condición propia del territorio o del ecosistema que puede restringir o condicionar el desarrollo de una actividad turística debido a su sensibilidad, características físicas, temporalidad u otros factores ambientales.',
    },
    {
      termino: 'Normativa ambiental',
      significado: 'conjunto de disposiciones jurídicas que regulan la protección, conservación, manejo o aprovechamiento de los recursos naturales y las condiciones ambientales del territorio.',
    },
    {
      termino: 'Normativa técnica',
      significado: 'conjunto de requisitos, especificaciones o criterios especializados que orientan procesos, servicios o actividades, como los establecidos para la operación y la gestión de la seguridad en turismo de aventura.',
    },
    {
      termino: '<i>rappel</i>',
      significado: 'técnica de descenso controlado mediante cuerda utilizada sobre superficies verticales o inclinadas que, en el ámbito turístico, requiere condiciones específicas de operación y seguridad.',
    },
    {
      termino: 'Responsabilidad ambiental',
      significado: 'compromiso de actuar considerando las consecuencias que las decisiones, comportamientos o actividades pueden generar sobre los recursos naturales y las condiciones del entorno.',
    },
    {
      termino: 'Riesgo',
      significado: 'posibilidad de que una situación, peligro o condición produzca consecuencias sobre las personas, el ambiente o el desarrollo de una actividad turística.',
    },
    {
      termino: 'Ruta de descenso',
      significado: 'recorrido asociado con el desarrollo de una actividad turística de <i>rappel</i>, integrado por sectores funcionales como acceso, aproximación, preparación, descenso, llegada, salida o retorno.',
    },
    {
      termino: 'Sensibilidad ambiental',
      significado: 'grado en que un componente natural, ecosistema o espacio puede resultar susceptible a modificaciones derivadas de presiones, intervenciones o cambios en sus condiciones.',
    },
    {
      termino: 'Sostenibilidad',
      significado: 'enfoque orientado a satisfacer las necesidades actuales mediante el uso responsable de los recursos, procurando mantener las condiciones ambientales, sociales y económicas necesarias para las generaciones futuras.',
    },
    {
      termino: 'Turismo de aventura',
      significado: 'modalidad turística desarrollada mediante actividades que implican interacción con el entorno, determinadas exigencias físicas o técnicas y condiciones de riesgo que requieren gestión especializada.',
    },
    {
      termino: 'Turismo sostenible',
      significado: 'enfoque aplicado al desarrollo turístico que considera sus repercusiones económicas, sociales y ambientales, procurando responder a las necesidades de los visitantes, el sector turístico, las comunidades receptoras y el entorno.',
    },
  ],
  referencias: [
    {
      referencia: 'Congreso de Colombia. (1993). Ley 99 de 1993. Por la cual se crea el Ministerio del Medio Ambiente, se reordena el sector público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental (SINA) y se dictan otras disposiciones. Diario Oficial No. 41.146.',
    },
    {
      referencia: 'Congreso de Colombia. (1996). Ley 300 de 1996. Por la cual se expide la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 42.845.',
    },
    {
      referencia: 'Congreso de Colombia. (2020). Ley 2068 de 2020. Por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 51.544.',
    },
    {
      referencia: 'Constitución Política de Colombia [Const.]. (1991). Constitución Política de Colombia. Gaceta Constitucional No. 116.',
    },
    {
      referencia: 'Instituto Colombiano de Normas Técnicas y Certificación. (2007). Requisitos para la operación de actividades de rapel en turismo de aventura (NTS-AV 011).',
    },
    {
      referencia: 'Instituto Colombiano de Normas Técnicas y Certificación. (2014). Turismo de aventura. Sistemas de gestión de la seguridad. Requisitos (NTC-ISO 21101).',
    },
    {
      referencia: 'Ministerio de Ambiente y Desarrollo Sostenible. (2012). Política nacional para la gestión integral de la biodiversidad y sus servicios ecosistémicos (PNGIBSE).',
    },
    {
      referencia: 'Ministerio de Comercio, Industria y Turismo. (2020). Política de turismo sostenible: Unidos por la naturaleza.',
    },
    {
      referencia: 'Organización Mundial del Turismo. (2001). Código Ético Mundial para el Turismo.',
    },
    {
      referencia: 'Presidencia de la República de Colombia. (2015). Decreto 1076 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. Diario Oficial No. 49.523.',
    },
    {
      referencia: 'Presidencia de la República de Colombia. (2021). Decreto 646 de 2021. Por el cual se adopta la Política Pública de Turismo Sostenible - Unidos por la Naturaleza. Diario Oficial No. 51.707.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
