import ServiceCard from "../../components/cards/ServiceCard";
import businessImg from "./../../assets/images/services/business/business-services.png";
import technicalImg from "./../../assets/images/services/business/technical-support.png";
import billingImg from "./../../assets/images/services/business/billing-services.png";
import talentImg from "./../../assets/images/services/business/talent.png";
import bookImg from "./../../assets/images/services/business/book-keeping.png";
import businessImgg from "./../../assets/images/services/business/business-templates.png";
import ProfessionalServicesHero from "./../../components/hero/ProfessionalServicesHero";
import BrandManage from "./../../assets/images/services/business/brand-management.png";
import Ecommerce from "./../../assets/images/services/business/eCommerce-talent.png";
import Metatags from "../../components/Metatags";
import { useEffect } from "react";
import Button from "./../../components/Button/Button";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext, MdCheck } from "react-icons/md";

const BusinessService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cardsData = [
    {
      id: "technicalSupport",
      image: technicalImg,
      text: {
        header: "Technical Support & Customer Care",
        styledTxt: "We connect brands",
        body: "Helping our clients and their brand connect with customers by providing customer care, technical, and back-office operational support.",
        category: "about",
      },
      styles: {
        imgStyle: "",
        headerStyle:
          "text-2xl md:text-3xl tracking-wider leading-normal font-bold capitalize",
        txtContStyle: "w-1/2 flex flex-col gap-2",
        btnStyle: "bg-primary-green text-white",
      },
      btn: "",
    },
    {
      id: "billingCollection",
      image: billingImg,
      text: {
        header: "Billing & Collection Services",
        styledTxt: "Our global team of billing and accounting professionals",
        body: "A global team of billing and accounting professionals provides back-office billing and Collection services to SMEs and Solo entrepreneurs.",
        category: "about",
      },
      styles: {
        imgStyle: "md:px-12 order-last",
        headerStyle:
          "text-2xl md:text-3xl tracking-wider leading-normal font-bold capitalize",
        txtContStyle: "w-1/2 flex flex-col gap-2",
        btnStyle: "bg-primary-green text-white",
      },
      btn: "",
    },
    {
      id: "talentManagement",
      image: talentImg,
      text: {
        header: "Talent Management",
        styledTxt:
          "We specialise in delivering integrated and comprehensive talent",
        body: "Integrated and comprehensive talent management service includes recruiting, hiring, benefits, and payroll management.",
        category: "about",
      },
      styles: {
        imgStyle: "",
        headerStyle:
          "text-2xl md:text-3xl tracking-wider leading-normal font-bold capitalize",
        txtContStyle: "w-1/2 flex flex-col gap-2",
        btnStyle: "bg-primary-green text-white",
      },
      btn: "",
    },
    {
      id: "brandManagement",
      image: BrandManage,
      text: {
        header: "Brand Management",
        styledTxt: "We have built a solid reputation",
        body: "We specialize in handling a single or a collection of products, especially for companies planning on expanding their product reach. Additionally, we have a team of seasoned professionals who manage solo entrepreneurs and professionals such as Pastors, Writers, Artists, Athletes, speakers, and public servants.",
        category: "about",
      },
      styles: {
        imgStyle: "md:px-12 order-last",
        headerStyle:
          "text-2xl md:text-3xl tracking-wider leading-normal font-bold capitalize",
        txtContStyle: "w-1/2 flex flex-col gap-2",
        btnStyle: "bg-primary-green text-white",
      },
      btn: "",
    },
    {
      id: "eCommerceManagment",
      image: Ecommerce,
      text: {
        header: "E commerce Management",
        styledTxt: "Our e-commerce team",
        body: "Developing, managing, and marketing our customers' marketplaces so they can focus on developing the right products, expanding product reach, optimize their time.",
        category: "about",
      },
      styles: {
        imgStyle: "",
        headerStyle:
          "text-2xl md:text-3xl tracking-wider leading-normal font-bold capitalize",
        txtContStyle: "w-1/2 flex flex-col gap-2",
        btnStyle: "bg-primary-green text-white",
      },
      btn: "",
    },
    {
      id: "bussinessTemplate",
      image: businessImgg,
      text: {
        header: "Business Templates",
        styledTxt: "Our skilled business process consultants assist",
        body: "Our Business Process Consultants help our clients develop processes and templates to manage every aspect of their business, such as but not limed to Human Resources, Finance & Accounting, Contracts, Business Administration, Audit, procurement, and Operations management. ",
        category: "about",
      },
      styles: {
        imgStyle: "order-last",
        headerStyle:
          "text-2xl md:text-3xl tracking-wider leading-normal font-bold capitalize",
        txtContStyle: "w-1/2 flex flex-col gap-2",
        btnStyle: "bg-primary-green text-white",
      },
      btn: "",
    },
  ];
  const serviceCards = cardsData.map((item) => <ServiceCard {...item} />);
  return (
    <>
      <Metatags
        pageTitle="Wolburg - Your Business Services Partner for Success"
        description="At Wolburg, we're committed to delivering exceptional business services to help you achieve your goals. Contact us to help your business succeed."
      />
      <ProfessionalServicesHero
        header={"Services"}
        title={"Business Services"}
        subTitle={
          "WOLBURG BUSINESS DIVISION (WBD) simplifies and streamlines companies' critical daily business functions. Our multinational team of professionals provides back-end office operations as part of our global service offering. This way, businesses can prioritize other pressing business needs and focus on them."
        }
        imageUrl={businessImg}
      />
      <div>
        <div className="">{serviceCards}</div>

        <div
          className="flex items-center justify-between overflow-hidden bg-bg-line bg-no-repeat "
          id="bookkeeping"
        >
          <div className="w-[2px] mt-10 mb-10 bg-green-600 mr-4"></div>
          <div className="grid grid-col-1 lg:grid-cols-2 gap-2 md:gap-4 p-8">
            <div className="md:py-12">
              <img src={bookImg} alt="Wolburg" className="object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="border-l border-primary-green md:pl-5 bg-white">
                <h3 className="font-bold text-base md:text-lg text-secondary-green uppercase mb-4">
                  SERVICES
                </h3>
                <h2 className="text-2xl md:text-3xl tracking-wider leading-normal font-bold text-black mb-5">
                  Bookkeeping Services
                </h2>
                <p className="text-sm md:text-lg leading-loose font-medium md:leading-9 text-black ">
                  The Wolburg Bookkeeping services provide a wide range of
                  services to manage the financial processes, compliance, and
                  management of clients. These services include recording
                  day-to-day financial transactions, managing invoices and tax
                  payments, ensuring legal compliance, verifying transactions,
                  bringing books to the trial balance stage, performing partial
                  checks of the posting process, entering data, maintaining
                  records, and creating financial reports and statements,
                  processing accounts receivable and payable, and handling
                  payroll in a timely manner.
                </p>
                {/* <ul className="list-none mt-2 mb-5 pl-4 text-black text-sm md:text-lg font-medium leading-loose md:leading-9">
                  <li className="flex flex-row gap-2 items-center">
                    <MdCheck className="text-primary-green" size={22} />
                    <span>
                      Record day-to-day financial transactions and complete the
                      posting process;
                    </span>
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <MdCheck className="text-primary-green" size={22} />
                    <span>Manage invoices and tax payments;</span>
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <MdCheck className="text-primary-green" size={22} />
                    <span>Ensure legal requirements compliance;</span>
                  </li>
                  <li className=" items-center">
                    <MdCheck className="text-primary-green" size={22} />
                    <span>
                      Verify that transactions are recorded in the correct day
                      book suppliers ledger, customer ledger, and general ledger
                    </span>
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <MdCheck className="text-primary-green" size={22} />
                    <span>Bring the books to the trial balance stage;</span>
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <MdCheck className="text-primary-green" size={22} />
                    <span>Perform partial checks of the posting process;</span>
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <MdCheck className="text-primary-green" size={22} />
                    <span>
                      Enter data, maintain records and create reports and
                      financial statements;
                    </span>
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <MdCheck className="text-primary-green" size={22} />
                    <span>Process accounts receivable and payable;</span>
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <MdCheck className="text-primary-green" size={22} />
                    <span>Handles payroll promptly</span>
                  </li>
                </ul> */}
                <Link to={"/pricing"} className="my-8 block">
                  {" "}
                  <Button
                    value="Order Now"
                    Icon={MdOutlineNavigateNext}
                    className="bg-primary-green"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessService;
