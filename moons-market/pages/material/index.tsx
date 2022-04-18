import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';


const RRR = styled(TextField)`
border: 20px pink solid;
color: #6fff6f;
`;
const BBB =styled(Button)`
    background-color: aqua;
    :hover{ background-color: beige;
    color : blue
    }
    border-radius: 50px;
    
`

export default function MaterialPage(){
return(<Container component="main" maxWidth="xs">   <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: '#34e5eb' }}>
            <LockOutlinedIcon />
          </Avatar>
    <Typography component="h1" variant="h5">
            Sign in
          </Typography>
      <TextField label="Email Address"
      required
      fullWidth 
      name="email"
      autoComplete="email"
      autoFocus 
      />
      <RRR label="Password" 
      type="password"
        required
        fullWidth
        name="password"
        sx={{ mt: 3, mb: 2}}

        />
      <BBB type='submit'
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2}}
      >로그인하기</BBB>
      <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Grid container>
                <Grid item xs>
<Link>Forgot password?</Link>
</Grid>
<Grid item>
<Link> "Don't have an account? Sign Up"</Link>
</Grid>
</Grid>
</Box>
</Container>)

}