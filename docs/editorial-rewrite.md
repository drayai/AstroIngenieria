# Registro de reescritura editorial

La guía operativa está en [editorial-guide.md](./editorial-guide.md). La matriz comprobable de categorías, tandas y estados está en `scripts/editorialPlan.mjs`. Este registro documenta las decisiones y la evidencia de cada tanda.

## Estado general

| Tanda | Contenido | Estado |
|---:|---|---|
| 0 | Capítulos 0 y 1, referencias editoriales | Revisado y validado |
| 1 | Civilizaciones I, II y III | Revisado y validado |
| 2 | Otras formas de existir | Revisado y validado |
| 3 | Expansión autónoma | Revisado y validado |
| 4 | Interpretar el silencio | Revisado y validado |
| 5 | Buscar otras tecnologías | Revisado y validado |
| 6 | Propulsión nuclear y fuentes extremas | Revisado y validado |
| 7 | Geometrías y límites del viaje | Revisado y validado |
| 8 | Empujar con electricidad | Revisado y validado |
| 9 | Vehículos y fuentes de empuje | Revisado y validado |
| 10 | Llegar a otra estrella y permanecer allí | Revisado y validado |
| 11 | Habitar Venus | Revisado y validado |
| 12 | Construir ambientes sobre un mundo | Revisado y validado |
| 13 | Qué hace habitable un entorno | Revisado y validado |
| 14 | Intervenir sobre luz, atmósfera y materiales | Revisado y validado |
| 15 | Mover una estrella | Revisado y validado |
| 16 | Trabajar con materia estelar | Revisado y validado |
| 17 | Comprender y observar la ingeniería estelar | Revisado y validado |
| 18–24 | Reescrituras planificadas | Pendiente |
| 25 | Auditoría de ocho referencias posteriores | Pendiente |

Los capítulos 0 y 1 se conservan. La siguiente ejecución debe trabajar únicamente la tanda 18.

## Tanda 1 — Civilizaciones de escala planetaria, estelar y galáctica

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Tipo I | A | 1.120 | La etiqueta energética ahora se convierte en una red planetaria recorrible, con generación, demanda, fallos, calor e intervención | Revisado y validado |
| Tipo II | A | 1.026 | El sistema se explica desde un colector, siguiendo energía, industria, órbitas, mantenimiento y comunidades | Revisado y validado |
| Tipo III | A | 1.088 | La escala galáctica se construye mediante llegadas locales, tiempos de comunicación, diversidad histórica y observación agregada | Revisado y validado |

### Decisiones narrativas

- **Tipo I:** seguir la energía que llega a una vivienda y ampliar el recorrido hasta una red planetaria. La tormenta muestra resiliencia sin atribuir una política concreta.
- **Tipo II:** aproximarse a un colector, seguir un fotón y un cargamento, y alejarse después hasta descubrir una geografía de órbitas.
- **Tipo III:** contraponer la galaxia que cabe en un detector con comunidades que reciben noticias de épocas distintas. La arqueología sustituye la imagen de una expansión uniforme.

### Auditoría editorial

| Criterio | Tipo I | Tipo II | Tipo III |
|---|---|---|---|
| Representación mental | Red distribuida entre regiones, órbita y vivienda | Archipiélago orbital alrededor de una estrella | Galaxia observada como una imagen compuesta por tiempos |
| Mecanismo | Captar, convertir, transportar, equilibrar y disipar energía | Interceptar luz, utilizarla, fabricar y expulsar calor | Propagación por asentamientos locales y comunicación limitada por la luz |
| Posibilidad desarrollada | Compartir capacidad entre paisajes y sostener fallos | Convertir un sistema solar en territorio industrial y habitable | Actividad galáctica plural sin autoridad ni presente únicos |
| Detalle emocional | Una vivienda que conserva energía durante una tormenta | Una niña que conoce otras comunidades como puntos lejanos | Una tripulación que encuentra infraestructura abandonada |
| Distinción central | Potencia no implica dominio, justicia ni uniformidad | Potencia estelar no equivale a población o cáscara rígida | Potencia agregada no equivale a imperio coordinado |
| Incertidumbre | No existe un umbral universal de tipo I | Arquitectura, cobertura y propósito cambian la apariencia | No sabemos si existe; las firmas térmicas admiten causas naturales |
| Aporte vecino | Explica coordinación planetaria | Explica territorio estelar | Explica tiempo, expansión y observación galácticos |

### Fuentes

Se conservaron y comprobaron las referencias existentes:

- Kardashev (1964), para el origen y alcance energético de la clasificación.
- Evaluación de NASA sobre energía solar espacial y guía térmica, para las cadenas de conversión y disipación del Tipo I.
- Wright (2020, 2023), para arquitecturas Dyson, balance radiativo y calor residual del Tipo II.
- Carroll-Nellenback et al. (2019), para expansión mediante asentamientos, movimiento estelar y estados de ocupación incompleta del Tipo III.

### Validación

- Cobertura del plan editorial: 106 identificadores; 15 constan como revisados, incluidas las 12 referencias de capítulos 0–1.
- Mínimos de categoría A: cumplidos por los tres artículos.
- Citas, fuentes, imágenes, notas y párrafos únicos: verificados con `npm run check:articles`.
- ESLint y build de producción: correctos.
- Escritorio y móvil: las tres lecturas cargan, muestran sus apartados y nota técnica, y no generan desbordamiento horizontal.
- Fallo ajeno a la tanda: la prueba global continúa deteniéndose al buscar el `canvas` de la maqueta 3D de O’Neill en Playwright. Sucede después de aprobar las comprobaciones editoriales y no se ocultó ni se debilitó esa aserción.

## Tanda 2 — Otras formas de existir

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Civilizaciones digitales | A | 1.057 | La hipótesis ahora se apoya en soporte físico, refrigeración, ritmos subjetivos, copias, latencia y gobierno de la infraestructura | Revisado y validado |
| Posbiológicas | A | 1.091 | Se separan cambios corporales, cognitivos y culturales, con necesidades materiales y señales observables propias | Revisado y validado |
| Tiempo profundo | A | 1.175 | La duración se vuelve una cadena concreta de mantenimiento, traducción, revisión de objetivos y transmisión del conocimiento | Revisado y validado |

### Decisiones narrativas

- **Civilizaciones digitales:** observar primero una instalación silenciosa y entrar después en su geografía doble. Un minuto exterior sirve para relacionar ritmo subjetivo, recursos físicos y poder sobre el soporte.
- **Posbiológicas:** acompañar una sonda por una infraestructura sin rasgos humanos. El jardín que mantiene una máquina sostiene la ambigüedad entre automatización, herencia cultural y posible experiencia.
- **Tiempo profundo:** seguir un plano mal traducido y los relevos que mantienen una obra. El archivo vuelve al cierre para mostrar que conservar conocimiento incluye permitir que otros lo corrijan.

### Auditoría editorial

| Criterio | Civilizaciones digitales | Posbiológicas | Tiempo profundo |
|---|---|---|---|
| Representación mental | Módulos, memoria y radiadores sostienen un paisaje percibido | Una red industrial rodea un pequeño jardín biológico | Una instalación cambia de piezas, lengua y custodios |
| Mecanismo | Estados físicos, energía, refrigeración, corrección y latencia | Energía, materiales, reparación, fabricación y herencia de diseños | Relevos, pruebas, archivos redundantes y adaptación al entorno |
| Posibilidad desarrollada | Ritmos subjetivos y comunidades divergentes entre estrellas | Habitar ambientes incompatibles con el cuerpo humano | Sostener funciones revisables más allá de una cultura |
| Detalle emocional | Una pausa interior corresponde a días de reparación exterior | Una máquina ajusta la luz sobre una hoja | Una especialista deja una corrección para una lengua futura |
| Distinción central | Automatización, simulación y conciencia no son equivalentes | Cuerpo, inteligencia, conciencia y cultura son capas distintas | Duración material, funcional, institucional y cultural difieren |
| Incertidumbre | Copiar datos no resuelve conciencia, continuidad ni derechos | La actividad autónoma no demuestra experiencia interior | Los modelos físicos y los relatos sociales tienen alcances distintos |
| Aporte vecino | Examina mundos y personas hipotéticas dentro del cómputo | Examina cuerpos, necesidades y paisajes posteriores a la biología | Examina cómo cualquier proyecto entrega decisiones al futuro |

### Fuentes

Se conservaron y comprobaron las referencias existentes:

- Lloyd (2000), para la relación entre computación, energía, memoria y límites físicos.
- NASA, para la cadena térmica que transporta y evacua el calor de una infraestructura espacial.
- El estudio de NASA sobre sistemas autorreplicantes (1980), para distinguir reparación, fabricación parcial y cierre industrial.
- Wright (2021), para buscar efectos tecnológicos sin presuponer la biología o conciencia de sus responsables.
- NASA Science, para las escalas y procesos de evolución estelar.
- Hein et al. (2020), para conectar la continuidad técnica y social de las naves mundo.
- Scoggins y Kipping (2022, revisión de 2023), para presentar la extracción estelar como un escenario modelado y condicionado por supuestos.

### Validación

- Cobertura del plan editorial: 106 identificadores; 18 constan como revisados, incluidas las 12 referencias de capítulos 0–1.
- Mínimos de categoría A: cumplidos por los tres artículos con el recuento exclusivo de párrafos principales.
- Citas, fuentes, imágenes, notas y párrafos únicos: verificados con `npm run check:articles`.
- ESLint y build de producción: correctos.
- Escritorio y móvil: las tres lecturas cargan, muestran sus apartados y nota, y no generan desbordamiento horizontal.
- Fallo ajeno a la tanda: la prueba global continúa deteniéndose al buscar el `canvas` de la maqueta 3D de O’Neill en Playwright, después de completar las comprobaciones específicas de las tandas 1 y 2. La aserción se conserva.

## Tanda 3 — Expansión autónoma

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Sondas de Von Neumann | A | 984 | La autorreplicación se recorre desde la prospección hasta la verificación del descendiente, incluyendo dependencias industriales y errores | Revisado y validado |
| Colonización galáctica | A | 976 | La frontera abstracta se convierte en llegadas, frenado, industria, pausas, desapariciones y decisiones locales | Revisado y validado |
| Grabby aliens | B | 813 | Se explican los supuestos, la selección del observador y el alcance real de las inferencias del modelo | Revisado y validado |

### Decisiones narrativas

- **Von Neumann:** seguir una sonda que descubre que antes de copiarse debe construir una industria. La primera partida solo ocurre después de probar materiales, piezas, software y objetivos.
- **Colonización galáctica:** detener el mapa acelerado en una sola llegada. El debate antes del siguiente viaje muestra por qué una frontera galáctica depende de historias locales.
- **Grabby aliens:** comenzar con una animación de burbujas y desmontarla en tres supuestos. El cierre vuelve al cielo real para separar una inferencia condicionada de una detección.

### Auditoría editorial

| Criterio | Von Neumann | Colonización galáctica | Grabby aliens |
|---|---|---|---|
| Representación mental | Mina, hornos, taller, banco de pruebas y nave descendiente | Una nave frena y una comunidad levanta un nuevo nodo | Regiones que crecen en una animación del tiempo cósmico |
| Mecanismo | Prospectar, refinar, fabricar, ensamblar, comprobar y propagar | Llegar, frenar, establecerse, reproducir capacidad y decidir otro salto | Combinar tasa de aparición, velocidad, exclusión y selección |
| Posibilidad desarrollada | Una semilla industrial cartografía y construye observatorios | Una red plural recorre una galaxia móvil | Usar nuestra fecha y ubicación como información condicionada |
| Detalle emocional | La descendiente compara sus instrumentos con las estrellas | Una comunidad debate ante un ecosistema bajo el hielo | El punto del observador deja de ser aleatorio en la animación |
| Distinción central | Replicación parcial no equivale a cierre industrial | Expansión no equivale a ocupación permanente ni mando común | Modelo e inferencia no equivalen a predicción medida |
| Incertidumbre | Geología, piezas críticas, fallas y objetivos limitan cada rama | Destinos, sociedades y movimiento estelar rompen el frente uniforme | Los resultados dependen de supuestos y regla estadística |
| Aporte vecino | Explica la máquina que hace posible una rama | Explica las comunidades y pausas que forman la red | Explica una abstracción cosmológica y su sesgo observacional |

### Fuentes

Se conservaron y comprobaron las referencias existentes:

- NASA (1980), para descomponer la autorreplicación en minería, procesamiento, fabricación, ensamblaje y cierre de subsistemas.
- Agencia Espacial Europea, para relacionar recursos espaciales con prospección y extracción, sin confundir presencia con disponibilidad industrial.
- Carroll-Nellenback et al. (2019), para movimiento estelar, tiempos de asentamiento, expansión irregular y ocupación no permanente.
- Hein et al. (2020), para los requisitos sociotécnicos y de mantenimiento de naves mundo.
- Hanson et al. (2021), para los supuestos y la selección del observador del modelo de civilizaciones expansivas.

### Validación

- Cobertura del plan editorial: 106 identificadores; 21 constan como revisados, incluidas las 12 referencias de capítulos 0–1.
- Mínimos: cumplidos por los dos artículos A y el artículo B con recuento exclusivo de párrafos principales.
- Citas, fuentes, imágenes, notas y párrafos únicos: verificados con `npm run check:articles`.
- ESLint y build de producción: correctos.
- Escritorio y móvil: las tres lecturas cargan, muestran sus apartados y nota, y no generan desbordamiento horizontal.
- Fallo ajeno a la tanda: la prueba global continúa deteniéndose en el `canvas` de la maqueta 3D de O’Neill, después de aprobar las comprobaciones específicas de las tandas 1, 2 y 3. La aserción se conserva.

## Tanda 4 — Interpretar el silencio

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Gran filtro | A | 908 | Recorre filtros tempranos y tardíos y muestra cómo distintos hallazgos cambiarían partes concretas de la inferencia | Revisado y validado |
| Hipótesis del zoológico | B | 659 | Desarrolla vigilancia, latencia, coordinación, excepciones y condiciones de contrastación | Revisado y validado |
| Bosque oscuro | B | 661 | Reconstruye los supuestos estratégicos y compara silencio, cooperación y ataque bajo costes físicos | Revisado y validado |
| Civilizaciones silenciosas | B | 659 | Relaciona detectabilidad con dirección, tiempo, instrumento y calor sin atribuir secreto | Revisado y validado |
| Berserkers | B | 655 | Separa autonomía, replicación y hostilidad, y sigue cómo envejecen objetivos y errores | Revisado y validado |

### Decisiones narrativas

- **Gran filtro:** recorrer una secuencia de puertas y terminar en un laboratorio donde cada hallazgo solo modifica una parte de la tabla.
- **Zoológico:** trasladar la propuesta a la sala remota que debe vigilar, coordinar reglas y decidir con información antigua.
- **Bosque oscuro:** desmontar la metáfora en una cadena de incentivos y devolverle la memoria física de señales que ya partieron.
- **Silenciosas:** seguir huellas de distinta duración y banda para convertir el silencio en una relación entre fuente e instrumento.
- **Berserkers:** situar la decisión central ante una señal ambigua; el peligro procede del objetivo que impide detenerse y revisar.

### Auditoría editorial

| Criterio | Gran filtro | Zoológico | Bosque oscuro | Silenciosas | Berserkers |
|---|---|---|---|---|---|
| Representación mental | Puertas desde química hasta visibilidad | Observatorio remoto con reglas heredadas | Señales antiguas cruzando un bosque con memoria | Haces breves y radiadores persistentes | Nave que clasifica una señal ambigua |
| Mecanismo | Probabilidades acumuladas y selección del observador | Vigilancia, latencia y coordinación | Objetivos, incertidumbre, crecimiento y ataque | Cobertura, dirección, banda, tiempo y calor | Autonomía, industria replicante y clasificación |
| Posibilidad | Hallazgos distintos localizan etapas distintas | Una cuarentena limitada y potencialmente observable | Cooperación gradual frente a silencio o ataque | Actividad intensa con poca fuga detectable | Sistemas longevos con revisión y suspensión |
| Detalle emocional | Una muestra cambia una sola columna | Una Tierra antigua llega a la sala de vigilancia | Una emisión pasada ya no puede recuperarse | La observación pierde una conversación estrecha | La máquina debe decidir si espera siglos |
| Distinción | Rareza no equivale a catástrofe futura | Coherencia no equivale a evidencia | Miedo narrativo no equivale a estrategia universal | Poco visible no equivale a oculto | Replicar no equivale a ser hostil |
| Incertidumbre | Un solo caso y etapas dependientes | Intenciones y acuerdo no observados | Jugadores y costes desconocidos | Cobertura incompleta y alternativas naturales | No hay evidencia astronómica de estas máquinas |
| Aporte vecino | Ordena dónde puede surgir la rareza | Examina no interferencia deliberada | Examina ocultación por incentivos | Examina silencio sin intención | Examina una amenaza autónoma de origen literario |

### Fuentes y validación

Se conservaron y comprobaron Hanson sobre el gran filtro; Ball sobre la hipótesis del zoológico; la novela de Liu como origen literario del bosque oscuro; Wright, Kanodia y Lubar sobre cobertura SETI; Sandberg y colaboradores junto con su crítica termodinámica sobre estivación; Wright sobre calor residual; Saberhagen como origen ficcional; y NASA sobre autorreplicación.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 26 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las cinco lecturas cargan con apartados y nota sin desbordamiento horizontal.
- Fallo ajeno a la tanda: la prueba global conserva el fallo posterior del `canvas` 3D de O’Neill, después de aprobar las comprobaciones específicas de las tandas 1–4.

## Tanda 5 — Buscar otras tecnologías

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| SETI | A | 918 | Recorre selección, calibración, adquisición, filtros, descarte, seguimiento y publicación | Revisado y validado |
| Tecnofirmas | B | 652 | Distingue comunicaciones, atmósferas, infraestructuras y artefactos por sus alternativas | Revisado y validado |
| Radio SETI | B | 660 | Explica canalización, deriva, interferencia, repetición, polarización y dispersión | Revisado y validado |
| SETI óptico | B | 676 | Explica pulsos, coincidencia, contraste, ventanas espectrales y seguimiento | Revisado y validado |
| Civilizaciones y luz | B | 679 | Desarrolla épocas observadas, apuntado, traducción, ancho de banda y autonomía | Revisado y validado |

### Decisiones narrativas y auditoría

- **SETI:** una noche completa en la sala de control convierte la gran pregunta en decisiones reproducibles; el descarte de un satélite sostiene la emoción científica.
- **Tecnofirmas:** cuatro familias de huellas obligan a construir explicaciones alternativas distintas; varias predicciones independientes pueden reforzarse.
- **Radio:** el lector sigue una línea inclinada en un espectrograma y puede explicar cómo frecuencia, tiempo y movimiento producen su forma.
- **Óptico:** dos detectores deben coincidir antes de que un destello se considere celeste; una marca mínima conserva toda la incertidumbre del emisor.
- **Luz:** un mensaje une generaciones y épocas diferentes; latencia, ancho de banda e interpretación quedan separados.

Las cinco lecturas distinguen candidato, tecnología confirmada e intención interpretada. Desarrollan una posibilidad específica, un detalle humano o instrumental, incertidumbres observacionales y un aporte diferente frente a los temas vecinos.

### Fuentes y validación

Se conservaron y comprobaron Wright sobre estrategias SETI; Wright, Kanodia y Lubar sobre el espacio de búsqueda; los modelos Dyson para balance térmico; y la descripción instrumental de Harvard Optical SETI.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 31 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las cinco lecturas cargan con apartados y nota sin desbordamiento horizontal.
- Fallo ajeno a la tanda: la prueba global conserva el fallo posterior del `canvas` 3D de O’Neill, después de aprobar las comprobaciones específicas de las tandas 1–5.

## Tanda 6 — Propulsión nuclear y fuentes extremas

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Proyecto Orion | A | 962 | Sigue cada pulso desde el dispositivo hasta placa, amortiguadores, estructura y misión | Revisado y validado |
| Propulsión por fusión | A | 906 | Conecta combustible, reacción, productos, tobera magnética, potencia y refrigeración | Revisado y validado |
| Antimateria | A | 902 | Recorre producción, enfriamiento, confinamiento, aniquilación y conversión en escape | Revisado y validado |
| Ramjet de Bussard | B | 767 | Explica captura, ionización, arrastre, fusión, expulsión y variantes del concepto | Revisado y validado |

### Decisiones narrativas y auditoría

- **Orion:** una detonación se transforma paso a paso en aceleración tolerable; la tripulación siente el resultado de dos etapas mecánicas y debe reservar pulsos para frenar.
- **Fusión:** el combustible determina productos y arquitectura; el lector puede seguir la energía hasta partículas dirigidas y pérdidas neutrales.
- **Antimateria:** el depósito imposible de tocar organiza el recorrido desde el acelerador hasta una tobera todavía hipotética.
- **Bussard:** el material que parece suministro llega primero como resistencia; el balance entre arrastre y escape sostiene toda la lectura.

Las cuatro lecturas explican la procedencia del empuje, desarrollan misiones completas, distinguen fuente energética y propelente, y localizan incertidumbres técnicas sin presentar propuestas conceptuales como vehículos operativos.

### Fuentes y validación

Se conservaron y comprobaron NASA NTRS sobre Orion; NASA NIAC sobre cohetes de fusión; CERN sobre producción y confinamiento de antimateria; NASA Glenn sobre la ecuación del cohete; y Semay y Silvestre-Brac sobre pérdidas y límites del ramjet.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 35 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las cuatro lecturas cargan con sus apartados y, cuando corresponde, su nota, sin desbordamiento horizontal.
- Fallo ajeno a la tanda: la prueba global conserva el fallo posterior del `canvas` 3D de O’Neill, después de aprobar las comprobaciones específicas de las tandas 1–6.

## Tanda 7 — Geometrías y límites del viaje

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Métrica de Alcubierre | A | 940 | Separa movimiento local y geometría global y desarrolla energía, horizontes, control y causalidad | Revisado y validado |
| Agujeros de gusano | A | 943 | Explica garganta, atravesabilidad, estabilidad, bocas, desfase temporal y construcción | Revisado y validado |
| Propulsión sin reacción | B | 949 | Reconstruye conservación del momento, frontera del sistema y controles contra falsos positivos | Revisado y validado |

### Decisiones narrativas y auditoría

- **Alcubierre:** la cabina quieta conduce hacia la pared donde reside el problema físico; arrancar, controlar y detener la geometría evita tratar una métrica como motor.
- **Agujeros de gusano:** el lector atraviesa conceptualmente una boca y descubre que tamaño, mareas, estabilidad y colocación son logros separados.
- **Sin reacción:** una aguja sobre una balanza obliga a ampliar sucesivamente la frontera del sistema hasta encontrar fotones, campos, cables, calor o un artefacto.

Las lecturas distinguen solución matemática, observación y tecnología; explican una posibilidad interesante, identifican el detalle físico que la limita y presentan energía negativa, causalidad y mediciones discutidas con su incertidumbre real.

### Fuentes y validación

Se conservaron y comprobaron el artículo original de Alcubierre y su revisión con Lobo; Morris, Thorne y Yurtsever sobre conexiones atravesables y causalidad; Tajmar, Neunzig y Weikert sobre falsos positivos del EMDrive; y NASA Goddard sobre el intercambio de momento de las velas.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 38 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las tres lecturas cargan con sus apartados y notas sin desbordamiento horizontal.
- La prueba integral del lector, incluida la maqueta 3D de O’Neill, queda registrada con su resultado real en la ejecución de esta tanda.

## Tanda 8 — Empujar con electricidad

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Motores iónicos | B | 750 | Sigue ionización, rejillas, neutralización, erosión y una misión entre asteroides | Revisado y validado |
| Propulsor Hall | B | 752 | Separa deriva electrónica, campo eléctrico, descarga anular, desgaste y aplicación orbital | Revisado y validado |
| Solar eléctrica | B | 770 | Recorre la cadena desde fotones hasta escape y muestra cómo distancia y paneles cambian la misión | Revisado y validado |
| Nuclear eléctrica | B | 761 | Recorre reactor, conversión, distribución, propulsor y radiadores lejos del Sol | Revisado y validado |

### Decisiones narrativas y auditoría

- **Iónico:** una partícula atraviesa cámara, rejillas y neutralizador; la paciencia de una misión entre asteroides explica el valor del empuje bajo.
- **Hall:** el anillo se entiende siguiendo por separado electrones e iones; una plataforma orbital muestra el compromiso entre densidad de empuje y vida.
- **Solar eléctrica:** cada vatio viaja desde la luz hasta el chorro; un remolcador revela cómo cambia la arquitectura con la distancia.
- **Nuclear eléctrica:** una central completa acompaña al motor; el viaje a los gigantes helados justifica masa, conversión y calor.

Las cuatro lecturas distinguen propulsor y fuente, explican la relación entre potencia, empuje y velocidad de escape, y ofrecen escenarios donde cada configuración resulta apropiada sin presentar una opción universal.

### Fuentes y validación

Se conservaron y comprobaron NASA/JPL sobre Dawn y propulsión iónica; NASA sobre propulsión eléctrica solar y tecnologías de propulsión espacial; y NASA junto con su documentación térmica para arquitecturas nucleares eléctricas.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 42 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las cuatro lecturas cargan con sus apartados y notas sin desbordamiento horizontal.
- La prueba integral conserva navegación, observatorio, imágenes y maqueta 3D de O’Neill.

## Tanda 9 — Vehículos y fuentes de empuje

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Cohetes químicos | B | 796 | Sigue reactivos, alimentación, inyección, cámara, tobera, etapas y maniobras de gran empuje | Revisado y validado |
| Propulsión nuclear térmica | B | 790 | Separa reactor y propelente y recorre calentamiento, expansión, reinicios, almacenamiento y misión | Revisado y validado |
| Vela solar | B | 770 | Explica transferencia de momento, orientación, despliegue y modificación paciente de una órbita | Revisado y validado |
| Propulsión por energía transmitida | B | 763 | Recorre emisor, haz, seguimiento, receptor y reacción, y desarrolla la dependencia de la infraestructura | Revisado y validado |

### Decisiones narrativas y auditoría

- **Cohetes químicos:** el lanzamiento se reconstruye desde los depósitos hasta la tobera; la pérdida de masa y una maniobra breve explican por qué el empuje alto justifica esta arquitectura.
- **Nuclear térmica:** una molécula de hidrógeno atraviesa un reactor sin confundirse con su combustible; dos encendidos durante un viaje a Marte vuelven concretos el almacenamiento y la fatiga térmica.
- **Vela solar:** la membrana cambia una órbita inclinando la fuerza de la luz; arrugas, navegación y meses de correcciones muestran que prescindir de propelente no elimina la operación.
- **Energía transmitida:** el sistema se divide entre una central distante y el vehículo; comparar una vela láser con una nave eléctrica receptora aclara dos formas distintas de convertir el haz en movimiento.

Las cuatro lecturas permiten reconstruir dónde se produce la reacción física, qué masa o radiación intercambia momento y qué parte del sistema permanece a bordo. Cada una desarrolla una misión adecuada y explica por qué sus ventajas no sirven para todas las maniobras. Se distinguen combustible, propelente y fuente energética; empuje instantáneo y cambio acumulado; y autonomía del vehículo y dependencia de una red externa.

### Fuentes y validación

Se conservaron y comprobaron NASA Glenn sobre la ecuación ideal del cohete; NASA sobre tecnologías de propulsión espacial y propulsión nuclear; NASA Goddard sobre velas solares; y la documentación de Breakthrough Starshot para la arquitectura conceptual de energía dirigida. Las prestaciones futuras se presentan como objetivos o propuestas, no como vehículos operativos.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 46 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las cuatro lecturas cargan con sus apartados y notas sin desbordamiento horizontal.
- La prueba integral conserva navegación, observatorio, imágenes y maqueta 3D de O’Neill.

## Tanda 10 — Llegar a otra estrella y permanecer allí

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Vela láser | A | 1.092 | Recorre emisión, fase, seguimiento, estabilidad, aceleración, crucero, observación y posible captura | Revisado y validado |
| Vela magnética | B | 779 | Explica cómo campo, circuito y plasma intercambian momento durante impulso y frenado | Revisado y validado |
| Vela eléctrica | B | 790 | Sigue carga, desviación de protones, rotación, control de filamentos y una ruta heliocéntrica | Revisado y validado |
| Frenado interestelar | B | 867 | Diseña la llegada desde la órbita final y compara propelente, luz, plasma e infraestructura remota | Revisado y validado |

### Decisiones narrativas y auditoría

- **Vela láser:** una matriz planetaria persigue una membrana mínima durante la aceleración; el silencio posterior obliga a desarrollar supervivencia, navegación, datos y llegada, además de velocidad de salida.
- **Vela magnética:** la superficie visible se sustituye por un campo; seguir una partícula y después una bobina desplegable conecta la reacción física con una desaceleración que comienza años antes del destino.
- **Vela eléctrica:** una rueda de filamentos conserva su forma al girar; carga y tensión se modulan frente a un viento variable para convertir control de actitud en trayectoria.
- **Frenado interestelar:** la órbita científica se diseña hacia atrás; el instante en que la estrella deja de crecer tan deprisa vuelve perceptible la diferencia entre atravesar y permanecer.

Las cuatro lecturas permiten imaginar sus componentes y reconstruir qué flujo aporta el momento. Distinguen presión luminosa, campo magnético y potencial electrostático; aceleración desde una infraestructura de origen y frenado con recursos disponibles en el destino; y sobrevuelo, captura estelar e inserción planetaria. Las prestaciones dependen de masa por área, apertura, plasma, velocidad relativa y trayectoria, por lo que se presentan como propuestas condicionadas y no como vehículos operativos.

### Fuentes y validación

Se conservaron y comprobaron Breakthrough Initiatives para la arquitectura conceptual Starshot; Andrews y Zubrin para velas magnéticas; Janhunen y colaboradores para vela eléctrica solar; Heller y Hippke para frenado fotogravitacional; y NASA Glenn para el coste propulsivo de llevar el frenado a bordo.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 50 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las cuatro lecturas cargan con sus apartados y notas sin desbordamiento horizontal.
- La prueba integral conserva navegación, observatorio, imágenes y maqueta 3D de O’Neill.

## Tanda 11 — Habitar Venus

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Terraformación de Venus | A | 1.151 | Recorre balances de energía, enfriamiento, atmósfera, carbono, agua y una secuencia intergeneracional | Revisado y validado |
| Ciudades flotantes | A | 1.166 | Recorre flotabilidad, altitud, química, recursos, vientos, transporte, reparación y rescate | Revisado y validado |

### Decisiones narrativas y auditoría

- **Terraformación de Venus:** la posible costa se aplaza hasta que el lector pueda seguir cada átomo y cada flujo de energía; una pantalla solar inicia una secuencia que debe explicar dónde terminan calor, carbono y productos químicos.
- **Ciudades flotantes:** el lector camina sobre una cubierta sostenida por su propio aire y descubre debajo celdas, depósitos y talleres; mapas de viento y espacio de evacuación convierten el asentamiento en un archipiélago móvil.

La primera lectura permite imaginar el planeta como un sistema térmico y material que cambia por etapas, y distingue enfriar, reducir presión, aportar agua y producir una atmósfera respirable. La segunda permite reconstruir cómo una plataforma conserva altura, procesa recursos y responde a una fuga, y distingue sustentación atmosférica de vuelo orbital. La posibilidad emocional se apoya en una generación que hereda el control de una pantalla y en una ciudad cuyo espacio vacío existe para recibir a los evacuados de otra.

### Fuentes y validación

Se conservaron y comprobaron NASA Science para condiciones físicas de Venus; el estudio de Roger Angel para principios y escala de pantallas solares, sin presentarlo como diseño venusiano; y NASA Langley HAVOC para la exploración aerostática de la franja atmosférica. Las ciudades y la transformación global se mantienen expresamente como extrapolaciones conceptuales.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 52 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las dos lecturas cargan con sus apartados y notas sin desbordamiento horizontal.
- La prueba integral conserva navegación, observatorio, imágenes y maqueta 3D de O’Neill.

## Tanda 12 — Construir ambientes sobre un mundo

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Paraterraformación | B | 769 | Distingue ambientes térmicos, agrícolas y respirables y sigue terreno, módulos, fronteras y operación | Revisado y validado |
| Worldhouse | B | 829 | Desarrolla continuidad estructural, clima interior, presión, compartimentación y mantenimiento generacional | Revisado y validado |
| Ciudades con cúpulas | B | 883 | Recorre plaza, capas de cubierta, redes urbanas, esclusas, fugas, refugios y crecimiento por nodos | Revisado y validado |

### Decisiones narrativas y auditoría

- **Paraterraformación:** un camino cruza ambientes con variables distintas; terreno y cubierta forman juntos el recinto, y cada ampliación añade una frontera mecánica y biológica comprobable.
- **Worldhouse:** mirar hacia un techo casi convertido en cielo conduce a las fuerzas que recorren kilómetros; meteorología y renovación de paneles muestran por qué una cubierta territorial nunca queda terminada.
- **Ciudades con cúpulas:** una plaza abierta organiza distancias, esclusas y refugios; una grieta permite seguir detección, aislamiento, reparación y capacidad de recibir habitantes de otra cúpula.

Las tres lecturas distinguen una estrategia general de modificación local, una envolvente territorial continua y un asentamiento urbano localizado. El lector puede explicar qué sostiene la presión, cómo se aíslan fallos y qué cambia al ampliar cada arquitectura. La emoción se apoya en operaciones concretas: técnicos que buscan una fuga subterránea, generaciones que reemplazan el cielo construido y una plaza que sigue abierta durante una reparación exterior.

### Fuentes y validación

Se conservaron y comprobaron NASA/JPL para modificaciones térmicas locales con aerogel; NASA ECLSS para los ciclos y equipos ambientales que continúan siendo necesarios; y estudios de asentamientos espaciales para separar envolvente, protección y soporte vital. Las extrapolaciones worldhouse se identifican como propuestas especulativas sin diseño canónico.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 55 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las tres lecturas cargan con sus apartados y notas sin desbordamiento horizontal.
- La prueba integral conserva navegación, observatorio, imágenes y maqueta 3D de O’Neill.

## Tanda 13 — Qué hace habitable un entorno

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Habitabilidad | A | 1.021 | Relaciona ambiente, recursos, tasas y ciclos con organismos concretos y duración | Revisado y validado |
| Zona habitable | B | 707 | Explica el modelo orbital, sus bordes, la historia estelar y las observaciones que todavía faltan | Revisado y validado |
| Ecopoiesis | A | 980 | Recorre ensayo confinado, sucesión, suelo vivo, persistencia y decisión de liberar organismos | Revisado y validado |
| Protección planetaria | B | 861 | Sigue contaminación, trazabilidad, contexto de muestras, retorno y exploración humana | Revisado y validado |

### Decisiones narrativas y auditoría

- **Habitabilidad:** un corte vertical del mismo mundo aloja una persona protegida, una base y un posible ecosistema subglacial; el lector aprende que cada respuesta necesita habitante, lugar y duración.
- **Zona habitable:** el anillo verde se desmonta como resultado de un modelo y se convierte después en una lista concreta de observaciones astronómicas.
- **Ecopoiesis:** una película microscópica dentro de una cámara inicia una sucesión; retirar ayudas y atravesar una noche muestra si existe un ciclo o solo supervivencia temporal.
- **Protección planetaria:** una molécula detectada obliga a reconstruir su ruta desde la sala limpia; preservar muestra y contexto convierte la precaución en parte del descubrimiento.

Las cuatro lecturas distinguen habitabilidad general, requisitos de un organismo y vida humana sin protección; franja orbital y clima real; supervivencia individual y ecosistema persistente; y norma de contaminación, interpretación científica y decisión ética. Cada incertidumbre queda ligada a una medición, un control o una etapa de misión.

### Fuentes y validación

Se conservaron y comprobaron NASA Science para la definición y límites de zona habitable; NASA ECLSS para cadenas de soporte vital; NASA NIAC para el concepto confinado de ecopoiesis marciana; y NASA Office of Safety and Mission Assurance para contaminación de ida y retorno. Las exigencias de misiones futuras se remiten expresamente a las normas vigentes aplicables.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 59 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las cuatro lecturas cargan con sus apartados y notas sin desbordamiento horizontal.
- La prueba integral conserva navegación, observatorio, imágenes y maqueta 3D de O’Neill.

## Tanda 14 — Intervenir sobre luz, atmósfera y materiales

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Espejos orbitales | B | 761 | Recorre geometría, mancha luminosa, constelación, objetivo local, control de fallos y retirada | Revisado y validado |
| Parasoles espaciales | B | 761 | Explica ubicación, reducción de irradiación, respuesta climática, despliegue gradual y dependencia | Revisado y validado |
| Importación de volátiles | B | 782 | Sigue el recurso desde prospección y extracción hasta frenado, captura, procesamiento y uso | Revisado y validado |
| Magnetosfera artificial | B | 772 | Conecta dipolo, plasma, ubicación en L1, medición del escape y mantenimiento de la frontera | Revisado y validado |

### Decisiones narrativas y auditoría

- **Espejos orbitales:** un amanecer móvil obliga a seguir la coreografía entre Sol, membrana y suelo; sombras biológicas y retirada orbital muestran que iluminar es una operación local programada.
- **Parasoles:** una sombra casi invisible se mide como potencia planetaria; despliegue y retirada por etapas revelan la memoria climática que queda después de cambiar la luz.
- **Volátiles:** el hielo comienza mezclado con roca y solo se vuelve suministro después de extracción, trayectoria, frenado y análisis; el depósito receptor sustituye la imagen de un cometa impactando.
- **Magnetosfera:** una instalación localizada sostiene una frontera de plasma enorme; el cambio se reconoce primero en instrumentos orbitales y no como una atmósfera creada de inmediato.

Las lecturas permiten identificar ubicación, intercambio físico y variable modificada. Distinguen iluminación local de control climático; reducción de irradiación de eliminación de gases; reserva mineral de material industrial disponible; y reducción de ciertos procesos de escape de creación atmosférica. Las escalas cuantitativas de potencia, presión luminosa y energía de llegada se relacionan con operaciones, no se presentan como soluciones completas.

### Fuentes y validación

Se conservaron y comprobaron NASA Goddard sobre presión luminosa; Roger Angel sobre nubes de elementos cercanas a L1; ESA sobre recursos espaciales; NASA Glenn sobre cambios de velocidad; Jakosky y Edwards para inventarios atmosféricos marcianos; y Green y colaboradores para el dipolo magnético conceptual en Marte.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 63 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las cuatro lecturas cargan con sus apartados y notas sin desbordamiento horizontal.
- La prueba integral conserva navegación, observatorio, imágenes y maqueta 3D de O’Neill.

## Tanda 15 — Mover una estrella

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Motores estelares | A | 1.010 | Explica reacción externa, aceleración acumulada, navegación galáctica, órbitas acompañantes y apagado | Revisado y validado |
| Propulsor de Shkadov | B | 760 | Sigue el momento de la radiación, el equilibrio del reflector, el efecto sobre planetas y su reparación | Revisado y validado |
| Motor de Caplan | A | 1.006 | Sigue materia estelar, captación, procesamiento, chorros, acoplamiento, calor e inventario de masa | Revisado y validado |

### Decisiones narrativas y auditoría

- **Motores estelares:** un amanecer que parece idéntico conduce a dos mapas separados por millones de años; la lectura muestra cómo una diferencia estadística de trayectoria se convierte en navegación heredada.
- **Shkadov:** una caja imaginaria alrededor de estrella y reflector obliga a contar únicamente la luz que escapa; mantenimiento segmentado y clima planetario impiden tratarlo como un espejo suspendido sin consecuencias.
- **Caplan:** cada kilogramo se sigue desde el plasma ligado a la estrella hasta los chorros que abandonan el sistema; dos flujos explican cómo el motor evita convertirse en una nave que simplemente se aleja.

Las tres lecturas permiten reconstruir el intercambio que produce el movimiento. Distinguen fuerzas internas de momento que abandona el sistema, reflector pasivo de cadena industrial activa y aceleración instantánea de desviación acumulada. Las incertidumbres se sitúan en estabilidad, star lifting, procesamiento, control térmico y supervivencia durante eras, sin presentar los modelos como máquinas disponibles.

### Fuentes y validación

Se conservaron y comprobaron Caplan para la comparación entre arquitecturas Shkadov y activa; NASA Science para propiedades y entorno del Sol; NASA Goddard para transferencia de momento luminosa; NASA NIAC para distinguir fusión energética de una máquina propulsiva completa; y NASA sobre control térmico espacial.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 66 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las tres lecturas cargan con sus apartados y notas sin desbordamiento horizontal.
- La prueba integral aprobó navegación, notas, imágenes y las comprobaciones de las tandas 1–15 en escritorio y móvil; después se detuvo porque la maqueta de O’Neill no generó `.mo-model-pane canvas` bajo los cambios locales ajenos presentes en `MuseoOrbital.tsx` y `museoOrbital.css`.

## Tanda 16 — Trabajar con materia estelar

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Star lifting | A | 1.030 | Recorre escape, captación, frenado, separación, producto, transporte y respuesta de la estrella | Revisado y validado |
| Gestión estelar | B | 806 | Relaciona objetivo habitable, extracción de masa, modelos internos, observación y continuidad institucional | Revisado y validado |
| Procesamiento de plasma | B | 871 | Explica medición, guiado, frenado, separación, recombinación, refrigeración y almacenamiento | Revisado y validado |

### Decisiones narrativas y auditoría

- **Star lifting:** una mina sin suelo sigue cada partícula desde un flujo natural o inducido hasta un tanque; comparar el producto con recursos fríos evita confundir abundancia estelar con disponibilidad industrial.
- **Gestión estelar:** una comunidad define primero qué desea conservar y observa indirectamente la estructura de la estrella; un pequeño ajuste heredado durante eras sostiene la emoción y la incertidumbre.
- **Procesamiento de plasma:** el contenedor frío funciona como prueba final; cada etapa anterior identifica dónde terminan carga, energía, impurezas y calor.

Las tres lecturas distinguen extracción natural e inducida, material exterior y composición profunda, evolución modelada y máquina operativa, y guiado magnético y enfriamiento real. Los mecanismos nombran campos eléctricos, trayectorias carga/masa, colisiones, recombinación, circuitos y radiadores. Las consecuencias planetarias y los límites energéticos acompañan la posibilidad industrial.

### Fuentes y validación

Se conservaron y comprobaron NASA Science para estructura y entorno solar; Scoggins y Kipping para respuestas evolutivas bajo tasas prescritas de extracción; Caplan para la relación entre star lifting y motores activos; NASA/JPL para operaciones electromagnéticas con iones; y NASA para control térmico espacial.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 69 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las tres lecturas cargan con sus apartados y notas sin desbordamiento horizontal.
- La comprobación global de la maqueta se registra separadamente porque el museo conserva cambios locales ajenos a esta tanda.

## Tanda 17 — Comprender y observar la ingeniería estelar

| Tema | Categoría | Palabras principales | Carencia resuelta | Estado |
|---|---|---:|---|---|
| Física estelar | B | 831 | Relaciona gravedad, presión, transporte energético, composición, observación y respuesta a intervenciones | Revisado y validado |
| Navegación estelar | B | 753 | Sigue coordenadas, incertidumbre, integración galáctica, encuentro, órbitas acompañantes y corrección | Revisado y validado |
| Tecnofirmas estelares | B | 819 | Conecta arquitecturas concretas con espectro, calor, flujos, astrometría y alternativas naturales | Revisado y validado |

### Decisiones narrativas y auditoría

- **Física estelar:** la superficie turbulenta conduce hacia capas que soportan peso y transportan energía; observaciones indirectas permiten reconstruir un interior que ninguna instalación puede tocar directamente.
- **Navegación estelar:** dos regiones de probabilidad buscan una cita futura; el recorrido muestra por qué distancia mínima, velocidad relativa y conservación de órbitas son decisiones separadas.
- **Tecnofirmas:** un punto de luz se abre en varias curvas; cada motor o colector debe predecir una combinación de calor, materia y movimiento que sobreviva a comparaciones con polvo, compañeras y actividad natural.

Las lecturas mantienen diferenciadas propiedades naturales e intervención hipotética. El lector puede explicar el equilibrio estelar, el cálculo iterativo de una trayectoria galáctica y el paso de anomalía a hipótesis contrastable. Ninguna rareza se presenta como tecnología confirmada y ninguna consecuencia observable se convierte automáticamente en intención o sociedad.

### Fuentes y validación

Se conservaron y comprobaron NASA Science para estructura, evolución y observación estelar; Caplan para aceleraciones y arquitecturas de motores; Wright para balance térmico de infraestructuras Dyson; Scoggins y Kipping para evolución bajo star lifting; y fuentes SETI para metodología de búsqueda y descarte.

- `npm run check:articles`: cobertura, mínimos, citas, imágenes, notas y párrafos únicos correctos; 72 artículos certificados.
- `npm run lint` y `npm run build`: correctos.
- Escritorio y móvil: las tres lecturas cargan con sus apartados y notas sin desbordamiento horizontal.
- La comprobación global de la maqueta se registra separadamente porque el museo conserva cambios locales ajenos a esta tanda.
