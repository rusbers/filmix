import { Container, Box } from '@mui/material';
import { Outlet } from 'react-router';
import Header from './header';
import Footer from './footer';

function Layout() {
  return (
    <>
      <Header />
      <Box component="main">
        <Container>
          <Box marginTop={2} marginBottom={2}>
            <Outlet />
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
