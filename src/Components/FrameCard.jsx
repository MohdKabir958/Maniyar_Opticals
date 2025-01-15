import React from 'react'

function FrameCard({
    src,
    loading,
}) {
    return (
        <>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={src} loading={loading} />
                </a>
            </div>
        </>
    )
}

export default FrameCard