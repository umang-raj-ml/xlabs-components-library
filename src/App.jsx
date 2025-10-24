import './App.css'
import XlabsBadge from './components/xlabs-badge/xlabs-badge'
import XlabsButton from './components/xlabs-button/xlabs-button'
import XlabsCard from './components/xlabs-card/xlabs-card'
import XlabsCheckbox from './components/xlabs-checkbox/xlabs-checkbox'
import XlabsInput from './components/xlabs-input/xlabs-input'
import XlabsRadio from './components/xlabs-radio/xlabs-radio'
import XlabsSkeleton from './components/xlabs-skeleton/xlabs-skeleton'
import XlabsText from './components/xlabs-text/xlabs-text'
import XlabsSpinner from './components/xlabs-spinner/xlabs-spinner'
import XlabsAlert from './components/xlabs-alert/xlabs-alert'
import XlabsDivider from './components/xlabs-divider/xlabs-divider'
import XlabsModal from './components/xlabs-modal/xlabs-modal'
import XlabsGallery from './components/xlabs-gallery/xlabs-gallery'
import XlabsContactForm from './pages/xlabs-contact-form'

function App() {

  return (
    <>
      {/* <XlabsButton variant="primary" children="Primary Button" />
      <XlabsCard />
      <XlabsCheckbox  label="Checkbox" />
      <XlabsRadio label="Option 1" name="option" />
      <XlabsInput placeholder="Enter your name"    />
      <XlabsText size="lg" color="gray">Hello World</XlabsText>
      <XlabsBadge color="blue" children="Badge" />
      <XlabsSkeleton />
      <XlabsSpinner />
      <XlabsAlert type="success">Success</XlabsAlert>
      <XlabsDivider />
      <XlabsModal  onClose={() => {}} children="Modal" />
      <XlabsGallery images={['https://via.placeholder.com/150', 'https://via.placeholder.com/150']} />   */}
      <XlabsContactForm />
    </>
  )
}

export default App
