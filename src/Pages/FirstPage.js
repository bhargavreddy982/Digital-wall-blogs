import React from 'react'
import Header from '../components/Header'
import {
    MDBNavbarLink
} from 'mdb-react-ui-kit';

const FirstPage = () => {
  return (
    <>
  <MDBNavbarLink active aria-current='page' href='/home'  >
                Home
              </MDBNavbarLink>
    <div>FirstPage</div>
    </>
  )
}

export default FirstPage