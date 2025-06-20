"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Globe, Layers, Terminal, Zap, Cpu } from "lucide-react"

export default function Component() {
  const [currentTime, setCurrentTime] = useState("")
  const [typedText, setTypedText] = useState("")
  const fullText = "skills --list"

  const skills = [
    { name: "Lua", icon: Code2, color: "text-blue-400", level: "Expert" },
    { name: "Python", icon: Zap, color: "text-yellow-400", level: "Expert" },
    { name: "C++", icon: Cpu, color: "text-red-400", level: "Advanced" },
    { name: "HTML/CSS", icon: Globe, color: "text-orange-400", level: "Advanced" },
    { name: "JavaScript", icon: Code2, color: "text-yellow-300", level: "Expert" },
    { name: "Next.js", icon: Terminal, color: "text-white", level: "Medium" },
  ]

  const terminalCommands = [
    "$ whoami",
    "Pavarut",
    "$ pwd",
    "/home/Pavarut/projects",
    "$ ls -la",
    "drwxr-xr-x  8 Pavarut Pavarut 4096 Dec 20 23:45 .",
    "drwxr-xr-x  3 root     root     4096 Dec 20 22:30 ..",
    "-rw-r--r--  1 Pavarut Pavarut 2048 Dec 20 23:44 portfolio.js",
    "-rw-r--r--  1 Pavarut Pavarut 1024 Dec 20 23:42 skills.lua",
    "-rw-r--r--  1 Pavarut Pavarut 4096 Dec 20 23:40 projects.py",
    "$ cat /proc/cpuinfo | grep 'model name'",
    "model name: Intel(R) Core(TM) i7-12700K CPU @ 3.60GHz",
    "$ uptime",
    "23:47:12 up 127 days, 14:23, 3 users, load average: 0.15, 0.12, 0.08",
    "$ git log --oneline -5",
    "a1b2c3d feat: implement neural network optimization",
    "e4f5g6h fix: resolve memory leak in data processing",
    "i7j8k9l docs: update API documentation",
    "m0n1o2p refactor: improve code architecture",
    "q3r4s5t feat: add machine learning pipeline",
  ]

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }))
    }, 1000)

    // Typing animation for terminal command
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)

    return () => {
      clearInterval(timeInterval)
      clearInterval(typingInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
        }}
      />

      {/* Scrolling Terminal Background */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="animate-scroll-slow space-y-1 text-xs">
          {[...terminalCommands, ...terminalCommands, ...terminalCommands].map((line, index) => (
            <div key={index} className="whitespace-nowrap text-green-300">
              {line.startsWith("$") ? (
                <span>
                  <span className="text-green-400">{line}</span>
                </span>
              ) : (
                <span className="text-gray-500 ml-2">{line}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Terminal Header */}
        <div className="mb-8 text-xs text-gray-500 flex justify-between items-center">
          <div>Pavarut@run:~$</div>
          <div>{currentTime}</div>
        </div>

        {/* Hero Section */}
        <section className="text-center py-16 md:py-20">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative">
              <span className="relative inline-block">
                <span className="absolute inset-0 text-cyan-400 blur-lg animate-pulse">Hi, I'm Pavarut</span>
                <span className="absolute inset-0 text-green-400 blur-md animate-pulse delay-75">
                  Hi, I'm Pavarut
                </span>
                <span className="relative bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Hi, I'm Pavarut
                </span>
              </span>
            </h1>

            <div className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              <span className="text-green-400">{">"}</span> A self-taught developer passionate about building clean and
              powerful software.
              <span className="animate-blink text-green-400 ml-1">█</span>
            </div>
          </div>
        </section>

        {/* Terminal Command Section */}
        <section className="mb-16">
          <Card className="bg-gray-900/80 border-green-400/30 backdrop-blur-sm">
            <div className="bg-gray-800/50 px-4 py-2 flex items-center gap-2 border-b border-green-400/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400 ml-4">terminal</div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-green-400">Pavarut@run:~$</span>
                  <span className="ml-2 text-white">{typedText}</span>
                  <span className="animate-blink text-green-400">█</span>
                </div>

                {typedText === fullText && (
                  <div className="mt-4 space-y-1 animate-fade-in">
                    <div className="text-cyan-400">Scanning skill database...</div>
                    <div className="text-yellow-400">[INFO] Loading programming languages...</div>
                    <div className="text-green-400">[SUCCESS] Skills loaded successfully</div>
                    <div className="text-gray-400">─────────────────────────────────────</div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="text-cyan-400">const</span> <span className="text-white">skills</span> = [
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card
                  key={skill.name}
                  className="bg-gray-900/50 border-green-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <IconComponent
                        className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                    <Badge variant="outline" className="bg-gray-800/50 border-green-400/30 text-green-400 text-xs">
                      {skill.level}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center text-gray-500 text-xl">];</div>
        </section>
      </div>

      {/* Bottom Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-green-400/30 p-2">
        <div className="flex items-center justify-between text-xs max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <span className="text-green-400">●</span>
            <span className="text-gray-400">Connected to mainframe</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-gray-500">
            <span>Uptime: 127d 14h 23m</span>
            <span>|</span>
            <span>Load: 0.15</span>
            <span>|</span>
            <span>Memory: 4.2GB/16GB</span>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes scroll-slow {
          0% {
            transform: translateY(100vh);
          }
          100% {
            transform: translateY(-100%);
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
        
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-scroll-slow {
          animation: scroll-slow 30s linear infinite;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
