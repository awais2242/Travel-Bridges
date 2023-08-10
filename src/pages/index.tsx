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
const cards = [
  {
    className: 'lg:h-45 lg:w-40',
    source: broadcast.src,
    alternative: 'BroadCast',
    width: 30,
    height: 35,
    title: 'Broadcast Communication',
    paragraph:
      'Push out your campaigns and engage with high response WhatsApp messages',
  },
  {
    className: 'lg:h-30 lg:w-40',
    source: chatbots.src,
    alternative: 'Chatbots',
    width: 35,
    height: 35,
    title: 'Chatbots',
    paragraph:
      'Create no-code chatbots to provide instant responses to common requests',
  },
  {
    className: 'lg:h-45 lg:w-40',
    source: agents.src,
    alternative: 'Agents',
    width: 40,
    height: 22,
    title: 'Multiple Agents',
    paragraph:
      ' Share the Wati inbox across your team with support for an unlimited number of agents',
  },
  {
    className: 'lg:h-45 lg:w-40',
    source: automation.src,
    alternative: 'Automation',
    width: 30,
    height: 40,
    title: 'Low-Code Automation',
    paragraph:
      'Simplify mass communication and personalized responses with automated tools.',
  },
  {
    className: 'lg:h-45 lg:w-40',
    source: communication.src,
    alternative: 'Communication',
    width: 40,
    height: 35,
    title: 'Communication',
    paragraph:
      'Tag contacts, categorize and target them in groups using personalized communications',
  },
  {
    className: 'lg:h-45 lg:w-40',
    source: mask2.src,
    alternative: 'Easy Navigation',
    width: 30,
    height: 35,
    title: 'Easy Navigation',
    paragraph:
      'Pre-built integrations let you integrate with your tech stack and configure in a few clicks.',
  },
];

export const LandingPage = () => {
  return (
    <>
      <Seo title={'Home'} url={'home'} />
      <main className="bg-light">
        <section>
          <div className="z-15 grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 gap-5 bg-indigo-600 sm:grid-cols-2">
              <div className="items-center justify-center">
                <div className="xl:ml-62 mx-8 mt-28 xs:pr-14 md:mt-40 lg:ml-48  lg:mt-28 lg:pr-16 xl:pr-20">
                  <h1 className="flex text-xl text-white antialiased md:text-2xl lg:text-3xl">
                    Grow Your Business
                  </h1>
                  <h1 className="text-xl text-teal-400 antialiased md:text-2xl lg:text-3xl">
                    On WhatsApp
                  </h1>
                  <p className="mt-6 text-sm text-white antialiased xl:pr-9">
                    Personalize communication And Sell More with TheWhatsApp
                    Business API Platform That Automatesmarketing, Sales,Service
                    And Support
                  </p>

                  <div className="my-20   flex h-9 text-sm">
                    <Button className="rounded bg-white px-2 text-indigo-950  shadow-md shadow-black hover:bg-teal-500 hover:text-white xs:px-8">
                      Buy now
                    </Button>
                    <Button className="ml-4 rounded bg-teal-400 px-2 text-indigo-950 shadow-md shadow-black hover:bg-teal-500 hover:text-white xs:px-4 ">
                      Book a demo
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative z-20 sm:h-2/6 md:h-3/6 md:max-h-[610px] lg:h-96">
                  <Image
                    src={homeImage}
                    alt="Banner"
                    width={450}
                    height={450}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative bottom-16">
            <WaveForm />
          </div>
        </section>

        <SectionBlock title="" className={'bg-light py-10 '}>
          <div></div>
          <div className="text-bold flex flex-col items-center justify-center text-4xl">
            Features
            <div className="flex items-center justify-center text-sm">
              <div>
                <span className="mr-1">Use</span>
                <span className="mr-1 text-teal-400">Wabusinessapi</span>
                To Engage Your Prospects through the WhatsApp Business API
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-20 lg:gap-x-16 lg:gap-y-8">
            {cards.map((card, index) => (
              <CardHome
                key={index}
                className={card.className}
                source={card.source}
                alternative={card.alternative}
                width={card.width}
                height={card.height}
                title={card.title}
                paragraph={card.paragraph}
              />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock className={''}>
          <div className=" ml-8 flex flex-col items-center justify-center lg:my-10">
            <div className="flex items-center justify-center px-6 text-lg md:mx-6 lg:text-4xl">
              Why build a customized marketing solution with
            </div>
            <div>
              <div className="text-bold mr-10 text-lg lg:text-4xl">
                Wabusinessapi?
              </div>
            </div>
          </div>

          <div className="font-semibold">
            <div className="mt-8 grid grid-cols-2  px-4 sm:mt-12 sm:px-20 md:mt-20 md:gap-2 lg:gap-60">
              <div className="flex items-center justify-center">
                <div>
                  <Card className="flex h-7 w-28 items-center justify-center rounded-tl-xl rounded-br-xl border border-teal-400 text-10px text-teal-400 shadow  shadow-teal-400 sm:h-12 sm:w-44 sm:rounded-tl-3xl  sm:rounded-br-3xl sm:text-sm md:h-16 md:w-56 md:text-base md:shadow-md md:shadow-teal-400 lg:ml-60 lg:h-20 lg:w-64">
                    Optimized Compaign
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <Card className="flex h-7 w-28 items-center justify-center rounded-tl-xl rounded-br-xl border border-teal-400 text-10px  text-teal-400 shadow shadow-teal-400 sm:h-12 sm:w-44  sm:rounded-tl-3xl sm:rounded-br-3xl sm:text-sm md:h-16 md:w-56 md:text-base md:shadow-md md:shadow-teal-400 lg:mr-60 lg:h-20 lg:w-64">
                    Short Time-to-Value
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-32 sm:mt-12 md:mt-20 md:gap-40 lg:gap-10 ">
              <div className="flex items-center justify-center">
                <div>
                  <Card className="flex h-7 w-28 items-center justify-center rounded-tl-xl rounded-br-xl border border-teal-400 text-10px text-teal-400 shadow shadow-teal-400 sm:h-12 sm:w-44  sm:rounded-tl-3xl sm:rounded-br-3xl sm:text-sm md:h-16 md:w-56 md:text-base md:shadow-md md:shadow-teal-400 lg:h-20 lg:w-64 ">
                    Campaigns At Scale
                  </Card>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div>
                  <Card className="flex h-7 w-28 items-center justify-center rounded-tl-xl rounded-br-xl border border-teal-400 text-10px  text-teal-400 shadow shadow-teal-400  sm:h-12 sm:w-44  sm:rounded-tl-3xl sm:rounded-br-3xl sm:text-sm md:h-16 md:w-56 md:text-base md:shadow-md md:shadow-teal-400 lg:h-20 lg:w-64 ">
                    Trusted Platform
                  </Card>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 px-4 sm:mt-12 sm:px-20 md:mt-20 md:gap-2 lg:gap-60">
              <div className="flex items-center justify-center">
                <div>
                  <Card className="flex h-7 w-28 items-center justify-center rounded-tl-xl rounded-br-xl border border-teal-400 text-10px  text-teal-400 shadow shadow-teal-400 sm:h-12 sm:w-44  sm:rounded-tl-3xl sm:rounded-br-3xl sm:text-sm md:h-16 md:w-56 md:text-base md:shadow-md md:shadow-teal-400 lg:ml-60 lg:h-20 lg:w-64">
                    Campaigns At Scale
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <Card className="flex h-7 w-28 items-center justify-center rounded-tl-xl rounded-br-xl border border-teal-400 text-10px  text-teal-400 shadow shadow-teal-400  sm:h-12 sm:w-44  sm:rounded-tl-3xl sm:rounded-br-3xl sm:text-sm md:h-16 md:w-56 md:text-base md:shadow-md md:shadow-teal-400 lg:mr-60 lg:h-20 lg:w-64">
                    Trusted Platform
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </SectionBlock>
        <div className="relative w-full flex-col border-t border-gray-300 bg-slate-950">
          <div className="absolute top-4 left-20 z-20 hidden sm:left-52 sm:block md:top-4">
            <Image src={circle} alt="Circle" width={44} height={44} />
          </div>
          <div className="absolute top-4 left-80  z-20 xs:top-2 xs:left-60 sm:top-0 sm:left-2/3 md:left-3/4">
            <Image src={circle} alt="Circle" width={44} height={44} />
          </div>
          <div className="absolute left-0 mt-2 sm:mt-0">
            <Image
              src={dotsRectangle}
              // className='w-140'
              alt="Rectangle"
              // fill
              // layout="responsive"
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              height={218}
            />
          </div>

          <div className="translate-x  absolute top-0  right-0 z-20  hidden -translate-y-20 transform xs:block">
            <div className="overflow-hidden">
              <Image src={CurveLiness} alt="Lines" width={180} height={190} />
            </div>
          </div>

          <div className="mx-auto mt-20 grid  grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-row items-center justify-center text-xl xs:text-2xl sm:ml-24 sm:pb-20 md:text-3xl lg:ml-52 xl:ml-20">
              <p className="mr-1  text-white">Join</p>
              <p className="mr-1  text-white">The</p>&nbsp;
              <p className=" text-teal-400">WaBusinessapi</p>
              <div className="absolute top-20 right-28 hidden xs:top-44 xs:block sm:top-32 sm:right-96 md:right-2/3 md:top-36">
                <Image src={circle} alt="Circle" width={44} height={44} />
              </div>
            </div>
            <div className=" flex flex-row items-center justify-center py-4 pb-16  text-sm sm:pb-20">
              <Button
                size="medium2"
                className="rounded bg-teal-400  text-indigo-950 shadow-md shadow-teal-600 hover:bg-teal-700 hover:text-white"
              >
                Get started
              </Button>
              <Button
                variant="custom"
                size="medium2"
                className=" ml-4 rounded bg-white  text-indigo-950 shadow-md shadow-teal-700 hover:bg-teal-500 hover:text-white "
              >
                sign up free
                <ArrowNextIcon></ArrowNextIcon>
              </Button>
            </div>
          </div>
        </div>

        <SectionBlock title="" className={' bg-indigo-600'}>
          <div className="items center text-bold mt-10 flex justify-center  text-lg text-white md:text-xl lg:text-3xl">
            Contact Us
          </div>
          <div className="items cnetre flex justify-center text-10px text-white md:mt-2 md:text-sm">
            Any Questions and Remarks? Just Write a Message
          </div>
          <div className="mx-auto mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-20">
            <Card className="rounded-tl-3xl rounded-br-3xl border border-teal-400 bg-gradient-to-r from-indigo-500 to-teal-300 py-4 px-10 shadow-sm shadow-teal-400 lg:h-24  lg:w-60 lg:py-6 lg:px-10">
              {/* <CardHome */}
              <div className="flex h-14">
                {
                  <Image
                    className="lg:h-45 lg:w-48"
                    src={mobile}
                    alt="Mobile"
                    // layout="responsive"
                    width={30}
                    height={35}
                  />
                }
                <div className="ml-2 flex flex-col text-indigo-950 ">
                  <span className="font-bold md:text-sm"> Contact Number</span>{' '}
                  (239) 55-0108
                </div>
              </div>
            </Card>
            <Card className="rounded-tl-3xl rounded-br-3xl border border-teal-400 bg-gradient-to-r  from-indigo-500 to-teal-300 py-6 pl-6 shadow-sm shadow-teal-400 md:px-2 lg:py-6">
              <div className="flex">
                {
                  <div className="pt-1">
                    <Image
                      className=""
                      src={inbox}
                      alt="message"
                      // layout="responsive"
                      width={40}
                      height={36}
                    />
                  </div>
                }
                <div className="ml-2 flex h-8 flex-col pb-3 text-indigo-950">
                  <span className="font-bold"> Help & support</span>
                  <span className="md:text-xs">nathan.roberts@example.com</span>
                </div>
              </div>
            </Card>
            <Card className="rounded-tl-3xl rounded-br-3xl border border-teal-400 bg-gradient-to-r  from-indigo-500 to-teal-300 py-2 px-6 shadow-sm shadow-teal-400 lg:h-24  lg:w-60 lg:py-3 lg:px-5">
              <div className="flex ">
                {
                  <div className="mt-4">
                    <Image
                      className="md:h-45 md:w-40 lg:h-48"
                      src={location}
                      alt="Location"
                      // layout="responsive"
                      width={40}
                      height={58}
                    />
                  </div>
                }
                <div className="ml-2 flex flex-col py-1 text-indigo-950 md:pt-1 ">
                  <span className="font-bold"> Global branch</span>
                  <span className="md:text-xs">
                    1901 Thornridge Cir. Shiloh, Hawaii 81063
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </SectionBlock>
        <SectionBlock title="" className={' bg-indigo-600 '}>
          <div className="mx-auto grid grid-cols-1  sm:grid-cols-2">
            <div>
              <div className="text-bold mt-10 flex items-center justify-center text-lg text-white sm:mr-48 sm:text-xl  md:text-2xl lg:justify-between lg:text-3xl">
                Let&apos;s talk
              </div>
              <div className="flex flex-col items-center justify-center text-10px text-white sm:mr-2 sm:text-xs md:pr-3 lg:mr-16 lg:mt-2 lg:justify-between xl:mr-40">
                <span>
                  It&apos;s all about the humans behind a brand and those
                </span>
                <span className="mr-5 mb-2 ">
                  Experiencing it, we&apos;re right there. In the middle.
                </span>
              </div>
            </div>
            <div>
              <ContactFormWebapi />
            </div>
          </div>
        </SectionBlock>
      </main>
    </>
  );
};
LandingPage.getLayout = getLayoutWithFooter;
export default LandingPage;
