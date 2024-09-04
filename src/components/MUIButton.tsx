import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { Delete } from "@mui/icons-material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import WarningIcon from '@mui/icons-material/Warning';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const MUIButton = () => {
  return (
    <div style={{ display: "flex", gap: "20px" , flexDirection: "column", width: "200px" }}>
      <Button variant="contained" size="large" color="secondary">Click Me!</Button>
      <Button variant="outlined" size="large" endIcon={<SendIcon />}>Click Me!</Button>
      <Button variant="text"  endIcon={<Delete/>} sx={{ backgroundColor: "red", color: "white" }}>Delete</Button>
      <Button variant="contained" color="success" startIcon={<CheckBoxIcon />}>Success</Button>
      <Button variant="contained" endIcon={ <WarningIcon />} color="warning">Warning</Button>
      <Button onClick={() => alert("clicked")} variant="contained" color="inherit" endIcon={<AccessAlarmIcon />}>Alarm</Button>
      <Button onClick={() => alert("updated cart")} variant="outlined" color="info" endIcon={<AddShoppingCartIcon />}>Add To Cart</Button>
    </div>
  )
}
export default MUIButton
