import React from 'react';

function Contact(){
    return (
        <div className='flex flex-col mb-10 mx-auto py-4'>
            <div className='flex justify-center items-center'>
                <form 
                action=''
                method='POST'
                className='flex flex-col w-full md:w-7/12'>
                    <input 
                        type="text"
                        name="name"
                        placeholder='Name'
                        className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                     />
                     <input 
                        type="text"
                        name="name"
                        placeholder='Email'
                        className='my-4 p-2 bg-transparent border-2  rounded-md  focus:outline-none'
                     />
                     <textarea name='message' placeholder='Message' rows={10} className='p-2 mb-4  bg-transparent border-2 rounded-md focus:outline-none'
                     />
                     <button type="button" className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md  text-white bg-gradient-to-r from-blue-500 to-gray-500 drop-shadow-md'>
                        Hire Me
                     </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;