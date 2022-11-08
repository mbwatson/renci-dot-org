import { useRouter } from "next/router"
import RichText from "./sections/rich-text"
import { TitleAndBody } from "./sections/title-and-body"
import { PageTitle } from "./sections/page-title"
import { Hero } from "./sections/hero"


// Map Strapi sections to section components
const sectionComponents = {
  "sections.rich-text": RichText,
  "sections.title-and-body-section": TitleAndBody,
  "sections.page-title": PageTitle,
  "sections.hero": Hero,
}

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component]
  if (!SectionComponent) {
    return null
  }

  // Display the section
  return (
    <SectionComponent
      data={sectionData}
    />
  )
}

const PreviewModeBanner = () => {
  const router = useRouter()
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{" "}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a>
      </div>
    </div>
  )
}

// Display the list of sections
const Sections = ({ sections, preview }) => {
  return (
    <div className="flex flex-col">
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections.map((section, sectionId) => (
        <Section
          sectionData={section}
          key={sectionId}
        />
      ))}
    </div>
  )
}

export default Sections
