import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import HeroPricing from "../../components/Banner/HeroPricing";
import Business from "./Business";
import Professional from "./Professional";
import Communication from "./Communication";
import Multimedia from "./Multimedia";
import Metatags from "../../components/Metatags";
import { useGetRequest } from "../../mutation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function TabbedPricing() {
  const [suiteData, setSuiteData] = useState([]);
  const [tabValue, setTabValue] = useState("Professional");

  const { createPost, errorResp, success } = useGetRequest("api/suite/get");
  useEffect(() => {
    window.scrollTo(0, 0);
    createPost({});
  }, [createPost]);

  useEffect(() => {
    if (success) {
      setSuiteData(success?.data);
    }
    if (errorResp) {
      if (errorResp.errorStatus === 403)
        Swal.fire({
          title: "Error!",
          text: errorResp.errorResponse,
          icon: "error",
          confirmButtonText: "ok",
          confirmButtonColor: "#08AC04",
        });
    }
  }, [success, errorResp, suiteData]);
  const data = [
    {
      label: "Professional Services",
      value: "Professional",
      pg: Professional,
    },
    {
      label: "Business Services",
      value: "Business",
      pg: Business,
    },
    {
      label: "Communication Services",
      value: "Communication",
      pg: Communication,
    },
    {
      label: "Multimedia Services",
      value: "Multimedia",
      pg: Multimedia,
    },
  ];

  const SkeletonItem = (
    <div className="w-full rounded overflow-hidden shadow-lg relative flex flex-col">
      <div className="flex items-center gap-6 px-4">
        <p className="font-bold ml-4">
          <Skeleton className="w-full" width={50} height={40} />
        </p>
        <p className="font-bold">
          <Skeleton className="w-full" width={100} height={10} />
        </p>
      </div>
      <div className="flex items-center gap-6 px-16 mx-8">
        <p className="font-bold ml-4">
          <Skeleton className="w-full" width={30} height={30} />
        </p>
        <p className="font-bold">
          <Skeleton className="w-full" width={60} height={5} />
        </p>
      </div>

      <div class="px-6 py-4 h-full">
        <div className="w-full mx-auto">
          <p className="pb-4 text-sm font-medium leading-8 text-justify md:text-left">
            <Skeleton count={3} height={10} />{" "}
            <Skeleton height={10} width={40} />{" "}
          </p>
        </div>
      </div>
      <p className="mx-4">
        <Skeleton height={2} />
      </p>
      <div className="mx-auto mb-4">
        <Skeleton height={40} width={80} />
      </div>
    </div>
  );
  return (
    <>
      <Metatags
        pageTitle="Wolburg Pricing Packs: Affordable Options for Your Needs"
        description="Find the perfect pricing pack for your needs and budget with Wolburg. Our tailored solutions are designed to help your business succeed."
      />
      <HeroPricing />
      <Tabs value="Professional" className="-mt-8 mb-8" id="custom-animation">
        {" "}
        <div className="mx-1 md:mx-28 rounded-lg mb-0 md:mb-16 ">
          <TabsHeader className="bg-white md:p-4 shadow-xl">
            {" "}
            <div className="grid grid-cols-2 md:grid-cols-4 md:mx-0 gap-2 md:gap-0">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setTabValue(value)}
                >
                  <span
                    className={
                      "text-xs md:text-base font-semibold  " +
                      (value === tabValue
                        ? "bg-primary-green text-white p-2 md:px-6 rounded-sm drop-shadow-lg"
                        : "bg-secondary-grey2 text-black p-2 md:px-6 rounded-sm")
                    }
                  >
                    {label}
                  </span>
                </Tab>
              ))}
            </div>
          </TabsHeader>
        </div>
        <div className="lg:w-4/5 mx-auto p-2">
          <p className="text-xl md:text-3xl font-bold text-center max-sm:mt-20 max-sm:w-full lg:leading-loose ">
            Select Your Suite
          </p>

          <p className="text-center mt-4 text-sm md:text-lg ">
            Choose the services and the features your team need today . Easily
            upgrade as your company grow .
          </p>
        </div>
        {suiteData.length > 0 ? (
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map((item) => (
              <TabPanel key={item.value} value={item.value}>
                {<item.pg data={suiteData} />}
              </TabPanel>
            ))}
          </TabsBody>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-8">
            {SkeletonItem}
            {SkeletonItem}
            {SkeletonItem}
            {SkeletonItem}
          </div>
        )}
      </Tabs>
    </>
  );
}
