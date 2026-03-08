import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import FortunePage from './pages/FortunePage'
import InvalidPage from './pages/InvalidPage'

export default function App() {
  return (
    <BrowserRouter basename="/lucky-today">
      <Routes>
        <Route path="/:uuid" element={<FortunePage />} />
        <Route path="/invalid" element={<InvalidPage />} />
        <Route path="*" element={<Navigate to="/invalid" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
