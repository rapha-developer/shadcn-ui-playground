import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Products } from "./pages/products"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
