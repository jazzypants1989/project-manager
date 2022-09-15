export default function spinner() {
  return (
    <div className="d-flex justify-content-center align-items-center vh100">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
  )
}