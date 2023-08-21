import React from 'react'
import {MDBBtn} from "mdb-react-ui-kit";


const Search = ({handleSearch,searchValue,onInputChange}) => {
  return (
    <div className="searchForm">

        <form className='d-flex' onSubmit={handleSearch}>
<input type='search' className="form-control" placeholder="Search Post..." value ={searchValue} onChange={onInputChange}/>
<MDBBtn
  style={{
    backgroundColor: "#E52B50",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 23,
  }}
  type="submit"
>
  Search
</MDBBtn>
        </form>
    </div>
  )
}

export default Search