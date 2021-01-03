import { TextField } from "@material-ui/core";
import { Button } from "./Button";

import "./Contact.css";

const Contact = () => {
  // const [fname, setFname] = useState("");
  // const handlefname = (event) => {
  //   setFname(event.target.value);
  // };
  return (
    <>
      <div className="fullRowWhite" id="contactUsSection">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 class="section_title_text">Contact us</h2>
            </div>
            <div className="form_holder">
              <form noValidate autoComplete="off">
                <div className="row">
                  <div class="col-md-6 col-sm-12">
                    <TextField
                      id="name"
                      label="Name"
                      style={{ marginBottom: 40 }}
                      placeholder="Enter Name"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />

                    <TextField
                      id="email"
                      label="Email"
                      style={{ marginBottom: 40 }}
                      placeholder="Enter Email"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      id="cell"
                      label="Cell"
                      style={{ marginBottom: 40 }}
                      placeholder="Enter Cell"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <TextField
                      id="msg"
                      label="Write Your Message"
                      style={{ marginBottom: 40 }}
                      placeholder="Enter your Message"
                      fullWidth
                      margin="normal"
                      multiline
                      rows={13}
                      variant="outlined"
                    />
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 10,
                      marginBottom: 50,
                    }}
                  >
                    <Button btnStyle="btn--round" btnSize="btn--long">
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
