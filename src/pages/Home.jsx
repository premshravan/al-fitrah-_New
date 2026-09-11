import PageMeta from '../components/PageMeta'
import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import WhyAlFitrah from '../components/home/WhyAlFitrah'
import ProblemSolution from '../components/home/ProblemSolution'
import ApproachSection from '../components/home/ApproachSection'
import QuranicSection from '../components/home/QuranicSection'
import ProgramsPreview from '../components/home/ProgramsPreview'
import CharacterSection from '../components/home/CharacterSection'
import SafetySection from '../components/home/SafetySection'
import GalleryPreview from '../components/home/GalleryPreview'
import WhyParentsChoose from '../components/home/WhyParentsChoose'
import AdmissionsFlow from '../components/home/AdmissionsFlow'
import FAQPreview from '../components/home/FAQPreview'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
  return (
    <>
      <PageMeta
        title="Al-Fitrah Islamic Preschool in Thalassery | Quran & Values"
        description="A nurturing Islamic preschool in Thalassery, Kannur bringing together Quranic learning (Nour Al Bayan), academic foundations, Islamic values and character development for young children."
      />
      <Hero />
      <TrustStrip />
      <WhyAlFitrah />
      <ProblemSolution />
      <ApproachSection />
      <QuranicSection />
      <ProgramsPreview />
      <CharacterSection />
      <GalleryPreview />
      <SafetySection />
      <WhyParentsChoose />
      <AdmissionsFlow />
      <FAQPreview />
      <FinalCTA />
    </>
  )
}
