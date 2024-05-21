import { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';

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
    <ThemeProvider theme={customTheme}> 
      <Header mode={mode} setMode={setMode}/>
    </ThemeProvider>
    </>
  )
}

export default Web
