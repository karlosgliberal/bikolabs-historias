#### Readme Riscamvi

Necesitas una cuenta de calbles.gl

Riscamvi es un proyecto basado en cable.g, para la creación del mundo en 3D con webGL y sveltekit como entorno de web.

El repositorio del proyecto es: https://github.com/karlosgliberal/bikolabs-historias
Este es la url provisional del proyecto para poder ver los cambios. https://bikolabs-historias.vercel.app/
El cables que estamos usando es este: https://cables.gl/p/1AiNBm

El entorno se monta con node.js ahora se esta usando a versión `v18.11.0`
`git clone git@github.com:karlosgliberal/bikolabs-historias.git`
`cd bikolabs-historias.git`
`yarn install'

Para levantar el entorno: `yarn dev`

En vscode se requiere la instalación de la extensión `Svelte for VS Code`
Los directorios importantes a tener en cuenta:

`/bikolabs-historias/static/` Aquí van los ficheros y lo más importante el directorio con el proyectod e cables ahora estamos usando el `bool`,

Para descargar el proyecto de cables se requiere usar el cliente node de cables: [url](https://github.com/cables-gl/cables-cli)
Este es el comando que se requiere para exportar el proyecto `cables -e 1AiNBm -i -c -f` el código `1AiNBm` es el id del proyecto de cables si quieres usar tu propio proyecto tendrás que añadir tu id. El comando genera un carpeta con todos los ficheros, tendrás que copiar los ficheros y sustituirlos por los del proyecto en svletekit, por ejemplo: ``/bikolabs-historias/static/bool/
