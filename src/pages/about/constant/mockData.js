import {
  Blogging,
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  Coursera,
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
  Gaming,
  Google,
  Reading,
  SkillCss,
  SkillFigma,
  SkillHtml5,
  SkillPhotoshop,
  SkillSketch,
  SkillTrello,
  SkillWireframe,
  SkillXd,
  Travelling,
  Udemy,
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "August 2021",
      endDate: "",
      position: "Tech writer II → Senior Tech Writer",
      diamondColors: ["Purple", "Yellow", "Blue"],
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
      position: "Freelance Scientific Writer (R&D)",
      diamondColors: ["Blue", "Orange", "Pink"],
      company: {
        name: "Colibrí",
        info: "Consultancy company, based in Kraków, Poland",
      },
      description:
        "At Colibrí Innovation, I transformed intricate technological concepts such as Quantum Computing or complex cutting-edge innovations based on AI into compelling narratives, drawing on my scientific and communication skills. Working closely with clients in Deep Tech, Med Tech, and IoT/AI, I collaborated with their experts to articulate the value of their R&D efforts through persuasive storytelling.",
      links: [
        {
          label: "Unboxing the black Box: Intelligible AI to Fight Paperclip Maximisers",
          url: "https://www.davincilabs.eu/downloads/The_Codex_Q3_2021.pdf"
        },
        {
          label: "Pushing Intelligence to the Edge with Federated Learning",
          url: "https://www.davincilabs.eu/downloads/The_Codex_Q2_2021.pdf"
        },
        {
          label: "Unconventional Classical Computing with Mycelial Networks",
          url: "https://www.davincilabs.eu/downloads/The_Codex_Q1_2022.pdf"
        },
        {
          label: "The Codex: A Springboard for Innovation",
          url: "https://www.davincilabs.eu/downloads/The_Codex_Q2_2021.pdf"
        },
      ],
    },
    {
      id: "prof_exp_3",
      startDate: "Aug 2020",
      endDate: "Aug 2021",
      position: "Technical Writer",
      diamondColors: ["Green", "Yellow", "Purple"],
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
      endDate: "Ap4 2020",
      position: "R&D consultant",
      diamondColors: ["Green", "Yellow", "Purple"],
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
      diamondColors: ["Green", "Yellow", "Purple"],
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
      position: "PhD Researcher",
      diamondColors: ["Green", "Yellow", "Purple"],
      company: {
        name: "University of Silesia",
        info: "International scientific reasearch project",
      },
      description:
        "As part of an international project funded by the National Centre for Science Poland, I researched 12th-century Byzantine literature and culture, focusing on the influence of ancient Greek comic tradition. Responsibilities included daily research, analysis of sources, publication in recognized journals, presenting findings at international conferences, and teaching. I defended my Ph.D. thesis with highest honors in November 2019.",
      links: [
        {
          label: "Andronikos I Komnenos in Choniates’ History. A Trickster Story",
          url: "https://www.academia.edu/40206569/Andronikos_I_Komnenos_in_Choniates_History_A_Trickster_Narrative_in_Storytelling_in_Byzantium_Narratological_approaches_to_Byzantine_texts_and_images_Ch_Messis_M_Mullett_I_Nilsson_eds_Uppsala_2018_263_286"
        },
        {
          label: "Aristophanes in the Service of Niketas Choniates",
          url: "https://www.academia.edu/34784439/Aristophanes_in_the_Service_of_Niketas_Choniates_Gluttony_Drunkenness_and_Politics_in_the_%CE%A7%CF%81%CE%BF%CE%BD%CE%B9%CE%BA%E1%BD%B4_%CE%B4%CE%B9%CE%AE%CE%B3%CE%B7%CF%83%CE%B9%CF%82_Jahrbuch_der_%C3%96stereisichen_Byzantinistik_66_2016_pp_127_152"
        },
        {
          label: "Insights into the Ancient Greek And Byzantine Anthropology of gastēr",
          url: "https://brill.com/display/book/9789004523005/BP000004.xml?language=en"
        },
        {
          label: "‘Nationalist’ Discourse and the Political Myth in the Memoranda of G.G. Plethon",
          url: "https://www.academia.edu/34784397/_Nationalist_Discourse_and_the_Political_Myth_in_the_Memoranda_of_Georgios_Gemistos_Plethon_pp_81_130_w_Miscellanea_Byzantina_I_ed_P_Marciniak_T_Labuk_Katowice_2016"
        },
        {
          label: "PhD Thesis",
          url: "https://opus.us.edu.pl/info/phd/USLe9b9fbcfe5a44450af007b14af391dcf/"
        }
      ],
    },
  ],
  educationalExperiences: [
    {
      id: "edu_1",
      course: "Interface Design: Web & Mobile",
      institution: "IT-Academy",
      degree: "Diploma",
      startDate: "2022",
      endDate: "2023",
    },
    {
      id: "edu_2",
      course: "Fundamentals of UX/UI",
      institution: "Skillshare",
      degree: "Beginner Course",
      startDate: "2021",
      endDate: "2022",
    },
    {
      id: "edu_3",
      course: "CG Artist",
      institution: "Polygon CG School",
      degree: "Graduate",
      startDate: "2018",
      endDate: "2021",
    },
    {
      id: "edu_4",
      course: "Graphic Design",
      institution: "Belarusian State Academy of Arts",
      degree: "Postgraduate Diploma",
      startDate: "2015",
      endDate: "2018",
    },
    {
      id: "edu_5",
      course: "SEO Specialist Workshop",
      institution: "ARTOX Media",
      degree: "",
      startDate: "2015",
      endDate: "2017",
    },
    {
      id: "edu_6",
      course: "Information Technology Software",
      institution:
        "Belarusian State University of Informatics and Radioelectronics",
      degree: "Bachelor Degree",
      startDate: "2011",
      endDate: "2015 ",
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: SkillFigma,
      name: "Figma",
      description: "UI Design, Protoyping",
    },
    {
      id: "skill_2",
      icon: SkillHtml5,
      name: "HTML5",
      description: "Hypertext Markup",
    },
    {
      id: "skill_3",
      icon: SkillCss,
      name: "CSS",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_4",
      icon: SkillPhotoshop,
      name: "Adobe Photoshop",
      description: "Picture Edit & Transformation",
    },
    {
      id: "skill_5",
      icon: SkillSketch,
      name: "Sketch",
      description: "UI Design & Prototyping",
    },
    {
      id: "skill_6",
      icon: SkillTrello,
      name: "Trello",
      description: "Project Management Knowledge",
    },
    {
      id: "skill_7",
      icon: SkillWireframe,
      name: "Wireframing",
      description: "Creating wireframes prior to design",
    },
    {
      id: "skill_8",
      icon: SkillXd,
      name: "Adobe XD",
      description: "Adobe Tool for UI Design",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      icon: Coursera,
      provider: "Coursera",
      course: "UI/UX Advance Course",
      startDate: "Dec 2021",
      endDate: "Feb 2022",
    },
    {
      id: "cert_award_2",
      icon: Google,
      provider: "Google",
      course: "Google UX Design Professional Certificate",
      startDate: "Mar 2021",
      endDate: "Jun 2021",
    },
    {
      id: "cert_award_3",
      icon: Udemy,
      provider: "Udemy",
      course: "Fundamental of UI/UX for Students",
      startDate: "Jun 2020",
      endDate: "Sept 2020",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Gaming,
      name: "Gaming",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "Reading",
    },
    {
      id: "hob_3",
      icon: Travelling,
      name: "Travelling",
    },
    {
      id: "hob_4",
      icon: Blogging,
      name: "Blogging",
    },
  ],
};

export default DATA;
