
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  setTheme: (t: 'light' | 'dark') => void
  label?: string
}
function ThemeToggle({ theme, setTheme, label }: ThemeToggleProps) {
  const handleSelect = (value: string) => {
    if (value === 'light' || value === 'dark') setTheme(value)
  }
  return (
    <div className='absolute top-4 right-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label={label}>
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
  )
}
ThemeToggle.defaultProps = {
  label: 'Toggle theme',
}

export default ThemeToggle