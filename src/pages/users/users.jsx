import { useEffect, useState } from 'react'
import './users.css'
import axios from 'axios'
const Users = () => {
  const [users, setUsers] = useState ([])
  const [page, setPage] = useState (1)
  const [limit, setLimit] = useState (2)
  useEffect(()=>{ 
    axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`).then(response=>{
      setUsers(response.data)

    })

  },[page, limit])

  const changePage =(type)=>{
    if(type === "prev"){
      if(page > 1){
        setPage(prev => prev - 1)
      }
     
    }else{
      setPage(prev => prev + 1)
    }
  }
  return (
    <div>
      <h1 className='text-center'>Users</h1>
      <div className="row">
        <div className="col-md-4">
          <select onChange={(e)=>setLimit(e.target.value)} className='form-control my-2'>
            <option value="" selected>Select limit</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <table className='table table-bordered table-hover table-stripped'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>company</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item,index)=>(
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.company.name}</td>
                <td>{item.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='d-flex align-items-center gap-3'>
      <button onClick={()=>changePage("prev")} className='btn btn-info'>Prev</button>
      <p className='fs-3'>{page}</p>
      <button onClick={()=>changePage("next")} className='btn btn-info'>Next</button>
      </div>
    </div>
  )
}

export default Users