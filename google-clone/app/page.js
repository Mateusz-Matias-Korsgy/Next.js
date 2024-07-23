import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="flex justify-end w-full p-4 space-x-4 text-sm text-gray-700">
        <a href="#" className="text-gray-500 font-bold hover:underline">Gmail</a>
        <a href="#" className="text-gray-500 font-bold hover:underline">Images</a>
        <img src="/apps.png" className="w-4 h-4 mt-1"/>
        <img className="w-10 h-10 rounded-full" src="/acc.png" alt="User" />
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <img src="/google-logo.png" alt="Google" className="w-72 h-auto mb-8" />

        <div className="flex items-center w-full max-w-md p-2 border rounded-full shadow-sm hover:shadow-md focus-within:shadow-md">
          <img src="/glass.png" className="w-4 h-auto mt-1 ml-1"/>
          <input type="text" className="flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none" placeholder="" />
          <img src="/mic.png" className="w-8 h-auto mt-1 ml-1"/>
          <img src="/cam.png" className="w-8 h-auto mt-1 ml-1"/>
        </div>

        <div className="flex mt-8 space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded hover:bg-gray-200">Google Search</button>
          <button className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded hover:bg-gray-200">I'm Feeling Lucky</button>
        </div>
      </main>

      <footer className="w-full py-4 text-sm text-gray-500 border-t">
        <div className="flex justify-between max-w-screen-3xl mx-auto px-4">
          <div className="flex space-x-8">
            <a href="#" className="font-bold hover:underline">About</a>
            <a href="#" className="font-bold hover:underline">Advertising</a>
            <a href="#" className="font-bold hover:underline">Business</a>
            <a href="#" className="font-bold hover:underline">How Search works</a>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="font-bold hover:underline">Privacy</a>
            <a href="#" className="font-bold hover:underline">Terms</a>
            <a href="#" className="font-bold hover:underline">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  )
}