import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function MainPage() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="flex space-x-4 mb-8 items-center justify-center">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-12 w-12 animate-spin" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-12 w-12" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-center">Vite + React + shadcn/ui</h1>
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>
            Interactive Counter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setCount((prev) => prev + 1)} className="mb-4">
            count is {count}
          </Button>
          <p className="text-sm text-muted-foreground">
            Edit <code className="font-mono">src/App.tsx</code> and save to test HMR
          </p>
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground mt-6 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default MainPage