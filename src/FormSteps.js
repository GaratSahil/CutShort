import React, { useState } from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import Eden from "./img/Icon.svg";
import "./FormSteps.css";
const FormSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userName, setUserName] = useState("");
  function formStep() {
    return ["0", "1", "2", "3"];
  }
  function stepButtonName() {
    return [
      "Create Workspace",
      "Create Workspace",
      "Create Workspace",
      "Launch Eden",
    ];
  }
  function stepContent(step) {
    switch (step) {
      case 0:
        return (
          <div className="stepOne">
            <h2 class="pt-5">Welcome!First things first...</h2>
            <p>You can always change them later.</p>
            <h5>Full Name</h5>
            <input
              type="text"
              id="full-name"
              placeholder="Steve Jobs"
              name="fullName"
            />
            <h5>Display Name</h5>
            <input
              type="text"
              id="display-name"
              placeholder="Steve"
              name="displayName"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
        );

      case 1:
        return (
          <div className="stepTwo">
            <h2 class="pt-5">Let's set up a home for all your work</h2>
            <p>You can always create another workspace later.</p>
            <h5>Workspace Name</h5>
            <input
              className="workName"
              type="text"
              placeholder="Eden"
              value={userName}
            />
            <h5>
              Workspace URL <span className="optional">(optinal)</span>
            </h5>
            <div class="d-flex">
              <div class="input-group-prepend customInput">
                <span class="input-group-text">www.eden.com/</span>
              </div>
              <input
                className="urlAddress"
                type="text"
                id="user-url"
                placeholder="Example"
                name="lastName"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="stepThree">
            <h2 class="pt-5">How are you planning to use Eden?</h2>
            <p>We'll streamline your step experience accordingly.</p>
            <div class="row">
              <div class="col-sm-2 cardLength">
                <div class="card cardFormat" tabIndex="1">
                  <div class="card-body">
                    <PersonIcon className="person" />
                    <h5 class="card-title">For myself</h5>
                    <h6>Write better. Think more clearly.Stay organized.</h6>
                  </div>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="card cardFormat" tabIndex="2">
                  <div class="card-body">
                    <GroupsIcon className="person" />
                    <h5 class="card-title">With my team</h5>
                    <h6>Wikis,docs,tasks & projects, all in one palce.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="stepFour">
            <CheckCircleSharpIcon fontSize="large" className="icon" />
            <h2 class="pt-5">
              Congratulations, {userName ? userName : "Eren"}!
            </h2>
            <p>You have completed onboarding, you can start using the Eden!</p>
          </div>
        );

      default:
        return "Please Try again";
    }
  }
  const step = formStep();
  const buttonName = stepButtonName();
  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };
  const handleStartingStep = () => {
    setActiveStep(0);
    setUserName("");
  };
  return (
    <div className="mainDiv">
      <Box sx={{ width: "100%" }}>
        <div class="heading">
          <img src={Eden} height={60} />
          <h2 class="mt-4">Eden</h2>
        </div>
        <Stepper activeStep={activeStep} className="stepperr">
          {step.map((step, index) => {
            return (
              <Step
                key={index}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "#5a4ad1",
                  },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#5a4ad1",
                  },
                }}
              >
                <StepLabel></StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      <form className="w-80">{stepContent(activeStep)}</form>

      {buttonName.map((step, index) => {
        return (
          activeStep === index && (
            <button onClick={index === 3 ? handleStartingStep : handleNextStep}>
              {step}
            </button>
          )
        );
      })}
    </div>
  );
};

export default FormSteps;
