import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <>
      <Container>
        <AppBar component="footer" position="static">
          <Toolbar
            variant="dense"
            sx={{ backgroundColor: 'primary.main', justifyContent: 'center' }}
          >
            <Typography color="#fff">2022</Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

export default Footer;
