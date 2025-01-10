import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import { getAvailableCharacters } from '../services/dataService';

interface SidebarProps {
  selectedCharacter: string | null;
  onCharacterSelect: (character: string) => void;
}

const Sidebar = ({ selectedCharacter, onCharacterSelect }: SidebarProps) => {
  const characters = getAvailableCharacters();
  return (
    <Paper
      component="nav"
      sx={{
        width: 240,
        flexShrink: 0,
        bgcolor: 'background.paper',
        borderRight: 1,
        borderColor: 'divider',
        overflow: 'auto',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="h2">
          Characters
        </Typography>
      </Box>
      <List>
        {characters.map(({ id, displayName }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              selected={selectedCharacter === id}
              onClick={() => onCharacterSelect(id)}
            >
              <ListItemText primary={displayName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Sidebar; 