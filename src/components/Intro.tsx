import React from 'react'; 
function Intro(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className='text-3xl md:text-7xl mb-1 mb:mb-3 font-normal dark:text-white'>Harsh</h1> <br />
            <p className='text-lg md:text-xl mb-2 md:mb-3 font-medium'>Building <a href='https://goast.ai/'  className='no-underline hover:underline'>goast.ai</a></p>
            <p className='font-medium'>Things i have built:</p>
              
        </div>

        
    )
}

export default Intro;