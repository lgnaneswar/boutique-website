import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import CategoryDetail from './pages/CategoryDetail'
import DesignDetail from './pages/DesignDetail'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Visit from './pages/Visit'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryId" element={<CategoryDetail />} />
        <Route path="/design/:designId" element={<DesignDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </Router>
  )
}

export default App

