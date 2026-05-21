import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Database,
  Eye,
  Factory,
  FileText,
  Filter,
  Gauge,
  GraduationCap,
  Landmark,
  LockKeyhole,
  Scale,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import './App.css'
import {
  axes,
  evidence,
  layers,
  measures,
  metrics,
  scenarios,
  visuals,
  type AxisId,
} from './data/atlas'

const axisIcons = {
  personas: UsersRound,
  industria: Factory,
  soberania: ShieldCheck,
}

const layerIcons = [Server, Database, GraduationCap, Building2, Landmark, Scale]

const axisNames: Record<AxisId | 'todos', string> = {
  todos: 'Todos',
  personas: 'Personas',
  industria: 'Industria',
  soberania: 'Soberanía',
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

function App() {
  const [activeLayer, setActiveLayer] = useState(layers[0].id)
  const [activeScenario, setActiveScenario] = useState(scenarios[1].id)
  const [axisFilter, setAxisFilter] = useState<AxisId | 'todos'>('todos')
  const currentScenario =
    scenarios.find((scenario) => scenario.id === activeScenario) ?? scenarios[1]

  const filteredMeasures = useMemo(() => {
    if (axisFilter === 'todos') {
      return measures
    }

    return measures.filter((measure) => measure.axis === axisFilter)
  }, [axisFilter])

  return (
    <main>
      <header className="site-header" aria-label="Cabecera institucional">
        <a className="brand" href="#inicio" aria-label="Volver al inicio">
          <img src={asset('atlas/brand/sedia-logo.png')} alt="SEDIA" />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#mapa">Mapa</a>
          <a href="#espana">España</a>
          <a href="#medidas">Medidas</a>
          <a href="#evidencias">Evidencias</a>
        </nav>
        <span className="draft-pill">
          <LockKeyhole size={15} />
          Borrador interno
        </span>
      </header>

      <section className="hero-section" id="inicio">
        <div className="draft-banner">
          Borrador de trabajo. No difundir.
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">SEDIA · Plan de país</p>
            <h1>Atlas de la IA</h1>
            <p className="hero-lead">
              Un mapa visual para entender qué debe conectar España: infraestructura,
              talento, empresas, sector público, derechos y soberanía digital.
            </p>
            <div className="hero-actions" aria-label="Acciones principales">
              <a className="primary-action" href="#mapa">
                Explorar el mapa
                <ArrowUpRight size={18} />
              </a>
              <a className="secondary-action" href="#medidas">
                Ver medidas
              </a>
            </div>
          </div>

          <div className="atlas-panel" aria-label="Resumen interactivo del Atlas">
            <div className="panel-topline">
              <span>Escenarios 2026-2030</span>
              <Sparkles size={18} />
            </div>
            <div className="scenario-switcher">
              {scenarios.map((scenario) => {
                return (
                  <button
                    className={`scenario-button ${
                      activeScenario === scenario.id ? 'is-active' : ''
                    }`}
                    key={scenario.id}
                    onClick={() => setActiveScenario(scenario.id)}
                    type="button"
                  >
                    <span>{scenario.timeframe}</span>
                    {scenario.title}
                  </button>
                )
              })}
            </div>
            <div className="layer-readout">
              <p>{currentScenario.timeframe}</p>
              <h2>{currentScenario.title}</h2>
              <span>{currentScenario.premise}</span>
              <div className="scenario-outcome">
                <strong>Riesgo</strong>
                <span>{currentScenario.risk}</span>
              </div>
              <div className="scenario-outcome is-move">
                <strong>Movimiento SEDIA</strong>
                <span>{currentScenario.move}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="mapa">
        <div className="section-heading">
          <p className="eyebrow">Mapa interactivo</p>
          <h2>La IA como arquitectura de país, no como lista de proyectos</h2>
          <p>
            Cada capa necesita capacidades propias, coordinación pública y conexión con
            ciudadanía, empresas y servicios.
          </p>
        </div>

        <div className="layer-map">
          {layers.map((layer, index) => {
            const Icon = layerIcons[index]

            return (
              <article
                className={`layer-card ${activeLayer === layer.id ? 'is-active' : ''}`}
                key={layer.id}
                onMouseEnter={() => setActiveLayer(layer.id)}
              >
                <div className="icon-mark">
                  <Icon size={22} />
                </div>
                <p>{layer.eyebrow}</p>
                <h3>{layer.title}</h3>
                <span>{layer.proof}</span>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section country-section" id="espana">
        <div className="section-heading">
          <p className="eyebrow">Dónde está hoy España</p>
          <h2>Una base sólida que necesita activación y escala</h2>
        </div>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <h3>{metric.label}</h3>
              <p>{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section axes-section">
        <div className="section-heading">
          <p className="eyebrow">Tres ejes de acción</p>
          <h2>Del diagnóstico al despliegue</h2>
        </div>
        <div className="axes-grid">
          {axes.map((axis) => {
            const Icon = axisIcons[axis.id]

            return (
              <article className={`axis-panel ${axis.id}`} key={axis.id}>
                <div className="axis-title">
                  <Icon size={24} />
                  <h3>{axis.title}</h3>
                </div>
                <p>{axis.lead}</p>
                <ul>
                  {axis.already.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="unlock">
                  <Gauge size={18} />
                  {axis.unlocks}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="visual-band" aria-label="Material visual del Atlas">
        <div className="visual-copy">
          <p className="eyebrow">Material visual</p>
          <h2>El Atlas no se lee entero: se recorre</h2>
          <p>
            Las infografías y visuales del documento se integran como estaciones de
            lectura para explicar prioridades, riesgos y oportunidades en pocos segundos.
          </p>
        </div>
        <div className="visual-rail">
          {visuals.map((visual) => (
            <figure key={visual.src}>
              <img src={asset(visual.src)} alt={visual.title} />
              <figcaption>{visual.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section measures-section" id="medidas">
        <div className="section-heading with-controls">
          <div>
            <p className="eyebrow">Medidas de impacto directo</p>
            <h2>Un tablero para pasar de capacidades a adopción</h2>
            <p>
              Filtra por eje y lee cada medida como unidad ejecutiva: horizonte,
              impacto y resultado esperado.
            </p>
          </div>
          <div className="filter-group" aria-label="Filtro por eje">
            <Filter size={17} />
            {(['todos', 'personas', 'industria', 'soberania'] as const).map((axis) => (
              <button
                className={axisFilter === axis ? 'is-active' : ''}
                key={axis}
                onClick={() => setAxisFilter(axis)}
                type="button"
              >
                {axisNames[axis]}
              </button>
            ))}
          </div>
        </div>

        <div className="measures-grid">
          {filteredMeasures.map((measure) => {
            const Icon = axisIcons[measure.axis]

            return (
              <article className="measure-card" key={measure.title}>
                <div className="measure-meta">
                  <span>{measure.horizon}</span>
                  <span>{measure.impact}</span>
                </div>
                <div className="measure-icon">
                  <Icon size={20} />
                </div>
                <h3>{measure.title}</h3>
                <p>{measure.lead}</p>
                <small>{axisNames[measure.axis]}</small>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section evidence-section" id="evidencias">
        <div className="section-heading">
          <p className="eyebrow">Anexos como biblioteca</p>
          <h2>La profundidad queda disponible sin frenar la lectura</h2>
        </div>
        <div className="evidence-layout">
          <div className="evidence-search">
            <Search size={28} />
            <h3>Modo evidencia</h3>
            <p>
              La web resume; el Atlas documenta. Esta zona funcionaría como índice vivo
              para ampliar diagnóstico, medidas y referencias cuando haga falta.
            </p>
          </div>
          <div className="evidence-list">
            {evidence.map((item) => (
              <details key={item.title}>
                <summary>
                  <span>{item.tag}</span>
                  {item.title}
                </summary>
                <p>{item.summary}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <img src={asset('atlas/brand/mtdfp-logo.png')} alt="Ministerio para la Transformación Digital y de la Función Pública" />
          <p>
            Prototipo local para revisión interna. Preparado como sitio estático
            publicable tras validación de contenidos.
          </p>
        </div>
        <div className="footer-links">
          <span>
            <FileText size={16} />
            Fuente: Atlas consolidado
          </span>
          <span>
            <Eye size={16} />
            No difundir
          </span>
          <span>
            <BrainCircuit size={16} />
            Demo IA
          </span>
        </div>
      </footer>
    </main>
  )
}

export default App
