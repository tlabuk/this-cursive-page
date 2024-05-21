import { FaLink } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import Title from "../common/Title";
import PropTypes from "prop-types";
import styles from "../../assets/sass/style.module.scss";

const Experience = () => {
  const experienceData = [
    {
      id: "prof_exp_1",
      startDate: "August 2021",
      endDate: "",
      position: "Tech writer II → Senior tech writer",
      company: {
        name: "Nobl9",
        info: "USA start-up building SLO management platform",
      },
      description:
        "At Nobl9, I collaborate with top-tier engineers and product managers to enhance our leading Service Level Objective (SLO) software platform. My role involves crafting comprehensive documentation, developing React-based web tools for easier access, and refining user experience through clear and engaging microcopy. Additionally, I support backend engineers in creating concise messaging for Nobl9 command-line tool.",
      links: [
        {
          label: "Technical documenatation for Nobl9",
          url: "https://docs.nobl9.com",
        },
        {
          label: "API documenatation for Nobl9",
          url: "https://docs.nobl9.com/api",
        },
      ],
    },
    {
      id: "prof_exp_2",
      startDate: "May 2020",
      endDate: "Dec 2022",
      position: "Freelance scientific writer (R&D)",
      company: {
        name: "Colibrí",
        info: "Consultancy company, based in Kraków, Poland",
      },
      description:
        "At Colibrí Innovation, I transformed intricate technological concepts such as Quantum Computing or complex cutting-edge innovations based on AI into compelling narratives, drawing on my scientific and communication skills. Working closely with clients in Deep Tech, Med Tech, and IoT/AI, I collaborated with their experts to articulate the value of their R&D efforts through persuasive storytelling.",
      links: [
        {
          label:
            "Unboxing the black Box: Intelligible AI to Fight Paperclip Maximisers",
          url: "https://www.davincilabs.eu/downloads/The_Codex_Q3_2021.pdf",
        },
        {
          label: "Pushing Intelligence to the Edge with Federated Learning",
          url: "https://www.davincilabs.eu/downloads/The_Codex_Q2_2021.pdf",
        },
        {
          label: "Unconventional Classical Computing with Mycelial Networks",
          url: "https://www.davincilabs.eu/downloads/The_Codex_Q1_2022.pdf",
        },
        {
          label: "The Codex: A Springboard for Innovation",
          url: "https://www.davincilabs.eu/downloads/The_Codex_Q2_2021.pdf",
        },
      ],
    },
    {
      id: "prof_exp_3",
      startDate: "Aug 2020",
      endDate: "Aug 2021",
      position: "Technical writer",
      company: {
        name: "Motorola Solutions",
        info: "Worldwide provider of ICT solutions",
      },
      description:
        "As part of the Documentation Services Team at Motorola Solutions, I collaborated with engineers to produce high-quality technical documentation. Through meticulous research and organization of engineering data, I crafted clear, concise, and reusable content tailored to diverse audiences, meeting stringent standards for clarity, style, and technical accuracy.",
      links: [],
    },
    {
      id: "prof_exp_4",
      startDate: "Nov 2019",
      endDate: "Apr 2020",
      position: "R&D consultant",
      company: {
        name: "Gaeu Consulting",
        info: "Consulting company for deep tech start-ups",
      },
      description:
        "In this role, I joined a multidisciplinary team of scientists, policy experts, and humanists, supporting EU innovators in early commercialization.Partnering with cutting - edge Swedish SMEs in Deep Tech, MedTech, Biotech, and AI, I facilitated their product promotion to investors and funding agencies.My primary focus centered on EU funding initiatives like Horizon 2020, Eurostars, and Vinnova.",
      links: [],
    },
    {
      id: "prof_exp_5",
      startDate: "Oct 2018",
      endDate: "Oct 2019",
      position: "Resource analyst",
      company: {
        name: "Hitachi Vantara",
        info: "Provider of IoT and data center solutions",
      },
      description:
        "As a resource analyst, I managed IT projects across EMEA, specializing in storage, content platforms, IoT, AI, and converged cloud.Responsibilities included resource forecasting, task coordination, and providing analytical support to regional leads and project managers.As the main contact for Southern EMEA, I handled all resourcing matters independently and ensured seamless service delivery in collaboration with the Regional Lead.",
      links: [],
    },
    {
      id: "prof_exp_6",
      startDate: "Oct 2014",
      endDate: "Oct 2019",
      position: "PhD researcher",
      company: {
        name: "University of Silesia",
        info: "International scientific reasearch project",
      },
      description:
        "As part of an international project funded by the National Centre for Science Poland, I researched 12th-century Byzantine literature and culture, focusing on the influence of ancient Greek comic tradition. Responsibilities included daily research, analysis of sources, publication in recognized journals, presenting findings at international conferences, and teaching. I defended my Ph.D. thesis with highest honors in November 2019.",
      links: [
        {
          label:
            "Andronikos I Komnenos in Choniates’ History. A Trickster Story",
          url: "https://www.academia.edu/40206569/Andronikos_I_Komnenos_in_Choniates_History_A_Trickster_Narrative_in_Storytelling_in_Byzantium_Narratological_approaches_to_Byzantine_texts_and_images_Ch_Messis_M_Mullett_I_Nilsson_eds_Uppsala_2018_263_286",
        },
        {
          label: "Aristophanes in the Service of Niketas Choniates",
          url: "https://www.academia.edu/34784439/Aristophanes_in_the_Service_of_Niketas_Choniates_Gluttony_Drunkenness_and_Politics_in_the_%CE%A7%CF%81%CE%BF%CE%BD%CE%B9%CE%BA%E1%BD%B4_%CE%B4%CE%B9%CE%AE%CE%B3%CE%B7%CF%83%CE%B9%CF%82_Jahrbuch_der_%C3%96stereisichen_Byzantinistik_66_2016_pp_127_152",
        },
        {
          label:
            "Insights into the Ancient Greek And Byzantine Anthropology of gastēr",
          url: "https://brill.com/display/book/9789004523005/BP000004.xml?language=en",
        },
        {
          label:
            "‘Nationalist’ Discourse and the Political Myth in the Memoranda of G.G. Plethon",
          url: "https://www.academia.edu/34784397/_Nationalist_Discourse_and_the_Political_Myth_in_the_Memoranda_of_Georgios_Gemistos_Plethon_pp_81_130_w_Miscellanea_Byzantina_I_ed_P_Marciniak_T_Labuk_Katowice_2016",
        },
        {
          label: "PhD Thesis",
          url: "https://opus.us.edu.pl/info/phd/USLe9b9fbcfe5a44450af007b14af391dcf/",
        },
      ],
    },
  ];
  return (
    <div className={`${styles.experienceSc} resumeBlock`}>
      <div className={styles.container}>
        <div
          className={`${styles.experienceContent} ${styles.dottedBorderLeft}`}
        >
          <Title titleText={"Professional Experience"} />
          <div className={`${styles.experienceList} grid`}>
            {experienceData.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const ExperienceItem = ({ item }) => {
  return (
    <div
      className={`${styles.experienceItem} ${styles.text__White}`}
      key={item.id}
    >
      <div
        className={`${styles.expTime} ${styles.flex} ${styles.items__Center}`}
      >
        <span className={styles.startTime}>{item.startDate}</span>
        <span>-</span>
        <div className={styles.endTime}>{item.endDate || "Present"}</div>
      </div>
      <div
        className={`${styles.expPosition} ${styles.flex} ${styles.items__Center} ${styles.flex__Wrap} ${styles.text__White}`}
      >
        <p className={styles.expPositionText}>{item.position}</p>
      </div>
      <div
        className={`${styles.expCompany} ${styles.flex} ${styles.items__Center} ${styles.flex__Wrap}`}
      >
        <div className={styles.companyLogo}>
          <MdWorkHistory size={20} />
        </div>
        <p className={styles.companyName}>{item.company.name}</p>
        <p className={`${styles.companyInfo} ${styles.text}`}>
          {item.company.info}
        </p>
      </div>
      <p className={`${styles.expDescription} ${styles.text}`}>
        {item.description}
      </p>
      <div className={styles.expLinks}>
        {item.links?.map((link) => (
          <a key={link.label} href={link.url} className={styles.text__Mauve}>
            <FaLink />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

ExperienceItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    position: PropTypes.string.isRequired,
    diamondColors: PropTypes.array,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
      })
    ),
  }),
};
