import { Section } from '../../layout';

export const TitleAndBody = ({ data }) => {
  return data.sectionContent.map((section) => (
    <Section title={ section.leftTitle } key={section.id + section.leftTitle}>
      { section.rightBody }
    </Section>
  ))
}