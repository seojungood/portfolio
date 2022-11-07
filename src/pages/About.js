import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import '../styles/About.css'

function About() {
  return (
    <div className='experience'> 
      <div className='aboutme'>
        <h2>Hello again, My name is Seojun Chung</h2>
          {/* <p> 
            I'm a software developer and currently a student at the 
            University of Utah majoring in Computer Science.
          </p>
          <p>
            I have great passion and ambition towards building applications 
            and  
          </p> */}
      </div>
      <VerticalTimeline lineColor='black'>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2016 - 2020"
          iconStyle={{background: "black", color: "white"}}
          icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>Orem High School, Orem, UT</h3>
            <h4 className='vertical-timeline-element-subtitle'>High School Diploma</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2021 - 2022"
          iconStyle={{background: "white", color: "black"}}
          icon={<WorkIcon />}>
            <h3 className='vertical-timeline-element-title'>QC Inspector - LBSOL</h3>
            <h4 className='vertical-timeline-element-subtitle'>Orem, UT</h4>
            <p>Performed Quality Control for company's website and programs</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2020 - Present"
          iconStyle={{background: "black", color: "white"}}
          icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>University Of Utah, SLC, UT</h3>
            <h4 className='vertical-timeline-element-subtitle'>Bachelor's Degree</h4>
            <p>Computer Science</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}
 
export default About;