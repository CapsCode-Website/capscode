import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import { writeServiceFormData } from "../../formDataHandler/servicesHandler";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ServiceForm({ open, setOpen, selectedService }) {
  const [data, setData] = React.useState({
    submitting: false,
    succeeded: false,
    errors: false,
  });
  const [snackOpen, setSnackOpen] = React.useState(true);
  const [name, setName] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSnakbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return false;
    }
    setSnackOpen(false);
    handleClose();
  };

  const handleClose = () => {
    setData({
      submitting: false,
      succeeded: false,
      errors: false,
    });
    setName("");
    setPhone("");
    setEmail("");
    setCountry("");
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      setData({ ...data, errors: true });
    } else {
      setData({ ...data, submitting: true, errors: false });
      const returnedPromiseByFirebase = writeServiceFormData({
        name: name,
        country: country,
        email: email,
        phone: phone,
        service_requested_name: selectedService,
      });

      returnedPromiseByFirebase
        .then((e) => {
          setData({
            ...data,
            submitting: false,
            succeeded: true,
            errors: false,
          });
          setSnackOpen(true);
        })
        .catch((e) => console.log("failed:" + e));
    }
  };

  if (data.succeeded) {
    setOpen(false);
    // setSnackOpen(false)
    return (
      <Snackbar
        open={snackOpen}
        autoHideDuration={2000}
        onClose={handleSnakbarClose}
      >
        <Alert onClose={handleSnakbarClose} severity="success">
          Submitted, We will contact you soon !
        </Alert>
      </Snackbar>
    );
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{`${selectedService}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>We will reach out to you soon</DialogContentText>
          <form validate>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                className="formTextField"
                onChange={(e) => setName(e.target.value)}
                label={`Name`}
                required
              />
              <TextField
                className="formTextField"
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                required
              />

              <TextField
                className="formTextField"
                onChange={(e) => setPhone(e.target.value)}
                label="Phone"
                required={true}
              />
              <TextField
                className="formTextField"
                label="Country"
                onChange={(e) => setCountry(e.target.value)}
                required
              />
              {data.errors && (
                <p style={{ color: "red" }}>Fill all mandatory fields</p>
              )}
              <button
                style={{
                  background: "#fea051",
                  border: 0,
                  outline: "none",
                  marginTop: "10px",
                  padding: "12px",
                  borderRadius: "5px",
                }}
                type={"submit"}
                onClick={handleSubmit}
                disabled={data.submitting}
              >
                {data.submitting ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
