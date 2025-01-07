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
].sort()

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
          backgroundColor: 'background.paper',
          borderRight: '1px solid rgba(255, 255, 255, 0.12)',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 8 }}>
        <Typography variant="h6" sx={{ p: 2, color: 'text.primary' }}>
          Characters
        </Typography>
        <List>
          {characters.map((character) => (
            <ListItem key={character} disablePadding>
              <ListItemButton
                selected={character === selectedCharacter}
                onClick={() => onCharacterSelect(character)}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    },
                  },
                }}
              >
                <ListItemText 
                  primary={character} 
                  sx={{ 
                    '.MuiListItemText-primary': { 
                      color: character === selectedCharacter ? 'primary.main' : 'text.primary',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default Sidebar 