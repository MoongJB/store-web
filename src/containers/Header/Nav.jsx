import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function ResponsiveAppBar() {
  const pages = [
    { id: 'camera', label: 'Camera' },
    { id: 'computer', label: 'Computer' },
    { id: 'onsale', label: 'On Sale' },
    { id: 'service', label: 'Service' },
  ];

  const [anchorEls, setAnchorEls] = useState({});

  const handleClick = (event, id) => {
    setAnchorEls({ ...anchorEls, [id]: event.currentTarget });
  };

  const handleClose = (id) => {
    setAnchorEls({ ...anchorEls, [id]: null });
  };

  return (
    <AppBar position="static" sx={{ px: 51, boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '75px' } }}>
            {pages.map((page) => (
              <div key={page.id}>
                <Button
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{ my: 2, color: 'white', display: 'flex', flexDirection: 'row' }}
                  onClick={(event) => handleClick(event, page.id)}
                >
                  {page.label}
                </Button>
                <Menu
                  PaperProps={{
                    style: {
                      minWidth: '200px', // Set your desired minimum width
                      minHeight: '100px', // Set your desired minimum height
                    },
                  }}
                  anchorEl={anchorEls[page.id]}
                  open={Boolean(anchorEls[page.id])}
                  onClose={() => handleClose(page.id)}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={() => handleClose(page.id)}>{page.label}</MenuItem>
                  <MenuItem onClick={() => handleClose(page.id)}>Option 2</MenuItem>
                  <MenuItem onClick={() => handleClose(page.id)}>Option 3</MenuItem>
                </Menu>
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
