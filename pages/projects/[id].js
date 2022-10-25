import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { fetchStrapiProject } from '../../lib/strapi'
import { Page } from '../../components'
import { Pre } from '../../components/pre'

export default function Project() {
  const router = useRouter()
  const [project, setProject] = useState(null)
  const [people, setPeople] = useState(null)

  try {
    useEffect(() => {
    const fetchData = async () => {
      const project = await fetchStrapiProject(router.query.id)
      setProject(project.projects.data[0].attributes)
      setPeople(project.people.data)
    }
    fetchData()
    .catch(console.error)
  }, [router.query.id])

  if (!project) {
    return 'Loading...'
  }
//  console.log(project)
// console.log(people)

const getPIDs = data => {
  return data.map((item) => ({
    pid: item.attributes.pid,
  }))
}
  const PidArray = getPIDs(project.members.data)

  const flattenData = data => {
    return data.map((item) => ({
      pid: item.attributes.pid,
      slug: item.attributes.slug,
      photo: item.attributes.photo,
      firstName: item.attributes.firstName,
      lastName: item.attributes.lastName,
    }))
  }

  // const peopleArray = flattenData(people)
  // console.log(peopleArray)

  const populateMembers = (arrayOfPids, allPeople) => {
    let nestedTeam = arrayOfPids.map((number)=>{
      let output;
      allPeople.forEach((person)=>{
        if (number.pid === person.attributes.pid) {
          return output = person;
        }
      })
      return output
    })
    return nestedTeam ;
  }

  const teamWithPhotos = populateMembers(PidArray, people)

  const flattenedTeam = flattenData(teamWithPhotos)
  console.log(flattenedTeam)
} catch (error) {
  console.log(error.response)
}



  return (
    <Page
      title={ `${ project.name }` }
      description={ project.description }
      heroImage={ project.featuredImage ? project.featuredImage.url : null }
    >
      <Pre>
        { JSON.stringify(project, null, 2) }
      </Pre>
    <div>
      <h2>Project Members</h2>
      {/* <Pre>
        { JSON.stringify(flattenedTeam, null, 2) }

      </Pre> */}
      {
        flattenedTeam ? flattenedTeam.map((member) => {
          <h3>{member.firstName} {member.lastName}</h3>
        }) : <p>No team members</p>
      }
    </div>

    </Page>
  )
}
