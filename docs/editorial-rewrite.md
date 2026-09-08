# Registro de reescritura editorial

La guía operativa está en [editorial-guide.md](./editorial-guide.md). La matriz comprobable de categorías, tandas y estados está en `scripts/editorialPlan.mjs`. Este registro documenta las decisiones y la evidencia de cada tanda.

## Estado general

| Tanda | Contenido | Estado |
|---:|---|---|
| 0 | Capítulos 0 y 1, referencias editoriales | Revisado y validado |
| 1 | Civilizaciones I, II y III | Revisado y validado |
| 2 | Otras formas de existir | Revisado y validado |
| 3 | Expansión autónoma | Revisado y validado |
| 4–24 | Reescrituras planificadas | Pendiente |
| 25 | Auditoría de ocho referencias posteriores | Pendiente |

Los capítulos 0 y 1 se conservan. La siguiente ejecución debe trabajar únicamente la tanda 4.

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
