import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm, ValidationError } from '@formspree/react';
import country_list from './CountryList';
import Select from 'react-select'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function FormDialog({open, setOpen, subjectRequestedFor}) {

const [state, handleSubmit] = useForm("mbjqywjd");
const [snackOpen, setSnackOpen] = React.useState(true)

const handleSnakbarClose =(event, reason)=>{
    if (reason === 'clickaway') {
        return;
    }
    setSnackOpen(false)
}
  if (state.succeeded) {
    setOpen(false)
    // setSnackOpen(false)
      return (
        <Snackbar open={snackOpen} autoHideDuration={2000} onClose={handleSnakbarClose}>
        <Alert onClose={handleSnakbarClose} severity="success">
          Submitted, We will contact you soon !
        </Alert>
      </Snackbar>
      )
  }

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{`Subject selected is : ${subjectRequestedFor}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Request a callback
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            
            <label htmlFor="phone">
                Phone No.
            </label>
            <input
                id="phone"
                type="phone" 
                name="phone"
                required
            />
            <ValidationError 
                prefix="Phone" 
                field="phone"
                errors={state.phone}
            />

            <label htmlFor="email">
                Country (or Address)
            </label>
            
            {/* <Select options={country_list} 
            value="name"
            label="code"> */}
            <input
                id="country"
                type="country" 
                name="country"
                required
            />
            {/* </Select> */}
    
            <ValidationError 
                prefix="Country" 
                field="country"
                errors={state.country}
            />
            <input

                id="course"
                type="course" 
                name="course"
                required
                value={subjectRequestedFor}
                style={{display:'none'}}
            />
            <br/>
            <button style={{background:'#fea051', border:0, outline:'none', marginTop: '10px', padding:'12px', borderRadius:'5px'}} type="submit" disabled={state.submitting}>
                Submit
            </button>
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
