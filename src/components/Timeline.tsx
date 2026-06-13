import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2026 – Ongoing"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              FireAI Betopia
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              AI Engineer
            </h4>
            <p>Langchain, Langgraph, Postman, FastAPI, RAG, LLM, multi-agent, Prompt injections</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2025 – November 2025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Softvence Agency
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mobile App Developer
            </h4>
            <p>Flutter, Dart, Swift, API Integration, Swagger, Postman</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 – 2025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Bangladesh Academy of Geological Sciences Club
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vice President
            </h4>
            <p>Web Development, Team Leading</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <h1 style={{ marginTop: '50px' }}>Education History</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BRAC University</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Computer Science and Engineering
            </h4>
            <p>
              CG: 3.40/4.00 <br />
              Relevant Courses: Data Analysis, Software Engineering, OS, DSA,
              AI, ML, NLP
              <br />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
