import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Looking for a Job :))</h3>
            <h4 className="vertical-timeline-element-subtitle">Or an internship</h4>
            <p>
              To gain more experience of course!!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bangladesh Academy of Geological Sciences</h3>
            <h4 className="vertical-timeline-element-subtitle">Vice President</h4>
            <p>
               Web Development, Team Leading
            </p>
          </VerticalTimelineElement>

          <h1>Education History</h1>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BRAC University</h3>
            <h4 className="vertical-timeline-element-subtitle">Computer Science and Engineering</h4>
            <p>
              CG: 3.40/4.00 <br />
              Relevant Courses: Data Analysis, Software Engineering, OS, DSA, AI, ML, NLP<br />
            </p>
          </VerticalTimelineElement>
        
        </VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;