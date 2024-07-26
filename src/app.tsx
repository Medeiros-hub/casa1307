import { ChakraProvider } from '@chakra-ui/react'

import { Home } from './pages/home'

export function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  )
}
