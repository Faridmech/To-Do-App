import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { Home } from './components/Home.tsx';

function App() {
  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  );
}

export default App;