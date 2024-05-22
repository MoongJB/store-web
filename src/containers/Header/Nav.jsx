
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const pages = ['Camera', 'Computer', 'On Sale', 'Service' ];


function ResponsiveAppBar() {


  return (
    <AppBar position="static" sx={{px: 51, boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar  >
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '75px' }}}>
            {pages.map((page) => (
              <Button
                endIcon={<KeyboardArrowDownIcon/>}
                key={page}
                sx={{ my: 2, color: 'white', display: 'flex', flexDirection: 'row' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
