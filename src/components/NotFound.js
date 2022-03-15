
import { useLocation } from "react-router-dom"

export default function NotFound() {
  let location = useLocation()
  return (
    <div style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div>
        <p>ERROR <span style={{ color: "red" }}> 404</span></p>
        <h1 className="display-1">NotFound  "{location.pathname}"</h1>
      </div>
    </div>
  )
}
