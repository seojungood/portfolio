import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function AboutMe() {
  return (
    <div className='experience'>
      <VerticalTimeline>
        <VerticalTimelineElement></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
 
export default AboutMe;