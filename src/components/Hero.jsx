jsx
import { useEffect, useRef } from 'react'
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react'
import { links } from '../data/skills.js'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrame

    const nodes = []
    const nodeCount = 28
    const connectionDistance = 150

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const createNodes = () => {
      nodes.length = 0

      const rect = canvas.parentElement.getBoundingClientRect()

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: Math.random() * 1.8 + 1.2,
        })
      }
    }

    const animate = () => {
      const rect = canvas.parentElement.getBoundingClientRect()

      ctx.clearRect(0, 0, rect.width, rect.height)

      // Move nodes slowly
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Soft bounce at the edges
        if (node.x < 0 || node.x > rect.width) {
          node.vx *= -1
        }

        if (node.y < 0 || node.y > rect.height) {
          node.vy *= -1
        }
      })

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]

          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) * 0.3

            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)

            ctx.strokeStyle = `rgba(22, 163, 74, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        // Glow
        ctx.beginPath()
        ctx.arc(
          node.x,
          node.y,
          node.radius * 3.5,
          0,
          Math.PI * 2
        )

        ctx.fillStyle = 'rgba(22, 163, 74, 0.07)'
        ctx.fill()

        // Main node
        ctx.beginPath()
        ctx.arc(
          node.x,
          node.y,
          node.radius,
          0,
          Math.PI * 2
        )

        ctx.fillStyle = 'rgba(22, 163, 74, 0.6)'
        ctx.fill()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    resize()
    createNodes()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <canvas
          ref={canvasRef}
          className="hero-network"
        />
      </div>

      <div className="container">
        <div className="hero-inner">

          <span className="hero-kicker">
            <span className="dot" />
            Open to: Analytics · AI · Product
          </span>

          <div className="hero-main">

            <div className="hero-content">
              <h1 className="hero-name">
                Prathamesh Mulay
              </h1>

              <p className="hero-headline">
                Turning Data &amp; AI Into Actionable Products and Insights
              </p>

              <p className="hero-description">
                I build data and AI solutions that turn complex business
                problems into actionable insights and products.
              </p>

              <div className="hero-actions">
                <a
                  href="#projects"
                  className="btn btn-primary"
                >
                  View Projects
                  <ArrowRight size={18} />
                </a>

                <a
                  href={links.resume}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText size={18} />
                  View Resume
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href={links.github}
                  className="icon-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github size={18} />
                </a>

                <a
                  href={links.linkedin}
                  className="icon-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div className="hero-photo-wrapper">
              <img
                src="/PM_Photo.png"
                alt="Prathamesh Mulay"
                className="hero-photo"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

