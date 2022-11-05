import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import '../styles/AboutMe.css'

function AboutMe() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2016 - 2020"
          iconStyle={{background: "black"}}
          icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>Orem High School, Orem, UT</h3>
            <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
 
export default AboutMe;