import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                </li>
              </OverlayTrigger>
            );
          })}
          {props.isCloud && (
            <>
              <OverlayTrigger
                key={"google-play"}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>Google Play</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name="google-play">
                  <span className="iconify">
                    <img
                      style={{ width: 50.9, height: 50 }}
                      src={require("../../assests/images/google-play.png")}
                      alt=""
                    />
                  </span>
                </li>
              </OverlayTrigger>

              <OverlayTrigger
                key={"appstore"}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>App store</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name="appstore">
                  <span className="iconify">
                    <img
                      style={{ width: 50, height: 50 }}
                      src={require("../../assests/images/appstore.png")}
                      alt=""
                    />
                  </span>
                </li>
              </OverlayTrigger>
              <OverlayTrigger
                key={"azure"}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>Microsoft Azure</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name="azure">
                  <span className="iconify">
                    <img
                      style={{ width: 50, height: 50 }}
                      src={require("../../assests/images/azure.png")}
                      alt=""
                    />
                  </span>
                </li>
              </OverlayTrigger>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
