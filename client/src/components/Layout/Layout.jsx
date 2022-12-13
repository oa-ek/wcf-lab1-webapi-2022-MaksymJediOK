import React from 'react'

import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  padding: 40px;
`

export const Layout = () => {
  return (
    <>
      <HeaderWrapper>
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>Films</Link>
        <Link to={'/'}>Rocky</Link>
      </HeaderWrapper>
      <Outlet />
    </>
  )
}
