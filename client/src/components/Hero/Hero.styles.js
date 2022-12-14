import styled from 'styled-components'

export const HeroBG = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images7.alphacoders.com/124/1241136.png');
  background-size: cover;
  height: 500px;
`

export const Container = styled.div`
  width: 1260px;
  margin: 0 auto;
`

export const HeroText = styled.div`
  padding: 120px 0;
`

export const HeroTitle = styled.h2`
  font-size: 40px;
  line-height: 50px;
  color: #fff;
  margin-bottom: 40px;
`

export const HeroDesc = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: #fff;
  margin: 0 0 40px;
  max-width: 400px;
`

export const HeroButton = styled.a`
  margin-top: 40px;
  padding: 15px;
  background-color: #2f62c0;
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`
