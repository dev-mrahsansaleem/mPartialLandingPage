import "./ImageSlider.css";
import originalImage from "./img/right.jpg";
import modifiedImage from "./img/left.jpg";
import Slider from "./Slider";
const ImageSlider = () => {
  const slider1 = {
    delay: 2000,
    original: {
      url: originalImage,
      title: "",
    },
    modified: {
      url: modifiedImage,
      title: "",
    },
  };

  return (
    <>
      <div className="fullRowWhite" id="here">
        <div className="container">
          <div className="text-section">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <h1 className="section_title_text">
                  GROUND-TRUTH DATA EVERYONE TRUSTS
                </h1>
              </div>
              <div className="col-md-6 col-sm-12">
                <p className="section_title_description">
                  We have combined the best-of-breed technology platforms with
                  an eye towards relieving you of administrative burden.
                  Matterport 3D scans augmented by TrueSketch PLUS are used to
                  generate consistent Xactimate sheets that are delivered in
                  accord with Actionable Insights compliance rule sets. Each
                  mpartial is produced with full transparency, unprecedented
                  forensic photography, and infallible geospatial data that
                  collectively result in rapid approvals.
                </p>
              </div>
            </div>
          </div>
          <div className="compSection">
            <Slider {...slider1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
