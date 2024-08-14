import { Navigate } from 'react-router-dom'

export const publicRoutes = [
  {
    name: "About",
    path: "about",
    element: < div>Hello About</div>
  },
  {
    name: "Home",
    path: "home",
    element: < div>Hello Home</div>
  },
  {
    name: "No Match",
    path: "no-match",
    element: < div>No Match</div>
  },
  {
    name: "Error",
    path: "*",
    element: <Navigate to="/about" replace />
  }
]
