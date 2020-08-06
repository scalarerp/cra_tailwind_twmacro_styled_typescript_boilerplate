import React from 'react'

import { Container, Line, GithubLogo } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <h1 className="font-extrabold ml-4 p-5 text-teal-500">
        Tailwind Css Tw.Macro
      </h1>
      <Line />
      <GithubLogo />
    </Container>
  )
}

export default Footer
