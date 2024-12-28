import React from 'react'
import "./Thirdpage.css"
import Thirdpropone from './Thirdpropone.jsx';
import Thirdproptwo from './Thirdproptwo.jsx';
import Thirdpropthree from './Thirdpropthree.jsx';

const Third = () => {
  return (
    <div className="contenthold3">
      <div className="holding3">
        <div className="inside3">
          <div className="ngo3">
            <h1>NGO Grant Application Form</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sem dignissim est cras
              tortor viverra
            </p>
          </div>
          <hr className="line3" />

          <div className="bothcontent3">
            <div className="leftside3">
              <Thirdpropthree m1="Applicant Information" choose="/apply" />
              <Thirdpropthree m1="Organizational Profile" choose="/apply2" />
              <Thirdpropone
                k1="Grant Request Information"
                cv="Provide key details about your organization profile"
              />
              <Thirdproptwo p1="Budget Breakdown" />
              <Thirdproptwo p1="Monitoring and Evaluation" />
              <Thirdproptwo p1="Supporting Documents" />
              <Thirdproptwo p1="Additional Information" />
              <Thirdproptwo p1="Declaration & Authorization" />
              <Thirdproptwo
                p1="Diversity, Equity,
Inclusion"
              />
            </div>
            <div className="rightside3">
              <div className="rightsidecontentforpage3">
                <div className="indistyling3">
                  <div className="individualrightsidecontent3">
                    <h5>
                      Grant Amount Requested<span className="col3">*</span>
                    </h5>
                    <textarea
                      className="texting3"
                      type="text"
                      placeholder="Specify the amount of funding requested for your project"
                    />
                  </div>

                  <div className="individualrightsidecontent3">
                    <h5>
                      Project Title
                      <span className="col3">*</span>
                    </h5>
                    <textarea
                      className="texting3"
                      type="text"
                      placeholder="Provide a clear and descriptive title for the project or initiative"
                    />
                  </div>
                  <div className="individualrightsidecontent3">
                    <h5>
                      Project Summary<span className="col3">*</span>
                    </h5>
                    <textarea
                      className="textstylering3"
                      type="text"
                      placeholder="A brief description of the project (objective, target audience,
and outcomes)"
                    />
                  </div>
                  <div className="individualrightsidecontent3">
                    <h5>
                      Project Goals and Objectives
                      <span className="col3">*</span>
                    </h5>
                    <textarea
                      className="textstylering3"
                      type="text"
                      placeholder="Outline the specific goals and measurable objectives of
the project"
                    />
                  </div>
                  <div className="individualrightsidecontent3">
                    <h5>
                      Grant Purpose and Use of Funds
                      <span className="col3">*</span>
                    </h5>
                    <textarea
                      className="textstylering3"
                      type="text"
                      placeholder="Explain how the grant funds will be used and what the
expected outcomes are"
                    />
                  </div>
                  <div className="individualrightsidecontent3">
                    <h5>
                      Alignment with Funder's Goals
                      <span className="col3">*</span>
                    </h5>
                    <textarea
                      className="textstylering3"
                      type="text"
                      placeholder="Explain how your project aligns with the mission and goals
of the granting organization"
                    />
                  </div>
                  <div className="individualrightsidecontent3">
                    <h5>
                      Sustainability Plan
                      <span className="col3">*</span>
                    </h5>
                    <textarea
                      className="textstylering3"
                      type="text"
                      placeholder="Describe how the project will continue to operate or deliver
impact after the grant funding ends"
                    />
                  </div>
                  <div className="individualrightsidecontent3">
                    <h5>
                      Project Risks and Mitigation (Optional)
                    </h5>
                    <textarea
                      className="textstylering2"
                      type="text"
                      placeholder="Identify any potential risks to project success and describe
strategies to address them"
                    />
                  </div>
                  <div className="individualrightsidecontent3">
                    <h5>
                      Community/Stakeholder Involvement (Optional)
                    </h5>
                    <textarea
                      className="textstylering2"
                      type="text"
                      placeholder="Explain how the target community or stakeholders will be
involved in the project planning or implementation"
                    />
                  </div>
                  <div className="individualrightsidecontent3">
                    <h5>
                      Project Timeline
                      <span className="col3">*</span>
                    </h5>
                    <textarea
                      className="textstylering2"
                      type="text"
                      placeholder="Provide a timeline for the project, including key milestones
and completion date"
                    />
                  </div>
                </div>
                <div className="buttonclass">
                  <a className="dime" href="/apply2">
                    <button>Back</button>
                  </a>
                  <a className="dmje2" href="/apply4">
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

export default Third