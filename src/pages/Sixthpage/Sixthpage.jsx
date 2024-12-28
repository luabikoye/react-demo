import React from 'react'
import "./Sixthpage.css"
import Sixthpropthree from './Sixthpropthree';
import Sixthpropone from './Sixthpropone';
import Sixthproptwo from './Sixthproptwo';

const Sixth = () => {
  return (
    <div className="contenthold6">
      <div className="holding6">
        <div className="inside6">
          <div className="ngo6">
            <h1>NGO Grant Application Form</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sem dignissim est cras
              tortor viverra
            </p>
          </div>
          <hr className="line6" />

          <div className="bothcontent6">
            <div className="leftside6">
              <Sixthpropthree o1="Applicant Information" choosien="/apply" />
              <Sixthpropthree o1="Organizational Profile" choosien="/apply2" />
              <Sixthpropthree
                o1="Grant Request Information"
                choosien="/apply3"
              />
              <Sixthpropthree o1="Budget Breakdown" choosien="/apply4" />
              <Sixthpropthree
                o1="Monitoring and Evaluation"
                choosien="apply5"
              />
              <Sixthpropone
                r1="Supporting Documents"
                uy="Provide key details about your budget breakdown"
              />
              <Sixthproptwo a1="Additional Information" />
              <Sixthproptwo a1="Declaration & Authorization" />
              <Sixthproptwo
                a1="Diversity, Equity,
Inclusion"
              />
            </div>
            <div className="rightsidefor6">
              <div className="rightsidecontentfor6">
                <div className="indistylingfor6">
                  <div className="individualrightsidecontentfor6">
                    <h5>
                      Latest Annual Report or Financial Statements
                      <span className="col6">*</span>
                    </h5>
                    <select className="textingsfor6">
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                    </select>
                  </div>
                  <div className="individualrightsidecontentfor6">
                    <h5>
                      IRS 501(c)(3) Determination Letter (if applicable)
                      <span className="col6">*</span>
                    </h5>
                    <select className="textingsfor6">
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                    </select>
                  </div>
                  <div className="individualrightsidecontentfor6">
                    <h5>
                      Organizational Budget for the Current Year
                      <span className="co6">*</span>
                    </h5>
                    <select className="textingsfor6">
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                    </select>
                  </div>
                  <div className="individualrightsidecontentfor6">
                    <h5>
                      Letters of Support or References
                      <span className="col6">*</span>
                    </h5>
                    <select className="textingsfor6">
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                    </select>
                  </div>
                  <div className="individualrightsidecontentfor6">
                    <h5>
                      Additional Documents (Optional)
                    </h5>
                    <select className="textingsfor6">
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                    </select>
                  </div>
                  <div className="individualrightsidecontentfor6">
                    <h5>
                      Certificate of Incorporation
                      <span className="col6">*</span>
                    </h5>
                    <select className="textingsfor6">
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                    </select>
                  </div>
                  <div className="individualrightsidecontentfor6">
                    <h5>Work Plan (Optional)</h5>
                    <select className="textingsfor6">
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                    </select>
                  </div>
                  <div className="individualrightsidecontentfor6">
                    <h5>
                      Monitoring Tools (Optional)
                    </h5>
                    <select className="textingsfor6">
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                      <option>select</option>
                    </select>
                  </div>
                </div>
                <div className="buttonclass">
                  <a className="dime" href="/apply5">
                    <button>Back</button>
                  </a>
                  <a className="dmje6" href="/apply7">
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

export default Sixth