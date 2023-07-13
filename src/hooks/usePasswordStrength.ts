import { useState } from 'react'

enum PasswordStrength {
  Empty,
  Weak = 'weak',
  Medium = 'medium',
  Strong = 'strong',
}

const usePasswordStrength = () => {
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>(
    PasswordStrength.Empty
  )

  const calculatePasswordStrength = (password: string) => {
    if (password.length === 0) setPasswordStrength(PasswordStrength.Empty)
    else if (password.length < 8) setPasswordStrength(PasswordStrength.Weak)
    else if (
      /(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/.test(password)
    )
      setPasswordStrength(PasswordStrength.Strong)
    else if (
      /((?=.*[^A-Za-z0-9])(?=.*[a-zA-Z]))|((?=.*[a-zA-Z])(?=.*[0-9]))|((?=.*[^A-Za-z0-9])(?=.*[0-9]))/.test(
        password
      )
    )
      setPasswordStrength(PasswordStrength.Medium)
    else setPasswordStrength(PasswordStrength.Weak)
  }

  return { passwordStrength, calculatePasswordStrength }
}

export default usePasswordStrength
