import React from 'react'
import "./Ninthpage.css"
import Eightpropthree from '../Eightpage/Eightpropthree';
import Ninthpropthree from './Ninthpropthree';
import Ninthpropone from './Ninthpropone';

const Ninth = () => {
  return (
    <div className="contenthold9">
      <div className="holding9">
        <div className="inside9">
          <div className="ngo9">
            <h1>NGO Grant Application Form</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sem dignissim est cras
              tortor viverra
            </p>
          </div>
          <hr className="line9" />

          <div className="bothcontent9">
            <div className="leftside9">
              <Ninthpropthree gr1="Applicant Information" echeesie="/apply" />
              <Ninthpropthree gr1="Organizational Profile" echeesie="/apply2" />
              <Ninthpropthree
                gr1="Grant Request Information"
                echeesie="/apply3"
              />
              <Ninthpropthree gr1="Budget Breakdown" echeesie="/apply4" />
              <Ninthpropthree
                gr1="Monitoring and Evaluation"
                echeesie="/apply5"
              />
              <Ninthpropthree gr1="Supporting Documents" echeesie="/apply6" />
              <Ninthpropthree gr1="Additional Information" echeesie="/apply7" />
              <Ninthpropthree
                gr1="Declaration & Authorization"
                echeesie="/apply8"
              />
              <Ninthpropthree
                gr1="Diversity, Equity,
Inclusion"
                echeesie="apply9"
              />
            </div>
            <div className="rightside9">
              <div className="rightsidecontentfor9">
                <div className="indistyling9">
                  <div className="individualrightsidecontentfor9">
                    <h5>Diversity Policies</h5>
                    <textarea
                      className="textstylering9"
                      type="text"
                      placeholder="Does your organization have a diversity, equity, and
inclusion (DEI) policy? (Yes/No)?
If yes, provide a brief description or attach the policy
document.
If no, describe how your organization promotes inclusivity
in its operations."
                    />
                  </div>
                  <div className="individualrightsidecontentfor9">
                    <h5>Beneficiary Representation</h5>
                    <textarea
                      className="textstylering9"
                      type="text"
                      placeholder="representative of diverse groups (e.g., gender, age,"
                    />
                  </div>
                </div>
                <div className="buttonclass">
                  <a className="dime" href="/apply8">
                    <button>Back</button>
                  </a>
                  <a className="dmje9" href="/submit">
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

export default Ninth