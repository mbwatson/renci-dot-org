import {
  Link, Page, Section
} from '../../components'
import { Typography } from '@mui/material'

export default function Branding() {

  return (
    <Page
      title="Branding"
    >
      <Typography paragraph>
        Laborum consequat voluptate culpa non non consectetur ut minim consectetur minim duis enim laboris elit consectetur ut.
        Consectetur aute tempor culpa fugiat qui anim ut aliqua tempor laboris dolor nulla.
        Exercitation laboris consectetur irure aliquip deserunt sint dolore mollit labore adipisicing eu.
        Reprehenderit aliqua eu qui quis ut veniam elit adipisicing minim veniam exercitation culpa sit sit est reprehenderit culpa.
      </Typography>

      <Section title="Brand">
        <Typography paragraph>
          Laborum consequat voluptate culpa non non consectetur ut minim consectetur minim duis enim laboris elit consectetur ut.
          Consectetur aute tempor culpa fugiat qui anim ut aliqua tempor laboris dolor nulla.
          Exercitation laboris consectetur irure aliquip deserunt sint dolore mollit labore adipisicing eu.
          Reprehenderit aliqua eu qui quis ut veniam elit adipisicing minim veniam exercitation culpa sit sit est reprehenderit culpa.
        </Typography>
      </Section>

      <Section title="Colors">
        <Typography paragraph>
          Laborum consequat voluptate culpa non non consectetur ut minim consectetur minim duis enim laboris elit consectetur ut.
          Consectetur aute tempor culpa fugiat qui anim ut aliqua tempor laboris dolor nulla.
          Exercitation laboris consectetur irure aliquip deserunt sint dolore mollit labore adipisicing eu.
          Reprehenderit aliqua eu qui quis ut veniam elit adipisicing minim veniam exercitation culpa sit sit est reprehenderit culpa.
        </Typography>
      </Section>

      <Section title="Typography">
        <Typography variant="h3">RENCI's Font Stack</Typography>
        <Typography paragraph>
          The font families making up this style guide are Google's Roboto and Open Sans fonts, used for 
          headings and paragraphs, respectively. With the RENCI stylesheet, all headings are already 
          styled to use the heading font—Roboto, and all paragraphs are styled with the paragraph 
          font—Open Sans.
        </Typography>
      </Section>

    </Page>
  )
}
