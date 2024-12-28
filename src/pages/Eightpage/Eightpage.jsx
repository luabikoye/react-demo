import React from 'react'
import "./Eightpage.css"
import Eightpropthree from './Eightpropthree';
import Eightpropone from './Eightpropone';
import Eightproptwo from './Eightproptwo';

const Eight = () => {
  return (
    <div className="contenthold8">
      <div className="holding8">
        <div className="inside8">
          <div className="ngo8">
            <h1>NGO Grant Application Form</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sem dignissim est cras
              tortor viverra
            </p>
          </div>
          <hr className="line8" />

          <div className="bothcontent8">
            <div className="leftside8">
              <Eightpropthree echoose="/apply" mq1="Applicant Information" />
              <Eightpropthree echoose="/apply2" mq1="Organizational Profile" />
              <Eightpropthree
                mq1="Grant Request Information"
                echoose="/apply3"
              />
              <Eightpropthree mq1="Budget Breakdown" echoose="/apply4" />
              <Eightpropthree
                mq1="Monitoring and Evaluation"
                echoose="/apply5"
              />
              <Eightpropthree mq1="Supporting Documents" echoose="/apply6" />
              <Eightpropthree mq1="Additional Information" echoose="/apply7" />
              <Eightpropone
                kk1="Declaration & Authorization"
                cvv="Provide any additional information you think we might need"
              />
              <Eightproptwo
                pp1="Diversity, Equity,
Inclusion"
              />
            </div>
            <div className="rightside8">
              <div className="rightsidecontentforpage8">
                <div className="indistyling8">
                  <div className="individualrightsidecontent8">
                    <h5>
                      Authorized Signature<span className="col8">*</span>
                    </h5>
                    <textarea
                      className="textingfor8"
                      type="text"
                      placeholder="Upload Signature"
                    />
                  </div>

                  <div className="individualrightsidecontent8">
                    <h5>
                      Date
                      <span className="col8">*</span>
                    </h5>
                    <textarea
                      className="textingfor8"
                      type="text"
                      placeholder="DD/MM/YY"
                    />
                  </div>
                  <div className="secondconts8">
                    <div className="firstsecondconts8">
                      <input type="checkbox" />
                      <h6>
                        Confirm that you understand and agree to how the
                        information in this application will be used and stored
                        by the granting organization.
                      </h6>
                    </div>
                    <div className="firstsecondconts8">
                      <input type="checkbox" />
                      <h6>
                        By signing this form, I confirm that the information
                        provided is accurate and true to the best of my
                        knowledge.
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="buttonclass">
                  <a className="dime" href="/apply7">
                    <button>Back</button>
                  </a>
                  <a className="dmje8" href="/apply9">
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

export default Eight