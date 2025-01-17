import React from 'react'
import './Video.css'; // Import the CSS file

function Video({
    src,
    className,
    loading,
    text1,
    text2,
    ...props
}) {
    return (
        <>
        <hr className='responsive-hr w-screen text-black border-red mt-10' />
            <section className={`${className} text-white`}>
                <div className='container'>
                    <video className='md:max-w-full' src={src} loop muted autoPlay width="100%" loading={loading} {...props}></video>
                </div>
                <hr className='responsive-hr w-screen text-black border-red mt-10' />
                <h1 className='text-4xl text-center mt-8' data-aos="fade-up">{text1}</h1>
                <p className='text-center mt-8 m-auto w-1/2' data-aos="fade-up">{text2}</p>
            </section>
        </>
    )
}

export default Video