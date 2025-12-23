import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  BriefcaseBusiness,
  SchoolIcon,
  StarIcon,
  FolderCheck,
  Atom,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Particles } from "@/components/ui/particles";

function Timeline() {
  return (
    <>
      <div id="timeline" className="w-full overflow-hidden relative h-full pl-2 pr-4 pt-4">

        <Particles quantity={500} size={0.6} />

        <h2 className="text-3xl font-bold pl-6 lg:p-0 lg:text-center">
          My Timeline
        </h2>
        <VerticalTimeline lineColor="#2196f3" animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:-translate-y-2 transition-all duration-300"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BriefcaseBusiness />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              NoteX Studios
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pokhara, Nepal
            </h4>
            <p>
              Team Management, Forntend & Backend Development, SEO Optimization,
              Deployment and Testing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:-translate-y-2 transition-all duration-300"
            contentStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(16, 204, 82)" }}
            date="2025 - 2026"
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FolderCheck />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Akuner Cleaning Sydney
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Web App</h4>
            <p>
              Designed, Developed and Deployed a complete Fullstack webapp for a
              Cleaning agency based in Sydney, Australia
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:-translate-y-2 transition-all duration-300"
            contentStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(16, 204, 82)" }}
            date="2023 - 2024"
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FolderCheck />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Tribhuwan Shanti Sec. School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Web Site</h4>
            <p>
              Designed, Developed and Deployed a complete website for a
              Government school based in Nepal
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:-translate-y-2 transition-all duration-300"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2024 - 2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Atom />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Auto-Firetruck
            </h3>
            <h4 className="vertical-timeline-element-subtitle">STSSS</h4>
            <p>
              Made a small scale working prototpe of fire sensing and prevention
              FireTruck using arduino
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:-translate-y-2 transition-all duration-300"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2024 - 2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Atom />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Sun Tracker Solar Array
            </h3>
            <h4 className="vertical-timeline-element-subtitle">STSSS</h4>
            <p>
              Made a arduino system which tracks sun and tilts the solar array
              in direction of sun to increasing power efficiency
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:-translate-y-2 transition-all duration-300"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2024 - 2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Atom />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Gas Detection & Hazard Prevention System
            </h3>
            <h4 className="vertical-timeline-element-subtitle">STSSS</h4>
            <p>
              Designed & Developed a LPG das detection system which
              automatically cuts off the pipeline when a leak is detected
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work hover:-translate-y-2 transition-all duration-300"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023 - 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Atom />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Obstacle Avoiding Robot
            </h3>
            <h4 className="vertical-timeline-element-subtitle">STSSS</h4>
            <p>
              Made a robot that uses Ultrasonic/Pisometric sensor to detect
              obstacles and find path
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education hover:-translate-y-2 transition-all duration-300"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
            date="2025 - Present"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors In Software Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University Degree
            </h4>
            <p>Pokhara University</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Timeline;
