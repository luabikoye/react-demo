import React from 'react'
import "./First.css"
import "./propcard.jsx"
import Propcard from './propcard.jsx';
import Secondcard from './secondcard.jsx';

const First = () => {
  return (
    <div className="contenthold1">
      <div className="holding1">
        <div className="inside1">
          <div className="ngo1">
            <h1>NGO Grant Application Form</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sem dignissim est cras
              tortor viverra
            </p>
          </div>
          <hr className="line1" />

          <div className="bothcontent1">
            <div className="leftside1">
              <Propcard
                h1="Applicant Information"
                p="Provide key details about your organization and primary contact."
              />
              <Secondcard h1="Organizational Profile" />
              <Secondcard h1="Grant Request Information" />
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
            <div className="rightside1">
              <div className="rightsidecontent1">
                <div className="indistyling1">
                  <div className="individualrightsidecontent1">
                    <h5>
                      Organization Name <span className="col">*</span>
                    </h5>
                    <input className="textstyle1" type="text" />
                  </div>
                  <div className="individualrightsidecontent1">
                    <h5>
                      Registration Number
                    </h5>
                    <input className="textstyle1" type="text" />
                  </div>
                  <div className="individualrightsidecontent1">
                    <h5>
                      Year of Establishment<span className="col">*</span>
                    </h5>
                    <input
                      className="textstylers1"
                      type="text"
                      placeholder="DD/MM/YY"
                    />
                  </div>
                  <div className="individualrightsidecontent1">
                    <h5>
                      Primary Contact Person
                      <span className="col1">*</span>
                    </h5>
                    <input className="textstyle1" type="text" />
                  </div>
                  <div className="individualrightsidecontent1">
                    <h5>
                      Phone Number
                      <span className="col1">*</span>
                    </h5>
                    <input className="textstyle1" type="text" />
                  </div>
                  <div className="individualrightsidecontent1">
                    <h5>
                      Type of Organization<span className="col1">*</span>
                    </h5>
                    <input
                      className="textstylers1"
                      type="text"
                      placeholder="(e.g., Non-profit, Charitable Trust, NGO, etc.)"
                    />
                  </div>
                  <div className="individualrightsidecontent1">
                    <h5>
                      Tax Identification Number (TIN)
                      <span className="col1">*</span>
                    </h5>
                    <input className="textstyle1" type="text" />
                  </div>
                  <div className="individualrightsidecontent1">
                    <h5>
                      Website URL (Optional)
                    </h5>
                    <input className="textstyle1" type="text" />
                  </div>
                  <div className="individualrightsidecontent1">
                    <h5>
                      Title/Position
                      <span className="col1">*</span>
                    </h5>
                    <input className="textstyle1" type="text" />
                  </div>
                  <div className="individualrightsidecontent1">
                    <h5>
                      Email Address
                      <span className="col1">*</span>
                    </h5>
                    <input className="textstyle1" type="text" />
                  </div>
                </div>
                <a className="dmj1" href="/apply2">
                  <button>Continue</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;