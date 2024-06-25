/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const ServiceHero = () => {
  return (
    <section className="servicesHero">
    <div className="containerServiceHero">
      <div className="rowServiceHero">
        <div className="col-md-6ServiceHero">
          <img
            src="/assets/image6.png"
            alt="phone"
            className="img-fluidServiceHero"
          />
        </div>
        <div className="col-md-6ContactHero">
          <div className="contentContact">
            <h2 className="headingContact">
              CONNECT
              <span className="line2-container">
                <img className="line2" src="/assets/Line.png" alt="line" />
              </span>
              <br />WITH US
            </h2>
            <p className="contactBody">
              If you have any questions about content removal, online reputation management or any services we provide, please feel free to get in touch. Removal services are risk-free, as we only charge for successful removals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ServiceHero