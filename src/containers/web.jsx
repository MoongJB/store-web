import { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';


import Header from "./Header/Header"
import Body from './Body/Body';
import Footer from './Footer/Footer';

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
      <Body/>
      <Footer/>
    </ThemeProvider>
    </Box>

    </>
  )
}

export default Web
