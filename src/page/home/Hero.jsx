import React from 'react'

const Hero = () => {
    return (
        <div className=''>
            <div className="diff container px-4 mx-auto max-w-screen-2xl xl:px-9 h-[70vh]">
                <div className="diff-item-1">
                    <div style={{background:"green"}}  className="grid text-sm font-black  text-primary-content place-content-center h-full md:text-7xl lg:text-9xl">
                        Welcome to
                    </div>
                </div>
                <div className="diff-item-2">
                    <div style={{background:"#fff"}} className="grid text-sm font-black  place-content-center h-full md:text-6xl lg:text-9xl">
                        Khamarbazar!
                    </div>
                </div>
                <div className="diff-resizer"></div>
            </div>
        </div>
    )
}

export default Hero
