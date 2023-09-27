import { fetchStrapiGraphQL } from "./"

const sampleNews = [
  {
    "title": "ExoGENI: A critical step forward for edge cloud computing",
    "slug": "exogeni-a-critical-step-forward-for-edge-cloud-computing",
    "publishDate": "2021-12-09T14:00:00.000Z",
    "authors": ["jayasree"],
    "excerpt": "Mollit dolore ullamco et eiusmod dolore irure consectetur dolor dolore do. Ea nostrud ullamco ut culpa adipisicing dolore dolore dolore sed adipisicing occaecat ex ea.",
    "content": "![](https://renci.org/wp-content/uploads/2021/12/ExoGENI-Blog-Option-2-01-1024x512.png)\n\nAfter more than eight years in operation, the [ExoGENI](http://nrig.renci.org/project/exogeni-testbed/) testbed is in the process of being decommissioned. RENCI researchers played leading roles in building, maintaining, and expanding the testbed, which provided a full-scale cloud system that thousands of researchers have used to test and deploy cutting-edge applications.\n\nExoGENI is one of two components that made up the NSF-funded Global Environment for Network Innovations ([GENI](https://www.geni.net/)) virtual laboratory project. Growing out of the need for a system to allow reproducible research involving computer science systems, distributed systems, and protocols, GENI was established to provide an open infrastructure for at-scale networking and distributed systems research and education across the U.S.\n\nThe ExoGENI testbed helped to pioneer edge cloud computing. This type of distributed computing uses many small computing installations rather than large, centralized computing resources located in a few places. Edge cloud computing speeds up data processing because computation and data storage is performed closer to the sources of data. Today, this computing approach is used for applications ranging from 5G mobile phone networks to autonomous driving.\n\n### Creating solutions on the fly\n\nWhen ExoGENI started, the GENI Project office asked for a system that could be used as soon as possible because this type of technology can quickly become outdated. “Since ExoGENI was being deployed while it was still being built, the project office referred to the development process as trying to fly a plane while you're still building it,” said Ilya Baldin, principal investigator for ExoGENI and director of network research and infrastructure at RENCI. “That ended up being a very apt analogy.”\n\nWorking with researchers led by Jeff Chase from Duke University, Baldin’s team at RENCI developed the hardware and software needed to create the ExoGENI cloud system as well as the middleware that controls access to the testbed. This involved figuring out how to structure software development and how to deal with users for a completely new type of system. The system was based on software that Chase’s team developed for managing cloud installations.\n\n“We were creating something that didn’t exist before,” said Baldin. “ExoGENI was the first testbed to offer dynamic circuit capabilities, which allows users to specify network services in real time.” The system also offered the ability to stitch resources together. This allows users to connect cloud resources to network links, combine network links from multiple providers, and ensure that computing resources are provisioned in the proper order.\n\nYufeng Xin and Anirban Mandal, now assistant directors of network research and infrastructure at RENCI, were both part of the early team developing ExoGENI. Later in the project, Mert Cevik became the ExoGENI system administrator, and Komal Thareja contributed code that was necessary for maintaining and adding new features to the testbed.\n\nSenior Research Scientist Paul Ruth contributed work that allowed ExoGENI and a cloud-based testbed known as [Chameleon](http://nrig.renci.org/project/chameleon/) to work together, making it possible to run experiments using both testbeds. “His work led to some important cross-testbed experiments,” said Baldin. “This is an interesting area of activity because a single testbed doesn’t always meet all the needs for a given experiment.”\n\n### A much-needed tool\n\nAs an experimental instrument, ExoGENI has made countless important projects possible. “In the process of using ExoGENI to perform research, we would add new features as needs arose,” said Baldin. “It was quite rewarding to see these improvements having an impact on other researchers and their work, almost immediately.”\n\nOne of these projects was co-led by Mandal and Michael Zink from the University of Massachusetts. The team used ExoGENI’s edge cloud capability to process near-ground weather data from a radar network in the Dallas/Fort Worth area of Texas as part of the NSF’s Engineering Center for Collaborative Adaptive Sensing of the Atmosphere (CASA).\n\nWeather and the data associated with it can change very quickly during a severe storm or tornado. The radar network uses Chameleon’s ability to connect with ExoGENI to quickly ramp up computing resources when hazardous weather conditions arise. The ability to harness the computing power needed to rapidly analyze large amounts of data can help improve observation and prediction of hazardous weather events, while keeping computing resources open for other uses during routine operations.\n\nA research team headed by Aranya Chakrabortty at North Carolina State University collaborated with Xin to experiment with power grid monitoring using the ExoGENI testbed. With more heterogeneous power sources and more sensors available to monitor power data, there is a need for better ways to analyze that data in real time. The researchers linked real-time data from power grid sensors collecting as many as 120 data points per second to on-demand computing resources at ExoGENI nodes throughout the U.S. This let them test data-intensive approaches that might eventually be used to monitor output from a mixture of power sources and catch problems before they become critical.\n\n### The Internet of the future\n\nThe ExoGENI project also provided important opportunities for Baldin’s team to build connections with other institutions and research groups. “It was a huge stepping stone because people now know we aren't afraid of complex and logistically difficult projects,” he said. “ExoGENI gave us critical experience in running a multi-organizational project involving large distributed systems. At its peak, the computing power for the testbed was operated at more than 20 sites around the U.S.” \n\nBaldin and his team are drawing on their experiences with ExoGENI to create a next-generation distributed system known as [FABRIC](http://nrig.renci.org/project/fabric/). This NSF-funded testbed combines a cloud system with high-speed optical links to give scientists a place to study new Internet architectures at scale. FABRIC will let computer scientists study completely new approaches to storing and processing data on the fly so that they can figure out what might be applicable to the Internet of the future.\n\n“Although FABRIC is an independent project, it is in many ways an intellectual successor to ExoGENI,” said Baldin, who is the PI for the FABRIC project. “Like ExoGENI, FABRIC involves building a system while it is being used—but with ExoGENI we proved that our team can handle taking off in an airplane that’s still being built.”",
    "type": "feature",
    "tags": ["cloud computing", "ExoGENI"]
  },
  {
    "title": "NRIG Director Ilya Baldin inducted into the NC State Computer Science Alumni Hall of Fame",
    "slug": "nrig-director-ilya-baldin-inducted-into-the-nc-state-computer-science-alumni-hall-of-fame",
    "publishDate": "2021-12-13T14:00:00.000Z",
    "authors": ["jayasree"],
    "excerpt": "",
    "content": "![](https://lh4.googleusercontent.com/Z0SGRMMQQ09olQXKG_aRCl_DY97MHSW-nzKQ9yuyR07WX3kehIp1us0eXYhIUfH5UAGaV6_1ixCin68cJtZfIv7P_xlOTGpOdij0fPGN3Y7R4-jpLIFJG1zXqzWpqpMphqJcqNyO)\n\nOn October 10, 2021, Ilya Baldin was inducted into the [North Carolina State University Computer Science Alumni Hall of Fame](https://www.csc.ncsu.edu/alumni/hall-of-fame.php). This honor is granted to those alumni who have exhibited noteworthy contributions to their profession and the communities they serve. \n\nThroughout the course of his career, Baldin has led many projects in the computer science realm and has addressed major problems in data software development. From developing prototypes to creating technologies for testbeds, he has invested much of his time to make contributions to this field.\n\n“I am deeply honored to be one of 2021 NC State Computer Science Alumni Hall of Fame inductees,” said Ilya Baldin, director of the [Network Research Infrastructure Group at RENCI](http://nrig.renci.org/). “My professional work has been a huge part of my life and allowed me to explore numerous opportunities to develop technologies and create advancements in this field that will hopefully one day benefit future generations.”\n\nIlya Baldin, PhD, came to the United States in 1991 after two years at Moscow State University. He received his B.S. in Computer Science from the Illinois Institute of Technology before entering NC State for his graduate work. He then graduated from NC State in both 1995 and in 1998 with an MS and PhD in Computer Science respectively.\n\nAfter his PhD, Baldin began his career at MCNC as a Research Scientist, then Senior Scientist, developing novel hardware / software prototype systems and protocols for DARPA. In 2008, he joined RENCI as the Director for Network Research and Infrastructure Group. His team focuses on developing and running complex distributed infrastructure systems to address science problems such as data processing and storage. \n\nDuring his tenure at RENCI, Baldin has generated millions of dollars in federal funding from the National Science Foundation, Department of Energy, and DARPA. As Co-PI for the [ExoGENI testbed](https://renci.org/blog/exogeni-a-critical-step-forward-for-edge-cloud-computing/), he helped develop a world-wide edge cloud that allowed researchers to create on-demand complex experimental topologies to help study novel distributed applications and protocols. Through RENCI, he is the PI and Project Director for [FABRIC](https://fabric-testbed.net/) – a $20 million investment funded by the National Science Foundation in 2019 to build a unique scientific instrument to help computer science researchers reimagine the Internet. Baldin has authored over one hundred scientific publications, several book chapters, and one patent. Additionally, he is a Senior Member of IEEE.\n\nAs a [NC State CSC Alumni Hall of Fame](http://ncsucsc.touchpros.com/SearchBy.aspx) Inductee, Ilya Baldin will forever serve as an example for current and future students studying computer science of the breadth and impact of the research that can be conducted in the field.\n\nLearn more about Ilya Baldin’s research [here](http://nrig.renci.org/staff/ilya-baldin/).\n\n_By Allison Cales, Communications Intern at RENCI_",
    "type": "feature",
    "tags": ["NRIG", "ilya-baldin"]
  },
  {
    "title": "STAR Program: Investing in the Next Generation of Leaders",
    "slug": "renci-internship-program-investing-in-the-next-generation-of-leaders",
    "publishDate": "2021-12-16T14:00:00.000Z",
    "authors": ["jayasree"],
    "excerpt": "Lorem ipsum sunt in in et aliquip esse magna qui aliquip est voluptate ut commodo mollit cillum sunt. Dolor dolore nostrud et exercitation amet incididunt laboris laboris aute dolor eiusmod labore cupidatat in elit.",
    "content": "![](https://renci.org/wp-content/uploads/2022/09/STAR-Program-Blog-1024x512.png)\n\nAs part of RENCI’s mission to be a leader in data science, our team is dedicated to helping the next generation of thinkers bring their ideas to the table, build valuable skill sets, and pursue professional growth. While we’ve hosted students in several areas of our work in the past, we have recently launched the Student Advancement at RENCI (STAR) Program to provide organization-wide support and resources. We are excited to expand our reach and engage with curious and hard-working young professionals across RENCI’s research groups, collaborations, and operations teams. \n\n“Working as an intern at RENCI has been a meaningful experience to me,” said Yifei Wang, Atlantic Wave-SDX research assistant and intern. “Colleagues and supervisors were super patient and helpful while helping me to grow from a student to a professional. RENCI is the perfect place if you want to pursue your academic and career goals.” \n\nThe new program brings in students from universities across the country, as well as high school students from the Triangle area. Each student is paired with a supervisor and mentor to work with closely during their time at RENCI. This team collaborates in creating objectives for the \"STARship\" that will meet both RENCI project needs and the student’s learning goals. \n\n“My internship at RENCI has been an extremely valuable part of my studies of computer science,” said Mason Hicks, software engineering intern. “Working on projects under the team at Chameleon has allowed me to get hands-on experience applying concepts from my studies to real systems and scenarios.”\n\nIn addition to gaining skills and experience in a real work environment, interns will have opportunities to network with staff at RENCI events. Those in the program will be given time to build their own network and develop strong relationships by sharing progress updates and success stories with other students.\n\nOur work spans several subjects and fields, and we aim to give students the opportunity to explore the breadth we have to offer. Previous opportunities have involved:\n\n*   Dashboard development and support\n*   Grant writing and research\n*   Software development\n*   Web application construction\n*   Project management\n*   Cloud programming and testing\n*   Communications and social media\n*   Program development and management\n*   Strategic engagement\n\nAdditionally, to meet organizational needs and applicant interests, we encourage staff and students to design new opportunities in collaboration with the STAR Program Management Team. \n\n“I started my internship at RENCI at the beginning of the Fall 2021 semester and I have already had great opportunities to learn more about the grant development process,” said Linzy Semon, DEI & grant writing intern. “I enjoy interning at RENCI because of my working relationship with my supervisors; they are always there to offer any help and guidance to make sure I get the most out of my internship. I would recommend this program to other like-minded students or individuals looking to gain industry knowledge while also working in a supportive environment.”\n\nTo hear about more STARship experiences, please check out our [playlist](https://www.youtube.com/playlist?list=PLZA5_A9Qr8gh_X04yTWQsAeO6QD9qWBN7). \n\nIf you would like to learn more about the STAR program, please reach out to the STAR Program Management Team at [internships@renci.org](mailto:internships@renci.org). If you are a student interested in interning at RENCI, check out our [list of current openings](https://renci.org/mission-and-vision/employment/) or complete [this form](https://forms.monday.com/forms/19e5f087ffb7f047109f4741b11c366a?r=use1) to request a STARship. RENCI team members who would like to request an STARship can do so by completing [this form](https://forms.monday.com/forms/1d34e2e1f3f46f6ec024948578a249c7?r=use1).\n\n_By Claire Bradley, STAR Program Intern at RENCI_",
    "type": "blog",
    "tags": ["STAR", "students", "internship", "leadership"]
  },
  {
    "title": "RENCI researchers awarded 2021 Best Paper from the Elsevier FGCS Journal",
    "slug": "renci-researchers-awarded-2021-best-paper-from-the-elsevier-fgcs-journal",
    "publishDate": "2021-12-20T14:00:00.000Z",
    "authors": ["jayasree"],
    "excerpt": "Ex cillum commodo dolore proident ut cupidatat dolor sit exercitation ad nisi adipisicing in dolore laboris aliquip dolore adipisicing. Lorem ipsum cupidatat eu tempor esse pariatur ea non reprehenderit deserunt exercitation eiusmod occaecat incididunt dolore.",
    "content": "![](https://lh4.googleusercontent.com/Lu0dRV1L9cqFTrWqwcdGwEIkYAVsdgCQKmtEXC3Uk7zGS7U1USMIgOxPDuBTPxZk8lCWV_-wuspqToaklNqS6FEkXTs-aodrGkhcq6dNEm4HgtWySjQXWEYEYwYF67HIjPKLuaBD)\n\nRENCI researchers recently received the 2021 Best Paper Award from the Elsevier _Future Generation Computer Systems_ (FGCS) Journal. The paper, titled “End-to-end online performance data capture and analysis for scientific workflows,” was co-authored by Cong Wang, Anirban Mandal, and collaborators from the DOE [Panorama](https://panorama360.github.io/) and [RAMSES](https://ramsesproject.github.io/) projects.\n\nThe FGCS Journal aims to lead the way in advances in distributed systems, collaborative environments, high performance computing (HPC), and big data on such infrastructures as grids, clouds, and the Internet of Things. Each year, the editorial board awards “Best Paper” to one submission featured in the journal.\n\nThe editorial board chose this paper for the award with the following justification: \"The paper presents a rare, successful example of end-to-end workflows that builds on cutting-edge HPC and Cloud technologies. Its contributions are transferable across domains and applications. The open access data repository containing experimental traces can support transparency and reproducibility of the presented artifacts.\"\n\nWith the increased prevalence of employing workflows for scientific computing and a push towards exascale computing, it has become paramount that researchers are able to analyze characteristics of scientific applications to better understand their impact on the underlying infrastructure and vice-versa. Such analysis can help drive the design, development, and optimization of these next generation systems and solutions. In the paper, the authors presented the architecture, integrated with existing well-established and newly developed tools, to collect online performance statistics of workflow executions from various, heterogeneous sources and publish them in a distributed database.\n\nRENCI team members were responsible for contributing to the design of the overall end-to-end data collection architecture and for provisioning and managing the computing and network infrastructure used to evaluate the scientific workflows presented in the paper. The members also helped in collection and analysis of the network performance data for the workflows.   \nYou can read the full paper [here](https://www.sciencedirect.com/science/article/pii/S0167739X20330570).",
    "type": "feature",
    "tags": []
  },
  {
    "title": "Drone projects take data processing and communication to new heights",
    "slug": "drone-projects-take-data-processing-and-communication-to-new-heights",
    "publishDate": "2022-01-31T15:00:00.000Z",
    "authors": ["jayasree"],
    "excerpt": "Est minim in in esse id voluptate deserunt occaecat enim sunt sunt. Culpa cupidatat et mollit consectetur qui ad aute amet do nisi mollit adipisicing duis nulla.",
    "content": "![](https://renci.org/wp-content/uploads/2022/01/Drones-Projects-01-1024x512.png)\n\nCommunicating after a natural disaster is often critical but can be challenging if telecommunications lines are damaged or wireless networks become overwhelmed. Drones, however, can be used to quickly create an on-demand communication infrastructure that is not only useful for emergency situations but can also be used for transportation, surveillance and crop monitoring. \n\nRENCI researchers are contributing to cutting-edge research projects that aim to make drones even more useful by improving how their data is handled and by providing a testbed that helps researchers optimize drone-based communication. \n\n### On-the-fly data processing\n\nRENCI researchers are collaborating on the NSF-funded [FlyNet](http://nrig.renci.org/project/flynet-an-on-the-fly-deeply-programmable-end-to-end-network-centric-platform-for-edge-to-core-workflows/) project that will enable scientists to better use drones in complex applications such as video analytics. Latency is a critical problem when drones are used to perform real-time, data-intensive tasks such as analyzing video of a disaster area or processing information from weather sensors to determine flight paths. \n\nLed by the [University of Massachusetts Amherst](https://www.umass.edu/), FlyNet aims to overcome this challenge by developing an intuitive network platform that allows different aspects of data processing to be handled in different ways. \n\n“The project is examining how to use a distributed cloud network platform to support edge-to-cloud processing for drone applications,” said Anirban Mandal, leader of the RENCI FlyNet team. “This helps solve the latency problem by allowing some of the data processing to be performed closer to the drone or on platforms like AERPAW while other computations can be performed on cloud platforms such as FABRIC.” \n\nFlyNet plans to incorporate several systems that RENCI helped develop. For example, [FABRIC](https://fabric-testbed.net/)—a distributed system that combines a cloud system with high-speed optical links—will be used to move high volume data collected from the drones and cameras throughout the network. “We are also working to use application-centric programs to leverage new in-network processing capabilities offered by FABRIC so that they can be used for drone applications,” said Mandal.\n\nFlyNet researchers recently demonstrated a novel drone application that performs video analytics by offloading the analytics to the nearest edge server in-flight and leveraging the FlyNet architecture to access computing at the network edge and core cloud platforms. \n\n### High-flying communication\n\nWhen developing new drone technology such as the FlyNet network, it’s important that researchers have a place to try it out so that they can optimize the technology and figure out what challenges might arise in real-world scenarios. \n\nRENCI researchers are helping to develop a new NSF-funded testbed called [AERPAW](http://nrig.renci.org/project/aerpaw/), the first wireless research platform for studying how 5G technology can be implemented using autonomous drones. The five-year project is led by NC State University.\n\nThough still under active development and deployment, AERPAW began supporting experiments from external users in late 2021. Since the [announcement](https://news.ncsu.edu/2021/11/pawr-program-announces-launch-of-aerpaw-testbed-for-advanced-research-on-wireless-connectivity-and-unmanned-aerial-vehicles/) of its general availability on November 9, several groups have started to develop experiments using AERPAW. FlyNet researchers have been among the first external users to conduct drone flight experiments using the new testbed. \n\n“As we look at 5G and beyond, researchers need a way to test new ideas, protocols and early implementations,” said Yufeng Xin who leads the RENCI AERPAW team. “AERPAW allows researchers from different parts of the country to remotely access a shared testbed to study advanced wireless technologies supporting dynamic, mobile, and airborne networks.” \n\nXin’s team is drawing on its experience in developing other testbeds and expertise in software development to create a web portal and the backend control software that ensures AERPAW is shared safely by different users and managed efficiently by the testbed operational team. \n\n“Even though the testbed is open, there are still many remaining development tasks left,” said Xin. “For the software tasks that RENCI is contributing to, we will continue work to further automate the experiment workflow, enhance security and improve the user/operator’s experience with the web portal and control software.”\n\n_FlyNet is supported by a $749,998, two-year grant awarded by NSF_ ([#](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2018074)_[OAC-2018074](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2018074)). It is led by the University of Massachusetts Amherst and includes scientists from_ [_RENCI_](https://renci.org/)_, the Information Sciences Institute at the University of Southern California, and the_ [_University of Missouri_](https://missouri.edu/)_._\n\n_AERPAW is supported by a $24 million grant awarded by the PAWR Project Office on behalf of NSF ([#CNS-1939334](https://nsf.gov/awardsearch/showAward?AWD_ID=1939334)). The project is led by NC State University, in partnership with Wireless Research Center of North Carolina, Mississippi State University, and RENCI. Additional partners include Town of Cary, City of Raleigh, North Carolina Department of Transportation, Purdue University, University of South Carolina, and other academic, industry, and municipal partners._",
    "type": "blog",
    "tags": ["aerpaw", "flynet", "nrig"]
  },
  {
    "title": "Biomedical Data Translator Platform moves to the next phase",
    "slug": "biomedical-data-translator-platform-moves-to-the-next-phase",
    "publishDate": "2022-03-24T14:00:00.000Z",
    "authors": ["jayasree"],
    "excerpt": "Ut ut esse velit adipisicing exercitation amet aliquip exercitation ad aute. Cillum deserunt dolor quis magna esse dolore anim consectetur irure cillum amet.",
    "content": "![](https://renci.org/wp-content/uploads/2022/03/Translator-Blog-1-01-1024x512.png)\n\nAlthough we now have huge amounts of data on everything from genes to the causes of disease, it is stored in an enormous variety of ways and in many different locations. This makes it difficult, if not impossible, to find and use this data to think about biomedical questions in a big picture, holistic way.\n\nThe NIH’s National Center for Advancing Translational Sciences (NCATS) Biomedical Data Translator program is working to change this by funding a platform that allows scientists to easily access and interrelate data to inform new research directions. RENCI investigators are part of the leadership for three of the 15 teams that make up the Biomedical Data Translator consortium.\n\nThe Translator platform is designed to accelerate the development of new treatments and translational clinical research. For example, it could help uncover potential new therapies and drug targets, further elucidate how environmental exposures impact disease, and reveal new relationships between rare and common diseases.\n\n“Translator offers a way of looking at a large amount of information – the equivalent to reading all the research papers ever published – and returning a reasonable amount of information,” said RENCI’s Chris Bizon, co-PI of the Translator standards and reference implementation team. “It provides a hypothesis that can be investigated and a list of information that will be helpful to this investigation.\"\n\n### Moving to the next phase\n\nLaunched in 2016, the Translator consortium began with a feasibility phase during which multiple teams separately developed tools to explore what was possible and practical. Although this was an important task, the tools couldn’t communicate with each other. In the past two years, Translator has moved to an implementation phase to combine promising tools into a seamless platform.\n\n“The implementation phase has required almost starting from scratch and working to build a single system from these independently funded projects to actually answer questions,” said Bizon. With the current version of Translator, a user can enter a question, and the system will synthesize data from a variety of sources and present it to the user in a way that gives the best supported, most interesting answers first. For example, a researcher could ask the system to find all the genes involved in a certain disease and all the chemicals that have been shown to affect expression of those genes.\n\n### Getting answers\n\nAlthough the Translator concept seems straightforward, creating the system and making it fast and easy to use has been a massive technical challenge. One important aspect was making sure that data conforms to standards so that the information can be accessed by the system through common interfaces. Bizon co-leads the team focused on standards together with researchers from Lawrence Berkely National Laboratory and the University of Colorado.\n\nThere are also teams working to find existing knowledge and make it accessible to the rest of the consortium using common interfaces. For example, RENCI’s Stanley Ahalt and Ashok Krishnamurthy lead the team that is identifying knowledge on environmental exposures that can be accessed by the platform.\n\nOther teams are focused on developing the tools that figure out what data is needed in response to a specific question and then put it together in a way that is useful to the user. RENCI’s Alexander Tropsha leads the ranking agent team, which is working to fine-tune how the information provided in response to a query is ordered.\n\n“A lot of the work has been about defining standards, so that the components that each of the 15 teams are building can talk to each other,” said Bizon. “There’s also been a fair amount of effort this year into adding evidence and provenance to the system so that it’s clear to the user where certain information came from and how well supported it is.”\n\nEvidence and provenance allow users to trace information back to its original source, such as a publication, so that they can check that the information was interpreted correctly. In the coming months, the Translator consortium will continue to add and refine the platform’s features, develop a user interface, and add new types of data.\n\n_Read more about Translator:_  \n[Use cases show Translator’s potential to expedite clinical research](https://renci.org/blog/use-cases-show-translators-potential-to-expedite-clinical-research/)",
    "type": "blog",
    "tags": ["chris-bizon", "translator"]
  },
  {
    "title": "New data format aids large-scale evolutionary biology research",
    "slug": "new-data-format-aids-large-scale-evolutionary-biology-research",
    "publishDate": "2022-04-20T13:00:00.000Z",
    "authors": ["jayasree"],
    "excerpt": "Est veniam dolor fugiat enim qui officia eiusmod tempor quis pariatur non et aute. Aliqua duis adipisicing do quis amet voluptate ut magna dolore incididunt.",
    "content": "![](https://renci.org/wp-content/uploads/2022/04/Phyx-Data-01-1024x512.png)\n\nIn addition to revealing the hidden histories of life on Earth, studying the evolutionary relationships between organisms can help scientists track emerging diseases, inform methods to control invasive species, and understand how to best protect at-risk ecosystems.  \n\nDNA sequencing and other genetic analysis approaches are providing vast new data streams to enable this research at unprecedented scales. For example, the Open Tree of Life Project is attempting to create a synthesized view of the evolutionary relationships among every known organism – more than 1.7 million species.\n\nTo aid in these endeavors, [Gaurav Vaidya](https://renci.org/staff/gaurav-vaidya/), PhD, from RENCI collaborated with a multi-institutional team of researchers to create a new data format that makes the clade definitions used by evolutionary biologists readable and interpretable by computers. Clades, which capture an organism’s ancestor and all its descendants, make up a portion of a phylogeny, a set of evolutionary relationships between different organisms.\n\n### Dealing with data\n\n“Phylogenies can be huge, so navigating one on a computer screen or on a piece of paper is challenging,” said Vaidya. “We designed our new phyloreferencing data format to allow computers to do the hard work of determining exactly where a clade definition fits within a particular phylogeny. Finding precisely the right node out of hundreds of thousands on an extremely large phylogeny is a tedious, time-consuming manual process for evolutionary biologists, while a computer can do it quickly and consistently.”\n\nThe researchers [published a paper](https://peerj.com/articles/12618/) describing their new Phyloreference Exchange Format (Phyx) in the open access _PeerJ_ journal. This work, which began when Vaidya was a postdoctoral fellow at the University of Florida, was performed in collaboration with Professor Nico Cellinese, PhD, from the University of Florida and Hilmar Lapp from Duke University.\n\nPhyx is based on one of the most widely used open standards for data on the web and includes a direct translation to the Web Ontology Language, a standard language used to represent rich and complex knowledge about groups of things and the relationships between them.\n\n“Because we used an ontology language that's widely used, once we convert a definition into logical expressions, any off-the-shelf reasoner can be used to resolve a clade definition to a phylogeny,” said Vaidya. “We designed the format to capture in meticulous detail exactly how that clade was defined, as well as rich metadata so that there is a record of who developed a definition and where it was published.”\n\n### Capturing changing relationships\n\nAs projects like the Open Tree of Life Project reveal more about how organisms are related and advance scientific knowledge, species and clades may move around within a phylogeny. The new data format will be especially helpful for dealing with these changes.\n\n“Every time a phylogeny changes, scientists must look at the new phylogeny and figure out where their favorite groups of species are and how they are related to each other,” said Vaidya. “With our new process, computers can do this completely automatically and reproducibly.”\n\nThe _PeerJ_ paper contains all the information scientists need to use the new data format or to build upon it to create something even better. This includes a tutorial on how to apply the format to a phylogeny and a JavaScript library that details exactly how the new data format works.\n\nVaidya and his collaborators are now working to develop an accessible graphical interface that will allow biologists to use scientific names to create a Phyx clade definition.",
    "type": "feature",
    "tags": []
  },
  {
    "title": "New streamlined statistical method provides improved pattern detection and risk prediction for disease",
    "slug": "new-streamlined-statistical-method-provides-improved-pattern-detection-and-risk-prediction-for-disease",
    "publishDate": "2022-04-26T13:00:00.000Z",
    "authors": ["jayasree"],
    "excerpt": "Aliqua exercitation minim dolor aliquip dolore ad elit est duis in labore cillum magna eu ut id. Lorem ipsum eiusmod laboris do minim non eu ea officia pariatur.",
    "content": "_The novel regression algorithm, CALF, outperforms the current gold standard, LASSO, in statistical tests_\n\n![](https://renci.org/wp-content/uploads/2022/04/CALF-Blog-01-1-1024x512.png)\n\nResearchers from the Renaissance Computing Institute (RENCI) at UNC-Chapel Hill, Perspectrix, the UNC School of Medicine, and the WVU Rockefeller Neuroscience Institute have collaborated to develop a new method for finding patterns in data which verifiably surpasses the performance of a generally accepted \"gold standard.” \n\nAttempting to find patterns in data is central to all research, and it is particularly important in medical use of biological samples to predict a patient’s risk for disease formation and progression. Today, researchers can utilize advanced technology to produce an ocean of data about one person from various biological samples such as blood, DNA, and saliva, with the goal of identifying particular markers that can be informative about a person’s current health and future outlook. However, this advanced data collection and processing has outpaced current statistical methods for identifying simple but robust patterns and relationships, and this is particularly true for the field of psychiatry. For instance, researchers have yet to fully understand and predict the progression of schizophrenia. \n\nThis new method, CALF, which stands for “coarse approximation linear function,” is described in the [Scientific Reports paper](https://www.nature.com/articles/s41598-022-09415-2), \"A greedy regression algorithm with coarse weights offers novel advantages,\" published on March 31, 2022. Application of CALF to five quite different examples from psychiatric and neurological studies consistently outperformed the gold standard, LASSO, or “least absolute shrinkage and selection operator” regression, and other methods. \n\n\"Frisky CALF outruns LASSO in the five examples our researchers have outlined in the paper,” said RENCI scientist and lead author Clark Jeffries, PhD. “The metric values using CALF are superior to those of LASSO when the researcher insists on a small number of collectively informative predictors—five chosen from hundreds, for example. Interrogating the biochemistry of the five can then suggest causality.\"\n\nThe key distinction of CALF is its simplicity. It may select fewer predictors than those required by the LASSO method, while consistently outperforming LASSO in statistical tests. CALF progresses in a ‘greedy’ fashion, meaning it searches through the data and accepts the immediate next best predictor until the algorithm has optimized model performance. According to Jeffries, the research team originally aimed to develop a baseline for simple regression modeling and, in doing so, discovered that this streamlined model is able to extract statistically significant results from data where LASSO can fail to do so. \n\n![A picture containing antenna\nDescription automatically generated](https://renci.org/wp-content/uploads/2022/04/Picture1.png)\n\n_Figure 1. The geometry underlying a new data analysis method. Shown are three of 26 weight vectors, which are all combinations of +1, -1, 0. In higher dimensions, the choices become astronomical. The directions, not magnitudes, of weight vectors determine regression performance values known to statisticians as Student p-value, AUC, and Pearson correlation._\n\n\"It’s likely that there are existing data sets out there that failed to show more than a trend with routine analyses and could show classification significance with CALF,” said Diana Perkins, MD, MPH, a psychiatrist at UNC-Chapel Hill. “This could be groundbreaking for the field of psychiatry in improving prediction of patients’ risk for psychosis and other mental illnesses, allowing earlier intervention and overall improved outcomes.\" \n\n\"While testing examples with all possible parameters in all possible conventional models is impossible, our best practices showed that CALF can find statistically significant patterns in data that otherwise fail interpretation,” added RENCI scientist Jeffrey Tilson, PhD. “We encourage fellow researchers to test out CALF on their own datasets to verify its surprising capabilities.\" \n\nCALF has significant implications for the medical field, allowing researchers and medical professionals to attain better pattern recognition and risk projection for patients, ultimately leading to earlier detection of a patient’s risk for a disease and, thus, earlier intervention for improved quality of life. \n\nDarius Bost, a PhD student at UNC-Chapel Hill and Graduate Research Assistant at RENCI, notes that, \"Using data from the National Institute on Aging and Center, CALF was able to determine a small set of DNA markers that are highly correlated with the age of onset of Alzheimer’s, indicating great potential for CALF as a simple and reliable research tool.\"\n\nVersions of CALF in R and Python and the data matrices were developed by John R. Ford at Perspectrix. These resources are open source and available at the below links: \n\n*   R version: [https://cran.r-project.org/web/packages/CALF/index.html](https://cran.r-project.org/web/packages/CALF/index.html)\n*   PyPi Python version: [https://pypi.org/project/calfpy/](https://pypi.org/project/calfpy/)  \n*   Python 3.x version: [https://github.com/jorufo/CALF\\_Python](https://github.com/jorufo/CALF_Python)\n\nSample data that may be used for duplication of all the stated results is available via GitHub as an unrestricted supporting resource at [https://github.com/jorufo/CALF\\_SupportingResources](https://github.com/jorufo/CALF_SupportingResources).",
    "type": "feature",
    "tags": []
  },
  {
    "title": "Use cases show Translator’s potential to expedite clinical research",
    "slug": "use-cases-show-translators-potential-to-expedite-clinical-research",
    "publishDate": "2022-05-04T13:00:00.000Z",
    "authors": ["jayasree"],
    "excerpt": "Lorem ipsum eiusmod ut do veniam veniam exercitation fugiat eu ut aute nulla. Lorem ipsum sit excepteur et ad ut ullamco irure eiusmod tempor in.",
    "content": "![](https://renci.org/wp-content/uploads/2022/04/Translator-Blog-2-01-1024x512.png)\n\nRENCI investigators are contributing to the development of a platform called Biomedical Data Translator that will allow researchers to easily access and interrelate large amounts of data relevant to advancing biomedical research. Funded by the NIH’s National Center for Advancing Translational Sciences (NCATS), the new system is poised to accelerate translational clinical research by allowing users to approach biomedical questions from a holistic perspective to inspire important new research directions.\n\nThe platform is being developed by a 15-team multi-institutional Biomedical Data Translator consortium. Three of these teams include leadership from RENCI investigators. Although still a work in progress, Translator is being designed as an easy-to-use tool that can quickly respond to queries by identifying and synthesizing relevant data from a wide variety of sources.\n\n### Finding potential therapies for drug-induced liver injury\n\nIn December 2021, consortium members presented use cases to NCATS to demonstrate the platform’s progress and potential. In one, Paul Watkins, MD, from the UNC School of Medicine worked with RENCI collaborator Karamarie Fecho to use Translator to identify drugs that might be repurposed for treating drug-induced liver injury (DILI). There is a critical need for new therapies to heal liver damage caused by medicines. Although the injury sometimes heals when a patient stops taking the medication, it can take months or years to resolve and can leave patients unable to take medicines they need to treat medical conditions.\n\n“There are lab-based ways to identify drugs for repurposing, or a researcher can spend years going through the literature and attempt to synthesize it,” explained Fecho. “Translator offers an alternative method that's fast and doesn’t require the user to be an expert.” \n\nUsing gene information to identify drug candidates that might hold promise for treating drug-induced liver injury, Translator quickly identified two antioxidant drugs for consideration. This query relied on clinical data that is part of UNC Health’s Integrated Clinical and Environmental Exposures Service (ICEES), which provides open, regulatory-compliant access to clinical data that is integrated with environmental exposures data. Fecho and colleagues from RENCI and the North Carolina Translational and Clinical Sciences Institute previously developed tools that allow Translator to access this important source of clinical data.\n\nIn addition to identifying potential drug candidates, Translator also provided experimental evidence that these drugs had been studied for preventing drug-induced liver injury in rat models and were used in clinical trials to treat other diseases. “Having this information showed that the candidate drugs were safe and effective enough to be used in a clinical trial,” said Fecho. “This can help reduce the risk involved in moving forward with clinical trials, which are time-consuming and expensive.”\n\nThe Translator findings are now being compiled into a formal report to present to the NIH-funded U.S. DILI Network leadership to inform planning for future clinical trials.\n\n### Revealing new directions for rare diseases\n\nIn another use case, researchers from the Hugh Kaul Precision Medicine Institute at the University of Alabama, Birmingham, are using Translator to find potential new treatments for rare diseases. Rare diseases are usually caused by gene mutations that aren’t passed on.\n\n“For applications involving rare diseases, a new drug development candidate is not that helpful because it would require too much investment to develop and test a new drug for just a few people,” said RENCI’s Chris Bizon, co-PI of the Translator standards and reference implementation team. “Translator can help by looking for drugs that are already approved for some other purpose and have the potential to be repurposed for off-label use or tested in a clinical trial.”\n\nThe researchers were interested in a gene known as RHOBTB2. Children born with overactive variants of this gene sometimes never learn to walk and have severe intellectual disabilities. Researchers used Translator to ask for a list of all the chemicals that down-regulate RHOBTB2. When this didn’t return many leads, they performed another query to look for chemicals that up-regulate a gene that down-regulates RHOBTB2. This process helped reveal intermediate genes that could be targeted to down-regulate RHOBTB2.\n\n“As a clinician, I don't even know about all the databases that hold critical pieces of the puzzle I'm trying to put together,” said Anne Thessen, a visiting associate professor the University of Colorado School of Medicine. “With Translator I can prepare a query, run the query, and have results to review in an hour.”\n\n_Read more about Translator:_  \n[Biomedical Translator Platform moves to the next phase](https://renci.org/blog/biomedical-data-translator-platform-moves-to-the-next-phase/)",
    "type": "blog",
    "tags": []
  },
  {
    "title": "New concept poised to accelerate drug discovery through data mining",
    "slug": "new-concept-poised-to-accelerate-drug-discovery-through-data-mining",
    "publishDate": "2022-06-24T13:15:00.000Z",
    "authors": ["jayasree"],
    "excerpt": "Lorem ipsum adipisicing officia amet nisi nulla aute enim labore aute occaecat nostrud amet. Adipisicing minim eiusmod sunt nulla reprehenderit ut et occaecat dolore pariatur.",
    "content": "![](https://renci.org/wp-content/uploads/2022/06/COPS-blog-01-1024x512.png)\n\nRENCI scientists together with collaborators from UNC and other institutions have developed and defined a concept called Clinical Outcome Pathways (COPs) that could help scientists harness the vast amounts of clinical and biomedical data available today to accelerate drug discovery and drug repurposing.\n\n“Improving drug discovery requires understanding all the biological processes involved in how drugs work,” said the paper’s first author Daniel Korn from the UNC-Chapel Hill Department of Computer Science. “COPs help broaden the concept of a drug’s mechanism of action so that knowledge graph mining can be used to discover the complete chain of events that enables a specific therapeutic effect for a drug.”\n\nKnowledge graphs express data as a collection of nodes—such as drugs and diseases—with edges that represent the relationships—such as drug A treats disease B—between the nodes. By bringing together heterogeneous information into a single system, knowledge graphs can reveal relationships between previously unconnected information that wouldn’t be obvious otherwise.\n\n“The real power of the COPs concept is that once we understand all the biological pathways connecting drugs and diseases, that information can be used to develop new therapeutic agents—or repurpose existing ones—that modulate the same biological pathway,” explained the paper’s senior author Alexander Tropsha from the UNC Eshelman School of Pharmacy.\n\nAs described in a _Drug Discovery Today_ [paper](https://www.sciencedirect.com/science/article/abs/pii/S1359644622000654?via%3Dihub), the researchers define COPs as a chain of key events—molecular initiating event, intermediate event(s), and the clinical outcome—that are responsible for the therapeutic actions of a drug. Each element of the chain corresponds to a term defined in commonly used biomedical ontologies, which allows computational methods to be used to elucidate COPs and provides a way for them to be cataloged for future use.\n\n### Better drug discovery\n\nMany of today’s new drugs are designed to act on the same point in a biological pathway as existing drugs. “This creates a bunch of ‘me-too’ drugs that don't actually increase our overall ability to cure disease,” said RENCI’s Chris Bizon, a co-author of the paper. “COPs and knowledge graphs could allow scientists to understand the full set of events involved in a drug’s action. Then they can look further upstream in the pathway to find druggable targets that produce the same therapeutic effect.”\n\nElucidation of COPs is one of the most pragmatic applications of the biomedical question-answering system [ROBOKOP](https://pubs.acs.org/doi/abs/10.1021/acs.jcim.9b00683) (Reasoning Over Biomedical Objects linked in Knowledge Oriented Pathways), which uses a knowledge graph structure to explore links between various biomedical data types. ROBOKOP was developed by Bizon and colleagues as part of the [NIH NCATS Data Translator project](https://ncats.nih.gov/translator/about).\n\n“ROBOKOP is designed to find biological pathways for a particular drug and disease or to start with the disease and find a pathway that ends at a new drug,” said Bizon. “There are growing examples of tools based on mining of knowledge graphs in the biomedical space, many in the private sector, but ROBOKOP is one of a few fully transparent and publicly available tools that enables biomedical knowledge mining for uncovering important pathways such as those encoded by COPs.”\n\n### Integrating clinical information\n\nClinical observations are an important source of data necessary for elucidating COPs. ROBOKOP can be used with the  [Integrated Clinical and Environmental Exposures Service (ICEES)](https://pubmed.ncbi.nlm.nih.gov/31077269/), which provides open, regulatory-compliant access to clinical data—including electronic health record data—that is integrated with environmental exposures data.\n\n“Because a lot of medical treatments are found by serendipity or through trial and error, their mechanism of action may not be known,” said RENCI collaborator Kara Fecho, who led a team that developed tools that make it possible for ROBOKOP to access this clinical data. “ICEES provides a source of clinical observations that capture when a certain drug improved a given symptom or disease, for example. ROBOKOP can then be used to fill in the missing pieces.”\n\nThe paper describes case studies in which researchers used ROBOKOP to figure out specific COPs. In one case, researchers investigated the biological mechanisms that might explain why doctors have observed that patients taking the heartburn medicine Pepcid seemed to have much milder cases of COVID-19 compared to patients not taking the medication. In another example, researchers used ROBOKOP to find COPs that explain clinical observations suggesting that the diabetes drug metformin might be able to treat certain cancers.\n\nOnce researchers make connections like these, they can design experiments to find out whether certain medications might be useful for other indications. In addition, with access to enough clinical and genetic data, it might be possible one day to use this approach to select the best therapy for an individual patient with a particular genetic makeup using clinical and genetic data specific to that patient. The researchers are also looking at how concepts similar to COPs might be employed in areas beyond drug discovery such as identifying the causes of rare diseases or explaining adverse drug outcomes.",
    "type": "blog",
    "tags": []
  }
]

export const fetchNews = async (newsType) => {
  let allArticles = [...sampleNews]

  if (['blog', 'feature'].includes(newsType)) {
    return allArticles.filter(article => article.type === newsType)
  }

  return allArticles
}

export const fetchNewsArticle = async (slug, newsType) => {
  let allArticles = [...sampleNews]

  if (['blog', 'feature'].includes(newsType)) {
    return allArticles.filter(article => article.type === newsType)
  }

  const article = allArticles.filter((article) => article.slug == slug)

  return article[0]
}

export const fetchNewsArticleGQL = async (id) => {
  const { data } = await fetchStrapiGraphQL(`
  fragment PersonAttributes on PersonRelationResponseCollection {
    data {
      attributes {
        firstName
        lastName
        slug
      }
    }
  }
  
  query {
    posts(filters: { slug: { eq: "${id}" }}) {
      data {
        attributes {
          title
          subtitle
          slug
          publishDate
          newsOrBlog
          renciAuthors {
            ...PersonAttributes
          }
          externalAuthors
          metadata {
            metaTitle
            metaDescription
            shareImage {
              data {
                attributes {
                  url
                }
              }
            }
          }
          people {
            ...PersonAttributes
          }
          researchGroups {
            data {
              attributes {
                name
                slug
              }
            }
          }
          collaborations {
            data {
              attributes {
                name
                slug
              }
            }
          }
          projects {
            data {
              attributes {
                name
                slug
              }
            }
          }
          organizations {
            data {
              attributes {
                name
                slug
              }
            }
          }
          content {
            __typename
            ...on ComponentPostSectionsImage {
              caption
              altText
              image {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
            ...on  ComponentPostSectionsRichText{
              content
            }
          }
        }
      }
    }
  }
  `)

  const getPayload = (data) => {
      const article = data.posts.data[0].attributes

      const tagify = (article) => {
        const tags = new Set()
        article.researchGroups.data.map((item) => tags.add(item.attributes.slug))
        article.collaborations.data.map((item) => tags.add(item.attributes.slug))
        article.projects.data.map((item) => tags.add(item.attributes.slug))
        article.organizations.data.map((item) => tags.add(item.attributes.slug))
        article.people.data.map((item) => tags.add(item.attributes.slug))
        return Array.from(tags).sort()
      }

      return {
        title: article.title,
        subtitle: article?.subtitle,
        slug: article.slug,
        articleType: article.newsOrBlog == "news" ? "feature" : "blog",
        publishDate: article.publishDate,
        renciAuthors: article.renciAuthors.data[0]?.attributes ?  article.renciAuthors.data.map((author) => ({
          fullName: `${author.attributes.firstName} ${author.attributes.lastName}`,
          slug: author.attributes.slug,
        })) : null,
        externalAuthors: article.externalAuthors,
        researchGroup: article.researchGroups.data[0]?.attributes ? article.researchGroups.data.map((group) => ({
          name: group.attributes.name,
          slug: group.attributes.slug,
        })) : null,
        collaborations: article.collaborations.data[0] ? article.collaborations.data.map((project) => ({
          name: project.attributes.name,
          slug: project.attributes.slug,
        })): null,
        projects: article.projects.data[0] ? article.projects.data.map((project) => ({
          name: project.attributes.name,
          slug: project.attributes.slug,
        })) : null,
        organizations: article.organizations.data[0] ? article.organizations.data.map((organization) => ({
          name: organization.attributes.name,
          slug: organization.attributes.slug,
        })): null,
        people: article.people.data[0] ? article.people.data.map((person) => ({
          fullName: `${person.attributes.firstName} ${person.attributes.lastName}`,
          slug: person.attributes.slug,
        })): null,
        content: article.content.map((item) => {
          const image = item.__typename == "ComponentPostSectionsImage"
          return image ? {
            type: "image",
            caption: item.caption,
            altText: item.altText,
            image: {
              url: item.image.data.attributes.url,
              width: item.image.data.attributes.width,
              height: item.image.data.attributes.height,
            }
          } : {
            type: "richText",
            content: item.content
          } 
        }),
        tags: tagify(article)
      }
  }
  // console.log(data.posts.data[0].attributes)

  return getPayload(data)
}
