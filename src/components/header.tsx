import { AppBar, Toolbar, Link, Button, Container, MenuList, MenuItem } from '@mui/material';

function Header() {
  return (
    <>
      <Container>
        <AppBar position="static">
          <Toolbar variant="dense">
            <MenuList sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <MenuItem disableGutters>
                <Link underline="none" color="#fff">
                  Home
                </Link>
              </MenuItem>
              <MenuItem disableGutters>
                <Button variant="contained" component="a" color="success">
                  Login
                </Button>
              </MenuItem>
            </MenuList>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

export default Header;
