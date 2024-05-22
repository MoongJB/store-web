import { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';


import Header from "./Header/Header"

const Web = () => {
  const [mode, setMode] = useState('light')
  const customTheme = createTheme({
    palette: {
      mode: mode,
    }
  })
  return (
    <>
    <Box>
    <ThemeProvider theme={customTheme}> 
      <Header mode={mode} setMode={setMode}/>
    </ThemeProvider>
    </Box>

    </>
  )
}

export default Web
