export { getStaticProps } from '@/framework/general.ssr';
import { Image } from '@/components/ui/image';
import Seo from '@/components/seo/seo';
import { getLayoutWithFooter } from '@/components/layouts/layout-wabapi';
import aboutImage from '@/assets/images/Group 14987.png';
import guide from '@/assets/images/0.webp';
import own_tour from '@/assets/images/1.webp';
import booking from '@/assets/images/2.webp';
import guest from '@/assets/images/3.webp';
import money from '@/assets/images/4.webp';
import visionImage from '@/assets/images/Group 14978.png';
import { about } from '@/framework/static/about';
import blendGroup from '@/assets/images/Blend Group 1.png';
import Card from '@/components/ui/cards/card';
import SectionBlock from '@/components/ui/section-block';
export const AboutUs = () => {
  return (
    <>
      <Seo title={'Become A Guide'} url={'/become_guide'} />
      <main className="bg-light">
        <section>
          <div className="grid grid-cols-1">
            <div className="relative grid grid-cols-1 gap-5 bg-gradient-to-r  from-indigo-400 to-teal-200 sm:grid-cols-2">
              <div className="absolute  top-14 left-0  z-20 -translate-x-1/3 -translate-y-10 transform overflow-hidden">
                <Image
                  src={blendGroup}
                  alt="footerIamge"
                  width={270}
                  height={230}
                />
              </div>
              <div className="items-center justify-center">
                <div className="pt-64 pl-10 pr-4 sm:pl-20  sm:pb-10  lg:pl-52 lg:pt-36 lg:pr-2 xl:pr-10">
                  <p className="test-xs">About Wabusiness-Api</p>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
                      Wabusiness-Api
                    </h1>
                    <h1 className="flex text-xl font-semibold antialiased md:text-2xl lg:text-3xl">
                      {about.aboutHeading}
                    </h1>
                  </div>
                  <p className="text-md mt-6 text-slate-900 antialiased ">
                    {about.aboutDescription}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center sm:pt-40 md:pt-48 lg:pr-36 lg:pt-20">
                <div className="relative mb-4 w-80 sm:mb-28 sm:h-2/6  md:h-3/6 md:max-h-[610px] md:w-96 lg:h-3/6   xl:h-96 xl:w-full 2xl:h-2/6">
                  <Image
                    src={aboutImage}
                    alt="Banner"
                    width={650}
                    height={550}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* {//////////////////////////////////////////////////////} */}

          <div className=" grid grid-cols-1 ">
            <div className="flex justify-center py-6 text-4xl text-slate-700 sm:text-6xl ">
              How it Works ?
            </div>
            <div className="px-8 py-10 sm:px-32 md:px-52 lg:px-28 xl:px-72 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
              
              <div className=" lg:pl-10">
                <Image src={guide} alt="Banner" width={400} height={250} />
              </div>
              <div className="text-2xl lg:text-4xl font-semibold">
                Become a Local Guide
                <div className="  xs:pr-10  flex flex-row text-xl lg:text-2xl font-normal">
                  If you are passionate about your city, its history, culture,
                  and all its interesting places and want to share your
                  knowledge with travellers while earning extra money, then a
                  budget or free tour is the perfect option for you!
                </div>
              </div>
              <div className=' w-[1100px] h-1 bg-zinc-500'></div>
            </div>
            
            <div className="px-8 py-10 sm:px-32 md:px-52 lg:px-28 xl:px-72 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <div className=" lg:pl-10">
                <Image src={own_tour} alt="Banner" width={400} height={250} />
              </div>
              <div className="text-2xl lg:text-4xl font-semibold">
                Create your own tour
                <div className="  xs:pr-10  flex flex-row text-xl lg:text-2xl font-normal">
                  Where is that cool place that visitors don’t know about your
                  city? What is your favourite stretch of street-art? Do you
                  have a great knowledge of local foods, cultural traditions, or
                  perhaps you love history and know everything about local
                  landmarks & sights? Whatever expertise you offer, create your
                  own customized tour and share it with the world!
                </div>
              </div>
              
            </div>

            <div className="px-8 py-10 sm:px-32 md:px-52 lg:px-28 xl:px-72 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <div className=" lg:pl-10">
                <Image src={booking} alt="Banner" width={400} height={250} />
              </div>
              <div className="text-2xl lg:text-4xl font-semibold">
                Receive bookings
                <div className="  xs:pr-10  flex flex-row text-xl lg:text-2xl font-normal">
                  Once your account & tour profile is approved and goes live,
                  you will soon receive confirmed bookings for your tour direct
                  to your email. You will receive all customer’s details and can
                  even contact them prior to the tour if you wish.{' '}
                </div>
              </div>
              
            </div>

            <div className="px-8 py-10 sm:px-32 md:px-52 lg:px-28 xl:px-72 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <div className=" lg:pl-10">
                <Image src={guest} alt="Banner" width={400} height={250} />
              </div>
              <div className="text-2xl lg:text-4xl font-semibold">
                Meet your guests
                <div className="  xs:pr-10  flex flex-row text-xl lg:text-2xl font-normal">
                  Meet up with the travelers who booked your tour to show them
                  your city, reveal the best stories & legends, experience
                  authentic local culture and give them great recommendations
                  for the rest of their stay. The more positive feedback,
                  ratings & reviews you get, the higher your tour will rank and
                  the more cash you will be able to earn.{' '}
                </div>
              </div>
              
            </div>
            <div className="px-8 py-10 sm:px-32 md:px-52 lg:px-28 xl:px-72 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <div className=" lg:pl-10">
                <Image src={money} alt="Banner" width={400} height={250} />
              </div>
              <div className="text-2xl lg:text-4xl font-semibold">
                Earn money
                <div className="  xs:pr-10  flex flex-row text-xl lg:text-2xl font-normal">
                  Option 1 (Free Tours): Set your tour as FREE and each
                  individual in the group is free to tip what they feel your
                  tour is worth. Tips per guest tend to range from 5 to 20+ EUR
                  & the free tour model is rapidly becoming the preferred way
                  for travellers to discover cities all over the world! Option 2
                  (Paid Tours): Set your tour at a fixed price, or price ranges,
                  and customers pay a 20% deposit at the point of booking, and
                  the remaining balance directly to you on arrival to your tour.
                </div>
              </div>
             
            </div>
          </div>

          <SectionBlock title="" className={'bg-light py-10 '}>
            <div className="flex flex-col items-center justify-center text-4xl font-bold">
              What We Offer
            </div>

            <div className="mx-auto mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2   lg:mt-20 lg:gap-x-16 lg:gap-y-8">
              {about.policy?.map((card, index) => (
                <Card
                  className="items-center justify-center rounded-tl-4xl rounded-br-4xl bg-gradient-to-r from-indigo-400 to-teal-100 text-center  shadow-500   shadow-black     lg:h-48  lg:w-96 "
                  key={`${index}`}
                >
                  <div className=" text-xl font-bold">{card.title}</div>
                  <div className="text-md ">{card.paragraph}</div>
                </Card>
              ))}
            </div>
          </SectionBlock>
        </section>
      </main>
    </>
  );
};
AboutUs.getLayout = getLayoutWithFooter;
export default AboutUs;
