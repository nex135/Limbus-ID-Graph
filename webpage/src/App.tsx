import { useState } from 'react'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import GraphView from './components/GraphView'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          width: '100vw',
          overflow: 'hidden',
        },
      },
    },
  },
})

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null)
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          bgcolor: 'background.default',
        }}
      >
        <Header 
          onCharacterSelect={setSelectedCharacter}
        />
        <Box 
          sx={{ 
            display: 'flex', 
            flexGrow: 1, 
            overflow: 'hidden',
            position: 'relative',
          }}
        >
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
