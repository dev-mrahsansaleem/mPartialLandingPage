import {
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { Button } from "./Button";

import "./Contact.css";

const Contact = () => {
  const [fname, setFname] = useState("");
  const handlefname = (event) => {
    setFname(event.target.value);
  };
  return (
    <>
      <div className="fullRowWhite">
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
                      id="outlined-full-width"
                      label="Label"
                      style={{ margin: 8 }}
                      placeholder="Placeholder"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-full-width"
                      label="Label"
                      style={{ margin: 8 }}
                      placeholder="Placeholder"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-full-width"
                      label="Label"
                      style={{ margin: 8 }}
                      placeholder="Placeholder"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-full-width"
                      label="Label"
                      style={{ margin: 8 }}
                      placeholder="Placeholder"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      style={{ margin: 8 }}
                      placeholder="Placeholder"
                      fullWidth
                      margin="normal"
                      multiline
                      rows={15}
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
                      marginBottom: 10,
                    }}
                  >
                    <Button btnStyle="btn--round">Submit</Button>
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
