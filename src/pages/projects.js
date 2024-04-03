import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/harmonyhub.webp";
import proj2 from "../../public/images/projects/redrobin.webp";
import proj3 from "../../public/images/projects/roadbot.webp";
import proj4 from "../../public/images/projects/pepsico.webp";
import proj5 from "../../public/images/projects/handgesture.webp";
import proj6 from "../../public/images/projects/solar.webp";
import proj7 from "../../public/images/projects/iot.webp";
import proj8 from "../../public/images/projects/malaria.webp";
import proj9 from "../../public/images/projects/hook.webp";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);



const Project = ({ title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Harmony Hub"
                summary="For Harmony Hub, I designed a pioneering smart home system that integrates biofeedback from wearables to adapt digital work environments to users' stress levels, enhancing productivity and mental well-being. By implementing Agile and Scrum methodologies, I ensured efficient cross-functional collaboration and resource allocation. Utilizing Work Breakdown Structures and Gantt charts, I managed project lifecycles effectively, mitigating risks and guaranteeing the delivery of high-quality products on schedule, showcasing my expertise in project management and innovative product development."
                img={proj1}
                link="https://www.linkedin.com/in/aishwarya-chourasia-65b381151/"
                github="https://github.com/Aishwarya2510"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Red Robin Analysis"
                summary="The leadership in piloting a team focused on uncovering strategic marketing and branding opportunities involved the adept use of structured analytical frameworks such as 5C, PESTELE, and SWOT to pinpoint critical growth factors and improve efficiencies across logistics, operations, marketing, and the supply chain. By spearheading the evaluation and control processes, key performance indicators and real-time analytics were utilized to meticulously monitor the implementation and evaluation phases. This approach facilitated the optimization of the marketing mix, evaluation controls, and the effective execution of supply chain strategies, demonstrating a comprehensive and strategic approach to enhancing organizational performance and market positioning."
                img={proj2}
                link="https://www.linkedin.com/in/aishwarya-chourasia-65b381151/details/projects/1705383919180/single-media-viewer/?profileId=ACoAACSKRmcBIkaix796YDEueIWrZoU492xwndQ"
                github="https://github.com/Aishwarya2510/RedRobin_Analysis/blob/main/RedRobin_Analysis.pdf"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Road Survellience Bot"
                summary="The management of a team project aimed at innovating a dual-axis solar device resulted in a significant 21% increase in product efficiency, highlighting a commitment to technology-driven solutions within the sustainability sector. Furthermore, the development of a user-centric irrigation application led to an 18% boost in crop yield, marking a notable contribution to agricultural technology and environmental management. These initiatives underscore a strategic approach to leveraging technology for environmental sustainability, enhancing efficiency in renewable energy devices, and improving agricultural outcomes through innovative, user-focused applications."
                img={proj3}
                link="https://www.linkedin.com/in/aishwarya-chourasia-65b381151/"
                github="https://github.com/Aishwarya2510"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="PEPSICO Analysis"
                summary="The comprehensive analysis of PepsiCo encompassed its competitive stance, iconic brand portfolio, and strategic directives, focusing on innovation, diversification, sustainability, and consumer engagement. The evaluation covered supply chain optimizations, market entry tactics, and employee incentives, alongside a detailed comparison of domestic versus international operations. Financial metrics such as share price trends, revenue growth, profit margins, equity returns, asset turnover, and solvency ratios were meticulously assessed. A special emphasis was placed on PepsiCo's pep+ sustainability framework, detailing its efforts in Positive Agriculture, enhancing the Value Chain, and promoting healthier Choices. This analysis showcased an adept evaluation of a leading consumer packaged goods (CPG) company's strategic approaches, operational efficiency, brand management, and financial health, demonstrating a nuanced understanding of corporate strategy and sustainability practices."
                img={proj4}
                link="https://www.linkedin.com/in/aishwarya-chourasia-65b381151/"
                github="https://github.com/Aishwarya2510"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                
                title="Hand Gesture Glove"
                summary="Led the development of an innovative, cost-effective gesture glove prototype, utilizing Arduino Lilypad and Atmega328p Controller, specifically designed to transform communication for individuals with special needs. This project achieved a remarkable 40% reduction in costs compared to existing solutions. Additionally, the integration of a Bluetooth module enabled user-friendly audio-visual messaging capabilities. This pioneering effort was recognized with a 2nd place finish in the Technovation project competition, underscoring its significant impact and potential in leveraging technology to enhance inclusivity and accessibility in communication."
                img={proj5}
                link="https://www.linkedin.com/in/aishwarya-chourasia-65b381151/"
                github="https://github.com/Aishwarya2510"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Dual-Axis Solar Panel"
                summary="The development of a sustainable dual-axis solar device, integrated with a cloud-based application, significantly increased crop yield by 18%, showcasing a novel approach to agricultural efficiency. The project management involved leading a team through road-mapping the product's lifecycle, incorporating design thinking, business planning, and prototype testing, ensuring a seamless transition from concept to market-ready product. This initiative not only highlights innovative use of technology in enhancing agricultural productivity but also demonstrates a commitment to sustainability and efficient resource management."
                img={proj6}
                link="https://www.linkedin.com/in/aishwarya-chourasia-65b381151/"
                github="https://github.com/Aishwarya2510"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                
                title="Women's Safety using IoT"
                summary="The pioneering project involved the creation of an IoT-based safety band aimed at empowering women, enabling them to send SOS emergency messages along with their location to authorities. This innovative solution incorporated cutting-edge technologies such as NodeMCU ESP8266, Arduino GSM Shield V2, and Adafruit Ultimate GPS. Alongside this technological innovation, time management strategies were implemented within the operating model to significantly enhance overall efficiency and effectiveness, showcasing a commitment to leveraging technology for societal benefit while optimizing operational performance."
                img={proj7}
                link="https://www.linkedin.com/in/aishwarya-chourasia-65b381151/"
                github="https://github.com/Aishwarya2510"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                
                title="Malaria Detection"
                summary="Developed an advanced automated malaria detection system capable of analyzing a large-scale dataset comprising 27,000 blood smear images, achieving a remarkable accuracy rate of 95%. This project was efficiently implemented within the Streamlit framework, facilitating straightforward web app development and deployment. This initiative not only showcased the potential of leveraging AI and machine learning for healthcare diagnostics but also demonstrated the project's commitment to improving global health outcomes by providing a scalable and accessible tool for malaria detection."
                img={proj8}
                link="https://www.linkedin.com/in/aishwarya-chourasia-65b381151/"
                github="https://github.com/Aishwarya2510"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
