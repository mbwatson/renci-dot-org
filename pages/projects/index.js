import { Fragment, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography, Box, useTheme, styled } from '@mui/material'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'
import { fetchAllStrapiProjects } from "../../lib/strapi"
import { ProjectCard } from '../../components/projectSpotlight'
import TextField from "@mui/material/TextField";

const StyledAutocompleteSearch = styled("div")(
  ({ theme, bottomBorderRadius = true }) => `
  display: flex;
  border-radius: inherit;
  border-bottom-left-radius: ${bottomBorderRadius ? "inherit" : 0};
  border-bottom-right-radius: ${bottomBorderRadius ? "inherit" : 0};

  &.focused {
    border-color: ${theme.palette.primary.main}90;
    box-shadow: 0 0 0 3px ${theme.palette.primary.main}a0;
  }

  &:focus-visible {
    outline: 0;
  }
`
);

const SearchBar = ({setSearchQuery}) => (
  <form>
    <StyledAutocompleteSearch>
    <TextField
      id="search-bar"
      style={{  fontSize: "1rem",
        color: "grey",
        background: "inherit",
        border: "none",
        borderRadius: "inherit",
        padding: "8px 12px",
        outline: 0,
        flex: "1 0 auto"}}
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      variant="outlined"
      placeholder="Search..."
      size="large"
    />
    </StyledAutocompleteSearch>
  </form>
);

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.name.toLowerCase().includes(query));
  }
};

export default function Projects({ projects, size = 'medium' }) {
  const theme = useTheme();  
  const [searchQuery, setSearchQuery] = useState("");
  const projectsFiltered = filterData(searchQuery, projects);

  let minWidth;
  switch (size) {
    case 'small':
      minWidth = 350;
      break;
    case 'medium':
    default: 
      minWidth = 350;
      break;
    case 'large':
      minWidth = 300;
  }

  return (
    <Page
      title="Projects"
      description="RENCI's projects..."
    >
      <Typography paragraph>
        Sunt in officia anim aute occaecat sed dolor sit nulla pariatur dolor duis velit veniam.
        Lorem ipsum cupidatat fugiat adipisicing dolore elit duis reprehenderit anim incididunt in incididunt deserunt sunt culpa fugiat eu minim veniam.
        Veniam laborum mollit commodo labore excepteur ut sunt dolore dolor in minim enim officia sit occaecat in cillum ullamco.
        Lorem ipsum ad tempor ea elit anim aliqua nulla exercitation veniam id non elit in in deserunt magna.
      </Typography>

      <Typography paragraph>
        Learn more about each project at RENCI below. 
      </Typography>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Box sx={{
        flex: 1,
        marginTop: '3rem',
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}px, 1fr))`,
        [theme.breakpoints.down('sm')]: {
          gridTemplateColumns: '1fr',
        }
  
      }}>
        {
          projectsFiltered.map((project) => {
            return (
              <ProjectCard project={project} key={`project-${project.slug}`}/>
            )
          })
        }
      </Box>
      <br/>
    </Page>
  )
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'no-cache, no-store, must-revalidate'
  )
  
  const projects = await fetchAllStrapiProjects();

  return {
    props: { projects: JSON.parse(JSON.stringify(projects)) },
  };
}