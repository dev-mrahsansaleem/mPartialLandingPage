import Slider from "@material-ui/core/Slider";

import "./FeeStructure.css";

const FeeStructure = () => {
  const marks = [
    {
      value: 0,
      label: "$0",
    },
    {
      value: 25,
      label: "$250,000",
    },
    {
      value: 50,
      label: "$500,000",
    },
    {
      value: 75,
      label: "$750,000",
    },
    {
      value: 100,
      label: "$1M+",
    },
  ];

  function valuetext(value) {
    return `$${value}0,000`;
  }

  return (
    <>
      <div className="fullRowWhite">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 class="section_title_text">Waterfall Fee Structure</h2>
            </div>
          </div>
          <div className="">
            {/* //20 values with 5 gap range */}
            <Slider
              defaultValue={50}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={5}
              marks={marks}
              valueLabelDisplay="on"
            />
          </div>
          <div>
            <p class="section_title_description css-ulgnwk-WaterFall">
              Drag the slider around based on what you think it will cost to
              repair the property. Move forward based on the estimated fee
              structure below.
            </p>
            <div class="partial_fee_btn">
              <i class="info_popup">i</i>
              <label>6.94%</label>
              <span>mpartial Fee</span>
            </div>
            <p class="waterfall_info_text">[$750 Minimum]</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeeStructure;
