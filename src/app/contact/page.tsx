export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-5 text-center tracking-tight">Get in touch</h1>
          <p className="text-xl text-white/60 mb-16 text-center font-normal">
            Have questions? We'd love to hear from you.
          </p>
          
          <div className="bg-zinc-900 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-white font-normal mb-2 text-sm">Name</label>
                <input 
                  type="text"
                  className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-white font-normal mb-2 text-sm">Email</label>
                <input 
                  type="email"
                  className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-normal mb-2 text-sm">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-black px-7 py-3 rounded-full font-normal hover:bg-white/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
