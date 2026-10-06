import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.tsx'
import Menu from '../pages/Menu.tsx'
import Layout from '../layouts/Layout.tsx'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
