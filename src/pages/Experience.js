import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#0c0513'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2010 - 2015'
          iconStyle={{ background: '#e95bb3', color: '#fff' }}
          icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>
            My Random High School, Random Higher secondary, Random State
          </h3>
          <p> High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2015 - 2020'
          iconStyle={{ background: '#e95bb3', color: '#fff' }}
          icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>
            My Cool University, Karpagam University, Bharathiar University
          </h3>

          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor's Degree and Master's Degree
          </h4>

          <p> Mathematics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2021 - 2022'
          iconStyle={{ background: '#9e64c4', color: '#fff' }}
          icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>
            Focus Edumatics Private Limited
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Coimbatore, India
          </h4>
          <p>Online Tutor</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2022 - present'
          iconStyle={{ background: '#9e64c4', color: '#fff' }}
          icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>
            Full Stack Development - Course
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            GUVI Geek Networks, IITM Research Park, Chennai
          </h4>
          <p>
            Had experience with hands-on projects, Did a Full stack (MERN) Web
            Development Course. Great place to learn from scratch to an advanced
            level.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
