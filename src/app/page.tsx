import { Playfair_Display } from 'next/font/google'
import { ScrollAnimationWrapper } from "@/components/client/scroll-animation-wrapper"
import { NewsletterForm } from "@/components/newsletter-form"
import { ProfileImage } from "@/components/client/profile-image"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export default function Home() {
  return (
    <ScrollAnimationWrapper>
    <script src="https://d15dfsr886zcp9.cloudfront.net/tracker_script.js" defer></script>
      <div className="flex flex-col min-h-screen bg-slate-50">
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 premium-gradient overflow-hidden text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative max-w-[1000px] mx-auto flex flex-col items-center text-center gap-8 z-10">
            <div className="scroll-animation w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl mb-6">
              <ProfileImage 
                src="/images/Profile_Daryl.png" 
                alt="Daryl Yeap" 
                className="w-full h-full object-cover"
                fallback={<div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-2xl">DY</div>}
              />
            </div>

            <h1 className={`scroll-animation text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight max-w-[900px] ${playfair.className}`}>
              Build Bulletproof Joints and Break the Pain Cycle
            </h1>
            
            <p className="scroll-animation max-w-[700px] text-lg md:text-xl text-slate-200 leading-relaxed">
              Discover <span className="text-amber-200 font-semibold">evidence-based strategies</span> for strengthening your tendons, improving mobility and identifying costly mistakes that prevent lasting recovery in my free weekly newsletter!
            </p>

            <div className="scroll-animation w-full max-w-3xl mt-8">
              <NewsletterForm />
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-slate-500 text-sm bg-white border-t border-slate-100">
          <p>© {new Date().getFullYear()} Daryl Yeap. All rights reserved.</p>
        </footer>

      </div>
    </ScrollAnimationWrapper>
  )
}
