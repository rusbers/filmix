import { Container } from '@mui/material';
import { Outlet } from 'react-router';
import Header from './header';
import Footer from './footer';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
