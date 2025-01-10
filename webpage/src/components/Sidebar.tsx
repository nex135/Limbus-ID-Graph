import { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography, TextField } from '@mui/material';
import { getAvailableCharacters } from '../services/dataService';

interface SidebarProps {
  selectedCharacter: string | null;
  onCharacterSelect: (character: string) => void;
}

const Sidebar = ({ selectedCharacter, onCharacterSelect }: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const characters = getAvailableCharacters();
  
  const filteredCharacters = characters.filter(({ displayName }) => 
    displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 2 }} paddingLeft='4px'>
        <Typography variant="h6" component="h2" gutterBottom paddingLeft='4px' paddingBottom='4px'>
          Characters
        </Typography>
        <TextField
          fullWidth
          size="small"
          placeholder="Search IDs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 1 }}
        />
      </Box>
      <List sx={{ flexGrow: 1, overflow: 'auto' }}>
        {filteredCharacters.map(({ id, displayName }) => (
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