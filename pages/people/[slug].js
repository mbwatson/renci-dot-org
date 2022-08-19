import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { fetchPerson } from '../../lib/contentful'
import { Page } from '../../components'
import { Pre } from '../../components/pre'

export default function Person() {
  const router = useRouter()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      console.log(router.query.slug)
      const person = await fetchPerson(router.query.slug)
      setPerson(person)
    }
    fetchData()
  }, [router.query.slug])

  if (!person) {
    return 'Loading...'
  }
  return (
    <Page
      title={ `${ person.firstName } ${ person.lastName }` }
      description={ person.bio }
    >
      <Pre>
        { JSON.stringify(person, null, 2) }
      </Pre>

    </Page>
  )
}
