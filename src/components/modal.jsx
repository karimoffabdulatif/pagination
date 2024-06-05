/* eslint-disable react/prop-types */
import { useState } from "react"
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"
import { nanoid } from "nanoid" 
const UserModal = (props) => {
  const [form, setForm] = useState({})
  const {cars, setCars, toggle, car} = props

  const handleChange= (e)=>{
    
    const {name,value} = e.target
    setForm({...form, [name]: value})

  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(car.id){
  let new_cars = cars.map((item)=>{
      if(item.id === car.id){
      item.name = form.name ? form.name : item.name
      item.price = form.price ? form.price : item.price
      item.year = form.year ? form.year : item.year
      item.color = form.color ? form.color : item.color
      item.brand = form.brand ? form.brand : item.brand
      }
      return item
    })

     setCars([...new_cars])
    }else{
      let id = nanoid()
      cars.push({...form, id})
      setCars([...cars])
    }
  toggle()
  }
  return (
    <Modal isOpen={props.open} toggle={props.toggle}>
      <ModalHeader>
        <h1 className="text-center">Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input type="text" placeholder="Name"  defaultValue={car.name}  required onChange={handleChange} name="name" className="form-control my-2" />
          <input type="symbol" placeholder="Price" defaultValue={car.price} onChange={handleChange} required name="price" className="form-control my-2" />
          <input type="date" placeholder="Year" defaultValue={car.year} onChange={handleChange} required name="year" className="form-control my-2" />
          <input type="color" placeholder="Color" defaultValue={car.color} onChange={handleChange} required name="color" className="form-control my-2" />
          <input type="text" placeholder="Brand" defaultValue={car.brand} onChange={handleChange} required name="brand" className="form-control my-2" />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.toggle}>Cancel</button>
        <button className="btn btn-success" type="submit" form="submit">Save</button>

      </ModalFooter>
    </Modal>
  )
}

export default UserModal
