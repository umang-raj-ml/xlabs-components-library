import './App.css'
import XlabsBadge from './components/xlabs-badge'
import XlabsButton from './components/xlabs-button'
import XlabsCard from './components/xlabs-card'
import XlabsCheckbox from './components/xlabs-checkbox'
import XlabsInput from './components/xlabs-input'
import XlabsRadio from './components/xlabs-radio'
import XlabsSkeleton from './components/xlabs-skeleton'
import XlabsText from './components/xlabs-text'
import XlabsSpinner from './components/xlabs-spinner'
import XlabsAlert from './components/xlabs-alert'
import XlabsDivider from './components/xlabs-divider'
import XlabsModal from './components/xlabs-modal'
import XlabsGallery from './components/xlabs-gallery'
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
