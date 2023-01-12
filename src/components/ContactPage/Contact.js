import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./contact.css";
import contactus from "./contactus.webp";
import { Link } from "react-router-dom";
import SEO from "../../SEO";
import TextField from "@material-ui/core/TextField";
import { writeContactusFormData } from "../../formDataHandler/contactusHandler";

const Contact = () => {
  const [data, setData] = React.useState({
    submitting: false,
    succeeded: false,
    errors: false,
  });
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  useEffect(() => {
    sessionStorage.setItem("currentTab", 5);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setData({ ...data, errors: true });
    } else {
      setData({ ...data, submitting: true, errors: false });
      const returnedPromiseByFirebase = writeContactusFormData({
        name: name,
        email: email,
        phone: phone,
        message: message,
      });

      returnedPromiseByFirebase
        .then((e) => {
          setData({
            ...data,
            submitting: false,
            succeeded: true,
            errors: false,
          });
        })
        .catch((e) => console.log("failed:" + e));
    }
  };

  if (data.succeeded) {
    return (
      <>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "100vh", width: "100vw" }}
        >
          <h3>Thanks for the submission</h3>
          <br />
          <Grid item>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontWeight: "700",
                  padding: "12px",
                  boxShadow: "6px 10px 21px -7px rgba(0,0,0,0.51)",
                  textAlign: "center",
                  borderRadius: "30px",
                  background: "#F7DAE4",
                  color: "#535C68",
                }}
              >
                GO BACK TO HOME
              </div>
            </Link>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <Grid
      container
      style={{
        height: "100vh",
        paddingTop: "90px",
        width: "100%",
        backgroundColor: "var(--back-primary-color)",
      }}
    >
      <SEO
        title="CapsCode - Contact Us"
        description="Contact for web development in Ranchi, Jharkhand"
        name="Contact Us | CapsCode"
        type="website"
      />
      <Grid
        item
        lg={7}
        md={7}
        sm={12}
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            className="formTextField"
            onChange={(e) => setName(e.target.value)}
            label={"Name"}
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
          />
          <TextField
            className="formTextField"
            margin="dense"
            label="Message/Query"
            multiline
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
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
            {data.submitting ? "Sending" : "Send"}
          </button>
        </div>
      </Grid>

      <Grid item lg={5} md={5} sm={8} xs={8}>
        <img
          alt="contact_us"
          style={{ paddingTop: "10px", height: "70%", width: "100%" }}
          src={contactus}
        />
      </Grid>
    </Grid>
  );
};

export default Contact;
