import {
  Link, Page, Section, Block
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
        <Typography variant="h3" gutterBottom>RENCI's Font Stack</Typography>
        <Typography paragraph>
          The font families making up this style guide are Google's Roboto and Open Sans fonts, used for 
          headings and paragraphs, respectively. With the RENCI stylesheet, all headings are already 
          styled to use the heading font—Roboto, and all paragraphs are styled with the paragraph 
          font—Open Sans.
        </Typography>
        <br/>

        <Typography variant="h4">Headings</Typography>
        <br/>
        <Typography paragraph>
          The heading font is Google's Roboto font.
        </Typography>
        <br/>
        <Block>
          {
            ['h1', 'h2', 'h3', 'h4', 'h5'].map(variant => {
              return (
                <Typography variant={ variant } style={{ marginBottom: '16px', }} key={ variant }>
                  { variant }: The Quick Brown Fox
                </Typography>
              )
            })
          }
        </Block>
        <br/>

        <Typography variant="h4">Paragraphs</Typography>
        <br/>
        <Typography paragraph>
          Paragraphs and general blocks of text use Google's Open Sans font.
        </Typography>
        <Block>
          {
            ['body1', 'body2'].map(variant => {
              return (
                <Typography variant={ variant } style={{ marginBottom: '16px', }} key={ variant }>
                  { variant }: The quick brown fox jumps over the lazy dog.
                </Typography>
              )
            })
          }
        </Block>
      </Section>

    </Page>
  )
}
