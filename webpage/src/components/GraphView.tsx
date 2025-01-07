import { Box, Paper, Typography } from '@mui/material'

interface GraphViewProps {
  selectedCharacter: string | null
}

const GraphView = ({ selectedCharacter }: GraphViewProps) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - 240px)` },
      }}
    >
      <Paper
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
      >
        {selectedCharacter ? (
          <Typography variant="h5">
            Character Relations Graph for {selectedCharacter}
          </Typography>
        ) : (
          <Typography variant="h5">
            Select a character to view their relationships
          </Typography>
        )}
      </Paper>
    </Box>
  )
}

export default GraphView 