import { Section } from '../../layout';

export const TitleAndBody = ({ data }) => {
  return data.sectionContent.map((section) => (
    <Section title={ section.leftTitle }>
      { section.rightBody }
    </Section>
  ))
}
