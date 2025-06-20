"use client"

import { useEffect, useState } from "react"

export default function Component() {
  const [matrixChars, setMatrixChars] = useState<string[]>([])

  const terminalLines = [
    "$ ssh user@mainframe.corp",
    "Connected to mainframe.corp (192.168.1.100)",
    "$ ls -la /home/user/projects/",
    "drwxr-xr-x 12 user user 4096 Dec 20 23:45 midjourney-ai",
    "drwxr-xr-x  8 user user 4096 Dec 20 23:42 neural-networks",
    "drwxr-xr-x  6 user user 4096 Dec 20 23:40 quantum-computing",
    "$ cd midjourney-ai && npm start",
    "Starting development server...",
    "Server running on https://localhost:3000",
    "$ git status",
    "On branch main",
    "Your branch is up to date with 'origin/main'",
    "$ docker ps -a",
    "CONTAINER ID   IMAGE          STATUS",
    "a1b2c3d4e5f6   midjourney:v2  Up 2 hours",
    "$ curl -X POST https://api.midjourney.com/generate",
    "Response: 200 OK - Image generated successfully",
    "$ tail -f /var/log/system.log",
    "2024-12-20 23:47:12 [INFO] Neural network initialized",
    "2024-12-20 23:47:15 [INFO] GPU acceleration enabled",
    "2024-12-20 23:47:18 [SUCCESS] Model loaded successfully",
  ]

  useEffect(() => {
    // Generate matrix characters
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const charArray = chars.split("")
    setMatrixChars(charArray)
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="animate-bounce">{matrixChars[Math.floor(Math.random() * matrixChars.length)]}</div>
          </div>
        ))}
      </div>

      {/* Animated Terminal Lines Background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="animate-scroll-up space-y-2 text-xs">
          {[...terminalLines, ...terminalLines, ...terminalLines].map((line, index) => (
            <div key={index} className="whitespace-nowrap text-green-300">
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Hero Section */}
        <div className="text-center mb-8">
          {/* Main Title with Multiple Glow Effects */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 relative">
            <span className="relative inline-block">
              <span className="absolute inset-0 text-purple-500 blur-lg animate-pulse">MidJourney</span>
              <span className="absolute inset-0 text-blue-400 blur-md animate-pulse delay-75">MidJourney</span>
              <span className="relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-glitch">
                MidJourney
              </span>
            </span>
          </h1>

          {/* Subtitle with Glitch Effect */}
          <div className="text-xl md:text-2xl text-green-300 mb-8 animate-flicker">
            <span className="text-gray-500">{">"}</span> AI Image Generation Platform
            <span className="animate-blink text-green-400">_</span>
          </div>

          {/* Command Line Style Text */}
          <div className="text-sm md:text-base text-gray-400 space-y-2 max-w-2xl mx-auto">
            <div className="text-left">
              <span className="text-green-400">user@midjourney:~$</span> ./initialize_neural_network.sh
            </div>
            <div className="text-left">
              <span className="text-blue-400">[INFO]</span> Loading advanced AI models...
            </div>
            <div className="text-left">
              <span className="text-purple-400">[SUCCESS]</span> Ready to generate stunning visuals
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="group relative px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-bold text-lg overflow-hidden">
            <span className="relative z-10">START GENERATING</span>
            <div className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>

          <button className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black transition-all duration-300 font-bold text-lg overflow-hidden">
            <span className="relative z-10">VIEW GALLERY</span>
            <div className="absolute inset-0 bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>

        {/* Status Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400">NEURAL NETWORK: ONLINE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></div>
            <span className="text-blue-400">GPU CLUSTER: ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
            <span className="text-purple-400">AI MODELS: LOADED</span>
          </div>
        </div>
      </div>

      {/* Bottom Terminal Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 border-t border-green-400/30 p-4">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="text-green-400">midjourney@ai-server:~$</span>
            <span className="text-gray-400">Ready for input...</span>
            <span className="animate-blink text-green-400">█</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-gray-500">
            <span>CPU: 12%</span>
            <span>GPU: 87%</span>
            <span>RAM: 4.2GB/16GB</span>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(100vh);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        
        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }
        
        @keyframes flicker {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        
        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }
        
        .animate-glitch {
          animation: glitch 2s infinite;
        }
        
        .animate-flicker {
          animation: flicker 3s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  )
}
