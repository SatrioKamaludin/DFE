import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useCallback, useEffect, useReducer, useRef } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

type CounterAction = { type: 'increment' } | { type: 'reset' }
function counterReducer(state: number, action: CounterAction): number {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'reset':
      return 0
    default:
      return state
  }
}

function MainPage() {
  const [count, dispatch] = useReducer(counterReducer, 0)

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleIncrement = useCallback(() => {
    dispatch({ type: 'increment' });
  }, [])

  const handleReset = useCallback(() => {
    dispatch({ type: 'reset' });
  }, [])

  useEffect(() => {
    buttonRef.current?.focus();
  }, [count])

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
          <Button
            onClick={handleIncrement}
            ref={buttonRef}
          >
            count is {count}
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
          >
            Reset
          </Button>
          <br />
          <br />
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
