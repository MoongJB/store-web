import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Footer() {
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static" sx={{ top: 'auto', bottom: 0, px: 40, height: '120px', display: 'flex', justifyContent: 'center', boxShadow: 'none'}}>
      <Toolbar>
        <Typography variant='h6' fontSize={15} mx={4} >
        © 2024 Công ty Cổ phần đầu tư công nghệ MoongJB
        </Typography>
        <Typography variant='h6' fontSize={15} mx={4}>
        Địa chỉ: 141 Đường Chiến Thắng - Tân Triều - Thanh Trì - Hà Nội
        </Typography>
        <Typography variant='h6' fontSize={15} mx={4} sx={{ whiteSpace: 'pre-line'}}>
          <Box>
            Email: moongjb@gmail.com
          </Box>
          <Box>
            Điện thoại: 0396 975 500
          </Box>
          <Box>
            Facebook: facebook.com/58bmk
          </Box>
        </Typography>
        
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Footer;
