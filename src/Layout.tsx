import { Link, useLocation } from 'react-router-dom'
import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs'
import type { ReactNode } from 'react'

interface LayoutProps {
  readonly children: ReactNode
}
function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation()
  const activeTab = pathname === '/tbd' ? 'tbd' : 'main'

  return (
    <div className="relative min-h-screen bg-background dark:bg-background-dark flex flex-col items-center p-4">
      <Tabs value={activeTab} className="mb-6">
        <TabsList>
          <TabsTrigger asChild value="main">
            <Link to="/">Main</Link>
          </TabsTrigger>
          <TabsTrigger asChild value="tbd">
            <Link to="/tbd">TBD</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {children}
    </div>
  )
}
Layout.defaultProps = {
  children: null,
}

export default Layout
