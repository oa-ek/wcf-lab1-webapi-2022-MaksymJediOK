import React from 'react'
import {
  Container,
  HeroBG,
  HeroButton,
  HeroDesc,
  HeroText,
  HeroTitle,
} from './Hero.styles'

export const Hero = () => {
  return (
    <>
      <HeroBG>
        <Container>
          <HeroText>
            <HeroTitle>Top Gun: Maverick</HeroTitle>
            <HeroDesc>
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator
            </HeroDesc>
            <HeroButton>More Details</HeroButton>
          </HeroText>
        </Container>
      </HeroBG>
    </>
  )
}
