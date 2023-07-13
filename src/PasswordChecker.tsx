import { useState } from 'react'
import usePasswordStrength from './hooks/usePasswordStrength'

function PasswordChecker() {
  const [password, setPassword] = useState('')
  const { passwordStrength, calculatePasswordStrength } = usePasswordStrength()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPassword(value)
    calculatePasswordStrength(value)
  }

  return (
    <form>
      <input
        type='password'
        placeholder='Type a password...'
        value={password}
        onChange={handleChange}
      />
      <div className={`sections ${passwordStrength}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </form>
  )
}

export default PasswordChecker
