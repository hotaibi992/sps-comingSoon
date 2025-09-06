import "./App.css";
import { motion } from "framer-motion";
import logo from './assets/principleLogo.png';

function App() {
  return (
    <div className="h-screen w-full bg-[url('/k2.jpg')] bg-cover bg-center flex flex-col items-center justify-center px-4 overflow-hidden">

      {/* Header with logo */}
      <div className="flex flex-col sm:flex-row-reverse items-center justify-center gap-4 px-4 w-full mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-tajawal text-white text-center sm:text-right">
          مدارس المبادئ العلمية
        </h1>
        <motion.img
          src={logo}
          alt="مدارس المبادئ"
          className="w-32 sm:w-48 h-32 sm:h-48"
          animate={{ rotateY: [0, 360, 360] }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
            times: [0, 0.4, 1]
          }}
        />
      </div>

      {/* Main Container */}
      <div className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-2xl mx-4 flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl font-poppins text-glow text-center mb-4 sm:mb-6">
          🚀 Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl font-roboto text-white text-center mb-6 sm:mb-8">
          سجّل بريدك لتصلك إشعارات عند الإطلاق
        </p>

        {/* Mailchimp Form */}
        <form
          action="https://yahoo.us7.list-manage.com/subscribe/post?u=26b300b17102a0a19a08c9425&amp;id=3b7545254d&amp;f_id=0086d1e0f0"
          method="post"
          target="_blank"
          className="flex flex-col sm:flex-row items-center gap-2 bg-white/90 p-4 rounded-2xl shadow-lg w-full max-w-md"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="أدخل بريدك الإلكتروني"
            required
            className="px-4 py-2 rounded-lg border border-gray-500 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-6 py-2 w-full sm:w-auto bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            notify me
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
