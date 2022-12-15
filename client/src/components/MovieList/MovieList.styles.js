import styled from 'styled-components'

export const Container = styled.div`
  width: 1260px;
  margin: 0 auto;
`

export const MoviesTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
`

export const MoviesTitle = styled.h3`
  font-size: 30px;
  line-height: 30px;
  font-weight: 500;
`

export const MoviesButton = styled.a`
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