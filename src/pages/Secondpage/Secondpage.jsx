import React from 'react'
import "./Secondpage.css";
import "./Proptwo.jsx";
import Propcard from "./Proptwo.jsx";
import Secondcard from "./Secondproptwo.jsx";
import Secondpropthree from './Secondpropthree.jsx';


const Second = () => {
  return (
    <div className="contenthold2">
      <div className="holding2">
        <div className="inside2">
          <div className="ngo2">
            <h1>NGO Grant Application Form</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sem dignissim est cras
              tortor viverra
            </p>
          </div>
          <hr className="line2" />

          <div className="bothcontent2">
            <div className="leftside2">
              <Secondpropthree q1="Applicant Information" />
              <Propcard
                w1="Organizational Profile"
                pa="Provide key details about your organization profile"
              />
              <Secondcard
                h1="Grant Request Information"
                p="Provide key details about your organization profile"
              />
              <Secondcard h1="Budget Breakdown" />
              <Secondcard h1="Monitoring and Evaluation" />
              <Secondcard h1="Supporting Documents" />
              <Secondcard h1="Additional Information" />
              <Secondcard h1="Declaration & Authorization" />
              <Secondcard
                h1="Diversity, Equity,
Inclusion"
              />
            </div>
            <div className="rightside2">
              <div className="rightsidecontent2">
                <div className="indistyling2">
                  <div className="individualrightsidecontent2">
                    <h5>
                      Mission Statement<span className="col2">*</span>
                    </h5>
                    <textarea
                      className="textstylering2"
                      type="text"
                      placeholder="Describe your organization’s core mission and values"
                    />
                  </div>

                  <div className="individualrightsidecontent2">
                    <h5>
                      Key Programs/Services Offered
                      <span className="col2">*</span>
                    </h5>
                    <textarea
                      className="textstylering2"
                      type="text"
                      placeholder="Provide a brief description of the main programs or services
your organization provides"
                    />
                  </div>
                  <div className="individualrightsidecontent2">
                    <h5>
                      Target Beneficiaries<span className="col2">*</span>
                    </h5>
                    <textarea
                      className="textstylering2"
                      type="text"
                      placeholder="Specify the population or community your organization
serves (e.g., low-income families, children, women, etc.)"
                    />
                  </div>
                  <div className="individualrightsidecontent2">
                    <h5>
                      Geographical Area of Operation
                      <span className="col2">*</span>
                    </h5>
                    <textarea
                      className="textstylering2"
                      type="text"
                      placeholder="Indicate the specific area(s) your organization serves (local,
regional, national, international)"
                    />
                  </div>
                  <div className="individualrightsidecontent2">
                    <h5>
                      Leadership and Governance<span className="col2">*</span>
                    </h5>
                    <textarea
                      className="textstylering2"
                      type="text"
                      placeholder="Provide information on your organization's leadership
structure (e.g., board of directors, executive team).
Attach a list of key personnel and their roles, if available"
                    />
                  </div>
                  <div className="individualrightsidecontent2">
                    <h5>
                      Staffing Capacity<span className="col2">*</span>
                    </h5>
                    <textarea
                      className="textstylering2"
                      type="text"
                      placeholder="Indicate the number of full-time, part-time, and volunteer
staff currently engaged in your organization"
                    />
                  </div>
                </div>
                <div className="buttonclass">
                  <a className="dime" href="/apply">
                    <button>Back</button>
                  </a>
                  <a className="dmje2" href="/apply3">
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

export default Second