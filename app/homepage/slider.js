'use client'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from 'embla-carousel-fade';
import { useState, useRef } from "react";

const images = [
    { url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
    { url: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' },
    { url: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 3' },
];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselApi = useRef(null);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        if (carouselApi.current) {
            carouselApi.current.scrollTo(index);
            // carouselApi.current.play();
        }
    };

    return (
        <div className="relative">
            <Carousel
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 4000, stopOnInteraction: false }), Fade()]}
                setApi={(api) => (carouselApi.current = api)}
                className=""
            >
                <CarouselContent className="">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="aspect-[12/4]">
                            <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-4 h-1 rounded-full bg-white hover:bg-red-500`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}



