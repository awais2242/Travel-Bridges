export { getStaticProps } from '@/framework/general.ssr';
import ContactFormWebapi from '@/components/settings/contact-form-webapi';
import { Image } from '@/components/ui/image';

import Seo from '@/components/seo/seo';
import { getLayoutWithFooter } from '@/components/layouts/layout-wabapi';
import homeImage from '@/assets/images/Group 14883.png';
import broadcast from '@/assets/images/Vector.png';
import chatbots from '../assets/images/Vector-1.png';
import agents from '@/assets/images/Vector-2.png';
import automation from '@/assets/images/Vector-3.png';
import communication from '@/assets/images/Vector-4.png';
import mask2 from '@/assets/images/Mask group2.png';
import circle from '@/assets/images/Ellipse 1975.png';
import dotsRectangle from '@/assets/images/Group 14810.png';
import CurveLiness from '@/assets/images/Group 14805copy.png';
import mobile from '@/assets/images/Group 14835.png';
import inbox from '@/assets/images/Group 14836.png';
import location from '@/assets/images/Group 14837.png';
import Button from '@/components/ui/button';
import Card from '@/components/ui/cards/card';
import SectionBlock from '@/components/ui/section-block';
import CardHome from '@/components/ui/cards/card-home-features';
import WaveForm from '@/components/ui/wave';
import { ArrowNextIcon } from '@/components/icons/arrow-next';



import background from "../assets/images/photo-1433838552652-f9a46b332c40.png";
import imageSlider2 from "../assets/images/a816dbd7.png";
import imageSlider3 from "../assets/images/photo-1528827281426-e8e628634623.png";
import Link from '@/components/ui/link';
import { useState, useEffect, useMemo } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CalendarMaker from '../components/CalendarMaker';


export const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useMemo(() => {
    return [
      {
        image1: background,
      },
      {
        image1: imageSlider2,
      },
      {
        image1: imageSlider3,
      },
    ];
  }, []);

  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slider.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide, slider]);
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  return (
    <>
      <Seo title={'Home'} url={'home'} />
      <main className="bg-light">
      <section>
      <div className="relative grid grid-cols-1 h-[850px] lg:h-[700px]  group">
        <Image
          alt="Banner"
          src={slider[currentSlide].image1}
          className="w-full duration-500 "
        />

        <div className=" pr-10 text-white  font-serif">
          <div className="absolute translate-x-6 -translate-y-[450px]  sm:-translate-y-[500px] md:-translate-y-[500px]  xl:-translate-y-[500px] italic lg:translate-x-[350px]  xl:translate-x-[500px] font-bold sm:text-4xl text-xl">
            Building Bridges Between Travelers, 
          </div>
          <div className="absolute italic translate-x-6 -translate-y-[390px] sm:-translate-y-[410px] md:-translate-y-[450px] xl:-translate-y-[450px] lg:translate-x-[520px]  xl:translate-x-[650px] font-bold  sm:text-4xl text-xl">
            Guide, And Agencies
          </div>
          <div className="absolute  translate-x-6 -translate-y-[350px] italic sm:-translate-y-[360px] md:-translate-y-[400px] xl:-translate-y-[400px] lg:translate-x-[400px] xl:translate-x-[500px] sm:text-2xl lg:3xl">
            Explore Vibrant Culture, Picturesque Landscapes, And
          </div>
          <div className="absolute translate-x-6 -translate-y-[300px] italic sm:-translate-y-[290px] md:-translate-y-[360px] xl:-translate-y-[350px] lg:translate-x-[520px] xl:translate-x-[600px] sm:text-2xl lg:3xl">
             Hidden Gems Waiting To Be Discovered
          </div>
        </div>

        <div className="absolute top-[300px] left-2 xs:top-[370px] sm:top-[450px] xs:left-4 sm:left-10 lg:left-[470px] xl:left-[580px]  ">
          <div
            className={`${
              showDatePicker
                ? "relative w-[300px] h-28 sm:w-[520px] sm:h-20 bg-gray-300 rounded-t-xl"
                : "relative w-[300px] h-20 sm:w-[520px] sm:h-20 bg-gray-300 rounded-xl"
            } `}
          >
            {/* <FontAwesomeIcon
              className="px-1 py-2"
              icon={faLocationDot}
              size="2xl"
              style={{ color: "#0c0d0c" }}
            /> */}
            <input
              type="text"
              placeholder="Which City do you want to go to ?"
              className="absolute  sm:w-[400px] h-12 sm:h-12 bg-white left-1 xs:left-4 md:left-2 top-4 rounded-xl focus:outline-none  px-5"
              onClick={toggleDatePicker}
            />
            <CalendarMaker showDatePicker={showDatePicker} />
            <Button className="absolute top-4 right-1 sm:right-5  bg-olive-green text-white  sm:rounded-md px-1 py-0 sm:px-2 sm:py-2 hover:bg-lime-300 focus:outline-none">
              Lets Go!
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-96 my-10">
        <div className="flex px-4 sm:px-4 text-black lg:pl-20 font-semibold text-2xl md:text-4xl">
          Most Popular Tours
        </div>
        <Link
          href="/"
          className="lg:justify-end px-4 py-4 sm:py-0 sm:px-4 font-semibold text-2xl md:text-3xl text-lime-700 "
        >
          Check All Destinations{" "}
          {/* <FontAwesomeIcon
            icon={faArrowRight}
            size="lg"
            style={{ color: "#256420" }}
          /> */}
        </Link>
      </div>

      <div className="grid grid-cols-2  my-4 mx-4 lg:grid-cols-3 lg:my-10 lg:mx-20 gap-10 lg:gap-10">
        <Link
          href="/"
          className="relative rounded-2xl bg-cover  h-40 w-[140px] xs:w-[200px] sm:h-64 sm:w-full lg:h-72 lg:w-full shadow-gray-600 shadow-md bg-swat "
        >
          <div className="absolute top-28 right:0  sm:top-52 sm:right-12 xs:text-4xl text-3xl font-semibold  text-white">
            Swat
          </div>
        </Link>

        <Link
          href="/"
          className="relative rounded-2xl bg-cover h-40 w-[140px] xs:w-[200px] sm:h-64 sm:w-full lg:h-72 lg:w-full shadow-gray-600 shadow-md bg-multan"
        >
          <div className="absolute top-28 right:0 sm:top-52 sm:right-12 text-3xl xs:text-4xl font-semibold text-white">
            Multan
          </div>
        </Link>

        <Link
          href="/"
          className="relative rounded-2xl bg-cover  h-40 w-[140px] xs:w-[200px] sm:h-64 sm:w-full lg:h-72 lg:w-full shadow-gray-600 shadow-md bg-gilgit "
        >
          <div className="absolute top-28 right:0  sm:top-52 sm:right-12 xs:text-4xl text-3xl font-semibold  text-white">
            Gilgit
          </div>
        </Link>
        <Link
          href="/"
          className="relative rounded-2xl bg-cover  h-40 w-[140px] xs:w-[200px] sm:h-64 sm:w-full lg:h-72 lg:w-full shadow-gray-600 shadow-md bg-lahore "
        >
          <div className="absolute top-28 right:0  sm:top-52 sm:right-12 text-3xl xs:text-4xl font-semibold  text-white">
            Lahore
          </div>
        </Link>
        <Link
          href="/"
          className="relative rounded-2xl bg-cover  h-40 w-[140px] xs:w-[200px] sm:h-64 sm:w-full lg:h-72 lg:w-full shadow-gray-600 shadow-md bg-naran "
        >
          <div className="absolute top-28 right:0  sm:top-52 sm:right-12 xs:text-4xl text-3xl font-semibold  text-white">
            Naran
          </div>
        </Link>
        <Link
          href="/"
          className="relative rounded-2xl bg-cover  h-40 w-[140px] xs:w-[200px] sm:h-64 sm:w-full lg:h-72 lg:w-full shadow-gray-600 shadow-md bg-islamabad "
        >
          <div className="absolute top-28 right:0  sm:top-52 sm:right-12 text-3xl xs:text-4xl font-semibold  text-white">
            Islambad
          </div>
        </Link>
      </div>
    </section>
      </main>
    </>
  );
};
LandingPage.getLayout = getLayoutWithFooter;
export default LandingPage;
