import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import MainPage from './pages/MainPage'
import './App.css'
import Layout from './Layout'
import TbdPage from './pages/TbdPage'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(theme === 'dark' ? 'light' : 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Router>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Layout>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/tbd' element={<TbdPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
