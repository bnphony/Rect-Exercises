import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Button, Row, Col } from 'react-bootstrap'
import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'



function App () {
  const { fromLanguage, toLanguage, setToLanguage, interchangeLanguages, setFromLanguage } = useStore()

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector onChange={setFromLanguage}/>
          {fromLanguage}
        </Col>
        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowIcon/>
          </Button>
        </Col>

        <Col>
          <LanguageSelector onChange={setToLanguage}/>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
