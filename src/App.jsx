import "./App.css";
import { motion } from "framer-motion";
import logo from './assets/spsLogo.png';

function App() {
  return (
    <div className="h-screen w-full bg-[url('/2j.webp')] bg-cover bg-[left_35%_center] sm:bg-center flex flex-col items-center justify-center px-4 overflow-hidden">

      {/* Header with logo */}
      <div className="flex flex-col sm:flex-row-reverse items-center justify-center gap-4 px-4 w-full mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-tajawal text-white text-center sm:text-right text-balance">
        روضة ومدارس المبادئ العلمية
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
      <div className="bg-black/60  p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col items-center  mx-auto">
        
        
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-white font-bold font-tajawal text-center mb-4 sm:mb-6">
          ترقبوا انطلاقتنا الجديدة
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-md md:text-lg font-tajawal text-balance text-white text-center mb-3 sm:mb-8">
          سجّل بريدك الإلكتروني ليصلك إشعار فور الانطلاق
        </p> 

        {/* Mailchimp Form */}
        <form
            action="https://yahoo.us7.list-manage.com/subscribe/post?u=26b300b17102a0a19a08c9425&amp;id=3b7545254d&amp;f_id=0086d1e0f0"
            method="post"
            target="_blank"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/90 p-3 rounded-xl shadow-lg w-full sm:max-w-sm mx-auto"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="أدخل بريدك الإلكتروني"
              required
              className="px-4 py-2 rounded-lg border border-gray-400 w-full sm:w-72
                        text-sm sm:text-base md:text-lg font-tajawal
                        focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <button
              type="submit"
              className="px-5 py-2 w-full sm:w-auto bg-blue-600 text-white font-tajawal rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              أرسل
            </button>
        </form>

      </div>
    </div>
  );
}

export default App;
