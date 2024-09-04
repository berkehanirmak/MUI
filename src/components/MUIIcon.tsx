import { AccountCircle } from '@mui/icons-material';
import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import TextField from '@mui/material/TextField';

const MUIIcon = () => {
  return (
    <div>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">  With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" color='secondary'>
        <InputLabel htmlFor="input-with-icon-adornment">  With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment" placeholder='password' 
          endAdornment={
            <InputAdornment position="end">
              <VpnKeyIcon  color='secondary'/>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" color='secondary'>
        <InputLabel htmlFor="input-with-icon-adornment"> With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment" 
          startAdornment={
            <InputAdornment position="start" > 
              Kg
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField id="standard-basic" label="Standard" variant="outlined" color='secondary' />
    </div>
  )
}

export default MUIIcon
