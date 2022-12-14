import React from 'react'
import {
  Container,
  HeaderLeft,
  HeaderWrapper,
  StyledLogo,
} from './Header.styles'
import {FaBars, FaPlus} from 'react-icons/fa'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderLeft>
          <FaBars color={'#fff'} />
          <StyledLogo href='#'>Cinema</StyledLogo>
        </HeaderLeft>
        <FaPlus color={'#fff'} />
      </Container>
    </HeaderWrapper>
  )
}
