import React from 'react'
import './Video.css'; // Import the CSS file

function Video({
    src,
    className,
    loading,
    text1,
    text2
}) {
    return (
        <>
        <hr className='responsive-hr w-screen text-black border-red mt-10' />
            <section className={`${className} text-white`}>
                <div className='container'>
                    <video src={src} loop muted autoPlay width="100%" loading={loading}></video>
                </div>
                <hr className='responsive-hr w-screen text-black border-red mt-10' />
                <h1 className='text-4xl text-center mt-8'>{text1}</h1>
                <p className='text-center mt-8 m-auto w-1/2'>{text2}</p>
            </section>
        </>
    )
}

export default Video