import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { LogoutButton } from './LogoutButton';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Container maxWidth="sm">
          <Toolbar sx={{
            marginRight: -2,
            marginLeft: -2,
          }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User Profile
            </Typography>
            <LogoutButton/>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="sm" sx={{
        marginTop: 2,
      }}>
        {children}
      </Container>
    </Box>
  );
}
