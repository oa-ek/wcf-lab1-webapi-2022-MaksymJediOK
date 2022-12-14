import React from 'react'

import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { Header } from './componets/Header/Header'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  padding: 40px;
`

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
