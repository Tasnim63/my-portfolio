import React from 'react';

const AllProjects = () => {
    return (
        <>
            <h1 className=' text-white text-3xl font-serif font-bold text-center my-6'>Projects</h1> 
            <div className=' lg:mx-28 lg:my-12  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div  data-aos="fade-up"
     data-aos-duration="1500"   
                    className="card w-96 bg-slate-500 my-10 mx-10">
               <figure><img src="https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681" alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title text-white font-serif font-bold">
               project 1
             
             </h2>
               <p className=' text-white'>projects description</p>
                 <div className="card-actions justify-end">
                 <button   data-aos='zoom-in'
                  data-aos-delay='1300'
                  className="btn btn-outline btn-base-100 text-white">VIEW</button>
                 <button   data-aos='zoom-in'
                           data-aos-delay='1500'
               className="btn btn-outline btn-base-100 text-white">SOURCE</button>
         </div>
             </div>
            </div>
                <div
                     data-aos="fade-down"
                     data-aos-easing="linear"
                      data-aos-duration="1500"
            
                    className="card w-96 bg-slate-500 my-10 mx-10">
               <figure><img src="https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681" alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title text-white font-serif font-bold">
               project 1
             
             </h2>
               <p className=' text-white'>projects description</p>
               <div className="card-actions justify-end">
                 <button   data-aos='zoom-in'
              data-aos-delay='1300'
              className="btn btn-outline btn-base-100 text-white">VIEW</button>
          <button   data-aos='zoom-in'
              data-aos-delay='1500'
              className="btn btn-outline btn-base-100 text-white">SOURCE</button>
         </div>
             </div>
            </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1500" 
                    className="card w-96 bg-slate-500 my-10 mx-10">
               <figure><img src="https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681" alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title text-white font-serif font-bold">
               project 1
             
             </h2>
               <p className=' text-white'>projects description</p>
               <div className="card-actions justify-end">
                 <button   data-aos='zoom-in'
              data-aos-delay='1300'
              className="btn btn-outline btn-base-100 text-white">VIEW</button>
          <button   data-aos='zoom-in'
              data-aos-delay='1500'
              className="btn btn-outline btn-base-100 text-white">SOURCE</button>
         </div>
             </div>
            </div>
          </div>  
        </>
    );
};

export default AllProjects;