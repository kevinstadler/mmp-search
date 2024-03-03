import {useState} from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import StellenSearch from './pages/StellenSearch'

function App() {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <StellenSearch />
    </QueryClientProvider>
  )

}

export default App
