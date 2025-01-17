import React, { useEffect } from 'react'
import video from '../assets/video1.mp4'
import video2 from '../assets/Cinematic.mp4'
import FrameCard from './FrameCard'
import Video from './Video'
import Glasses from '../assets/Glasses.mp4'
import ContactLens from './ContactLens'
import 'aos/dist/aos.css';
import AOS from 'aos';

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // You can adjust the duration as needed
        });
    }, []);

    const Text2 = "Discover the perfect blend of style and comfort with our curated selection of frames Each piece is crafted with precision, ensuring you find the ideal match for your personality and vision needs."
    const Text_sun_2 = "Discover the perfect blend of style and comfort with our curated selection of SUNGLASSES Each piece is crafted with precision, ensuring you find the ideal match for your personality and vision needs."
    const Text_contact_2 = "Discover the perfect blend of style and comfort with our curated selection of CONTACT LENSES Each piece is crafted with precision, ensuring you find the ideal match for your personality and vision needs."
    return (
        <>
            <Video src={video} id="home" className="home" text1="Find Your Perfect Vision" text2={Text2} loading="lazy" />



            <section className='frames  text-white' id="frames" style={{ color: 'white' }}>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            {/* Maniyar_Opt\public\frame-img_home\deena-englard-RJrCj87zPJc-unsplash. */}
                            <FrameCard src="/frame-img_home/deena-englard-RJrCj87zPJc-unsplash.jpg" loading="lazy" data-aos="fade-up" />
                            <FrameCard src="/frame-img_home/eyekeeper-eyekeeper-3EYrYC5xavg-unsplash.jpg" loading="lazy" data-aos="fade-down" />
                            <FrameCard src="/frame-img_home/eyekeeper-eyekeeper-bMJiIRCfAB0-unsplash.jpg" loading="lazy" data-aos="fade-up" />
                            <FrameCard src="/frame-img_home/julie-molliver-J7pWvj-Tqmo-unsplash.jpg" loading="lazy" data-aos="fade-down" />
                            <FrameCard src="/frame-img_home/masjid-maba-bsdHN-QPajo-unsplash.jpg" loading="lazy" data-aos="fade-up" />
                            <FrameCard src="/frame-img_home/mir-ismamul-karim--CqbjEPj6Q8-unsplash.jpg" loading="lazy" data-aos="fade-down" />
                            <FrameCard src="/frame-img_home/oli-woodman-s7gRHGEmX78-unsplash.jpg" loading="lazy" data-aos="fade-up" />
                            <FrameCard src="/frame-img_home/f1.webp" loading="lazy" data-aos="fade-down" />
                        </div>
                    </div>
                </section>
            </section>

            <Video src={Glasses} className='frames' text1="Find Your Perfect Goggles" text2={Text_sun_2} loading="lazy" />



            <section className='Sunglasses text-white' id="Sunglasses" style={{ color: 'white' }}>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <FrameCard src="/sunGlassesImages_home/sun_img1.jpg" loading="lazy" data-aos="zoom-out" />
                            <FrameCard src="/sunGlassesImages_home/sun_img2.jpg" loading="lazy" data-aos="zoom-out" />
                            <FrameCard src="/sunGlassesImages_home/sun_img3.jpg" loading="lazy" data-aos="zoom-out" />
                            <FrameCard src="/sunGlassesImages_home/sun_img4.jpg" loading="lazy" data-aos="zoom-out" />
                            <FrameCard src="/sunGlassesImages_home/sun_img5.jpg" loading="lazy" data-aos="zoom-out" />
                            <FrameCard src="/sunGlassesImages_home/sun_img6.jpg" loading="lazy" data-aos="zoom-out" />
                            <FrameCard src="/sunGlassesImages_home/sun_img7.jpg" loading="lazy" data-aos="zoom-out" />
                            <FrameCard src="/sunGlassesImages_home/sun_img8.jpg" loading="lazy" data-aos="zoom-out" />

                        </div>
                    </div>
                </section>
            </section>

            <Video src={video2} className='Sunglasses' text1="Find Your Perfect Contact lenses" text2={Text_contact_2} loading="lazy" />



            <section class="text-gray-600 body-font" id="ContactLens">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <ContactLens src="/contact_lens_home_imgs/alexandru-zdrobau-4bmtMXGuVqo-unsplash.jpg" loading="lazy"data-aos="flip-left" />
                            <ContactLens src="/contact_lens_home_imgs/betul-QgUs9t2E3qg-unsplash.jpg" loading="lazy" data-aos="flip-left"/>
                            <ContactLens src="/contact_lens_home_imgs/furkanvari-WzQIOMM0X-c-unsplash.jpg" className='w-full' loading="lazy" data-aos="flip-left" />
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <ContactLens src="/contact_lens_home_imgs/ismail-hadine-kb96ntPY2CA-unsplash.jpg" className='w-full' loading="lazy" data-aos="flip-left"/>
                            <ContactLens src="/contact_lens_home_imgs/jonathan-taylor-q_zn_tL-A-A-unsplash.jpg" loading="lazy" data-aos="flip-left" />
                            <ContactLens src="/contact_lens_home_imgs/natallia-photo-rfGnikvI0UI-unsplash.jpg" loading="lazy" data-aos="flip-left" />
                        </div>
                    </div>
                </div>
            </section>

            <hr className='w-screen text-black border-red mt-10' />

        </>
    )
}

export default Home






