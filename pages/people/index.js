import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { fetchPeopleAndTeams } from "../../lib/strapi";
import { Link, Page } from "../../components";
import { PersonCard, PersonGrid } from "../../components/people/";
import { useEffect, useState } from "react";

// this provides data for the vertical menu
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/*
 * people are coming into this component from
 * fetchPeopleAndTeams with this shape:
 * {
 *   ood: […],
 *   people: […],
 * }
 */
export default function People({ people }) {
  const [oodPids, setOodPids] = useState([]);

  useEffect(() => {
    let oodPid = people.ood.map((member) => {
      return member.attributes.pid;
    });
    setOodPids(oodPid);
  }, []);
  // this variable will track which letters in the vertical menu will be links
  // use a Link component for letter X if we have someone whose last name begins with X.
  const linkedLetters = letters.reduce((chars, char) => {
    const index = people.people.findIndex(
      (person) => person.attributes.lastName[0] === char
    );
    return index > -1 ? [...chars, char] : chars;
  }, []);

  return (
    <Page
      title="People"
      description="RENCI is comprised of people who contribute to research groups, operational units, and collaborations."
    >
      <Typography paragraph>
        RENCI is comprised of people who contribute to research groups,
        operational units, and collaborations. Laborum consequat voluptate culpa
        non non consectetur ut minim consectetur minim duis enim laboris elit
        consectetur ut. Reprehenderit aliqua eu qui quis ut veniam elit
        adipisicing minim veniam exercitation culpa sit sit est reprehenderit
        culpa. Exercitation laboris consectetur irure aliquip deserunt sint
        dolore mollit labore adipisicing eu. Consectetur aute tempor culpa
        fugiat qui anim ut aliqua tempor laboris dolor nulla.
      </Typography>

      <Typography variant="h2">Office of the Director</Typography>
      <PersonGrid>
        {people.ood.map((person) => (
          <PersonCard
            key={person.attributes.slug}
            person={person.attributes}
            showTitle={true}
          />
        ))}
      </PersonGrid>

      <Typography variant="h2">Everyone Else</Typography>

      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Box
          component="nav"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "4px",
            position: "sticky",
            top: "10rem",
            marginTop: "2rem",
            alignSelf: "flex-start",
          }}
        >
          {letters.map((letter) =>
            linkedLetters.includes(letter) ? (
              <Link to={`#${letter}`} key={letter}>
                {letter}
              </Link>
            ) : (
              <Typography
                component="span"
                key={letter}
                style={{ color: "#abc" }}
              >
                {letter}
              </Typography>
            )
          )}
        </Box>
        <PersonGrid>
          {people.people
            .filter((person) => {
              return !oodPids.includes(person.attributes.pid);
            })
            .map((person) => (
              <PersonCard
                key={person.attributes.email}
                person={person.attributes}
                showTitle={true}
              />
            ))}
        </PersonGrid>
      </Box>
    </Page>
  );
}

export async function getStaticProps(context) {
  const people = await fetchPeopleAndTeams("ood");

  return {
    props: { people },
  };
}
