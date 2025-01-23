import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'

interface Props {
  onChange: (language: string) => void
}

export const LanguageSelector = ({ onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }
    return (
        <Form.Select aria-label='Selecciona el idioma' onChange={handleChange}>
            {
              Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                  {literal}
                </option>
              ))
            }
        </Form.Select>
    )

}