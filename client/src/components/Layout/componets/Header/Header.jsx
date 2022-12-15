import React from 'react'
import {
  Container,
  HeaderLeft,
  HeaderWrapper,
  StyledLogo,
} from './Header.styles'
import { FaBars, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderLeft>
          <FaBars color={'#fff'} />
          <StyledLogo href='#'>
            <Link to='/'>Cinema</Link>
          </StyledLogo>
        </HeaderLeft>
        {/*<FaPlus color={'#fff'} />*/}
        <Link to={'/Create'} > Go to</Link>
      </Container>
    </HeaderWrapper>
  )
}
