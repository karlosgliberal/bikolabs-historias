<script>
  import MenuInterior from '../../components/menu-interior/menu-interior.svelte'
</script>

<div class="container py-4 px-4">
  <MenuInterior />
</div>

<div class="container font-cabin">
  <section class="text-base leading-6 sm:text-xl text-justify mx-24 my-10">
    <h1 class="title-font text-base uppercase  mb-10 md:mb-4 font-mono font-semibold text-left">
      [Versión no-interactiva]
    </h1>
    <!--entradilla-->
    <div>
      <h2 class="title-font sm:text-4xl text-3xl  font-mono font-semibold text-left">
        El caso RisCanvi: El acierto en las decisiones de los sistemas automatizados
      </h2>

      <p class="leading-10 sm:leading-relaxed sm:text-2xl text-left">
        Cada vez se <b>automatizan más procesos de decisión</b> o se usan más sistemas automatizados en decisiones.
        Algunos incluso se utilizan para decisiones de <b>calado social</b>.
      </p>

      <p class="mb-8 leading-relaxed">
        Según se ha publicado<sup class="uppercase font-mono"><a href="#a1">1</a></sup>, los funcionarios que utilizan
        el sistema de riesgo de reincidencia RisCanvi están conformes con la decisión que toma el algoritmo en el
        <b>96,8% de las ocasiones</b>. Es decir, que en más de 9 casos de cada 10 los funcionarios confirman el nivel de
        riesgo que el sistema asigna a los presos de las cárceles de Cataluña.
      </p>
      <p class="mb-8 leading-relaxed">
        ¿Este porcentaje de cumplimiento por parte de los funcionarios es un indicador de éxito o es motivo de
        preocupación? Bueno, si el sistema acierta mucho, que los funcionarios estén de acuerdo con él supone que
        tomarán buenas decisiones. Eso sí, si el acierto del sistema no es muy alto, este porcentaje de cumplimiento por
        encima del 95% claramente no es un indicador de éxito.
      </p>
      <p class="mb-8 leading-relaxed">
        Por ello, parece necesario comprender hasta qué punto los sistemas automatizados de ayuda a la decisión aciertan
        o no. Pero esto no es tan sencillo como parece.
      </p>
    </div>
    <!--Medidas de acierto-->
    <div>
      <h3 class="title-font text-3xl mb-2  font-semibold">Medidas de acierto</h3>
      <p class="mb-8 leading-relaxed">
        ¿Cómo saber si un sistema automatizado es acertado?<br />
        Son varias las medidas que habitualmente se usan para evaluar el acierto de este tipo de sistemas. Algunas de las
        más habituales son las medidas de <b>sensibilidad, especificidad y valor predictivo</b>.<br />
        Pero, ¿qué nos dicen cada una de ellas? Para comprenderlas, usaremos los datos del mencionado sistema RisCanvi como
        ejemplo<sup class="uppercase font-mono"><a href="#a2">2</a></sup>.
      </p>

      <!--Sensibilidad y Especificidad-->
      <div>
        <h3 class="title-font text-2xl mb-2 font-semibold">- Sensibilidad y Especificidad</h3>

        <p class="mb-8 leading-relaxed">
          Empecemos con la sensibilidad y la especificidad, que son medidas que nos hablan de la capacidad del sistema.
          Imaginemos que partimos de una muestra de 648 presos. Entre ellos, hay presos violentos que sabemos que han
          reincidido cuando han salido de la cárcel, y presos que no lo han hecho. Así que los separamos en esos dos
          grupos: <b>reincidentes</b> (70 presos en el ejemplo RisCanvi); y
          <b>no reincidentes</b> (los 578 presos restantes).
        </p>
        <p class="mb-8 leading-relaxed">
          Empecemos analizando la capacidad del sistema para detectar a los presos que reinciden y etiquetarlos como de
          riesgo alto. Esta medida es conocida como <b>Sensibilidad</b> y se calcula dividiendo el número de presos etiquetados
          por el sistema como de alto riesgo (54) entre el total de presos reincidentes (70).
        </p>

        <table class="mb-8 table-auto border-separate border-spacing-y-2">
          <thead class="text-end">
            <tr>
              <th class=" border-b border-zinc-600" />
              <th class="border-b border-zinc-600">Reincidentes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b border-zinc-300 pb-2">Etiquetados como Alto Riesgo</td>

              <td class="pl-8 border-b border-zinc-300 font-bold pb-2 text-end">54</td>
            </tr>
            <tr>
              <td class=" border-b border-zinc-300 pb-2 text-end">Etiquetados como Bajo Riesgo</td>

              <td class="pl-8 border-b border-zinc-300 pb-2 text-end font-light">16</td>
            </tr>
            <tr>
              <td class="uppercase pb-2 text-end  text-sm">Total </td>
              <td class="pl-8 font-bold pb-2 text-end">70 </td>
            </tr>
          </tbody>
        </table>

        <p class="mb-8 leading-relaxed">
          En el caso de RisCanvi, la sensibilidad es de un <b>77%</b>, es decir, que el sistema es capaz de identificar
          como reincidentes a casi 8 presos de cada 10 que reinciden. Los otros 2 presos de cada 10 que el sistema no
          detecta serían <b>falsos negativos</b>, es decir, presos reincidentes que el sistema no llega a identificar.
        </p>
        <p class="mb-8 leading-relaxed">
          ¿Y qué pasa con los presos que no reinciden? ¿Es capaz la herramienta de identificarlos adecuadamente? Para
          responder a esto, se utiliza la medida de <b>Especificidad</b>, que se calcula dividiendo el número de presos
          etiquetados como de bajo riesgo (331) entre el total de los que no reinciden (578).
        </p>

        <table class="mb-8 table-auto border-separate border-spacing-y-2">
          <thead class="text-end">
            <tr>
              <th class=" border-b border-zinc-600" />
              <th class="border-b border-zinc-600"> No Reincidentes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b border-zinc-300 pb-2">Etiquetados como Alto Riesgo</td>

              <td class="pl-8 border-b border-zinc-300 font-light pb-2 text-end">247</td>
            </tr>
            <tr>
              <td class=" border-b border-zinc-300 pb-2 text-end">Etiquetados como Bajo Riesgo</td>

              <td class="pl-8 border-b border-zinc-300 pb-2 text-end font-bold">331</td>
            </tr>
            <tr>
              <td class="uppercase  pb-2 text-end  text-sm">Total </td>
              <td class="pl-8 font-semibold pb-2 text-end">578 </td>
            </tr>
          </tbody>
        </table>

        <p class="mb-8 leading-relaxed">
          En RisCanvi, la especificidad es de un <b>57%</b>, es decir, que el sistema es capaz de identificar a casi 6
          presos no reincidentes de cada 10 que no reinciden. El resto, 4 de cada 10 presos, serían
          <b>falsos positivos</b>, es decir, reclusos no reincidentes que el sistema etiqueta incorrectamente como de
          alto riesgo.
        </p>
        <p class="mb-8 leading-relaxed">
          Si bien las medidas de sensibilidad y especificidad nos hablan de la capacidad del sistema, <b
            >no lo hacen sobre su poder predictivo.</b
          >
        </p>
      </div>
      <!--Valor Predictivo Positivo y Negativo-->
      <div>
        <h3 class="title-font text-2xl mb-2  font-semibold">- Valor Predictivo Positivo y Negativo</h3>
        <p class="mb-8 leading-relaxed">
          El Valor predictivo positivo de un sistema nos permite responder a la siguiente pregunta: si un nuevo preso es
          etiquetado como de alto riesgo, ¿cuál es la probabilidad de que reincida?
        </p>
        <p class="mb-8 leading-relaxed">
          Podríamos pensar que con las medidas vistas de sensibilidad y especificidad se puede responder a esta
          pregunta, pero no es así. Porque el punto de partida es diferente. Si antes partíamos de la muestra de
          reclusos reincidentes y no reincidentes, ahora el punto de partida es el etiquetado, es decir, nos fijamos en
          cuántos presos de la muestra han sido <b>etiquetados de alto riesgo</b>
          (301) y cuántos de <b>bajo riesgo</b> (347).
        </p>
        <p class="mb-8 leading-relaxed">
          Como decíamos, para predecir si un preso etiquetado de alto riesgo reincidirá, utilizamos la medida de <b
            >Valor predictivo positivo</b
          >, que se calcula dividiendo el número de reclusos reincidentes etiquetados de alto riesgo (54), entre el
          total de presos de alto riesgo (301).
        </p>

        <table class="mb-8 table-auto border-separate border-spacing-y-2">
          <thead class="text-end">
            <tr>
              <th class=" border-b border-zinc-600" />
              <th class="border-b border-zinc-600 "> Reincidentes</th>
              <th class="border-b border-zinc-600 pl-4"> No Reincidentes</th>
              <th class="border-b border-zinc-600 uppercase pl-4"> total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="pb-2">Etiquetados como Alto Riesgo</td>

              <td class="pl-8  font-bold pb-2 text-end">54</td>
              <td class="pl-8  pb-2 text-end font-light">247</td>
              <td class="pl-8  pb-2 text-end font-bold ">301</td>
            </tr>
          </tbody>
        </table>

        <p class="mb-8 leading-relaxed">
          En RisCanvi, el valor predictivo positivo es de un <b>18%</b>, es decir, que casi 2 presos de cada 10
          terminarían confirmando el pronóstico y reincidiendo tras haber sido etiquetados de alto riesgo.
        </p>
        <p class="mb-8 leading-relaxed">
          Y si el preso es etiquetado como de bajo riesgo, ¿cuál es la probabilidad de que no reincida? En este caso
          utilizaríamos la medida de <b>Valor predictivo negativo</b>, dividiendo el número de presos no reincidentes
          etiquetados como de bajo riesgo (331), entre el total de presos de bajo riesgo (347).
        </p>

        <table class="mb-8 table-auto border-separate border-spacing-y-2">
          <thead class="text-end">
            <tr>
              <th class=" border-b border-zinc-600" />
              <th class="border-b border-zinc-600"> Reincidentes</th>
              <th class="border-b border-zinc-600 pl-4"> No Reincidentes</th>
              <th class="border-b border-zinc-600 uppercase pl-4"> total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="pb-2">Etiquetados como Bajo Riesgo</td>

              <td class="pl-8  font-light pb-2 text-end">16</td>
              <td class="pl-8  pb-2 text-end font-bold">331</td>
              <td class="pl-8  pb-2 text-end font-semibold ">347</td>
            </tr>
          </tbody>
        </table>

        <p class="mb-8 leading-relaxed">
          El valor predictivo negativo en RisCanvi es del <b>95%</b>, por lo que el sistema es capaz de predecir
          correctamente que más de 9 de cada 10 presos etiquetados como de bajo riesgo no reincidirán.
        </p>
      </div>
      <!--Exactitud o Accuracy-->
      <div>
        <h3 class="title-font text-2xl mb-2  font-semibold">- Exactitud o Accuracy</h3>

        <p class="mb-8 leading-relaxed">
          Hay otra medida muy utilizada en el sector tecnológico para hablar de la eficacia de los sistemas
          automatizados que es la <b>Exactitud o Accuracy</b>
          del sistema, también conocida como la proporción de clasificaciones correctas<sup class="uppercase font-mono"
            ><a href="#a3">3</a></sup
          >.
        </p>
        <p class="mb-8 leading-relaxed">
          Esta medida se calcula dividiendo los aciertos del sistema (presos etiquetados correctamente como de alto y de
          bajo riesgo; 385), entre el total de presos de la muestra (678). En RisCanvi la exactitud es del <b>57%.</b>
        </p>

        <table class="mb-8 table-auto border-separate border-spacing-y-2">
          <thead class="text-end">
            <tr>
              <th class=" border-b border-zinc-600" />
              <th class="border-b border-zinc-600"> Reincidentes</th>
              <th class="border-b border-zinc-600 pl-4"> No Reincidentes</th>
              <th class="border-b border-zinc-600 uppercase pl-4"> total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="pb-2  border-b border-zinc-300">Etiquetados como Alto Riesgo</td>

              <td class="pl-8  border-b border-zinc-300 font-bold pb-2 text-end">54</td>
              <td class="pl-8  border-b border-zinc-300 pb-2 text-end font-light">247</td>
              <td class="pl-8  border-b border-zinc-300 pb-2 text-end font-semibold " />
            </tr>

            <tr>
              <td class="pb-2 border-b border-zinc-300">Etiquetados como Bajo Riesgo</td>

              <td class="pl-8 border-b border-zinc-300 pb-2 text-end font-light">16</td>
              <td class="pl-8 border-b border-zinc-300 pb-2 text-end font-bold">331</td>
              <td class="pl-8 border-b border-zinc-300 pb-2 text-end font-semibold " />
            </tr>
            <tr>
              <td class="pb-2" />

              <td class="pl-8  font-semibold pb-2 text-end" />
              <td class="pl-8  pb-2 text-end" />
              <td class="pl-8  pb-2 text-end font-bold ">648</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--Rebobinando-->
    <div class="">
      <h3 class="title-font text-4xl mb-8  font-semibold">Rebobinando</h3>

      <p class="mb-8 leading-relaxed">
        Revisadas las medidas de acierto de los sistemas automatizados, parece un buen momento para mencionar por última
        vez el caso de RisCanvi y recordar que el cumplimiento de los funcionarios con el sistema RisCanvi es del 96,8%.
        Es decir, que <b>en más de 9 de cada 10 casos se da por bueno el nivel de riesgo que el sistema asigna</b> a cada
        preso.
      </p>
      <p class="mb-8 leading-relaxed">
        Más allá del ejemplo concreto de RisCanvi, parece claro que evaluar la capacidad y el potencial predictivo de un
        sistema automatizado no resulta sencillo. Para ello, es importante conocer y <b
          >distinguir las medidas de sensibilidad, especificidad, accuracy y valor predictivo positivo y negativo</b
        >.
      </p>
      <p class="mb-16 leading-relaxed">
        Si solo nos fijamos en alguna de ellas, nuestra lectura sobre su capacidad y poder predictivo puede ser errónea.
        Y sí, lo sabemos. Todos preferiríamos que estos temas resultaran más sencillos. Pero <b
          >¡c'est la vie y los sistemas automatizados!</b
        >
      </p>
    </div>

    <!--Agradecimientos-->
    <div>
      <ul class="list-none c text-sm">
        <p class="mt-16">Nuestro agradecimiento:</p>
        <li class="mt-2">
          <p class="leading-relaxed">
            Es importante señalar que este trabajo se ha inspirado en el gran artículo de Garay (2016)<sup
              class="uppercase font-mono"><a name="a4">4</a></sup
            >. Nuestro total agradecimiento a la investigadora tanto por su increíble trabajo, como por su generosa
            ayuda respondiendo a todas nuestras preguntas.
          </p>
        </li>
        <li>
          <p class="leading-relaxed text-left">
            <sup class="uppercase font-mono"><a name="a1">1</a></sup>: Saura, G., & Aragó, L. (2021, December 6). Un
            algoritmo impreciso condiciona la libertad de los presos. La Vanguardia.
            <a
              class="font-mono -tracking-widest text-xs"
              href="https://www.lavanguardia.com/vida/20211206/7888727/algoritmo-sirve-denegar-permisos-presos-pese-fallos.html"
              >https://www.lavanguardia.com/vida/20211206/7888727/algoritmo-sirve-denegar-permisos-presos-pese-fallos.html
            </a>
          </p>
        </li>
        <li>
          <p class="leading-relaxed text-left">
            <sup class="uppercase font-mono"><a name="a2">2</a></sup>: Capdevila, M., Ferrer, M., Blanch, M., Andrés,
            A., Framis, B., Comas, N., Garrigós, A. y Mora, J.(2015). Tasa de reincidencia Penitenciaria 2014.
            Investigaciones CEJFE.
            <a
              class="font-mono -tracking-widest text-xs"
              href=" http://cejfe.gencat.cat/ca/recerca/cataleg/crono/2015/reincidencia-2014/"
            >
              http://cejfe.gencat.cat/ca/recerca/cataleg/crono/2015/reincidencia-2014/
            </a>
          </p>
        </li>
        <li>
          <p class="leading-relaxed">
            <sup class="uppercase font-mono"><a name="a3">3</a></sup>: Briz-Redón, A. & Montes, F. (2022). Análisis de
            los resultados del protocolo RisCanvi. Departament d'Estadística i Investigació Operativa. Universitat de
            València.
            <a class=" font-mono -tracking-widest text-xs" href="https://www.uv.es/montes/informe riscanvi/informe.pdf"
              >https://www.uv.es/montes/informe riscanvi/informe.pdf
            </a>
          </p>
        </li>
      </ul>
    </div>
  </section>
</div>
