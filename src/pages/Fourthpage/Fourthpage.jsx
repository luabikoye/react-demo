import React from 'react'
import "./Fourthpage.css"
import Fourthpropthree from './Fourthpropthree';
import Fourthpropone from './Fourthpropone';
import Fourthproptwo from './Fourthproptwo';

const Fourth = () => {
  return (
    <div className="contenthold4">
      <div className="holding4">
        <div className="inside4">
          <div className="ngo4">
            <h1>NGO Grant Application Form</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sem dignissim est cras
              tortor viverra
            </p>
          </div>
          <hr className="line4" />

          <div className="bothcontent4">
            <div className="leftside4">
              <Fourthpropthree b1="Applicant Information" choosey="/apply" />
              <Fourthpropthree b1="Organizational Profile" choose="/apply2" />
              <Fourthpropthree
                b1="Grant Request Information"
                choosey="/apply3"
              />
              <Fourthpropone
                y1="Budget Breakdown"
                bv="Provide key details about your budget breakdown"
              />
              <Fourthproptwo n1="Monitoring and Evaluation" />
              <Fourthproptwo n1="Supporting Documents" />
              <Fourthproptwo n1="Additional Information" />
              <Fourthproptwo n1="Declaration & Authorization" />
              <Fourthproptwo
                n1="Diversity, Equity,
Inclusion"
              />
            </div>
            <div className="rightside4">
              <div className="rightsidecontent4">
                <div className="indistyling4">
                  <div className="individualrightsidecontent4">
                    <h5>
                      Total Project Budget<span className="col4">*</span>
                    </h5>
                    <textarea
                      className="textingss4"
                      type="text"
                      placeholder="Provide the total estimated cost of the project"
                    />
                  </div>
                  <div className="individualrightsidecontent4">
                    <h5>
                      Project Title
                      <span className="col4">*</span>
                    </h5>
                    <select className="textings4">
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                    </select>
                  </div>
                  <div className="individualrightsidecontent4">
                    <h5>
                      Other Funding Sources<span className="col4">*</span>
                    </h5>
                    <textarea
                      className="textstylering4"
                      type="text"
                      placeholder="List any other funding sources or partners for this project,
if applicable"
                    />
                  </div>
                  <div className="individualrightsidecontent4">
                    <h5>
                      Percentage Allocation of Requested Grant
                      <span className="col4">*</span>
                    </h5>
                    <textarea
                      className="textstylering4"
                      type="text"
                      placeholder="Provide a breakdown of how the requested funds will be
allocated across the budget categories (e.g., % for personnel
costs, % for program materials, etc.)"
                    />
                  </div>
                  <div className="individualrightsidecontent4">
                    <h5>
                      Cost Efficiency Measures (Optional)
                    </h5>
                    <textarea
                      className="textstylering4"
                      type="text"
                      placeholder="List any other funding sources or partners for this project,
if applicable"
                    />
                  </div>
                </div>
                <div className="buttonclass">
                  <a className="dime" href="/apply3">
                    <button>Back</button>
                  </a>
                  <a className="dmje4" href="/apply5">
                    <button>Continue</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourth