import { MdOutlineNavigateBefore } from "react-icons/md";
export default function Modal({ message, icon, withComfirmation }) {
  return (
    <>
      <div className="fixed inset-0 z-10 shadow-lg overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg  p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 sm:flex lg:w-2/3 mx-auto ">
              <div className="flex items-center justify-center flex-none  mx-auto">
                <img src={icon} alt="check" />
              </div>
            </div>
            <div className="flex items-center justify-center text-center mx-auto mt-5 ">
              <p>{message}</p>
            </div>

            <div className="flex items-center justify-center  mx-auto ">
              <a
                href="/"
                className="ml-2 flex justify-between items-center bg-black mt-5 rounded p-3 text-white"
              >
                <MdOutlineNavigateBefore />
                Back to Home
              </a>
            </div>
            {withComfirmation ? (
              <div className="flex items-center justify-center  mx-auto border-t lg:gap-[250px] mt-5 border-grey ">
                <a
                  href="/"
                  className="ml-2 flex justify-between items-center bg-primary-grey text-black mt-5 rounded-full px-5 py-1 text-white"
                >
                  Cancel
                </a>
                <a
                  href="/"
                  className="ml-2 flex justify-between items-center bg-black mt-5 rounded-full px-5 py-1 text-white"
                >
                  Confim
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
