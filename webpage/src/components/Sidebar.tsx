import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'

interface SidebarProps {
  selectedCharacter: string | null
  onCharacterSelect: (character: string) => void
}

// Placeholder data - replace with actual character data later
const characters = [
  'Yi Sang',
  'Faust',
  'Don Quixote',
  'Ryōshū',
  'Meursault',
  'Hong Lu',
  'Heathcliff',
  'Ishmael',
  'Rodion',
  'Sinclair',
  'Outis',
  'Gregor'
]

const DRAWER_WIDTH = 240

const Sidebar = ({ selectedCharacter, onCharacterSelect }: SidebarProps) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 8 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Characters
        </Typography>
        <List>
          {characters.map((character) => (
            <ListItem key={character} disablePadding>
              <ListItemButton
                selected={character === selectedCharacter}
                onClick={() => onCharacterSelect(character)}
              >
                <ListItemText primary={character} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default Sidebar 