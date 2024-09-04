import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const MUITextField = () => {
  return (
    <div>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
      <div>
        <TextField id="outlined-disabled" label="Disabled" defaultValue="Hello World" disabled variant="outlined"/>
        <TextField id="filled-disabled" label="Disabled" defaultValue="Hello World" disabled variant="filled"/>
        <TextField id="standard-disabled" label="Disabled" defaultValue="Hello World" disabled variant="standard"/>
        <TextField required id='standard-required' label="Required"></TextField>
        <TextField required id='text' label="password" helperText="enter password"></TextField>
      </div>
    </Box>
    </div>
  )
}

export default MUITextField
