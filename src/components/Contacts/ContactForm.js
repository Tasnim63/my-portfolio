import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                < div className="form-control w-96 mx-auto max-w-xs ">
                <label className="label">
                                <span className="label-text text-white font-bold text-xl">Name :</span>
                            </label>
                <input type='text' placeholder='Name' className=' p-2 bg-slate-800 text-white font-bold' {...register("Name")} />
                <label className="label">
                                <span className="label-text  text-white font-bold text-xl">Email :</span>
                            </label>
                <input type="text" className=' p-2 bg-slate-800 text-white font-bold' placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <label className="label">
                                <span className="label-text  text-white font-bold text-xl">Subjects :</span>
                            </label>
                    <input type="text" className=' p-2 bg-slate-800 text-white font-bold' placeholder="subject" {...register("First name")} />
                    <label className="label">
                                <span className="label-text  text-white font-bold text-xl">Description :</span>
                    </label>
                    <textarea type="text" className=' p-2 bg-slate-800 text-white font-bold' placeholder="description" {...register("description")} />
              
                    <button    data-aos="zoom-in"
              className="btn btn-outline btn-base-100 my-3 text-white">SUBMIT</button>
                   </div>
            </form>
        </div>
    );
};

export default ContactForm;