import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react'
import { links } from '../data/skills.js'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container">
        <div className="hero-inner">
          <span className="hero-kicker">
            <span className="dot" />
            Open to : Analytics · AI/ML · Data Science · Product
          </span>

          <div>
            <h1 className="hero-name">Prathamesh Mulay</h1>
            <p className="hero-headline">Data & AI | Analytics | Product</p>
          </div>

          <p className="hero-description">
            I build data and AI solutions that turn complex business problems into actionable
            insights and products.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a href={links.resume} className="btn btn-secondary" target="_blank" rel="noreferrer">
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
      </div>
    </section>
  )
}
