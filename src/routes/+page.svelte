<script>
  import Entradilla from "../lib/Entradilla.svelte";
  import Header from "../lib/Header.svelte";
  import Placeolder from "../lib/Placeolder.svelte";
  import BloqueBordeLateral from "../lib/BloqueBordeLateral.svelte";
  import Bloqueverde from "../lib/Bloqueverde.svelte";
  import Base from "../lib/Base.svelte";
  import PastillaAzul from "../lib/PastillaAzul.svelte";
  import Scroller from "@sveltejs/svelte-scroller";
  import Log from "../lib/Log.svelte";

  let index, offset, progress;
</script>

<svelte:head>
  <title>Riscanvi</title>
  <meta name="description" content="Riscanvi " />
</svelte:head>

<section>
  <div class="grid grid-cols-2">
    <div class="lg:order-first lg:row-span-2">
      <Entradilla
        text="Cada vez se automatizan más procesos de decisión (o se usan más sistemas
      automatizados en procesos de decisión) en campos de lo más diversos, desde
      aviación, hasta sanidad, empleo, control de procesos o predicción de
      riesgos."
      />
      <Entradilla
        text="Diferentes trabajos han señalado que cuando los operadores humanos utilizan estos sistemas, en general, muestran conformidad con ellos, es decir, que siguen en muchos casos la recomendación que les ofrece el sistema"
      />

      <Header
        text="Esta conformidad puede significar dos cosas bastante distintas:"
      />
    </div>
  </div>
</section>

<section>
  <div class="grid grid-cols-2">
    <div class="lg:order-first lg:row-span-2">
      <Placeolder />
      <div class="grid grid-cols-2">
        <div class="lg:order-first lg:row-span-2">
          <Bloqueverde
            text="Que los sistemas y los operadores humanos están muy alineados"
          />
        </div>
        <div class="lg mr-5">
          <Bloqueverde
            text="Que los operadores humanos sufren sesgo de automatización, 
          es decir, que tienden a delegar sus decisiones en los sistemas automatizados sin cuestionarlos."
          />
        </div>
      </div>
    </div>

    <div class="lg">
      <Scroller
        top={0.5}
        bottom={0.5}
        threshold={0.5}
        bind:index
        bind:offset
        bind:progress
      >
        <div slot="background">
          <Log index={index + 1} />
        </div>
        <div slot="foreground">
          <section>
            <BloqueBordeLateral
              text="¿Cómo de crítico es que la conformidad se deba a uno u otro de estos motivos?"
              mayusculas="true"
            />
          </section>
          <section>
            <BloqueBordeLateral
              text="Bueno, podríamos pensar que todo depende de cuánto acierte el sistema, 
      ¿no? Si el sistema acierta mucho, una alta conformidad supondría tomar buenas decisiones, 
      independientemente de a qué se deba esa conformidad."
              mayusculas="false"
            />
          </section>
          <section>
            <BloqueBordeLateral
              text="Bien, entonces parece que lo que hace falta conocer es hasta qué punto estos sistemas aciertan o no. 
      Pero claro, esto que podría parecer una pregunta de lo más sencilla, tiene algo más de miga de lo que parece."
              mayusculas="false"
            />
          </section>
        </div>
      </Scroller>
    </div>
  </div>
</section>

<section>
  <div class="grid grid-cols-2">
    <div class="lg:order-first lg:row-span-2">
      <Header
        text="Esta conformidad puede significar dos cosas bastante distintas:"
      />
      <Base
        text="Son varias las medidas que habitualmente se proporcionan para juzgar el desempeño de este tipo de sistemas.
        Las más habituales son:"
      />
      <PastillaAzul title="Exactitud" />
      <PastillaAzul title="Sensibilidad" />
      <PastillaAzul title="Especificidad" />
      <PastillaAzul title="Valor de predcción" />
      <Base
        text="Para ello, vamos a definirlas y a usar un ejemplo que nos ayude a comprenderlas: una prueba diagnóstica de cáncer."
      />
    </div>
  </div>
</section>

<section>
  <div class="grid grid-cols-2">
    <div class="lg:order-first lg:row-span-2">
      <Header
        text="Esta conformidad puede significar dos cosas bastante distintas:"
      />
      <Base
        text="Son varias las medidas que habitualmente se proporcionan para juzgar el desempeño de este tipo de sistemas.
        Las más habituales son:"
      />
      <PastillaAzul title="Exactitud" />
      <PastillaAzul title="Sensibilidad" />
      <PastillaAzul title="Especificidad" />
      <PastillaAzul title="Valor de predcción" />
      <Base
        text="Para ello, vamos a definirlas y a usar un ejemplo que nos ayude a comprenderlas: una prueba diagnóstica de cáncer."
      />
    </div>
  </div>
</section>
<section>
  <div class="grid grid-cols-2">
    <div class="lg:order-first lg:row-span-2">
      <Header
        text="Esta conformidad puede significar dos cosas bastante distintas:"
      />
      <Base
        text="Son varias las medidas que habitualmente se proporcionan para juzgar el desempeño de este tipo de sistemas.
        Las más habituales son:"
      />
      <PastillaAzul title="Exactitud" />
      <PastillaAzul title="Sensibilidad" />
      <PastillaAzul title="Especificidad" />
      <PastillaAzul title="Valor de predcción" />
      <Base
        text="Para ello, vamos a definirlas y a usar un ejemplo que nos ayude a comprenderlas: una prueba diagnóstica de cáncer."
      />
    </div>
  </div>
</section>
