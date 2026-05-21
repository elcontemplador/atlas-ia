export type AxisId = 'personas' | 'industria' | 'soberania'
export type Impact = 'alto' | 'muy alto' | 'transformador'

export type Metric = {
  value: string
  label: string
  detail: string
}

export type Layer = {
  id: string
  title: string
  eyebrow: string
  axis: AxisId
  description: string
  proof: string
}

export type Axis = {
  id: AxisId
  title: string
  short: string
  lead: string
  already: string[]
  unlocks: string
}

export type Measure = {
  title: string
  axis: AxisId
  horizon: '0-6 meses' | '6-12 meses' | '2026-2030'
  impact: Impact
  lead: string
}

export type Evidence = {
  title: string
  summary: string
  tag: string
}

export type Scenario = {
  id: string
  title: string
  timeframe: string
  premise: string
  risk: string
  move: string
}

export const metrics: Metric[] = [
  {
    value: '7.º',
    label: 'puesto mundial',
    detail:
      'Stanford AI Vibrancy sitúa a España entre los países con mayor dinamismo en IA.',
  },
  {
    value: '4,4 M',
    label: 'formaciones digitales',
    detail:
      'Base de capacitación ya desplegada para ciudadanía, empleados públicos, pymes y colectivos vulnerables.',
  },
  {
    value: '3.000 M€',
    label: 'competencias digitales',
    detail:
      'Inversión articulada en ciudadanía, educación, empleo y especialistas.',
  },
  {
    value: '1.500 M€',
    label: 'Fondo Next Tech',
    detail:
      'Capital público para escalar tecnologías estratégicas y reforzar soberanía tecnológica.',
  },
]

export const layers: Layer[] = [
  {
    id: 'infraestructura',
    title: 'Infraestructura',
    eyebrow: 'Cómputo, nube, chips y energía',
    axis: 'soberania',
    description:
      'La IA se decide antes de llegar al usuario: en centros de datos, supercomputación, conectividad, energía, chips y nube.',
    proof:
      'SpainStack ordena esta pila como arquitectura de país para transformar soberanía tecnológica en adopción real.',
  },
  {
    id: 'datos',
    title: 'Datos',
    eyebrow: 'Espacios, calidad y gobernanza',
    axis: 'soberania',
    description:
      'Sin datos interoperables, seguros y reutilizables, la IA pública y productiva queda fragmentada.',
    proof:
      'El Plan de Impulso de Datos y los espacios sectoriales convierten el dato en infraestructura estratégica.',
  },
  {
    id: 'talento',
    title: 'Talento',
    eyebrow: 'Capacidades ciudadanas y profesionales',
    axis: 'personas',
    description:
      'La formación es la primera infraestructura de la IA: sin personas preparadas no hay productividad ni confianza.',
    proof:
      'Generación D, cátedras, FP, Fundae y programas profesionales abren una base de alfabetización masiva.',
  },
  {
    id: 'empresa',
    title: 'Empresa',
    eyebrow: 'Pymes, scaleups y sectores',
    axis: 'industria',
    description:
      'La IA solo transforma si llega a la economía real: pymes, sectores productivos y empresas emergentes.',
    proof:
      'Kit Digital, RedIA, RETECH, Misiones I+D y cadenas de valor conectan financiación, adopción y territorio.',
  },
  {
    id: 'sector-publico',
    title: 'Sector público',
    eyebrow: 'Compra, servicios y administración',
    axis: 'soberania',
    description:
      'El Estado no solo regula: crea demanda, estándares, datos, casos de uso y confianza.',
    proof:
      'La plataforma soberana de IA y los servicios comunes pueden evitar pilotos aislados y escalar capacidades.',
  },
  {
    id: 'derechos',
    title: 'Derechos',
    eyebrow: 'Gobernanza, transparencia y seguridad',
    axis: 'personas',
    description:
      'La adopción necesita garantías: protección de menores, transparencia algorítmica, supervisión y uso responsable.',
    proof:
      'AESIA, el sandbox regulatorio y la ley de buen uso colocan a España en una posición de gobernanza avanzada.',
  },
]

export const scenarios: Scenario[] = [
  {
    id: 'observa',
    title: 'España observa',
    timeframe: '2026',
    premise:
      'La IA se integra en software, trámites y trabajo cotidiano, pero la adopción queda dispersa.',
    risk:
      'Dependencia de proveedores, pilotos aislados y una brecha creciente entre quienes usan IA y quienes quedan fuera.',
    move:
      'Crear un suelo mínimo de alfabetización, compra pública común y gobernanza clara.',
  },
  {
    id: 'adopta',
    title: 'España adopta',
    timeframe: '2027-2028',
    premise:
      'Empresas, administraciones y ciudadanía incorporan agentes, modelos multimodales y automatización de procesos.',
    risk:
      'Productividad sin reparto, presión sobre empleo cognitivo y pérdida de control sobre datos e infraestructura.',
    move:
      'Conectar talento, datos, pymes, servicios públicos y supervisión en una arquitectura común.',
  },
  {
    id: 'lidera',
    title: 'España lidera',
    timeframe: '2030',
    premise:
      'La IA se convierte en infraestructura de país: salud, educación, industria, justicia, energía y administración.',
    risk:
      'La oportunidad se decide fuera si España no negocia acceso, capacidades propias y escala europea.',
    move:
      'Pasar de programas a plataforma de país: soberanía, adopción masiva y alianzas europeas.',
  },
]

export const axes: Axis[] = [
  {
    id: 'personas',
    title: 'Personas en el centro',
    short: 'Personas',
    lead:
      'Formación, derechos y confianza para que la IA sea una capacidad social, no una brecha nueva.',
    already: [
      'Plan Nacional de Competencias Digitales y Generación D.',
      'Cátedras de IA, FP en IA y Big Data, formación profesional sectorial.',
      'AESIA, sandbox regulatorio y protección de menores en entornos digitales.',
    ],
    unlocks:
      'Un suelo mínimo de cultura de IA para ciudadanía, docentes, profesionales y empleados públicos.',
  },
  {
    id: 'industria',
    title: 'Industria, empresas e innovación',
    short: 'Industria',
    lead:
      'Llevar la IA desde la investigación y el capital tecnológico hasta pymes, sectores y cadenas productivas.',
    already: [
      'SETT, Next Tech, ETCI y capital público para tecnologías estratégicas.',
      'RETECH IA, RedIA, cadenas de valor, Misiones I+D y espacios de datos.',
      'Kit Digital, Kit Consulting, Acelera Pyme y ecosistema startup.',
    ],
    unlocks:
      'Una adopción productiva que convierta capacidades existentes en crecimiento, eficiencia y competitividad.',
  },
  {
    id: 'soberania',
    title: 'Soberanía e infraestructura pública',
    short: 'Soberanía',
    lead:
      'Capacidades propias para decidir, negociar y desplegar IA segura en la Administración y en el país.',
    already: [
      'Hoja de Ruta de Soberanía Digital y SpainStack.',
      'ALIA, supercomputación, centros de datos, chips, nube y espacios de datos.',
      'Dirección General del Dato, cartera digital y servicios comunes.',
    ],
    unlocks:
      'Una arquitectura común para pasar de proyectos dispersos a infraestructura reutilizable de país.',
  },
]

export const measures: Measure[] = [
  {
    title: 'Alfabetización universal en IA',
    axis: 'personas',
    horizon: '0-6 meses',
    impact: 'transformador',
    lead:
      'Módulos breves, gratuitos y certificables para ciudadanía, trabajadores, docentes, pymes y empleados públicos.',
  },
  {
    title: 'Bono IA para población adulta',
    axis: 'personas',
    horizon: '6-12 meses',
    impact: 'muy alto',
    lead:
      'Curso básico y acceso temporal a herramientas homologadas para crear un primer contacto masivo con la IA.',
  },
  {
    title: 'Formación inicial del profesorado',
    axis: 'personas',
    horizon: '0-6 meses',
    impact: 'alto',
    lead:
      'Guía nacional, materiales de aula y red de formadores para uso pedagógico responsable y crítico.',
  },
  {
    title: 'Marco estatal de adopción y contratación pública',
    axis: 'soberania',
    horizon: '0-6 meses',
    impact: 'muy alto',
    lead:
      'Cláusulas tipo, criterios de soberanía, evaluación de riesgos, trazabilidad y control humano para comprar mejor.',
  },
  {
    title: 'Paquete de transparencia algorítmica',
    axis: 'personas',
    horizon: '6-12 meses',
    impact: 'alto',
    lead:
      'Carta pública, inventario de algoritmos y evaluación de impacto para sistemas relevantes del sector público.',
  },
  {
    title: 'Sandbox de resiliencia ante IA de alto impacto',
    axis: 'soberania',
    horizon: '6-12 meses',
    impact: 'muy alto',
    lead:
      'Entorno permanente para probar modelos en salud, energía, finanzas, transporte, educación o ciberseguridad.',
  },
  {
    title: 'Compra pública innovadora en IA',
    axis: 'industria',
    horizon: '6-12 meses',
    impact: 'transformador',
    lead:
      'Cartera de retos públicos con compradores identificados, financiación y resultados medibles.',
  },
  {
    title: 'Nodos sectoriales de IA',
    axis: 'industria',
    horizon: '2026-2030',
    impact: 'muy alto',
    lead:
      'Conectar AI Factories, supercomputación, espacios de datos, cátedras y RETECH con necesidades productivas reales.',
  },
  {
    title: 'Plataforma soberana de IA para la Administración',
    axis: 'soberania',
    horizon: '2026-2030',
    impact: 'transformador',
    lead:
      'Infraestructura común para desplegar IA pública segura, reutilizable, escalable y con control del dato.',
  },
]

export const evidence: Evidence[] = [
  {
    title: 'Diagnóstico: actuar antes de la aceleración',
    tag: 'Anexo I',
    summary:
      'La IA puede entrar en meseta, ascenso sostenido o despegue rápido. España debe prepararse para todos los escenarios.',
  },
  {
    title: 'Detalle de medidas de futuro',
    tag: 'Anexo II',
    summary:
      'Convierte los ejes de personas, empresas y soberanía en medidas ejecutables con liderazgo, entregables e impacto.',
  },
  {
    title: 'Estrategias nacionales',
    tag: 'Anexo III',
    summary:
      'Energía, centros de datos, acceso a modelos de frontera, protección social y apuesta europea por capacidades propias.',
  },
  {
    title: 'Corpus de avales externos',
    tag: 'Evidencias',
    summary:
      'Ordena fuentes, rankings, experiencias internacionales y referencias para sostener la narrativa de país.',
  },
]

export const visuals = [
  {
    src: 'atlas/infografias/sedia-7-acciones.png',
    title: 'Siete acciones para activar la adopción',
  },
  {
    src: 'atlas/infografias/claves-ia.png',
    title: 'Claves para explicar IA con lenguaje compartido',
  },
  {
    src: 'atlas/infografias/personas-empleos.png',
    title: 'Proteger a las personas, no los empleos',
  },
  {
    src: 'atlas/infografias/hoja-ruta.jpeg',
    title: 'Hoja de ruta para pasar de capacidades a impacto',
  },
  {
    src: 'atlas/docx-media/image1.png',
    title: 'Visual extraído del Atlas consolidado',
  },
  {
    src: 'atlas/docx-media/image18.png',
    title: 'Arquitectura visual del documento de trabajo',
  },
]
