import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const info = {
            fullName: data.name,
            name: data.name,
            mail: data.mail,
            msg: data.msg
        }
        document.getElementById("form").reset();

        try {
            await axios.post('https://getform.io/f/bejedlea', info);
            toast.success("Message sent successfully");
        }
        catch (error) {
            console.log(error);
            toast.error(error.message || "Something went wrong");
        }
    }
    return (
        <div name="Contact">
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-5 mb-5'>
                <h1 className='md:text-3xl text-xl font-bold md:mb-3 mb-2'>Contact Me:</h1>
                <span className='text-md md:text-xl'>Please use the form to get in touch with me:</span>

                <div className='flex flex-col items-center justify-center mt-4'>
                    <form action=""id='form' onSubmit={handleSubmit(onSubmit)} className='rounded bg-slate-200 w-96  p-4'>
                        <h1 className='w-full text-center'>Send your message</h1>
                        <div className='flex justify-center flex-col items-center'>
                            <div className='flex flex-col space-y-1 mt-2'>
                                <label htmlFor="name">Full Name:</label>
                                <input type="text" id='name' name="name"{...register("name", { required: true })}
                                    className='border-[1px] rounded text-[12px] pl-2 h-[24px] w-[250px]' placeholder='Full Name Please' />
                                {errors.name && <span>This field is required</span>}

                            </div>
                            <div className='flex flex-col space-y-1 mt-2'>
                                <label htmlFor="mail">Email:</label>
                                <input type="text" id='mail' name='mail' {...register("mail", { required: true })} className='border-[1px] rounded text-[12px] pl-2 h-[24px] w-[250px]' placeholder='Email Please' />
                                {errors.mail && <span>This field is required</span>}

                            </div>
                            <div className='flex flex-col space-y-1 mt-2'>
                                <label htmlFor="msg">Message:</label>
                                <input type="text" id='msg' name='msg' {...register("msg", { required: true })} className='border-[1px]  rounded text-[12px] pl-2 h-[100px] w-[250px]' placeholder='Elaborate your message here' />
                                {errors.msg && <span>This field is required</span>}

                            </div>
                            <button type='submit'  className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-200 mt-3'>Send</button>
                        </div>

                    </form>
                </div>

            </div>
            <hr />
        </div>
    )
}

export default Contact
