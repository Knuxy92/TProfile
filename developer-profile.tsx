import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Terminal,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react"

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

  const skills = [
    { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
    { name: "React", icon: Globe, color: "text-blue-400" },
    { name: "Node.js", icon: Server, color: "text-green-400" },
    { name: "Database", icon: Database, color: "text-purple-400" },
    { name: "Mobile", icon: Smartphone, color: "text-pink-400" },
    { name: "DevOps", icon: Terminal, color: "text-orange-400" },
  ]

  const codeSnippet = `const developer = {
  name: "Alex Chen",
  role: "Full Stack Developer",
  experience: "5+ years",
  specialties: [
    "React & Next.js",
    "Node.js & Express",
    "PostgreSQL & MongoDB",
    "AWS & Docker"
  ],
  currentFocus: "Building scalable web applications",
  available: true
};

console.log(\`Hello! I'm \${developer.name}\`);`

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />


      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 pb-20">

        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="animate-scroll-up space-y-2 text-xs">
            {[...terminalLines, ...terminalLines, ...terminalLines].map((line, index) => (
              <div key={index} className="whitespace-nowrap text-green-300">
                {line}
              </div>
            ))}
          </div>
        </div>


        {/* Hero Section */}
        <section className="text-center py-16 md:py-24">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Alex Chen
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-400 mb-2">
              {"<"}
              <span className="text-green-400">Full Stack Developer</span>
              {" />"}
            </div>
            <div className="text-sm text-gray-500">// Building the future, one line of code at a time</div>
          </div>
        </section>

        

        {/* Introduction */}
{/* Interactive Terminal Section */}
      <section className="mb-16">
        <Card className="bg-black border border-gray-700 shadow-lg">
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-gray-400">/home/best0070</span>
          </div>
          <CardContent className="p-4">
            <pre className="text-green-500 text-sm leading-relaxed font-mono">
              <code>
                {`$ whoami
      > best0070

      $ skills --list
      > Lua, Python, C++, JavaScript, React, Next.js

      $ projects --latest
      > Freeze/Thaw Process Controller for Windows
      > Pet Egg Renderer - Roblox
      > XAUUSD AutoTrader Bot

      $ status
      > Available for new opportunities ✔
      `}
              </code>
            </pre>
          </CardContent>
        </Card>
      </section>


        {/* Skills Section */}
{/* Terminal Section (Readable Version) */}
<section className="mb-16">
  <Card className="bg-gray-950 border border-gray-700 shadow-xl">
    {/* Top bar */}
    <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <span className="text-xs text-gray-400 font-mono">/home/best0070</span>
    </div>

    {/* Terminal content */}
    <CardContent className="bg-black p-6 overflow-x-auto">
      <pre className="text-green-300 text-base leading-relaxed font-mono whitespace-pre-wrap">
<code>{`$ whoami
> best0070

$ skills --list
> Lua, Python, C++, JavaScript, React, Next.js

$ projects --latest
> Freeze/Thaw Process Controller for Windows
> Pet Egg Renderer - Roblox
> XAUUSD AutoTrader Bot

$ status
> Available for new opportunities ✔`}</code>
      </pre>
    </CardContent>
  </Card>
</section>


        {/* Terminal/Code Section */}
        <section className="mb-16">
          <Card className="bg-gray-900 border-gray-700 overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400 ml-4">developer.js</div>
            </div>
            <CardContent className="p-6">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeSnippet}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack Badges */}
        <section className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center text-purple-400">Current Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
              "Tailwind CSS",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-gray-800/50 text-gray-300 border-gray-600 hover:bg-gray-700/50 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="text-center">
          <h3 className="text-xl font-bold mb-6 text-green-400">Let's Connect</h3>
          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              size="lg"
              className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
          </div>
        </section>
      </div>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-gray-800 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Alex Chen • Built with Next.js & Tailwind CSS •
            <span className="text-green-400 ml-2">Status: Available for new opportunities</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
