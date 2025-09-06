export default function MailchimpForm() {
  return (
    <div id="mc_embed_signup" className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-700 to-purple-700 text-white">


        {/* <form action="https://yahoo.us7.list-manage.com/subscribe/post?u=26b300b17102a0a19a08c9425&amp;id=3b7545254d&amp;f_id=0086d1e0f0" 
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" 
                target="_blank">

               <h2 className="text-2xl font-bold mb-4 text-center">🚀 موقعنا قريباً</h2>
        <p className="mb-6 text-center">اشترك في قائمتنا البريدية ليصلك إشعار عند الإطلاق</p>

        <label htmlFor="mce-EMAIL" className="sr-only">
          بريدك الإلكتروني
        </label>
        <input
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="أدخل بريدك الإلكتروني"
          required
          className="p-3 rounded-l-xl text-black w-3/4"
        />
        <button
          type="submit"
          className="p-3 rounded-r-xl bg-blue-500 hover:bg-blue-600 transition w-1/4"
        >
          اشترك
        </button>

        <p className="mt-4 text-sm text-gray-300 text-center">
          لن نرسل لك رسائل مزعجة ✉️
        </p>
        </form> */}
        <form
            action="https://yahoo.us7.list-manage.com/subscribe/post?u=26b300b17102a0a19a08c9425&amp;id=3b7545254d&amp;f_id=0086d1e0f0"
            method="post"
            target="_blank"
            noValidate
            className="flex flex-col sm:flex-row items-center gap-2 bg-white/80 p-4 rounded-2xl shadow-lg"
            >
            <input
            type="email"
            name="EMAIL"
            placeholder="أدخل بريدك الإلكتروني"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 w-72 focus:outline-none"
            />
            <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
            notify me
            </button>
            </form>
    </div>

  );
}
