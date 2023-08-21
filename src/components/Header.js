import React, { useState } from 'react';
import image1 from "./logo.jpeg"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { blue } from '@material-ui/core/colors';


const Header = () => {

  

    const [show,setShow]=useState(false);
  return (


    <div>

<MDBNavbar expand='lg' light bgColor='blue'>
      <MDBContainer style={{height:50}} fluid>
        <MDBNavbarBrand href='/'>
            <img src={image1} alt="logo"  style ={{height:"30px"}}/>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          style ={{color:blue}}
          onClick={() => setShow(!show)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={show}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'  style ={{color:blue,paddingTop:55,fontSize: '18px',fontWeight: 'bold'}}>
                BOARD
              </MDBNavbarLink>
          

              
              <MDBNavbarLink href='/addPost' style={{ 

color: 'white', 
backgroundColor: '#E52B50', 
position:"relative",
left:"600%",
top: "-43px",

padding: '10px 20px',

borderRadius: '20px', // Adjust this value for the desired curvature
textDecoration: 'none',
display: 'inline-block', // Ensures the button expands only as much as needed
}}>
+ CREATE YOUR POST
</MDBNavbarLink>
              
         
      </MDBNavbarItem>

     
      







            
          </MDBNavbarNav>

         

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header