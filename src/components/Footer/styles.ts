import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import tw from 'twin.macro'

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   margin: 25px 32px;
// `

export const Container = tw.div`flex flex-col text-center h-full m-3 bg-red-500`

export const Line = styled.div`
  max-width: 1280px;
  width: 100%;
  border-top: 1px solid var(--border);
`

export const GithubLogo = styled(FaGithub)`
  margin-top: 25px;
  fill: var(--border);
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`
