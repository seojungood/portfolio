import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import CertificateIcon from "@material-ui/icons/AssignmentTurnedIn"

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
          date="2016 - 2020"
          iconStyle={{background: "black", color: "white"}}
          icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>Orem High School, Orem, UT</h3>
            <h4 className='vertical-timeline-element-subtitle'>High School Diploma</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2021 - 2023"
          iconStyle={{background: "white", color: "black"}}
          icon={<WorkIcon />}>
            <h3 className='vertical-timeline-element-title'>QC Inspector - LBSOL</h3>
            <h4 className='vertical-timeline-element-subtitle'>Orem, UT</h4>
            <p><a href='https://www.dpque.com/'>DPQUE</a> - Cloud based Digital Signage Platform</p>
            <p><a href='https://www.crowncertificate.com/'>Crown Certificate</a> - Protection Plan for Crown Treatment</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="January 8th 2023"
          iconStyle={{background: "black", color: "white"}}
          icon={<CertificateIcon />}>
            <h3 className='vertical-timeline-element-title'>Goldman Sachs Fintech Engineering Virtual Experience Program</h3>
            <h4 className='vertical-timeline-element-subtitle'>Certificate of Completion</h4>
            <p>Acquired skills in basic cryptography, password cracking, and developed critical engineering skills (HashCat)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="February 24th, 2023"
          iconStyle={{background: "black", color: "white"}}
          icon={<CertificateIcon />}>
            <h3 className='vertical-timeline-element-title'>Information Systems - Super Bowl Game Day Analytics Challenge</h3>
            <h4 className='vertical-timeline-element-subtitle'>Certificate of Participation</h4>
            <p>Analyzed Super Bowl commercial tweets from Twitter API using Python to provide valuable insights to advertisers, including sentiment and return on ad spend. </p>
            <p>Designed data visualizations and dashboards using Tableau and Tableau Prep to present key findings to panel of judges.</p>
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