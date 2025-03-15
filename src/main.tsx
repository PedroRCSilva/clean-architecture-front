import { createRoot } from 'react-dom/client'
import { RootProvider } from './providers'

createRoot(document.getElementById('root')!).render(<RootProvider />)
