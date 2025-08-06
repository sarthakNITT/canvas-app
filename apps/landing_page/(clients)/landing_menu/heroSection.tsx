"use client"
import ButtonComponent from "@repo/ui/button";
import { 
    Star, 
    ArrowRight,
    Heart,
    Sparkles,
} from 'lucide-react';
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function HeroSection () {
  const route = useRouter()
  const session = useSession()
  function Start () {
    if(session.status==="authenticated"){
      route.push("/draw")
    }else if(session.status==="unauthenticated"){
      route.push("/signin")
    }
  }
    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Now with AI-powered drawing assistance
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Visual ideas made</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                beautifully simple
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create stunning diagrams, wireframes, and sketches with our intuitive drawing platform. 
              Collaborate in real-time, export anywhere, and bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* <button className='cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 font-medium flex items-center px-8 py-4'>argaerg</button> */}
              <ButtonComponent runFunction={Start} title='Start Drawing Free' size='large' secIcon={<ArrowRight className="w-5 h-5 ml-2" />} variant='primary' />
              <ButtonComponent title='Watch Demo' size='large' variant='secondary' />
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-sm">4.9/5 from 2,000+ users</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-red-400 mr-1" />
                <span className="text-sm">Loved by 50k+ creators</span>
              </div>
            </div>
          </div>
        </div>
    )
}

export default function Hero () {
  return (
    <SessionProvider>
      <HeroSection/>
    </SessionProvider>
  )
}