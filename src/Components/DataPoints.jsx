import { Button } from "./Button";
import "./DataPoints.css";

const DataPoints = () => {
  return (
    <>
      <div className="fullRowWhite" id="HowItWorkSection">
        <div className=" howitworks">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 class="section_title_text">How It Works</h2>
              </div>
            </div>
            <div class="data_points">
              <div class="row no-gutters">
                <div class="col-md-4 col-sm-12">
                  <div class="data_point_item row no-gutters">
                    <div class="data_number data_number_1 col-md-4 col-sm-12">
                      1
                    </div>
                    <div class="data_text  col-md-8 col-sm-12 ">
                      Perform pre-mitigation and post-mitigation scans with a
                      Matterport Pro Series camera.
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="data_point_item row no-gutters">
                    <div class="data_number data_number_2 col-md-4 col-sm-12">
                      2
                    </div>
                    <div class="data_text  col-md-8 col-sm-12 ">
                      <span>
                        Submit the Matterport scans via the mpartial portal and
                        then go back to what you do great.
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="data_point_item row no-gutters">
                    <div class="data_number data_number_3 col-md-4 col-sm-12">
                      3
                    </div>
                    <div class="data_text  col-md-8 col-sm-12 ">
                      <span>
                        Receive a well-formatted, fully documented Xactimate
                        PDF, ESX &amp; Matterport TrueSketch PLUS SKX.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="btnSection">
              <Button btnStyle="btn--round">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPoints;
