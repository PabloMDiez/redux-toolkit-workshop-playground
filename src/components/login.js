import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NiceForm = styled.form`
  display: flex;
  gap: 4px;
  flex-direction: column;
  width: 200px;
`

const ErrorMessage = styled.span`
  color: crimson;
`
// Tasks:
// - Implement useInput hook
const useInput = () => {
  return {
    onChange: () => alert('not_implemented!'),
    value: 'NOT_IMPLEMENTED',
  }
}

const Login = ({ isLoggingIn, loginError, login }) => {
  const bindUsername = useInput()
  const bindPassword = useInput()

  function handleSubmit (event) {
    event.preventDefault()
    login({
      username: bindUsername.value,
      password: bindPassword.value,
    })
  }

  return (
    <NiceForm onSubmit={handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input disabled={isLoggingIn} id='username' {...bindUsername} />
      <label htmlFor='password'>Password:</label>
      <input
        disabled={isLoggingIn}
        id='password'
        type='password'
        {...bindPassword}
      />
      <button disabled={isLoggingIn}>
        {isLoggingIn ? 'Logging in...' : 'Sign in'}
      </button>
      {loginError && (
        <ErrorMessage>Those credentials are not valid</ErrorMessage>
      )}
    </NiceForm>
  )
}

Login.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
  loginError: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
}

export default Login
