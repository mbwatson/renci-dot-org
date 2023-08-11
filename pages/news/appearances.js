import { Page } from "@/components/layout";
import { fetchAllNewsAppearances } from "@/lib/strapi/newsAppearancesGraphQL";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Box, Collapse, Typography } from "@mui/material";
import { timelineOppositeContentClasses, timelineItemClasses  } from "@mui/lab";
import { useState } from "react";

/**
 *  YYYY-MM-DD to MM/YY
 */
const dateFormatter = (str) => {
  const date = new Date(str);
  return `${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
}

const NewsAppearanceItem = ({ event }) => {
  const hasMultipleArticles = event.articles.length > 1;
  const [isOpen, setIsOpen] = useState(false);

  const ButtonOrLink = ({event, hasMultipleArticles}) => {
    if(hasMultipleArticles) return (
      <span>
        <span style={{ paddingRight: '8px' }}>{isOpen ? '▼' : '►'}</span>
        <a onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
          {event.title}
        </a>
      </span>
    )
    
    return (
      <a href={event.articles[0].url} target="_blank" rel="noopener noreferrer">
        {event.title}
      </a>
    )
  }

  return <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <ButtonOrLink event={event} hasMultipleArticles={hasMultipleArticles} />
    {
      hasMultipleArticles && <Collapse in={isOpen}>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '20px' }}>
          {event.articles.map((article, i) => (
            <li key={i}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
            </li>
          ))}
        </ul>
      </Collapse>
    }
  </Box>
}

export default function NewsAppearances({ appearances }) {
  return (
    <Page
      title="News Appearances"
      description="RENCI is comprised of people who contribute to research groups, operational units, and collaborations."
    >
      <Typography paragraph>
       See what the media are saying about RENCI. Please keep in mind that not all publications
       keep their stories archived for the long-term. As a result, some of the urls below may 
       not work after a period of time.
      </Typography>

      <Timeline
        position="right"
        sx={{
          paddingX: 0,
          marginY: '2rem',
          [`& .${timelineOppositeContentClasses.root}`]: {
            paddingLeft: '0px',
            flex: 'auto 0 0',
            minWidth: '85px',
            filter: 'opacity(0.7)',
          },
          [`& .${timelineItemClasses.root}`]: {
            minHeight: '60px',
          }
        }}
      >
        {
          appearances.map(({id, attributes: event}, i) => <TimelineItem key={id}>
            <TimelineOppositeContent>
              {dateFormatter(event.date)}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {i === appearances.length - 1 ? null : (
                <TimelineConnector sx={{height: 5}} />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <NewsAppearanceItem event={event} />
            </TimelineContent>
          </TimelineItem>)
        }
      </Timeline>

    </Page>
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'no-cache, no-store, must-revalidate'
  )
  
  const appearances = await fetchAllNewsAppearances();

  return {
    props: { appearances: JSON.parse(JSON.stringify(appearances)) },
  };
}
