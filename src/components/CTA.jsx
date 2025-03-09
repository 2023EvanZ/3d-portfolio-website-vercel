import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Want to connect? < br className="sm:block hidden"/> Let's connect! </p>
        <Link to="/contact" className="btn">
            Connect
        </Link>
    </section>
  )
}

export default CTA