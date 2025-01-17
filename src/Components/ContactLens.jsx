import React from 'react'

function ContactLens({
    src,
    className,
    loading,
    ...props
}) {
    return (
        <>
            <div class={`md:p-2 p-1 w-1/2 ${className}`}>
                <img alt="gallery" class="w-full object-cover h-full object-center block"
                    src={src} loading={loading} {...props} />
            </div>
        </>
    )
}

export default ContactLens