import { Component, OnInit } from '@angular/core';
import {PageScroll} from 'ng2-page-scroll';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css', 'home2.component.css', '../app.component.css'],
  directives: [PageScroll]

})
export class HomeComponent implements OnInit {
    date: Date = new Date();
    jobs = [{company:'Love To Eat It', location:'Toronto, ON', timeline:'Jan 2016 - Current', position:'Co-Founder & Chief Technology Officer',
            description:"As a co-founder in a startup my responsibilities included development, design & strategy. As the technical co-founder my main focus was on building our product with features that aligned with our strategy and customer’s needs. I created a minimum viable product (MVP) to validate our business model which had a modest number of users using our platform regularly. Taking into observations from our MVP, I built our first release based on short cycles to take into account any changes. I was also in charge of all outsourced work."},
            {company:'Softworx Technology Group', location:'Toronto, ON', timeline:'Sep 2011 - Jan 2016', position:'Solution Architect & Sales Engineer',
            description:'Softworx is the official Canadian distributor of multiple software companies such as Parasoft and Serena. The software products revolve around the SDLC from requirement gathering to testing to deployment. I was in charge of technical sales for all of these products and this included demoing the product and proposing solutions to clients. Our solutions were customized based on each clients use case. During my tenure I was able to help increase our customer base drastically and decrease our sales time by optimizing our sales cycle. I was also in charge of all consulting work that was conducted post sales. This included on site setup, installation and custom solutions that needed to be developed. I also conducted 2 day on site training classes for new clients.'},
            {company:'Stereogram', location:'Toronto, ON', timeline:'Sep 2014 - Jan 2015', position:'Founder',
            description:"I was responsible for user-experience and development. This included interviewing multiple people to understand how they use and interact with music on their smart phones and computers. Stereogram leveraged multiple APIs which included YouTube and Soundcloud. I was able to complete development of our first release in 3 months. We maintained a modest user base with high engagement rates for 4 months. "},
            {company:'CGI Group Inc', location:'Toronto, ON', timeline:'Sep 2010 - Dec 2010', position:'Project Delivery Officer Co-op',
            description:"At CGI I had to ensure all tasks in our team were progressing  efficiently by communicating  with the development and testing teams. I was incharge of maintaining the project plan  and reports that outlined risks, issues, tasks and status. I also helped create a process using HP-Quality Center to track, log and manage bugs."},
            {company:'SAP BusinessObjects', location:'Vancouver, BC', timeline:'Sep 2009 - Dec 2009', position:'Software Developer Co-op',
            description:"I was part of the team developing a visual dashboarding tool called Xcelsius. Using Java and C++ I created interactive visuals to display data. I also worked on a automated translational tool so users can use the tool in multiple languages."},
            {company:'BlackBerry Ltd.', location:'Waterloo, ON', timeline:'Jan 2009 - May 2009', position:'Audio Engineering Associate Co-op',
            description:"I created an application in Java and SQL that interacted with users by playing multiple audio signals and recording their responses. Using this application I conducted an audio quality experiment with 50 participants. The results were then analyzed and published to the team for mobile device benchmarks."},
            {company:'PlantCML', location:'Gatineau, QC', timeline:'May 2008 - August 2008', position:'Quality Assurance Specialist Co-op',
            description:"I was part of the team that setup an automated harness for front-end testing. I created a library of C++ functions that interact with front end components. This library was used to create and run XML tests using TestComplete."},
            {company:'Just-in-Time Resources', location:'Calgary, AB', timeline:'Jan 2007 - Apr 2007', position:'Software Developer Co-op',
            description:"Just-in-Time provided their clients a customized web app to share videos. I developed a RSS feed component to upload new videos to portable devices. I also worked on a automated batch method to compress media via Sony Vegas."},
            ]

    jobLimit = 5;
    constructor() {}
    ngOnInit() {}
}
