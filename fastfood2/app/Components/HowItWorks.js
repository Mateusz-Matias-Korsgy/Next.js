export default function HowItWorks() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          How it <span className="text-black underline">works</span>
        </h2>
        <p className="text-text-g mb-12">
          Know how our platform works for a seamless order and delivery process
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-center">
          <div className="bg-white shadow-md rounded-lg p-2 text-center w-3/4">
            <div className="mb-4">
              <img
                src="/food-salad.png"
                alt="Food"
                className="mx-auto rounded-full w-80 h-60"
              />
            </div>
            <div className="bg-poor-orange inline-block p-2 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3v4h14V3M4 7v11a2 2 0 002 2h12a2 2 0 002-2V7m-8 4h.01M12 17h.01M8 17h.01M16 17h.01"
                ></path>
              </svg>
            </div>
            <h3 className="font-semibold text-black text-xl">Food</h3>
            <p className="text-text-g mt-2">
              Place an order by selecting your meal or our website
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-2 text-center w-3/4">
            <div className="mb-4">
              <img
                src="/groceries.png"
                alt="Groceries"
                className="mx-auto rounded-full w-80 h-60"
              />
            </div>
            <div className="bg-weak-green inline-block p-2 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18l-1 9H4L3 3zm0 0l1 9h16l1-9M3 13l1 6h16l1-6M5 17h14M9 21h6"
                ></path>
              </svg>
            </div>
            <h3 className="font-semibold text-black text-xl">Groceries</h3>
            <p className="text-text-g mt-2">
              Place an order by selecting your groceries or our website
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-2 text-center w-3/4">
            <div className="mb-4">
              <img
                src="/food-supply.png"
                alt="Food Supply"
                className="mx-auto rounded-full w-80 h-60"
              />
            </div>
            <div className="bg-poor-orange inline-block p-2 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </div>
            <h3 className="font-semibold text-black text-xl">Food Supply</h3>
            <p className="text-text-g mt-2">
              Place an order by selecting your supplies or our website
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}