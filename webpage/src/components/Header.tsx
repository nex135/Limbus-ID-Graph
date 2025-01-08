import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import { GitHub } from '@mui/icons-material'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Limbus Company Character Relations
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header 