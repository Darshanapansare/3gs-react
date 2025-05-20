import React, { Component, useState } from 'react'

const Contact = () =>{
 const [data, setData] = useState({
  name: "",
  phone: "", 
  email: "",
  message: "",
 });

 const InputEvent = (event) => {
 const {name , value} = event.target;
setData((preVal) =>{
  return {
    ...preVal,
    [name] :value,

  }
});
 
 }; 
  const formSubmit = (e)=> {e.preventDefault(); alert( `My name is ${data.name}.my phone number is ${data.phone}.email address ${data.email}.message ${data.message} `)};


    return (
      <>
        <div className='my-5'>
          <h1 className='text-center'>Contact us</h1>


        </div>
        <div className='container contact_div'>
          <div className="row">
            <div className='col-md-6 col-sm-6 mx-auto'>
<form onSubmit={formSubmit}>
<div className="mb-3">
  <label for="name" className="form-label">Name </label>
  <input type="text" className="form-control" id="name" placeholder="Enter Your name" name="name" value={data.name} onChange={InputEvent} />
</div>
<div className="mb-3">
  <label for="phone" className="form-label">Phone </label>
  <input type="number" className="form-control" id="Phone" placeholder='Mobile number' name="phone" value={data.phone} onChange={InputEvent}/>

</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={InputEvent} />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent}></textarea>
</div>
<div className="col-md-12"><button type="submit" class="btn btn-outline-secondary">Submit</button></div>

</form>
            </div>
          </div>

        </div>
      </>
    )
  
}

export default Contact
