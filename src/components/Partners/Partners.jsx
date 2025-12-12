import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

export default function Partners() {
    const logos = [
        {
            name: 'Google',
            path: <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        },
        {
            name: 'Microsoft',
            path: <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
        },
        {
            name: 'Spotify',
            path: <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.299z" />
        },
        {
            name: 'Amazon',
            path: <path d="M13.6 15.68c-2.8 2.2-6.6 2.2-6.6 2.2s-2.2-.2-3.4-1.2c-.2-.2-.2-.4 0-.6l2.4-2c.2-.2.4-.2.6 0 1 .8 2.4.8 2.4.8 1.4 0 2.2-.6 2.2-1.4v-.8c-4.4 0-6.4-2.6-6.4-4.8 0-2.6 2-4.4 4.8-4.4 2.2 0 3.6 1 4.2 1.8V5h3.4v8.2c0 2-1.4 3.4-3.6 3.4-2.2.1-4-.9-4-.9-.2-.2-.2-.4 0-.6l2.2-1.8c.2-.2.4-.2.6 0 .4.4 1 .8 1.6.8.8 0 1.2-.4 1.2-1v-2.6h-.2c0 .1-.8 4.6-4.6 4.6zm-1-6.8c-.8 0-1.4.4-1.4 1.2 0 .8.6 1.4 2 1.4h1.8v-1.8c-.6-.6-1.6-.8-2.4-.8z" />
        },
        {
            name: 'Apple',
            path: <path d="M18.7 13.9c-.2-2 1-3.6 2.8-4.4-1.2-1.8-3-2-3.6-2-1.4-.2-2.8.8-3.6.8-.8 0-2-.8-3.2-.8-1.6 0-3.2 1-4 2.4-1.8 3-1.4 7 .2 9.4.8 1.2 1.8 2.4 3 2.4 1.2 0 1.6-.8 3-.8 1.4 0 1.6.8 2.8.8 1.2 0 2-1.2 2.8-2.4.8-1.2 1.2-2.4 1.2-2.4-.2 0-2.2-1-2.4-3M15.3 5.3c.8-1 1.2-2.2 1-3.4-1 .2-2.4.8-3 1.6-.6.8-1.2 2-1 3.2 1.2.2 2.4-.4 3-1.4" />
        }
    ];

    return (
        <section className="bg-gray-100 py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h3 className="text-gray-500 text-lg font-medium mb-10 tracking-wide">
                    Built together with our partners
                </h3>

                <div className="relative w-full px-4 md:px-8">
                    <style>
                        {`
                        .swiper-wrapper {
                            transition-timing-function: linear;
                        }
                        `}
                    </style>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={40}
                        slidesPerView={2}
                        loop={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                        className="w-full"
                    >
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center py-4">
                                <div className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                    <svg
                                        className="h-10 w-auto fill-current text-gray-800"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {logo.path}
                                    </svg>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}