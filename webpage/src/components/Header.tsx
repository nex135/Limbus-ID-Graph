import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import { GitHub } from '@mui/icons-material'

interface HeaderProps {
  onCharacterSelect: (character: string) => void;
}

const Header = ({ onCharacterSelect }: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick = {() => onCharacterSelect('')} style={{ cursor: 'pointer' }}>
          Limbus Company Clash Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header 