import PageMeta from '../components/PageMeta'
import CurvedWave from '../components/CurvedWave'
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
      <div className="home-page">
        <Hero />
        <CurvedWave color="cream" bg="#4a2f6d" />
        <TrustStrip />
        <CurvedWave color="ivory" bg="cream" flipX />
        <WhyAlFitrah />
        <CurvedWave color="tinted" bg="ivory" />
        <ProblemSolution />
        <CurvedWave color="ivory" bg="tinted" flipX />
        <ApproachSection />
        <CurvedWave color="deep" bg="ivory" />
        <QuranicSection />
        <CurvedWave color="tinted" bg="deep" flipX />
        <ProgramsPreview />
        <CurvedWave color="ivory" bg="tinted" />
        <CharacterSection />
        <CurvedWave color="lilac" bg="ivory" flipX />
        <GalleryPreview />
        <CurvedWave color="tinted" bg="lilac" />
        <SafetySection />
        <CurvedWave color="ivory" bg="tinted" flipX />
        <WhyParentsChoose />
        <CurvedWave color="tinted" bg="ivory" />
        <AdmissionsFlow />
        <CurvedWave color="ivory" bg="tinted" flipX />
        <FAQPreview />
        <CurvedWave color="gold" bg="ivory" />
        <FinalCTA />
      </div>
    </>
  )
}
