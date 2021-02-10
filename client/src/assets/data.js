import Brijesh from "../assets/Brijesh.jpg";
import utkarsh from "../assets/utkarsh.jpg";
import aditya from "../assets/aditya.jpg";
import adityapratap from "../assets/adityapratap.jpg";
import shubham from "../assets/shubham.jpg";
import rahul from "../assets/rahul.jpg";
import kartikey from "../assets/kartikey.jpg";
import acethespace from "./acethespace.jpg";
import bim from "./bim.jpg";
import cadathon from "./cadathon.jpg";
import canoe from "./canoe.jpg";
import concrete from "./concrete.jpg";
import modular from "./modular.jpg";
import paper from "./paper.jpg";
import survey from "./survey.png";
import sustainable from "./sustainable.jpg";
import unbreakable from "./unbreakable.jpg";

const members = [
    {
        name: "Dr. A. N. Brijesh Nair",
        email: "brijeshnair.an@vit.ac.in",
        img: Brijesh,
        phone: "+91-9944642418",
        role: "Faculty Coordinator",
    },
    {
        name: "Aditya Bahadur Pal",
        email: "adityabahadur.pal2018@vitstudent.ac.in",
        img: aditya,
        phone: "+91-8429902174",
        role: "Chairperson",
    },
    {
        name: "Aditya Pratap Singh",
        email: "adityapratap.singh2018@vitstudent.ac.in",
        img: adityapratap,
        phone: "+91-8090888061",
        role: "Vice Chairperson",
    },
    {
        name: "Kartikey Senger",
        email: "kartikey.senger2018@vitstudent.ac.in",
        img: kartikey,
        phone: "+91-9870852195",
        role: "Director Events",
    },
    {
        name: "Rahul Gupta",
        email: "rahul.gupta2018@vitstudent.ac.in",
        img: rahul,
        phone: "+91-9587023106",
        role: "Director Logistics",
    },
    {
        name: "Utkarsh Jaiswal",
        email: "utkarsh.jaiswal2018@vitstudent.ac.in",
        img: utkarsh,
        phone: "+91-8840274121",
        role: "Director Finance",
    },
    {
        name: "Shubham Choudhary",
        email: "shubham.choudhary2018@vitstudent.ac.in",
        img: shubham,
        phone: "+91-6265104595",
        role: "Design Head",
    },
    
];
const events = {
    acethespace: {
        img: acethespace,
        name: "ACE THE SPACE",
        objective:
            "The task is to design a “Micro Home” with an area not more than 25 m^2 that can accommodate a couple.",
        participants: [
            "Individual participation or teams of up to 3 participants from the same or different college(s) are allowed.(In case of a team member arrangement, event coordinators will see through it.)",
        ],
        prerequisites:
            "A basic idea on the PERT method of project management in designing Compact/Micro Homes.",
        description: [
            "Participants are tasked to come up with a ‘Space Efficient', ‘Creative’ and ‘Modernized’ design of a “Micro Home” for an area of 25 m^2 that can accommodate a couple.",
            "The design must be planned and scheduled as per the PERT method and is to be submitted along with a detailed rate estimate.",
            "The scale of the design can be as per participants’ interest.",
            "The design will be evaluated based on uniqueness, efficiency and under the economic point of view.",
        ],
        rules: [
            "The design and other requested details are to be submitted within the provided time limit.",
            "Participants are requested not to use their electronic gadgets or any other reference materials once the event has commenced.",
            "Participants are requested to bring their designing equipment necessary. (Only sheets will be provided.)",
            "It is also requested that the discussion between teammates is to be kept at a conversational decibel to avoid disturbance to other participants",
        ],
    },
    bim: {
        img: bim,
        name: "BIM",
        objective:
            "The workshop aims to educate about the feasibility and working of BIM softwares.",
        prerequisites:
            "The participant should have a basic concept of Autodesk and it’s features.",
        description: [
            "BIM is an intelligent model-based process that provides insight to help us plan, design, construct and manage building and infrastructure.",
            "It goes further than traditional CAD drawings by providing intelligence to individual building components(e.g. windows, walls) as well as providing systems and building wide information and awareness in addition to simple spatial relationships .",
            "These models combine intelligent 2D and 3D objects, used to define a building design along with external factors such as location and local conditions.",
            "BIM reduces the chances of extra work or re-work.The model can be updated easily due to its digital nature.",
        ],
    },

    cadathon: {
        img: cadathon,
        name: "CAD-A-THON",
        objective:
            "The task aims to test the technical drawing of the participants as well as AutoCAD software skills in a limited time constraint.",
        participants: [
            "Only one team will be allowed from every participating college /university.",
            "A team may be composed of three members from the same participating college/university.",
        ],
        prerequisites:
            "The participant must have a basic knowledge of AutoCAD software and its tools along with technical specifications of drawings and buildings.",
        description: [
            "The participant will be given a topic on the spot and will have duration to draft the drawing.",
            "The participant must make a plan of adequate size and scale to attain aesthetic finesse along with technical accuracy.",
            "Efficient and creative use of AutoCAD software tools is recommended.",
        ],
        rules: [
            "The design must be submitted within the time limit.",
            "The construction code used must be mentioned and specifications should be consistent with the same.",
        ],
    },
    canoe: {
        img: canoe,
        name: "ASCE CONCRETE CANOE COMPETETION",
        objective:
            "Here is an event that lays out a golden opportunity to the civil engineering students to enhance their practical and leadership skills by working with concrete mixes and project management. This also creates an awareness among the students and faculties on the benefits and values of ASCE membership to foster lifelong participation in the society. Considering the current COVID 19 pandemic situation, the doors to the in person events is ceased or under question. The event conducted by the Concrete Canoe Competition  Committee or the C4, has opted for  a remote competition this time. ",
        prerequisites:
            "Teams shall provide their Technical Proposal and Enhanced Focus Area Report to be evaluated by a panel of judges and will follow up by meeting regionally (either in person or remotely) to provide a technical presentation, and if possible, some select onsite competition activities. ",
        description: [
            "ASCE will then invite qualifying teams to a Society-wide Final Competition held at the University of Wisconsin-Platteville in June 2021 (if feasible given the COVID-19 pandemic) to present their project and to be evaluated by another panel of judges.",
            "Please visit https://www.asce.org/uploadedFiles/Membership_and_Communities/Student_Chapters/Content_Pieces/2021-ASCE-Sustainable-Solutions-Competition-Rules.pdffor detailed information",
        ],
    },
    concrete: {
        img: concrete,
        name: "SELF HEALING CONCRETE",
        objective:
            "Infrastructure covers a very broad spectrum of materials. Self-healing concrete provides a solution to high level service and performance, high durability and minimum negative ecological impact. The main focus of this workshop is to explore the topic in-depth.",
        prerequisites:
            "The participant must have fundamental knowledge about concrete technology and the building materials used.",
        description: [
            "Tiny cracks on the surface of concrete structures makes the building vulnerable to water seepage thus leading to degradation of concrete and corrosion of steel reinforcement. This greatly reduces the lifespan of a structure.",
            "This concrete was created by a microbiologist who was inspired by the self-healing capacity of bones.",
            "Self-healing of cracks in concrete would contribute to a longer service life of concrete structures and would make the material not only durable but also sustainable.",
            "The self-healing agents can lie dormant within the concrete for up to 200 years.",
            "The use of Bio concrete in India is beneficial. The climate in India is diverse and varies from region to region. The temperature change deteriorates the concrete surface.",
        ],
    },
    modular: {
        img: modular,
        name: "MODULAR AND NANO HOUSING",
        objective:
            "The workshop aims to impart knowledge on numerous aspects of modular and nano housing.",
        prerequisites:
            "he participants should have some basic knowledge on varying construction materials and techniques along with a general idea about prefabricated structures.",
        description: [
            "Modular and nano houses are built on the idea of constructing the smallest possible sustainable and eco-friendly houses.",
            "This pre-engineered concept involves the use of sustainable architecture and renewable energy systems for the creation of flexible spaces.",
            "These houses can be used by a family of two or three in an area of 25 square metres, incorporating the concept of ‘suspending technology’.",
            "This helps in doubling the size of the living area so that it can be used as two bedrooms at night.",
            "The advantage of suspending technology is that it can be used both in new constructions and also be incorporated in existing structures.",
            "Thus, modular and nano housing provides an optimistic and environmental solution for the global housing issue of very small living spaces at extremely high prices.",
        ],
    },
    paper: {
        img: paper,
        name: "PAPER PRESENTATION",
        objective:
            "To dive deeper into the topic given to the participants and write and present a research paper on the same.",
        participants: [
            "Teams of two can participate in the competition from each college. More than one team can also participate from the same college.",
        ],
        prerequisites:
            "The papers to be written shall be based on basic civil engineering knowledge.",
        description: [
            "Green Technology: Green technology describes the use of science and modern technology to create products and services that are more environmentally friendly. It also refers to clean energy production, which uses alternative fuels that are less harmful when compared to fossil fuels. Some examples of green technology include infrastructure used to purify water, recycle waste and conserve nature’s resources. It’s main goal is to protect and conserve the environment as well as to repair the past damage done by various human activities wherever possible. Although the market for green technology is comparatively new in India and around the world, it is now turning increasingly lucrative due to the significant amount of interest of investors. This is mainly due to the rise in awareness of the impact of climate change and the slow depletion of natural resources.",
            "Sustainable Construction Material: In India tremendous environmental problems are arising in the construction industry due to rapid urbanization. Increase in demand of residential dwelling units which leads to consuming more energy, resources, raw materials which are responsible for the rise in the carbon footprint. All metros are already facing environmental impact issues such as change in weather pattern, destruction of ecology. The solution lies in the use of sustainable construction materials. Using locally available building materials which are energy efficient and durable. It provides an opportunity to living inhabitants to live with healthy, comfortable conditions throughout the building's full life cycle. The life cycle consists of material production, construction planning, design, construction, operation and maintenance processes. However, because of the complexity of sustainability and the fragmentation of the construction industry, the level of implementation of sustainable construction practices is still low.",
            "Smart Building: It has been widely acknowledged that India is in need of world-class infrastructure to provide the foundation for faster and sustained economic growth. Smart buildings allow owners and operators to understand the occupant’s needs. Smart solutions continue to improve the efficiency and effectiveness of the building. The goal is to enhance the well-being and productivity while simultaneously increasing building efficiency and reducing the cost. In addition to energy efficiency of the buildings, they also increase productivity by providing a comfortable environment for the users. A smart building can be seen as a long-term solution supported by a strong degree of communication and data sharing.",
            "Energy Efficient Building: Energy efficient building design involves constructing or upgrading buildings that are able to get the most work out of the energy that is supplied to them by taking steps to reduce energy loss such as decreasing the loss of heat through the building envelope. Energy efficient homes, whether they are renovated to be more efficient or built with energy efficiency in mind, pose a significant number of benefits. Energy efficient homes are less expensive to operate, more comfortable to live in, and more environmentally friendly.",
            "Inefficiencies that are not removed in the building process can pose issues for years. However, keeping energy efficient building design in mind when construction is underway is a more effective way to approach making a home more efficient, which is less expensive for a homeowner in the long run. Building codes exist around the world to ensure that buildings are energy efficient to a certain degree, however sometimes it is wise to go above and beyond these recommendations to have an even more energy efficient home. As well, since a house operates as a system, a home must be looked at as a whole in order to fully increase the energy efficiency. For example, expensive heating and cooling equipment do nothing to improve the energy performance of the house if insulation isn't keeping heat in during the winter and out in the summer.",
            "Affordable Housing System: They refer to the housing system that is affordable by that section of society whose income is below the median household income. Affordable housing should address the housing needs of the lower or middle income households. Affordable housing becomes a key issue especially in developing nations where a majority of the population isn't able to buy houses at the market price.",
            "Disposable income of the people remains the primary factor in determining affordability. As a result, it becomes the increased responsibility of the government to cater to the rising demand for affordable housing. The Government of India has taken various measures to meet the increased demand for affordable housing along with some developers and stressing on public-private partnerships (PPP) for development of these units.",
        ],
        rules: [
            "After the topic is given, the first step would be to send an abstract via email before the deadline. The abstract should have all the necessary details of the team such as names, university, year, department, contact number, etc. It should consist of 150-180 words.",
            "Meanwhile, they would be preparing a fully-fledged research paper on their topics. These research papers will also be received via email and will be judged on various criteria such as innovation, creativity, practicality, format etc. The detailed rubric will be given to the participants with their topics.",
        ],
    },
    survey: {
        img: survey,
        name: "ASCE UESI SURVEYING COMPETETION",
        objective:
            "The participation is limited to one team of upto six members per college/university, and must perform 2 virtual tasks, which are:",
        participants: [
            "Topographic mapping project",
            "Differential profile Levelling with engineering design.",
        ],
        description: [
            "The first task can be awarded a maximum of 150 marks, and the second task upto 50 marks, therefore, a total of 200 marks for the virtual tasks. Competition team submittals shall be received at the host school by 5:00 pm, Friday, February 26, 2021, to ensure every team receives an equal amount of time to prepare.",
            "Please visit https://www.asce.org/uploadedFiles/Membership_and_Communities/Student_Chapters/Content_Pieces/2021-ASCE-UESI-Surveying-Competition-Rules.pdf for detailed information",
        ],
    },
    sustainable: {
        img: sustainable,
        name: "ASCE SUSTAINABLE SOLUTIONS COMPETETION",
        objective:
            "The teams consisting of undergraduate students with only one entry per chapter would compete in the competition and in one of ASCEs student conference. ",
        prerequisites:
            "There are two levels to the competition: ASCE annual student conferences and a Society-wide Finals level. To advance to Society-wide competition, teams must meet ASCE eligibility standards. ",
        description: [
            "The competition is divided into three major components and scoring of each are: • Sustainability (40%)  • Design Proposal (35%)  • Interview (25%).",
            "ASCE Envision Checklist is used to guide them in the development of the site design Each checklist items corresponds to a point value that is used to calculate the design’s overall sustainability score. To document the Envision criteria incorporated, the teams will complete the form for each item in their self-reported evaluation. They will self-assign a point value for each item used in the Checklist.",
            "Judges will review each description to verify that the proposed design does fit the selected criterion and award points accordingly. Judges have authority over conduct of the competition, interpretation of the rules and access to the online submissions at least two weeks prior to the competition.",
            "Please visit https://www.asce.org/uploadedFiles/Membership_and_Communities/Student_Chapters/Content_Pieces/2021-ASCE-Sustainable-Solutions-Competition-Rules.pdf for detailed information",
        ],
    },
    unbreakable: {
        img: unbreakable,
        name: "UNBREAKABLE QUIZ",
        prerequisites:
            "The topics will primarily be focused on structural engineering but could also come from any aspects of civil engineering.",
        participants: [
            "The students should attend the quiz as pairs. The students in a team should be from the ame College/University. ",
            "Only 1 team shall be allowed to participate from each college",
        ],
        objective:
            "To distinguish the most talented out of the rest, we provide a platform to express your knowledge and skill set, to fight it out and come on the top. Prerequisites: The topics will primarily be focused on structural engineering but could also come from any aspects of civil engineering.",
        description: [
            "Round 1: The contestants will have to answer a given number of questions in a given time. The number of questions and the time allotted will be informed later. The primary aim of this round is to test your knowledge and bring out the best in you. Each correct answer will be given 1 mark and there will be no negative marking for wrong answers. Only half of the candidates will be passed to the next round.",
            "Round 2: The selected students can take part in the round 2, which will be the final round. To race up the competition and get your adrenaline pumping, we will be organizing a buzzer round where the questions shall be displayed on the screen and the first to answer will bag all the points. Additional inform",
        ],
    },
};
export { members, events };
