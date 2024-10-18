import { useEffect } from "react";
import { Link } from "react-router-dom";
import TestimonialContainer from "../components/Testimonial/TestimonialContainer";
import Button from "../components/Button/Button";
import MoreAboutUs from "../components/cards/MoreAboutUs";
import ContactUsCard from "../components/cards/ContactUsCard";
import SubscribeNow from "../components/cards/SubscribeNow";
import PartnerLogoSlider from "../components/Slider/PartnerLogoSlider";
import ExpectationContainer from "../components/customerExpectationCard/ExpectationContainer";
import HomePageHero from "../components/hero/HomePageHero";
// images
import BusSummaryCard1 from "./../assets/images/home/busSummaryCard1.png";
import BusSummaryCard2 from "./../assets/images/home/busSummaryCard2.png";
import BusinessSupportGroupImage from "./../assets/images/home/business support.png";
import SupportImage from "./../assets/images/home/support.png";
import Metatags from "../components/Metatags";
//WAKE UP THE API
import { useGetRequest } from "./../mutation";
const Index = () => {
  const { createPost } = useGetRequest("api/suite/get");

  useEffect(() => {
    console.log("get post");
    createPost({});
  }, [createPost]);

  return (
    <>
      <Metatags
        pageTitle="Wolburg - Your Trusted Business Service Company"
        description="Welcome to Wolburg your trusted Business Service company for enterprise needs. Contact us for expert solutions."
      />
      <HomePageHero />
      <div className="my-8 md:my-16">
        <ExpectationContainer />
      </div>
      <div className="relative  flex items-center overflow-hidden my-12">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-3/5 ">
            <h1 className="flex flex-col text-2xl tracking-wider font-sans leading-normal font-bold capitalize mb-5">
              Business support services <br />
              to small and midsize enterprises.
            </h1>
            <p className="text-black text-sm md:text-lg leading-loose font-medium md:leading-9">
              As a customer-centric organization, we offer technical and
              customer care <br />
              support; backoffice operational support; and integrated support
              services.
            </p>
            <div className="flex z-10 origin-top-right mt-2">
              <div className="space-y-4 pr-5">
                <img
                  src={BusSummaryCard2}
                  alt="Business Service company- Wolburg"
                  className="w-28"
                />
                <p className="font-bold text-base md:text-lg">
                  Budget-Friendly Solutions
                </p>
                <p className="text-black text-sm md:text-lg leading-loose font-medium md:leading-9">
                  We can work within your budget. Our services are designed to
                  accommodate small and medium-sized businesses.
                </p>
              </div>
              <div className="space-y-4 border-l pl-5 border-grey">
                <img
                  src={BusSummaryCard1}
                  alt="Business Service company- Wolburg"
                  className="w-28"
                />
                <p className="font-bold text-base md:text-lg">
                  Tailored to your needs
                </p>
                <p className="text-black text-sm md:text-lg leading-loose font-medium md:leading-9">
                  Our solutions are tailored to your business needs. We're here
                  to help.
                </p>
              </div>
            </div>
          </div>
          <div className="relative hidden   sm:block sm:w-1/3 lg:w-2/5 ml-10">
            <img
              src={BusinessSupportGroupImage}
              alt="Business Services support "
              className="top-0 right-0 "
            />
          </div>
        </div>
      </div>

      <div className="md:p-4 mx-4 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
          <div className="align-center p-2 lg:p-12 md:mx-auto order-2 md:order-1">
            <img
              src={SupportImage}
              alt="Business Service company- Wolburg"
              className="mx-auto"
            />
          </div>
          <div className="my-auto p-4 order-1 md:order-2 ">
            <p className="font-bold text-base md:text-lg capitalize text-primary-blue">
              Support
            </p>
            <h1 className="flex flex-col text-2xl md:text-3xl tracking-wider leading-normal font-bold capitalize mb-5">
              Elevating Support for <br />
              Businesses.
            </h1>
            <p className="text-black text-sm md:text-lg leading-loose font-medium md:leading-9 mb-4">
              Get more out of your business with our portfolio of services.
              <br />
              We'll help you perform better and achieve more with ease
            </p>
            <div className="flex z-10 origin-top-right my-8">
              <Link to="/contact-us">
                <Button
                  className="bg-primary-green text-white rounded-full"
                  value={"How can we help you ? "}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <TestimonialContainer />
      </div>

      <div className="relative items-center my-24">
        <div className="container mx-auto">
          <MoreAboutUs />
        </div>
      </div>
      <div className="items-center md:my-28">
        <div className="container mx-auto  ">
          <ContactUsCard />
        </div>
      </div>

      <div className="flex items-center my-12">
        <div className="container mx-auto ">
          <PartnerLogoSlider />
        </div>
      </div>

      <div className="my-8 md:my-24 mb-16 md:mb-48">
        <SubscribeNow />
      </div>
    </>
  );
};

export default Index;
