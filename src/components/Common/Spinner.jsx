// src/components/Common/Spinner.jsx
import './Spinner.scss'

export function Spinner({ label = 'Cargando productos' }) {
  return (
    <div className="spinner" role="status" aria-live="polite">
      <span className="spinner__icon" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}
