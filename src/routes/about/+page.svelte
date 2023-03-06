<script>
  import MenuInterior from '../../components/menu-interior/menu-interior.svelte'
  import FooterInterior from '../../components/FooterInterior/FooterInterior.svelte'
</script>

<div class="py-4 px-2 tablet:px-4 border-b border-black-800">
  <MenuInterior />
</div>

<div class="container font-cabin">
  <section class="text-base px-2 py-8 desktop:px-44 desktop:py-20">
    <h1 class="text-5xl font-bold mb-4 tablet:text-justify">Sobre Bikolabs y créditos</h1>
    <p class="my-8 leading-relaxed">
      Esta historia ha sido creada por Bikolabs, el Estudio (de intervención) de <a href="http://www.biko2.com"
        >Biko2.com</a
      >. En Bikolabs investigamos, intervenimos y divulgamos sobre la interacción entre personas y tecnología.
    </p>

    <p class="mb-8 leading-relaxed">
      Las historias que creamos en Bikolabs son proyectos corales donde participan muchas personas, tanto en el proceso de
      investigación como en la propia construcción de la historias. Así que la autoría siempre es compartida, especialmente
      con las personas que componen Biko.
    </p>
    <p class="mb-8 leading-relaxed">Los artífices directos de esta historia (en orden alfabético):</p>

    <ul class="mb-8 list-none">
      <li><a href="https://twitter.com/ujue"> Ujué Agudo </a></li>
      <li>
        <a href="https://twitter.com/patxangas"> Karlos g. Liberal </a>
      </li>
      <li>
        <a href="https://twitter.com/graficanta"> Silvia Martínez </a>
      </li>
      <li>
        <a href="https://twitter.com/aitor_rl"> Aitor Resano </a>
      </li>
    </ul>

    <p class="mb-8 leading-relaxed">
<strong>Agradecimientos.</strong> Es importante señalar que este trabajo se ha inspirado en el gran artículo de Garay (2016)<sup
        class="uppercase font-mono"><a href="#a1">1</a></sup
      >. Nuestro total agradecimiento a la investigadora tanto por su increíble trabajo como por su generosa ayuda
      respondiendo a todas nuestras preguntas.<br /><br />Muchas gracias también a la estadística y matemática Anabel Forte <a href="https://twitter.com/AnaBayes">(@AnaBayes)</a>, por su afinada revisión de los textos y las medidas de esta story. <br /><br />
    </p>
    <p class="mb-8 leading-relaxed">
  <strong>Sobre los datos.</strong> Los utilizados para ilustrar el caso de RisCanvi han sido extraídos del único informe general
      publicado hasta el momento sobre este sistema (del año 2015)<sup class="uppercase font-mono"
        ><a href="#a2">2</a></sup
      >. Los informes más actuales disponibles utilizan muestras muy específicas (sobre presos en libertad condicional,
      o de alto riesgo… ) que no permiten una evaluación más global del sistema.
    </p>
        <p class="mb-8 leading-relaxed ">
     <strong>Sobre la tecnología utilizada.</strong> Construir historias diferentes en un mundo donde lo homogéneo es casi la norma solo es posible si las propias
      herramientas usadas permiten una dosis extra de singularidad. Para crear el caso de RisCanvi hemos usado <a
        href="https://cables.gl/home">cables.gl</a
      >, un entorno de programación visual que nos ofrece esta singularidad tanto en el resultado como en la creación.
    </p>
    <p class="mb-8 leading-relaxed ">
      <strong>Más sobre Bikolabs.</strong> Puedes pasarte por nuestras <a href="https://bikolabs.biko2.com/collections/">colecciones</a> para ver otros proyectos
      de Bikolabs.
     </p>

    <ul class="mt-8 mb-8 list-none border-t border-t-zinc-900 text-sm">
      <li class="mt-16 mb-2">
        <p class="leading-relaxed">
          <sup class="uppercase font-mono"><a name="a1">1</a></sup> Garay, L. M. (2016). Errores conceptuales en la
          estimación de riesgo de reincidencia. Revista Española de Investigación Criminológica, 14, 1-31.
        </p>
      </li>
      <li>
        <p class="mb-2 leading-relaxed text-left">
          <sup class="uppercase font-mono"><a name="a2">2</a></sup> Capdevila, M., Ferrer, M., Blanch, M., Andrés, A.,
          Framis, B., Comas, N., Garrigós, A. y Mora, J. (2015). Tasa de reincidencia Penitenciaria 2014.(Investigaciones
          CEJFE) Disponible en:
          <a
            class="font-mono -tracking-widest text-xs"
            href="http://cejfe.gencat.cat/ca/recerca/cataleg/crono/2015/reincidencia-2014/"
            >http://cejfe.gencat.cat
          </a>
        </p>
      </li>
        </ul>
  </section>
</div>

<div>
  <FooterInterior />
</div>

<style>
  a {
    text-decoration: underline;
    font-weight: 300;
  }
</style>
