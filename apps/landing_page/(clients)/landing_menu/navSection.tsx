"use client"
import ButtonComponent from "@repo/ui/button"
import { 
    PenTool, 
    Menu,
    X,
} from 'lucide-react';
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NavSection () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter()


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const session = useSession()
    return (
        <div>
            <nav id='Home' className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <PenTool className="w-5 h-5 text-white" />
                        </div>
                        <a href='#Home' className="text-xl font-bold text-gray-900">DrawFlow</a>
                    </div>
                    
                    {/* <div className='flex gap-6'>
                        <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
                        <a href="#Demo" className="text-gray-700 hover:text-purple-600 transition-colors">Demo</a>
                        <a href="#About" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</a>
                    </div> */}
                    {/* <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
                    <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a> */}
                    <div className='flex flex-row gap-2 items-center'>
                        <ButtonComponent size='small' title='Get Started' variant='primary' />
                        {session.status==="authenticated" ? 
                        <>
                            {/* <div>{session.data.user?.name}</div> */}
                            {/* <button onClick={()=>signOut()}>Logout</button> */}
                            <ButtonComponent runFunction={()=>signOut()} size='small' title='Log Out' variant='secondary' />
                        </>
                        : (
                            <ButtonComponent runFunction={()=>router.push("/signin")} size='small' title='Sign In' variant='secondary' />
                        )}
                    </div>

                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-2 space-y-2">
                    <a href="#features" className="block py-2 text-gray-700 hover:text-purple-600">Features</a>
                    <a href="#testimonials" className="block py-2 text-gray-700 hover:text-purple-600">Testimonials</a>
                    <a href="#pricing" className="block py-2 text-gray-700 hover:text-purple-600">Pricing</a>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        Get Started
                    </button>
                    </div>
                </div>
                )}
            </nav>
        </div>
    )
}

export default function App () {
    return (
        <SessionProvider>
            <NavSection/>
        </SessionProvider>
    )
}