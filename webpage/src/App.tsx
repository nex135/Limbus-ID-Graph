import { useState } from 'react'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import GraphView from './components/GraphView'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null)

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
          <Sidebar
            selectedCharacter={selectedCharacter}
            onCharacterSelect={setSelectedCharacter}
          />
          <GraphView selectedCharacter={selectedCharacter} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
