import { article } from '../model';
import { refs } from '../sources';

export default [
  article('stellar-physics', 'Una estrella se sostiene desde dentro', 'Antes de imaginar máquinas alrededor de un sol, conviene ver el equilibrio que mantiene encendida a la propia estrella.', [refs.sun, refs.stars], `
La superficie solar parece hervir. Zonas brillantes cambian de forma, aparecen manchas y arcos de plasma siguen configuraciones magnéticas. No estás mirando una costra sólida sobre una hoguera: la estrella es materia caliente, en gran parte ionizada, cuya estructura depende de gravedad, presión y transporte de energía. [1]

La gravedad tiende a comprimirla. El gradiente de presión sostiene sus capas frente a ese peso. En una estrella de secuencia principal, las reacciones de fusión del núcleo aportan energía que acaba saliendo al espacio, aunque su recorrido atraviesa regiones con procesos diferentes.

## Lo que brilla no es el lugar donde se fabrica toda la energía

La luz visible que recibimos procede principalmente de la fotosfera. El núcleo solar está mucho más caliente y oculto bajo enormes cantidades de materia. Entre ambos, la energía se transporta mediante radiación y movimientos del material según la región. [1]

Esto importa para la ingeniería: interceptar luz fuera de la estrella, recoger parte del viento solar e intervenir en su interior son operaciones físicamente muy distintas. Una estructura exterior no obtiene acceso directo al núcleo porque se acerque a la superficie visible.

::: El equilibrio hidrostático

En una descripción esférica, dP/dr = −Gm(r)ρ(r)/r². La presión disminuye hacia fuera a un ritmo relacionado con la masa interior y la densidad. Esta ecuación se combina con otras de energía y composición para describir una estrella; por sí sola no determina su evolución.

:::

La masa inicial condiciona luminosidad, temperatura y duración. Una estrella más masiva suele gastar su combustible mucho más deprisa, aunque tenga más. Las estrellas no son depósitos cuyo tiempo de vida se obtenga dividiendo combustible por un consumo fijo e independiente de su estructura. [2]

## Una máquina tendría que convivir con actividad

El entorno incluye radiación intensa, partículas cargadas y variabilidad magnética. Una instalación cercana necesita controlar su temperatura y comprender perturbaciones. Los filamentos luminosos de una imagen no son carreteras estables por las que pueda circular una carga a voluntad.

También la estrella cambia lentamente. Cuando se modifica su composición interna, encuentra nuevas condiciones de equilibrio y puede entrar en otras etapas. Alterar su masa tendría consecuencias sobre esa evolución, además de sobre su gravedad.

La imagen de un sol como una lámpara encendida resulta insuficiente. Es un sistema que se reorganiza durante millones de años. Cualquier astroingeniería estelar tendría que trabajar con esa respuesta, del mismo modo que construir en una costa exige comprender un mar que nunca permanece completamente quieto.
`),
  article('stellar-engines', 'La estrella también puede ser el vehículo', 'Un motor estelar intentaría modificar el movimiento de una estrella, y con él el futuro recorrido de los cuerpos que permanecen ligados a ella.', [refs.caplan, refs.sun], `
Desde un planeta, el amanecer podría continuar con una apariencia familiar. El cambio sería demasiado lento para sentirse en una vida humana: toda la estrella estaría siguiendo una trayectoria ligeramente distinta por la galaxia.

Un motor estelar busca producir esa aceleración mediante una asimetría en la radiación o en la materia expulsada. Caplan comparó diseños pasivos y activos para estudiar sus posibilidades de aceleración. Son modelos de ingeniería extrema, no tecnologías disponibles. [1]

## Una fuerza enorme puede dar una aceleración diminuta

La relación a = F/M sigue siendo reveladora. La masa de una estrella hace que una fuerza impresionante en términos humanos produzca un cambio muy pequeño por segundo. El interés aparece al mantenerlo durante tiempos astronómicos.

Como ejemplo puramente cinemático, una aceleración constante de 10⁻¹² m/s² acumularía unos treinta metros por segundo de cambio de velocidad en un millón de años. La desviación respecto de una trayectoria inicial idealizada sería de cientos de unidades astronómicas. El ejemplo usa a·t y a·t²/2; una trayectoria galáctica real necesita incluir el campo gravitatorio y la dirección variable del empuje.

La estrella ya se mueve en la galaxia. El motor no parte de un reposo universal: modifica una órbita existente. Elegir una ruta requeriría conocer encuentros futuros y aceptar incertidumbres que crecen con el tiempo.

## Llevar el sistema exige suavidad

Los planetas están ligados gravitatoriamente, no sujetos por cables. Si la perturbación es suficientemente lenta y pequeña respecto de su dinámica orbital, podrían acompañar el desplazamiento, pero la estabilidad debe comprobarse. La dirección de la aceleración y los cambios de masa importan.

También importa no alterar de forma incompatible la luz que reciben. El Sol sostiene el balance energético del sistema planetario, y una estructura que redirige una parte de su emisión puede afectar a los mundos cercanos. [2]

La idea requiere imaginar una sociedad que planifique para descendientes muy lejanos. Su gran maniobra no sería un giro brusco frente a un peligro visible. Sería una pequeña corrección mantenida cuando todavía faltan eras para llegar al lugar donde esa corrección tendrá sentido.
`),
  article('shkadov', 'Un espejo para desequilibrar la luz', 'El propulsor de Shkadov usa una idea sencilla a una escala desmesurada: si la radiación sale de forma asimétrica, el conjunto puede recibir un empuje neto.', [refs.caplan, refs.sails, refs.thermal], `
Una enorme superficie curva ocupa parte del cielo de la estrella. Refleja radiación y deja que el resto escape con otra distribución angular. No es una cáscara cerrada alrededor del Sol; su asimetría es precisamente lo que le da interés como motor.

El concepto Shkadov pertenece a los motores estelares pasivos. El balance de radiación del conjunto estrella y reflector permite estudiar una fuerza neta. El análisis comparativo de Caplan trata esta familia frente a diseños activos. [1]

## Hay que contar la luz que finalmente se va

Un espejo recibe fuerza al cambiar la cantidad de movimiento de los fotones. Pero calcular únicamente esa fuerza y atribuírsela sin más a la estrella sería incompleto. Hay que seguir los intercambios dentro del sistema y la radiación que escapa hacia fuera. La conservación del movimiento sigue mandando. [2]

La configuración idealizada también necesita un equilibrio entre atracción gravitatoria y presión luminosa sobre la estructura. Que dos fuerzas se igualen en un dibujo no demuestra estabilidad frente a desplazamientos, oscilaciones y deformaciones.

::: La escala de una fuerza fotónica

Una potencia P transporta cantidad de movimiento a un ritmo del orden de P/c. La geometría y las reflexiones determinan el factor exacto y la dirección. Al dividir por una masa estelar se obtienen aceleraciones pequeñas, incluso trabajando con una fracción importante de la luminosidad de una estrella.

:::

El reflector absorbería algo de energía y tendría que radiarla. Su forma, material y temperatura quedan vinculados; no puede suponerse un espejo perfecto de masa despreciable y resistencia ilimitada. [3]

Ubicarlo respecto de las órbitas planetarias también sería decisivo. Oscurecer regiones habitadas o devolverles más radiación podría ser incompatible con la vida que el motor pretendiera transportar.

La visión resulta casi ceremonial: un espejo que parece inmóvil y, sin embargo, cambia lentamente la ruta de un sol. La obra se entendería mejor al comparar mapas separados por millones de años que al observarla durante una tarde.
`),
  article('caplan', 'Remolcar un sol con su propia materia', 'El motor propuesto por Caplan incorpora flujos materiales para aspirar a aceleraciones mayores que las de un reflector pasivo.', [refs.caplan, refs.fusion, refs.thermal], `
La ilustración podría mostrar un aparato pequeño junto a una estrella, pero pequeño aquí solo significa comparativamente pequeño. La instalación tendría que manejar flujos de materia y energía muy superiores a los de cualquier industria humana.

Caplan estudió un motor activo que aprovecha material estelar y requiere extracción adicional más allá del viento natural. La propuesta combina propulsión y acoplamiento con la estrella; no consiste en encender un cohete cercano y esperar que el Sol lo siga. [1]

## Empujar el remolcador no basta

Para modificar el movimiento de la estrella debe existir un intercambio que transmita el efecto a ella. También hay que conservar una separación útil entre instalación y estrella. Si el vehículo simplemente acelera y se aleja, ha construido una nave, no un motor estelar.

Los chorros materiales permiten transportar cantidad de movimiento de otra manera que los fotones. A cambio, se necesita recoger, procesar y acelerar masa. Aumentar el flujo mejora ciertas prestaciones ideales, pero crece la infraestructura requerida para manejarlo.

La fusión aparece como parte de esta clase de arquitectura ambiciosa. Los estudios de propulsión por fusión ilustran la diferencia entre una reacción energéticamente atractiva y una máquina completa que la controle. Escalar esa máquina hasta una intervención estelar introduce dificultades adicionales. [2]

::: De un límite ideal a una instalación

Una aceleración calculada bajo eficiencias ideales debe interpretarse como una exploración de posibilidades. Un diseño realizable tendría que contabilizar captación, pérdidas, masa estructural, control de los chorros y disipación térmica. Ninguno de esos términos desaparece porque la fuente sea una estrella.

:::

La energía absorbida por componentes debe salir. El entorno brillante no facilita necesariamente enfriar la instalación: sus radiadores necesitan un balance compatible con la radiación que reciben. [3]

Imagina la escena en escalas superpuestas: partículas guiadas por campos, chorros que atraviesan grandes distancias y, detrás de todo, la órbita de una estrella cambiando. El atractivo del motor está en conectar esas escalas. Su carácter especulativo está en que todavía no sabemos construir la cadena que las uniría.
`),
  article('star-lifting', 'Extraer materia de una estrella', 'El star lifting imagina convertir parte del material estelar en un recurso. Antes de almacenarlo, habría que sacarlo de un pozo gravitatorio enorme.', [refs.sun, refs.lifting, refs.caplan], `
No habría una excavadora apoyada en el suelo. Una estrella carece de esa superficie sólida donde situamos las minas. Su material exterior es caliente y dinámico; una instalación tendría que actuar a distancia, mediante energía y campos, o recoger flujos que consigan salir.

El viento estelar ya transporta materia hacia fuera de forma natural. El star lifting añade la idea especulativa de aumentar o dirigir una extracción para obtener recursos o alterar la evolución de la estrella. Los estudios de motores estelares y de prolongación de vida exploran objetivos diferentes para esa extracción. [2][3]

## Levantar también significa dar energía

En una estimación newtoniana, retirar un kilogramo desde una distancia R de una masa M hasta muy lejos requiere una energía gravitatoria del orden de GM/R, sin contar otros procesos. El material puede tener ya movimiento y energía térmica, pero el pozo gravitatorio no deja de existir.

Después de salir, todavía habría que capturarlo, enfriarlo y separarlo. Un flujo de plasma no es una barra de metal lista para una fábrica. La abundancia total de una estrella puede resultar enorme mientras la cadena de procesamiento siga siendo el cuello de botella.

::: Cambiar masa cambia a la estrella

La masa influye sobre gravedad, presión interna y luminosidad. Extraerla durante periodos prolongados modifica la evolución, por lo que no basta con tratar a la estrella como un depósito de composición constante. Los modelos numéricos de star lifting estudian precisamente esa respuesta bajo supuestos prescritos. [2]

:::

La composición del material accesible tampoco equivale a la de todas las capas interiores. Alcanzar productos de regiones profundas es otra dificultad; la estrella no mezcla necesariamente todo su contenido de manera uniforme. [1]

Como paisaje industrial, el concepto sería muy distinto de una mina terrestre: instalaciones alejadas de una esfera brillante, flujos guiados y grandes zonas de enfriamiento. La riqueza llegaría caliente, dispersa y cargada eléctricamente.

La pregunta sugerente no es solo cuántas cosas podrían construirse con una estrella. Es cuánto de ella podría retirarse sin perder de vista que también proporciona luz, gravedad y una historia compartida a los mundos que la rodean.
`),
  article('stellar-husbandry', 'Cuidar el ritmo de una estrella', 'Algunos modelos preguntan si una civilización podría prolongar condiciones estelares favorables. El objetivo sería ganar tiempo, no encender una fuente eterna.', [refs.lifting, refs.stars, refs.habitable], `
Una comunidad conserva registros del brillo de su estrella durante épocas inmensamente largas. El cambio de un año a otro es irrelevante para una persona, pero la tendencia amenaza el clima de sus mundos. Su proyecto sería intervenir antes de que el paisaje cotidiano deje de ser posible.

La evolución estelar transforma luminosidad, estructura y composición. La estrella no mantiene la misma salida de energía hasta apagarse de golpe. Esa variación puede desplazar las condiciones favorables para los planetas mucho antes del final estelar. [2][3]

## Ganar tiempo retirando masa

Scoggins y Kipping estudiaron numéricamente extracciones de masa prescritas para compensar cambios de luminosidad y prolongar condiciones favorables. Los resultados dependen de la masa inicial y no implican que todas las estrellas puedan estabilizarse indefinidamente. El modelo describe la respuesta estelar; no demuestra una máquina de extracción. [1]

El proyecto hipotético necesitaría medir el interior mediante observaciones indirectas, actualizar modelos y ajustar una intervención durante periodos enormes. Un error pequeño sostenido puede importar más que una gran perturbación breve.

::: Una estrella no es un depósito bien mezclado

La disponibilidad de combustible para una reacción depende de dónde se encuentra y de las condiciones locales. Añadir hidrógeno exterior no significa entregarlo automáticamente al núcleo. Cualquier propuesta de mezcla o alimentación debe explicar cómo cambia la estructura.

:::

También podrían compararse estrategias distintas: trasladar hábitats, modificar órbitas o regular la radiación recibida. Cuidar la estrella no tiene por qué ser la intervención menos costosa para cuidar a sus habitantes.

La palabra cuidado resulta aquí deliberadamente extraña. Aplicada a un sol, obliga a imaginar instituciones que sobreviven a generaciones, instrumentos reemplazados una y otra vez y objetivos revisados a medida que cambia el conocimiento.

Lo que se intentaría conservar no sería una fotografía inmóvil del universo. Sería un margen para que continúen ocurriendo historias bajo una luz adecuada. Incluso en el escenario más ambicioso, el tiempo ganado seguiría teniendo un coste físico y un final abierto.
`),
  article('stellar-navigation', 'Elegir por dónde pasará un sistema solar', 'Navegar con una estrella significa planificar dentro de una galaxia que también se mueve. Los destinos no esperan quietos en un mapa.', [refs.caplan, refs.stars], `
Un mapa galáctico congelado induce a error. Las estrellas orbitan, las separaciones cambian y los encuentros futuros dependen de trayectorias tridimensionales. Un motor estelar actuaría dentro de ese movimiento colectivo.

Las propuestas de propulsión estelar permiten preguntar cuánto podría desviarse una trayectoria bajo ciertas fuerzas. La navegación añade otra capa: escoger cuándo y en qué dirección aplicar esa perturbación. Un valor máximo de aceleración no proporciona por sí mismo una ruta útil. [1]

## El destino tiene que llegar a la cita

Si se desea aproximar dos sistemas, importa su posición futura, no la que vemos ahora. La observación ya llega retrasada por el viaje de la luz. Las mediciones de posición y velocidad tienen incertidumbres que se amplifican al proyectarlas hacia adelante.

Además, la masa del sistema está repartida. Los planetas siguen órbitas propias y pueden responder de manera diferente a una aceleración sostenida de la estrella. El proyecto necesitaría comprobar estabilidad, resonancias y perturbaciones por otros cuerpos.

::: Una aproximación útil, pero local

Para aceleración constante y tiempos donde esa aproximación sea válida, el cambio de velocidad es Δv = at. En la galaxia, la dirección del empuje y el campo gravitatorio evolucionan. Sumar una desviación recta durante millones de años no sustituye integrar la trayectoria.

:::

La estrella tampoco conserva necesariamente todas sus propiedades durante el recorrido. Su evolución y cualquier extracción de masa pueden modificar tanto los mundos que la acompañan como el funcionamiento del motor. [2]

Una sociedad que planifique así tendría que decidir cuánto acercamiento es deseable y qué riesgos introducen encuentros con otros sistemas. La distancia permite intercambio, pero también nuevas perturbaciones. Acercar dos soles no equivale a conectar dos estaciones de tren.

Desde una casa, el viaje podría ser imperceptible durante generaciones. La prueba estaría en archivos y mapas: un futuro encuentro se vuelve más probable, otro se evita. Navegar adquiriría un significado peculiar, el de cuidar una trayectoria cuya curva completa ninguna persona llegará a ver.
`),
  article('plasma-processing', 'La materia llega cargada y ardiendo', 'Una industria estelar necesitaría convertir flujos de plasma en materiales manejables. Recoger energía y fabricar un producto son trabajos distintos.', [refs.sun, refs.ion, refs.thermal], `
Antes del almacén habría una región de campos y conductos. La materia entrante contendría partículas cargadas, electrones y una distribución de velocidades. No podría tocar cualquier pared sin transferirle energía y dañarla.

Un plasma es un medio con partículas libres cargadas que responde colectivamente a campos electromagnéticos. La estrella y su entorno ofrecen ejemplos naturales; una planta de procesamiento a esa escala seguiría siendo especulativa. [1]

## Guiar no es enfriar

Los campos pueden cambiar trayectorias de cargas. Un campo magnético ideal desvía su movimiento sin reducir por sí solo la energía cinética. Para enfriar hay que transferir energía hacia otro lugar mediante procesos concretos. Dibujar un embudo magnético no resuelve esa etapa.

Los propulsores iónicos demuestran que podemos producir y acelerar partículas cargadas en sistemas espaciales. Una industria que capture grandes flujos necesitaría operaciones adicionales y escalas muy distintas; el principio electromagnético compartido no convierte una tecnología en la otra. [2]

La separación de especies depende de carga, masa y estado del plasma. El material puede tener que recombinarse y pasar por etapas térmicas antes de almacenarse. Cada transformación añade equipos y pérdidas.

::: El calor necesita una salida física

La energía retirada del material no desaparece. Puede recuperarse parcialmente o convertirse en una carga térmica que debe radiarse. Las temperaturas de trabajo determinan materiales y superficies de refrigeración. [3]

:::

La instalación tendría que tolerar variaciones del flujo, contaminación de componentes y erosión. Un fallo no solo interrumpe la producción: puede entregar demasiada energía a una pieza que dejó de guiar las partículas correctamente.

Imagina el resultado al final de la cadena: un contenedor con materia fría, aparentemente corriente. Su aspecto ocultaría un viaje extraordinario desde un entorno estelar. La astroingeniería se vuelve tangible cuando algo que empezó como plasma termina siendo una pieza que una persona puede sostener.
`),
  article('black-hole-engineering', 'Trabajar alrededor del lugar del que nada regresa', 'Un agujero negro puede tener un entorno extraordinariamente energético. Aprovecharlo exigiría permanecer fuera del horizonte y distinguir procesos físicos muy diferentes.', [refs.bhAnatomy, refs.blackholes, refs.thermal], `
El centro de la imagen es oscuro, pero alrededor hay un disco brillante deformado por la gravedad. La luz que vemos no sale del interior del agujero negro: procede de materia y radiación en su entorno. Esa diferencia es el punto de partida de cualquier idea de ingeniería. [1]

El horizonte marca una frontera causal. Una vez atravesado hacia dentro, no existe una trayectoria futura que permita enviar una señal de vuelta al exterior. No es una superficie sólida donde apoyar una central ni una boca que pueda abrirse y cerrarse.

## La caída puede liberar energía antes del horizonte

La materia que forma un disco de acreción interactúa, se calienta y puede radiar mientras pierde energía orbital. Parte de esa energía llega al exterior antes de que el material cruce el horizonte. Un sistema hipotético podría intentar aprovechar esa emisión sin recuperar lo que ya cayó.

La eficiencia depende de la geometría, del giro y del flujo. No conviene asignar una cifra universal a cualquier agujero negro ni suponer que toda la energía radiada puede capturarse. Un entorno muy luminoso también puede resultar destructivo para instrumentos y estructuras.

La rotación ofrece otro reservorio energético en la descripción relativista. Existen procesos teóricos de extracción y fenómenos astrofísicos relacionados con campos y chorros. Eso no equivale a disponer de un generador con un eje mecánico accesible: la interacción involucra espacio-tiempo, plasma y campos. [1]

::: Las mareas dependen del tamaño y la distancia

La diferencia de gravedad entre dos puntos puede estirar un objeto. Su magnitud no viene dada solo por decir agujero negro. Un agujero negro más masivo tiene un horizonte mayor, y las mareas en esa región pueden ser menores que las de uno pequeño. La órbita y el entorno siguen imponiendo otras condiciones.

:::

## Un agujero negro pequeño sería otra clase de propuesta

Crane y Westmoreland exploraron si agujeros negros artificiales podrían servir a naves bajo supuestos sobre radiación de Hawking, creación y manejo. Se trata de especulación teórica muy lejana a una capacidad experimental. No debe mezclarse con la energía observada de discos de acreción. [2]

En la descripción semiclásica, los agujeros negros más pequeños tienen mayor temperatura de Hawking y pueden perder masa más deprisa. Esa relación crea un compromiso entre potencia y duración. Crear, alimentar y acelerar un objeto así son problemas adicionales que el simple balance energético no resuelve.

Un agujero negro de masa estelar no se comportaría como esa fuente diminuta y caliente. Usar la misma palabra para ambos puede producir una imagen engañosa de prestaciones intercambiables.

## Mantener distancia también es ingeniería

Una instalación necesitaría órbitas apropiadas, protección frente a radiación y una forma de transmitir la energía útil. Si absorbe potencia, debe evacuar las pérdidas. El vacío no enfría por contacto como el aire de una habitación; los radiadores siguen presentes incluso en este escenario extremo. [3]

Tampoco un agujero negro aspira indiscriminadamente desde cualquier distancia. Lejos de él, la gravedad se relaciona con su masa como en otros sistemas; una trayectoria orbital adecuada puede permanecer fuera. Lo peligroso no es un poder mágico de succión, sino la geometría, las mareas y el entorno concreto al que se aproxima la nave.

La apariencia visible podría variar enormemente. Un objeto sin un flujo importante de materia no tendría por qué exhibir el disco espectacular de una ilustración. La imagen brillante presupone un suministro y procesos que también forman parte del balance energético.

Esta ingeniería hipotética tiene un límite especialmente claro: obtener algo útil antes de una frontera desde la que no se puede devolver nada. Su fuerza imaginativa nace de permanecer cerca de ese límite sin borrarlo. Cuanto mejor se entiende dónde surge la energía, más impresionante resulta el paisaje alrededor de la oscuridad.
`),
  article('stellar-technosignatures', 'Reconocer una intervención en la luz de una estrella', 'Si alguien construyera a escala estelar, quizá veríamos su efecto antes de distinguir una sola pieza.', [refs.dyson, refs.lifting, refs.seti], `
Un telescopio recibe un punto luminoso. Dentro de ese punto podrían coexistir la estrella, polvo, planetas y, como hipótesis, una infraestructura artificial. La búsqueda empieza intentando separar contribuciones que llegan mezcladas.

Una estructura que intercepta luz y trabaja con energía tendría que emitir calor. Los estudios de esferas y enjambres de Dyson muestran por qué el infrarrojo puede ser interesante para buscar actividad de gran escala. También el polvo natural produce emisión infrarroja, así que un exceso aislado no identifica tecnología. [1]

## Un comportamiento extraño necesita compañía

Podrían buscarse cambios de brillo, espectros inusuales o combinaciones de propiedades difíciles de explicar. La fuerza de un candidato crecería si varias observaciones independientes apoyaran el mismo modelo y descartaran alternativas sencillas.

Una extracción artificial de masa podría, en principio, alterar la evolución de una estrella. Los trabajos numéricos de star lifting motivan preguntas sobre detectabilidad, pero predecir una anomalía no demuestra que sepamos distinguirla inequívocamente entre poblaciones naturales. [2]

::: De la anomalía a la hipótesis

Un instrumento tiene ruido, selección y límites. Primero se comprueba que la señal existe; después, que no es un artefacto o una combinación conocida; finalmente se comparan explicaciones. Tecnología es una hipótesis que debe producir predicciones, no una etiqueta para todo lo todavía inexplicado.

:::

Las estrategias SETI amplían la búsqueda más allá de mensajes deliberados. Una infraestructura podría delatarse por consecuencias de su funcionamiento, aunque nadie quisiera comunicarse. La detectabilidad depende de escala, distancia, orientación y tiempo de observación. [3]

La escena es menos inmediata que encontrar una ciudad en una foto. Sería una curva de datos, otra medición y un modelo que logra explicar ambas. Tal vez el primer indicio de una civilización estelar aparezca como una pregunta persistente en la luz de un punto que siempre habíamos considerado natural.
`),
];
