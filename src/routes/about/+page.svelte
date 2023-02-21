<script>
  import MenuInterior from '../../components/menu-interior/menu-interior.svelte'
</script>

<div class="container py-4 px-4">
  <MenuInterior />
</div>

<div class="container font-cabin px-8 border">
  <section class="text-base leading-6 sm:text-xl text-justify  desktop:px-48 pt-22">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 md:mb-4  font-mono font-semibold text-left">
      Sobre Bikolabs y los Datos
    </h1>
    <p class="my-8 leading-relaxed">
      Esta historia ha sido creada por Bikolabs, el Estudio (de intervención) de <a href="http://www.biko2.com"
        >Biko2.com</a
      >. En Bikolabs Intervenimos y divulgamos sobre la interacción entre personas y tecnología
    </p>

    <p class="mb-8 leading-relaxed">
      Las historias que creamos en Bikolabs son proyectos corales donde participan muchas personas, tanto el proceso de
      investigación como la propia construcción de la historias. Así que la autoría siempre es compartida especialmente
      con las personas de Biko.
    </p>
    <p class="mb-8 leading-relaxed">Los artífices directos de esta historia (en orden alfabético):</p>

    <ul class="mb-8 list-none">
      <li><a href="/"> Ujué Agudo </a></li>
      <li>
        <a href="/"> Karlos g. Liberal </a>
      </li>
      <li>
        <a href="/"> Silvia Martínez </a>
      </li>
    </ul>

    <p class="mb-8 leading-relaxed">
      Es importante señalar que este trabajo se ha inspirado en el gran artículo de Garay (2016)<sup
        class="uppercase font-mono"><a href="#a1">1</a></sup
      >. Nuestro total agradecimiento a la investigadora tanto por su increíble trabajo como por su generosa ayuda
      respondiendo a todas nuestras preguntas.
    </p>
    <p class="mb-8 leading-relaxed">
      Sobre los datos. Los utilizados para ilustrar el caso de RisCanvi han sido extraídos del único informe general
      publicado hasta el momento sobre este sistema (del año 2015)<sup class="uppercase font-mono"
        ><a href="#a2">2</a></sup
      >. Los informes más actuales disponibles utilizan muestras muy específicas (sobre presos en libertad condicional,
      o de alto riesgo… ) que no permiten una evaluación más global del sistema.
    </p>
    <p class="mb-8 leading-relaxed ">
      Debemos señalar que, además de las medidas explicadas en esta historia, hay otra medida muy utilizada en el sector
      tecnológico para hablar de la eficacia de los sistemas automatizados: la Exactitud o Accuracy, también conocida
      como la proporción de clasificaciones correctas <sup class="uppercase font-mono"><a href="#a3">3</a></sup>. Esta
      medida se calcula dividiendo los aciertos del sistema (presos etiquetados correctamente como de alto y de bajo
      riesgo) entre el total de casos. En RisCanvi la exactitud es del 59%.
    </p>
    <p class="mb-8 leading-relaxed ">
      Construir historias diferentes en un mundo donde lo homogéneo es casi la norma solo es posible si las propias
      herramientas permiten una dosis extra de singularidad. Para crear el caso de RisCanvi hemos usado <a
        href="https://cables.gl/home">cables.gl</a
      > un entorno de programación visual que nos ofrece esta singularidad tanto en el resultado como en la creación
    </p>
    <p class="mb-8 leading-relaxed ">
      Puedes pasarte por nuestras <a href="https://bikolabs.biko2.com/collections/">colecciones</a> para ver otros proyectos
      de Bikolabs
    </p>

    <ul class="mt-8 mb-8 list-none border-t border-t-zinc-900 text-sm">
      <li class="mt-16 mb-2">
        <p class="leading-relaxed">
          <sup class="uppercase font-mono"><a name="a1">1</a></sup>: Garay, L. M. (2016). Errores conceptuales en la
          estimación de riesgo de reincidencia. Revista Española de Investigación Criminológica, 14, 1-31.
        </p>
      </li>
      <li>
        <p class="mb-2 leading-relaxed text-left">
          <sup class="uppercase font-mono"><a name="a2">2</a></sup>: Capdevila, M., Ferrer, M., Blanch, M., Andrés, A.,
          Framis, B., Comas, N., Garrigós, A. y Mora, J.(2015). Tasa de reincidencia Penitenciaria 2014.(Investigaciones
          CEJFE) Disponible en:
          <a
            class="font-mono -tracking-widest text-xs"
            href="http://cejfe.gencat.cat/ca/recerca/cataleg/crono/2015/reincidencia-2014/"
            >http://cejfe.gencat.cat/ca/recerca/cataleg/crono/2015/reincidencia-2014/
          </a>
        </p>
      </li>
      <li>
        <p class="mb-2 leading-relaxed">
          <sup class="uppercase font-mono"><a name="a3">3</a></sup>: Briz-Redón, A. & Montes, F. (2022). Análisis de los
          resultados del protocolo RisCanvi. Departament d'Estadística i Investigació Operativa. Universitat de
          València.
          <a class="font-mono -tracking-widest text-xs" href="https://www.uv.es/montes/informe riscanvi/informe.pdf"
            >https://www.uv.es/montes/informe riscanvi/informe.pdf
          </a>
        </p>
      </li>
    </ul>
  </section>
</div>
