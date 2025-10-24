import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Icons
import { MdMenu } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { FaHome, FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import UserData from "./userData";
import UserDataMobile from "./userDataMobile";

export default function Header() {
	const [isSideBarOpen, setIsSidebarOpen] = useState(false);

	return (
		<header className="w-full bg-accent  h-[100px] text-white px-[40px]">
			<div className="w-full h-full flex relative ">
				<img
					src="/logo.png"
					className="hidden lg:flex h-full absolute w-[170px] left-0  object-cover"
				/>
				<div className="lg:hidden w-full relative  flex justify-center items-center">
					<MdMenu
						className="absolute left-0 text-3xl"
						onClick={() => setIsSidebarOpen(true)}
					/>
					<img src="/logo.png" className="  h-full  w-[170px]   object-cover" />
				</div>
				{isSideBarOpen && (
					<div className="fixed top-0 left-0 w-full h-screen bg-[#00000080] text-secondary z-100">
						<div className="w-[300px] bg-primary h-full flex flex-col relative">
							<div className="lg:hidden h-[100px] w-full bg-accent relative  flex justify-center items-center">
								<MdMenu
									className="absolute left-2 text-white text-3xl"
									onClick={() => setIsSidebarOpen(false)}
								/>
								<img
									src="/logo.png"
									className="  h-full  w-[170px]   object-cover"
								/>
							</div>
							<a href="/" className="p-4 border-b border-secondary/10">
								Home
							</a>
							<a href="/products" className="p-4 border-b border-secondary/10">
								Products
							</a>
							<a href="/about" className="p-4 border-b border-secondary/10">
								About
							</a>
							<a href="/contact" className="p-4 border-b border-secondary/10">
								Contact
							</a>
							<a href="/cart" className="p-4 border-b border-secondary/10">
								Cart
							</a>
							<div className=" lg:hidden flex w-[300px] absolute bottom-[20px] left-0  justify-center items-center gap-4">
								<UserDataMobile />
							</div>
						</div>
					</div>
				)}

				<div className="hidden  h-full lg:flex justify-center items-center w-full text-lg gap-[20px]">
					
				</div>
				<div className="h-full hidden lg:flex w-[200px] absolute right-[100px] top-0  justify-end items-center gap-4">
					<UserData />
				</div>
				<Link
					to="/cart"
					className="h-full absolute right-0 hidden text-3xl lg:flex justify-center items-center"
				>
					
				</Link>
			</div>
		</header>
	);
}

export function TtitleBar() {
  return (
    <header className="w-full h-[100px] mr-[80px] text-white px-[40px] hidden lg:flex justify-center items-center gap-10 bg-accent">
      <Link to="/" className="flex gap-2 items-center">
        <FaHome className="text-3xl cursor-pointer" />
        <span>Home</span>
      </Link>

      <Link to="/products" className="flex gap-2 items-center">
        <AiOutlineProduct className="text-3xl cursor-pointer" />
        <span>Products</span>
      </Link>

      <Link to="/contact" className="flex gap-2 items-center">
        <IoMdContacts className="text-3xl cursor-pointer" />
        <span>Contact</span>
      </Link>

      <Link to="/about">About Us</Link>
      <Link to="/settings" className="hover:text-accent transition">
        <IoSettingsSharp className="text-3xl cursor-pointer" />
      </Link>
      <BsCart3 className="w-[30px] h-[30px]"/>
    </header>
    
    

  
  );
}


export function ProductNews() {
  const desktopSlides = [
    { type: "video", src: "/gaming 66.mp4" },
    { type: "video", src: "/13075121_1920_1080_30fps.mp4" },
    { type: "video", src: "/13057205_3840_2160_24fps.mp4" },
    { type: "image", src: "/12 (1).png" },
    { type: "image", src: "/12 (1).jpg" },
    { type: "image", src: "/12 (2).jpg" },
    { type: "image", src: "/12 (3).jpg" },
    { type: "image", src: "/12 (5).jpg" },
    { type: "image", src: "/12 (6).jpg" },
    { type: "image", src: "/12 (7).jpg" },
    { type: "image", src: "/12 (8).jpg" },
    { type: "image", src: "/12 (9).jpg" },
    { type: "image", src: "/12 (10).jpg" },
    { type: "image", src: "/12 (12).jpg" },
    { type: "image", src: "/12 (222).jpg" },
    { type: "image", src: "/12 (333).jpg" },
    { type: "image", src: "/12 (444).jpg" },
    { type: "image", src: "/12 (555).jpg" },
    { type: "image", src: "/12 (666).jpg" },
    { type: "image", src: "/12 (777).jpg" },
    { type: "image", src: "/gaming 66.webp" },
  ];

  const mobileSlides = [
    { type: "video", src: "/gaming 66.mp4" },

  ];

  const [slides, setSlides] = useState(desktopSlides);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth <= 768) setSlides(mobileSlides);
      else setSlides(desktopSlides);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const togglePlay = (i) => {
    const video = videoRefs.current[i];
    if (!video) return;
    video.paused ? video.play() : video.pause();
  };

  const startSlider = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      5000
    );
  };

  const stopSlider = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, [slides]);

  useEffect(() => {
    slides.forEach((slide, i) => {
      const video = videoRefs.current[i];
      if (video) {
        if (i === currentIndex) video.play();
        else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex, slides]);

  return (
    <div
      className="
        relative w-full 
        h-[20vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] 
        overflow-hidden bg-black shadow-lg
      "
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full h-full flex-shrink-0 flex justify-center items-center relative"
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover"
              />
            ) : (

              <div className="relative w-full h-full flex justify-center items-center group">
                <button
                  onClick={() => togglePlay(i)}
                  className={`
                    hover-hidden absolute bg-black/50 text-white p-3 sm:p-4 rounded-full text-2xl sm:text-3xl
                    transition-opacity duration-300
                    ${
                      videoRefs.current[i] && videoRefs.current[i].paused
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                >
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full lg:object-cover"
                />
                
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-5 -translate-y-1/2 lg:text-white lg:bg-black/50 p-2 sm:p-3 rounded-full lg:flex lg:hover:bg-black/70"
      >
        <FaChevronLeft size={28} className="lg:flex" />
        
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 lg:text-white lg:bg-black/50 p-2 sm:p-3 rounded-full lg:flex lg:hover:bg-black/70"
      >
        <FaChevronRight size={28} className="lg:flex" />
        
      </button>

      {/* Dots */}
      <div className="hidden absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 gap-1 sm:gap-2 lg:flex">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
