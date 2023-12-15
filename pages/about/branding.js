import {
  Link, Page, Section, Block, ColorSection
} from '../../components'
import { Typography } from '@mui/material'

export default function Branding() {
  const renciColors = {
    primary: {
        renciBlue: { name: 'RENCI Blue', hex: '#00758D', },
        lightGrey: { name: 'Light Grey', hex: '#F3F3F8', },
        darkGrey: { name: 'Dark Grey', hex: '#474748', },
        black: { name: 'Black', hex: '#231F20', },
    },
    secondary: {
        primaryBlue: { name: 'Primary Blue', hex: '#00A9C4', },
        lightBlue: { name: 'Light Blue', hex: '#D6E8F2', },
        darkBlue: { name: 'Dark Blue', hex: '#14385F', },
        blueGrey: { name: 'Blue Grey', hex: '#666676', },
    },
}

  return (
    <Page
      title="Branding"
    >
      <Typography paragraph>
        The elements below are used to create the core and expanded visual identity
        of RENCI. Reference each section below to learn more about proper usage and
        application in order to ensure the brand is applied consistently across all
        branded materials.
      </Typography>

      <Section title="RENCI Logo">
        <Typography paragraph>
          The RENCI logo is the bedrock of our visual identity. This logo should be used
          on all deliverable materials. Consistent use of the RENCI logo will enhance
          recognition by all audiences. For light backgrounds, the primary logo uses
          RENCI blue (#00758D) for the r, e, i, and the comet above the i, and black
          (#231F20) for the n and c. Solid black and RENCI blue are acceptable in certain
          cases. For dark backgrounds, the secondary logo uses RENCI blue (#00758D)
          for the r, e, i, and the comet above the i, and white (#FFFFFF) for the n and c.
          Solid white is acceptable in certain cases.
        </Typography>
        <Typography variant="h3" gutterBottom>Usage</Typography>
        <ul>
          <li>The logo must be reproduced from high-resolution digital artwork.</li>
          <li>As the primary visual identity for RENCI, the logo must appear on all communications,
            including brochures, stationary, business cards, and websites.</li>
          <li>The logo may not be reconstructed or altered in any way. This prohibition includes,
            but is not restricted to, type, color, comet, outlines and embellishments. Do not create
            secondary logos, as this confuses the audiences and hinders our purpose of creating a
            consistent, reinforcing identity.</li>
          <li>The logo may not be cut or cropped in any way.</li>
        </ul>
        <Typography variant="h3" gutterBottom>Clear Space Requirements</Typography>
        <Typography paragraph>
          To ensure the integrity and visual impact of the logo, the appropriate “clear
          space” must be maintained on all sides. Specifically, where “x” is equal to the
          height of the RENCI logo, there must be a minimum of 1/2 the distance “x”
          between the outside edge of the logo and any other page element, including
          the edge of the page.
        </Typography>
        <Typography variant="h3" gutterBottom>Logo Elements</Typography>
        <Typography paragraph>
          The RENCI comet element can only be 3 colors: white (#FFFFFF), black (#231F20), or
          RENCI blue (#00758D).
        </Typography>
      </Section>

      <Section title="Colors">
        <Typography paragraph>
          The RENCI brand uses both a primary and secondary color palette. The primary
          color palette should be used predominantly on materials, while the secondary color
          palette should be used sparingly as accents to complement the primary palette.
          RENCI blue (#00758D) is the main color of RENCI and must be used at least 10%
          on all designs.
        </Typography>

        <Typography variant="h3" gutterBottom>Primary Palette</Typography>
        <ColorSection colors={ renciColors.primary }/>
        <br/>
        <Typography variant="h3" gutterBottom>Secondary Palette</Typography>
        <ColorSection colors={ renciColors.secondary }/>

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
