import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Software Engineer"
              company="LTIMindtree"
              companyLink="https://www.ltimindtree.com/"
              time="2021-2023"
              work="In my capacity as a Quality Engineer at LTIMindtree, I spearheaded a team of five to drive a 15% improvement in product quality through the meticulous development and testing of over 314 test cases. My strategic implementation of Agile methodologies contributed to a 9% reduction in project release times, directly correlating with a 20% uplift in client satisfaction. My proactive approach in conducting root cause analysis and championing continuous improvement initiatives led to a notable 27% enhancement in product performance. Additionally, I played a pivotal role in refining project reporting processes, which significantly improved client engagement and expedited the onboarding process by 60%."
            />

            <Details
              position="Intern"
              company="Bhabha Atomic Research Centre"
              companyLink="http://www.barc.gov.in/"
              time="Summer 2021"
              work="During my tenure as a Product Development Intern at the Bhabha Atomic Research Centre, I was instrumental in architecting a responsive and intuitive Human Machine Interface (HMI) for reactor controls. This initiative not only prioritized feature optimization but also played a crucial role in reducing human errors by 70%. My contributions extended to executing a comprehensive risk analysis, integrating a sophisticated 5-level alert system, thereby enhancing product safety to 100% through a rigorously data-driven methodology."
            />

            <Details
              position="Intern"
              company="Board of Radiation & Isotope Technology"
              companyLink="https://britatom.gov.in/"
              time="2020-2021"
              work="As a Project Research Intern at the Nuclear Power Corporation of India Limited, I significantly contributed to increasing operational efficiency by 34% by facilitating the development and testing of prototypes for optimal RTD configurations. Leading a team of five, we undertook exhaustive testing for various product versions, which ultimately led to an 80% feature adoption rate in the trial phase. My role was critical in leveraging data analysis for in-depth market analysis and aligning product requirements to meet market needs effectively."
            />

            <Details
              position="Founder"
              company="InGrowth"
              time="Spring 2019"
              work="As the founder of INGrowth, a non-profit focused on personality development, I initiated and conducted classes aimed at nurturing the growth of children, guiding them to reach their fullest potential. This role allowed me to directly impact the personal development of young minds, fostering a supportive environment for learning and growth."
            />

            <Details
              position="Teaching Volunteer"
              company="U&I"
              companyLink="https://uandi.org.in/"
              time="2021"
              work="In my capacity at U&I, I played a crucial role in benefiting and guiding 15 underprivileged students by providing them access to essential e-learning equipment. My efforts were aimed at bridging the educational gap, ensuring these students had the resources needed to continue their education in a digital learning environment."
            />

            <Details
              position="Empowerment Volunteer"
              company="Stree Mukti Sanghatana"
              companyLink="https://streemuktisanghatana.org/"
              time="Fall 2022"
              work="At Stree Mukti Sangathana, I dedicated myself to educating women on waste segregation and empowering maltreated women by connecting them with NGOs. This initiative helped them secure contract-based jobs, enabling them to make a sustainable living and regain control over their lives."
            />  

              <Details
              position="Executive Comiittee"
              company=" Institute of Electrical and Electronics Engineers- VESIT"
              companyLink="https://vesit.ves.ac.in/student_corner/professional_activity/ieee"
              time="2018=2020"
              work="As a leader at IEEE-VESIT, I was instrumental in teaching students about marketing and customer success, significantly enhancing membership engagement by acquiring over 150+ memberships. Additionally, my efforts in securing sponsor deals worth 26,000 INR underscored my commitment to driving the organization's growth and providing value to its members."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
