import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

function Footer() {
    // Add state for form data
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            console.log('Form Data:', formData);
            
            await emailjs.send(
                'service_kgblfvg', // Replace with your EmailJS service ID
                'template_dvejbda', // Replace with your EmailJS template ID
                {
                    to_email: 'mz137456@gmail.com',
                    from_name: formData.name,
                    message: formData.message,
                    phone: formData.phone
                },
                'qf5eZHJiZi4SCPDFq' // Replace with your EmailJS public key
            );
            
            alert('Message sent successfully!');
            // Clear form
            setFormData({ name: '', phone: '', message: '' });
            
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <>
            <footer className='text-white' id="Contact">
                <section class="text-white-600 body-font relative">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-12">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900 mt-7">Contact Us</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Feel Free to Contact Us | Call For Best
                                Price</p>
                        </div>
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-white-600">Name</label>
                                        <input type="text" id="name" name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="phone" class="leading-7 text-sm text-white-600">Phone No.</label>
                                        <input type="tel" id="phone" name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="message" class="leading-7 text-sm text-white-600">Message</label>
                                        <textarea id="message" name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            class="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <button
                                        class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                </div>
                                <div class="p-2 w-full pt-8 mt-8 border-t border-white-200 text-center">
                                    <a class="text-indigo-500">mz137456@gmail.com</a>
                                    <p class="leading-normal my-5">Abdul Samad
                                    </p>
                                    <span class="inline-flex">
                                        <a class="text-white-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z">
                                                </path>
                                            </svg>
                                        </a>
                                        <a class="ml-4 text-white-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path
                                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                                </path>
                                            </svg>
                                        </a>
                                        <a class="ml-4 text-white-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                                                viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-4 text-white-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path
                                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                                </path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </footer>
        </>

    )

}

export default Footer