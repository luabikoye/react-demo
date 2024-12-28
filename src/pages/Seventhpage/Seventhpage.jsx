import React from 'react'
import "./Seventhpage.css"
import Seventhpropthree from './Seventhpropthree';
import Seventhpropone from './Seventhpropone';
import Seventhproptwo from './Seventhproptwo';

const Seventh = () => {
  return (
    <div className="contenthold7">
      <div className="holding7">
        <div className="inside7">
          <div className="ngo7">
            <h1>NGO Grant Application Form</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sem dignissim est cras
              tortor viverra
            </p>
          </div>
          <hr className="line7" />

          <div className="bothcontent7">
            <div className="leftside7">
              <Seventhpropthree un1="Applicant Information" cheesie="/apply" />
              <Seventhpropthree
                un1="Organizational Profile"
                cheesie="/apply2"
              />
              <Seventhpropthree
                un1="Grant Request Information"
                cheesie="/apply3"
              />
              <Seventhpropthree un1="Budget Breakdown" cheesie="/apply4" />
              <Seventhpropthree
                un1="Monitoring and Evaluation"
                cheesie="/apply5"
              />
              <Seventhpropthree un1="Supporting Documents" cheesie="/apply6" />
              <Seventhpropone
                be1="Additional Information"
                ng="Provide any additional information you think we might need"
              />
              <Seventhproptwo wq1="Declaration & Authorization" />
              <Seventhproptwo
                wq1="Diversity, Equity,
Inclusion"
              />
            </div>
            <div className="rightside7">
              <div className="rightsidecontent7">
                <div className="indistyling7">
                  <div className="individualrightsidecontentfor7">
                    <h5>
                      How Did You Hear About This Grant? (Optional)
                    </h5>
                    <textarea
                      className="textstylering7"
                      type="text"
                      placeholder="Provide information about how you found out about this
grant opportunity (e.g., website, referral, event, etc.)"
                    />
                  </div>
                  <div className="individualrightsidecontentfor7">
                    <h5>
                      Additional Comments or Questions (Optional)
                    </h5>
                    <textarea
                      className="textstylering7"
                      type="text"
                      placeholder="Space for any other comments or questions related to the
application"
                    />
                  </div>
                  <div className="individualrightsidecontentfor7">
                    <h5>
                      Lessons from Past Projects (Optional)
                    </h5>
                    <textarea
                      className="textstylering7"
                      type="text"
                      placeholder="Share one or two key lessons your organization has learned
from implementing similar projects in the past"
                    />
                  </div>
                </div>
                <div className="buttonclass">
                  <a className="dime" href="/apply6">
                    <button>Back</button>
                  </a>
                  <a className="dmje7" href="/apply8">
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

export default Seventh