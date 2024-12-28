import React from 'react'
import "./Fifthpage.css"
import Fifthpropthree from './Fifthpropthree';
import Fourthpropone from '../Fourthpage/Fourthpropone';
import Fourthproptwo from '../Fourthpage/Fourthproptwo';
import Fifthpropone from './Fifthpropone';
import Fifthproptwo from './Fifthproptwo';

const Fifth = () => {
  return (
    <div className="contenthold5">
      <div className="holding5">
        <div className="inside5">
          <div className="ngo5">
            <h1>NGO Grant Application Form</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sem dignissim est cras
              tortor viverra
            </p>
          </div>
          <hr className="line5" />

          <div className="bothcontent5">
            <div className="leftside5">
              <Fifthpropthree u1="Applicant Information" choosie="/apply" />
              <Fifthpropthree u1="Organizational Profile" choosie="/apply2" />
              <Fifthpropthree
                u1="Grant Request Information"
                choosie="/apply3"
              />
              <Fifthpropthree u1="Budget Breakdown" choosie="/apply4" />
              <Fifthpropone
                x1="Monitoring and Evaluation"
                jv="Provide key details about your budget breakdown"
              />
              <Fifthproptwo w1="Supporting Documents" />
              <Fifthproptwo w1="Additional Information" />
              <Fifthproptwo w1="Declaration & Authorization" />
              <Fifthproptwo
                w1="Diversity, Equity,
Inclusion"
              />
            </div>
            <div className="rightside5">
              <div className="rightsidecontent5">
                <div className="indistyling5">
                  <div className="individualrightsidecontent5">
                    <h5>
                      Total Project Budget<span className="col5">*</span>
                    </h5>
                    <textarea
                      className="textstylering5"
                      type="text"
                      placeholder="Provide the total estimated cost of the project"
                    />
                  </div>
                  <div className="individualrightsidecontent5">
                    <h5>
                      Project Title
                      <span className="col5">*</span>
                    </h5>
                    <select className="textings5">
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                    </select>
                  </div>
                  <div className="individualrightsidecontent5">
                    <h5>
                      Other Funding Sources<span className="col5">*</span>
                    </h5>
                    <textarea
                      className="textstylering5"
                      type="text"
                      placeholder="List any other funding sources or partners for this project,
if applicable"
                    />
                  </div>
                  <div className="individualrightsidecontent5">
                    <h5>
                      Percentage Allocation of Requested Grant
                      <span className="col5">*</span>
                    </h5>
                    <textarea
                      className="textstylering5"
                      type="text"
                      placeholder="Provide a breakdown of how the requested funds will be
allocated across the budget categories (e.g., % for personnel
costs, % for program materials, etc.)"
                    />
                  </div>
                 
                </div>
                <div className="buttonclass">
                  <a className="dime" href="/apply4">
                    <button>Back</button>
                  </a>
                  <a className="dmje5" href="/apply6">
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

export default Fifth