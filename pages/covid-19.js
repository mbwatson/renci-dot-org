import { Typography } from '@mui/material'
import { Link, Page, Section } from '../components'

export default function Covid19() {
  return (
    <Page
      title="COVID-19"
    >
      <Typography>
        When the COVID-19 pandemic hit, made a concerted effort to ensure that
        our resources and expertise were fully utilized to accelerate
        scientific discovery around the mechanisms of COVID-19, its impacts,
        and potential solutions. Since 2020, we have secured multiple funding
        opportunities and refocused existing efforts, applying our diverse
        range of expertise to address the many facets of the pandemic. The list
        of projects and efforts below encompasses our COVID-19 work to date,
        and we are actively seeking out new funding opportunities to continue
        making advances toward ending the pandemic and being better prepared
        for future public health crises. 
      </Typography>

      <Section title="Current COVID-19 Projcts">
        <Typography variant="h4">
          NIH RADx Data Hub
        </Typography>
        <Typography paragraph>
          RENCI serves as the Program Management Team on the NIH RADx Data Hub
          project. This project is under the umbrella of the Rapid Acceleration
          of Diagnostics (RADx®) initiative, a nationwide effort to advance
          COVID-19 testing and accessibility. RENCI’s role involves coordinating
          and developing processes and policies around RADx data, specifically
          ensuring adherence to FAIR data standards. 
        </Typography>

        <Typography variant="h4">
          COVID-KOP
        </Typography>

        <Typography paragraph>
          COVID-KOP (COVID linked in Knowledge Oriented Pathways) is a
          biomedical reasoning system combining the existing knowledge in the
          ROBOKOP knowledge graph and COVID-19 data. RENCI researchers used the
          Semantic Scholar Open Research Dataset (CORD 19)—a set of research
          papers covering COVID-19 and earlier coronaviruses—to create
          literature co-occurrence databases for COVID-19. Literature
          co-occurrence databases help automate knowledge gathering by revealing
          meaningful insights based on patterns and strengths of links between
          keywords in research papers. For example, researchers can use COVID-KOP
          to identify drugs that might be repurposed as a COVID-19 treatment or
          to uncover biochemical pathways that might be targeted with newly
          developed drugs.
        </Typography>      
        <Typography paragraph>
          Data presented through COVID-KOP includes:
        </Typography>
        <ul>
          <li>Drugs in clinical trials against COVID-19 (from DrugBank)</li>
          <li>Literature Co-occurrences from CORD-19</li>
          <li>Viral Proteome annotations from GOA</li>
          <li>COVID-19 phenotypes</li>
        </ul>

        <Typography variant="h4">
          ICEES+ COVID-19 Open Infrastructure to Democratize and Accelerate Cross-institutional Clinical Data Sharing, Research, and Surveillance
        </Typography>
        <Typography paragraph>
          With funding from NCATS, RENCI was granted a CTSA Program administrative supplement through NC TraCS to address COVID-19 public health needs. This award funds the development of an 'ICEES+ COVID-19 OpenAPI' designed to openly expose binned, de-identified data on patients who have tested positive for COVID-19 at UNC Health and matched controls. Electronic health record data are captured on elements of direct relevance to coronavirus infection and recovery, including treatments, interventions, comorbidities, and disposition. The data are integrated with public environmental exposures data to support research on environmental determinants of morbidity, recovery, and long-term outcomes. The ICEES+ COVID-19 OpenAPI will be freely available for both public health surveillance and research.
        </Typography>

        <Typography variant="h4">
          BDC3: COVID-19 Data and Infrastructure Research
        </Typography>
        <Typography paragraph>
          A supplement to RENCI’s existing BioData Catalyst Coordinating Center
          (BDC3) award, this project serves to fund the BioData Catalyst
          efforts focused on ingesting and making COVID-19 data sets available
          for research throughout the ecosystem, as well as to provide NIH with
          a broad assessment of COVID-19 and RECOVER (Researching COVID to
          Enhance Recovery) data, infrastructure, and interoperability.
        </Typography>

        <Typography variant="h4">
          Dug for COVID-19
        </Typography>
        <Typography paragraph>
          Dug is a semantic query and visualization environment for exploring
          connections between ontological biomedical data from sources like
          ROBOKOP, clinical cohorts via COVID-19 ICEES+, and research data such
          as <Link to="https://topmed.nhlbi.nih.gov/">TOPMed</Link>. Dug
          ingests study and variable metadata from sources like dbGaP into a
          knowledge graph, integrates that knowledge graph into Translator
          infrastructure, and combines these sources via
          the <Link to="https://tranql.renci.org/">TranQL</Link> federated
          query interface.
        </Typography>

        <Typography variant="h4">
          National COVID Cohort Collaborative (N3C)
        </Typography>
        <Typography paragraph>
          The <Link to="https://covid.cd2h.org/N3C">National Covid Cohort
          Collaborative (N3C)</Link> is a collaboration between the NCATS CTSA
          programs, the National Center for Data to Health (CD2H), distributed
          clinical data networks (PCORnet, OHDSI, ACT, TriNetX), and other
          partners. The N3C aims to build a national COVID-19 data repository
          to advance the analysis of COVID-19 data and encourage data sharing
          on an unprecedented scale, ultimately leading to new discoveries for
          COVID-19 treatment and prevention. The Informatics and Data Science
          (IDSci) team at NC TraCS, UNC’s CTSA program, serves as the Chief
          Architect for developing the repository. Given our partnership with
          NC TraCS, RENCI has committed to providing resources and personnel to
          help with this effort.
        </Typography>

        <Typography variant="h4">
          Chemotext
        </Typography>
        <Typography paragraph>
          Chemotext has been used to conduct comparative bibliometric analysis
          of the research response to both previous epidemics and COVID-19 and
          create a list of compounds (including approved drugs) that were ever
          studied for effects on coronaviruses. 
        </Typography>
        <Typography paragraph>
          ROBOKOP and Chemotext have been used to identify drug combinations
          that may be effective against COVID-19. Twenty combinations have been
          prioritized and submitted to the NCATS COVID-19 phenotypic assay
          group for testing. 
        </Typography>
      </Section>

      <Section title="Past COVID-19 Projcts">
        <Typography variant="h4">
          A Case Study of Data Travels
        </Typography>
        <Typography paragraph>
          Funded by the NC Policy Collaboratory, RENCI led a qualitative
          research study in 2020 to better understand and document the
          evolution of North Carolina’s COVID-19 response, with a focus on
          COVID-19 data sources; data collection and reporting protocols and
          objectives; data uses and dissemination; data aggregation and
          centralization; COVID-19 testing; and North Carolina’s response in
          comparison with surrounding states. The research team conducted
          qualitative interviews with key informants to piece together how
          COVID-19 data flows throughout the state. The data collected was then
          analyzed, and key recommendations for policymakers were formed to
          improve current processes and lessen the impact of COVID-19 in North
          Carolina and beyond.
        </Typography>

        <Typography variant="h4">
          ReCCAP
        </Typography>
        <Typography paragraph>
          The RENCI Software Architecture Group participated in a team science
          effort including the Gillings School of Public Health, UNC ITS, the
          High Throughput Sequencing Facility, TraCS, The UNC Viral Genomics
          Core and other groups to develop the ReCCAP analytics environment.
          The effort leveraged RENCI's HeLx data science platform to support
          the campus effort to surveil selected UNC researchers for COVID-19 as
          they returned to campus in June 2020. ReCCAP provided technical
          interfaces to the High Throughput Sequencing Facility (HTFS), the
          TraCS RedCAP clinical data instance used to manage the study, and to
          UNC ITS services. HeLx leveraged the UNC ITS' Carolina CloudApps for
          the effort, which ultimately allowed timely data collection and
          analytics of COVID-19 screenings for researchers returning to campus.
        </Typography>

        <Typography variant="h4">
          Blackbalsam
        </Typography>
        <Typography paragraph>
          Blackbalsam is a data science environment providing a notebook
          computing interface to a collection of COVID-19 data in the context
          of analytics and visualization tools. Blackbalsam eliminates the need
          for each user to assemble all the required computational and data
          instruments from scratch by bringing together the best and newest
          technology for cluster computing, artificial intelligence, and
          visualization in a cloud-ready and open-source environment. The
          environment has since been integrated into HeLx. 
        </Typography>
      </Section>

    </Page>
  )
}
