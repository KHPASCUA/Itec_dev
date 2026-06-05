import { useEffect } from 'react'
import heroBg from '../assets/hero-bg.jpg'
import ethanGift from '../assets/gallery-ethan-gift.png'
import invitations from '../assets/gallery-invitations.png'
import notebook from '../assets/gallery-notebook.png'
import faceKeychain from '../assets/gallery-face-keychain.png'
import verticalKeychain from '../assets/gallery-vertical-keychain.png'
import combs from '../assets/gallery-combs.png'
import tumblers from '../assets/gallery-tumblers.png'
import photoCards from '../assets/gallery-photo-cards.png'
import mKeychain from '../assets/gallery-m-keychain.png'
import spiceJars from '../assets/gallery-spice-jars.png'

import rainJar from '../assets/gallery-rain-jar.png'
import photoStrip from '../assets/gallery-photo-strip.png'
import productShowcase from '../assets/gallery-product-showcase.png'
import pen from '../assets/gallery-pen.png'
import mug from '../assets/gallery-mug.png'
import eziahCard from '../assets/gallery-eziah-card.png'
import woodenKeychains from '../assets/gallery-wooden-keychains.png'

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="gallery-page">
      <section
        className="gallery-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="gallery-hero-overlay" />
        <div className="gallery-hero-content">
          <h1>Gallery</h1>
          <p>
            <span className="gallery-highlight">
              A visual showcase of our recent crafts.
            </span>{' '}
            Browse the gallery to see our premium personalized items.
          </p>
        </div>
      </section>

      <section className="gallery-content-section">
        <div className="gallery-grid">
          <div className="gallery-card tall">
            <img src={ethanGift} alt="Ethan Gift" />
          </div>
          <div className="gallery-card">
            <img src={invitations} alt="Invitations" />
          </div>
          <div className="gallery-card">
            <img src={notebook} alt="Notebook" />
          </div>
          <div className="gallery-card">
            <img src={faceKeychain} alt="Face Keychain" />
          </div>
          <div className="gallery-card vertical">
            <img src={verticalKeychain} alt="Vertical Keychain" />
          </div>
          <div className="gallery-card">
            <img src={combs} alt="Combs" />
          </div>
          <div className="gallery-card">
            <img src={tumblers} alt="Tumblers" />
          </div>
          <div className="gallery-card">
            <img src={photoCards} alt="Photo Cards" />
          </div>
          <div className="gallery-card">
            <img src={mKeychain} alt="M Keychain" />
          </div>
          <div className="gallery-card">
            <img src={spiceJars} alt="Spice Jars" />
          </div>
        </div>
      </section>

      <section className="gallery-banner-section">
        <div className="gallery-brand">
          <span className="gallery-love">Love,</span>
          <div className="gallery-brand-main">
            <span className="gallery-yellow">DIANET</span>
            <span className="gallery-white">CAFE</span>
          </div>
        </div>
      </section>

      <section className="gallery-lower-section">
        <div className="gallery-lower-grid">
          <div className="gallery-lower-card">
            <img src={rainJar} alt="Rain Jar" />
          </div>
          <div className="gallery-lower-card">
            <img src={pen} alt="Pen" />
          </div>
          <div className="gallery-lower-card vertical">
            <img src={photoStrip} alt="Photo Strip" />
          </div>
          <div className="gallery-lower-card large">
            <img src={productShowcase} alt="Product Showcase" />
          </div>
          <div className="gallery-lower-card">
            <img src={mug} alt="Mug" />
          </div>
          <div className="gallery-lower-card">
            <img src={eziahCard} alt="Eziah Card" />
          </div>
          <div className="gallery-lower-card">
            <img src={woodenKeychains} alt="Wooden Keychains" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
