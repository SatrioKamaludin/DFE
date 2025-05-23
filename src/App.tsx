import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// shadcn/ui components
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme')
    return stored === 'dark' || stored === 'light' ? stored : 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(theme === 'dark' ? 'light' : 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleSelect = (value: string) => {
    if (value === 'light' || value === 'dark') {
      setTheme(value)
    }
  }

  return (
    <div className='min-h-screen bg-background flex flex-col items-center justify-center p-4'>
      {/* Theme Dropdown Menu */}
      <div className='absolute top-4 right-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label='Select Theme'>
              {theme === 'light' ? 'Light' : 'Dark'}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => handleSelect('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSelect('dark')}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Logo Section */}
      <div className='flex space-x-4 mb-8'>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-12 w-12 animate-spin" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-12 w-12" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-6">Vite + React + shadcn/ui</h1>

      {/* Card Component */}
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Interactive Counter</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setCount(count + 1)} className='mb-4'>
            Count: {count}
          </Button>
          <p className="text-sm text-muted-foreground">
            Edit <code className="font-mono">src/App.tsx</code> and save to test HMR
          </p>
        </CardContent>
      </Card>

      <p className="text-sm text-muted-foreground mt-6">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
