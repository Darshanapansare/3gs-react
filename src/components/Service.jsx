import React, { Component } from 'react'
import Sdata from './Sdata'
import Card from './Card'
const Services = () => {
    return (
      <>

      <div className="my-5">
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className="container-fluid nav_bg ">
        <div className="row ">
           <div className="col-10 mx-auto">
            <div className="row gy-4">
           {/* 
           
           
               <div className="col-md-4 col-10 mx-auto">
               <div className="card">
                
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
               </div>

               <div className="col-md-4 col-10 mx-auto">
               <div className="card" >
                 
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
               </div>

               <div className="col-md-4 col-10 mx-auto">
               <div className="card" >
                 
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
               </div>

               <div className="col-md-4 col-10 mx-auto">
               <div className="card" >
                 
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
               </div>

               <div className="col-md-4 col-10 mx-auto">
               <div className="card" >
                 
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
               </div>
               <div className="col-md-4 col-10 mx-auto">
               <div className="card" >
                 
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
               </div>
           */}
         {
          Sdata.map((val, ind)=>{
            return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
          })
         }
               
            </div>
           </div>
        </div>
      </div>
      </>
    )
  }


export default Services
