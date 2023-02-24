import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { useState } from "react";

function ExperienceAccordion(props) {
  const theme = props.theme;
  const [expanded,setExpanded] = useState(true)

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion  onChange={({ expanded }) => setExpanded(expanded)}>
          {props.sections.map((section) => {
            return (
              <Panel
                expanded={expanded}
                onClick={({ exp }) => setExpanded(!expanded)}
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
