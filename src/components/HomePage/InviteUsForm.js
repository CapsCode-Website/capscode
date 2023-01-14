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
import { writeInviteUsFormData } from "../../formDataHandler/inviteUsHandler";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function InviteUsForm({ open, setOpen }) {
  const [data, setData] = React.useState({
    submitting: false,
    succeeded: false,
    errors: false,
  });
  const [snackOpen, setSnackOpen] = React.useState(true);
  const [orgType, setOrgType] = React.useState("College");
  const [orgName, setOrgName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSnakbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return false;
    }
    setSnackOpen(false);
    handleClose();
  };

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    setOrgType("College");
    setOrgName("");
    setPhone("");
    setEmail("");
    setData({
      submitting: false,
      succeeded: false,
      errors: false,
    });
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orgType === "" || orgName === "" || email === "" || phone === "") {
      setData({ ...data, errors: true });
    } else {
      setData({ ...data, submitting: true, errors: false });
      const returnedPromiseByFirebase = writeInviteUsFormData({
        organization_name: orgName,
        organization_type: orgType,
        email: email,
        phone: phone,
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
        <DialogTitle id="form-dialog-title">{`Invite us to your school/college`}</DialogTitle>
        <DialogContent>
          <DialogContentText>Request a callback</DialogContentText>
          <form validate>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                className="formTextField"
                select
                label="You are ?"
                value={orgType}
                // defaultValue={""}
                onChange={(e) => setOrgType(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {["School", "College", "Institute"].map((option, index) => (
                  <option key={option + index} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
              <TextField
                className="formTextField"
                onChange={(e) => setOrgName(e.target.value)}
                label={`Name of ${orgType} with address`}
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
                defaultValue={"India"}
                disabled
                required
              />
              {data.errors && (
                <p style={{ color: "red" }}>Fill all mandatory feilds</p>
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
