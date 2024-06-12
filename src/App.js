import "@/App.css"
import React, { lazy } from "react"
import { BrowserRouter, useRoutes } from "react-router-dom"
const Home = lazy(() => import("@/pages/Home"))
const About = lazy(() => import("@/pages/About"))

const withLoadingComponent = (comp) => <React.Suspense>{comp}</React.Suspense>

const routesList = [
  {
    path: "/",
    element: withLoadingComponent(<Home />),
  },
  {
    path: "/Home",
    element: withLoadingComponent(<Home />),
  },
  {
    path: "/About",
    element: withLoadingComponent(<About />),
  },
]

// 使用useRoutes方法传入routesList生成Routes组件
function WrapperRoutes() {
  const elem = useRoutes(routesList)
  return elem
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WrapperRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
