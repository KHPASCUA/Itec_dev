import servicesHeroBg from '../assets/printer-large.png'
import servicesPrinting from '../assets/services-printing.png'
import servicesComputerRental from '../assets/services-computer-rental.png'
import servicesPersonalizedGifts from '../assets/services-personalized-gifts.png'
import servicesOnlineAppointments from '../assets/services-online-appointments.png'

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'PRINTING SERVICES',
      description: 'We print it all in its best and finest quality. Whether it be Black & White or full color.',
      image: servicesPrinting,
      checklist: [
        'Document',
        'Tarpaulin / Banner',
        'Invitation & Cards',
        'Stickers & Labels',
        'Photo Printing',
        'ID Picture 1x1, 2x2',
        'Senior Board and many more',
      ],
      button: 'VIEW ALL PRINTING',
    },
    {
      id: 2,
      title: 'COMPUTER RENTAL',
      description: 'Mid-performance computers for gaming, work, study and browsing.',
      image: servicesComputerRental,
      checklist: [
        'Fast Internet',
        'Comfortable Environment',
        'Affordable Rates',
        'Printing / Online Assistance',
        'Online Meetings / Classic Games Available',
      ],
      button: 'RENT A PC',
    },
    {
      id: 3,
      title: 'PERSONALIZED GIFTS',
      description: 'Make every occasion extra special with customized items.',
      image: servicesPersonalizedGifts,
      checklist: [
        'Mug',
        'T-Shirts',
        'Keychains',
        'Ref Magnets',
        'Picture Frames',
        'Invitation',
        'Ringcord letters and many more',
      ],
      button: 'VIEW PRODUCTS',
    },
    {
      id: 4,
      title: 'ONLINE APPOINTMENTS',
      description: 'We assist you with your important online appointments.',
      image: servicesOnlineAppointments,
      checklist: [
        'NBI Clearance',
        'Passport Appointment',
        'PSA Birth Registration',
        'SSS Registration',
        'PhilHealth Registration',
        'Pag-Ibig',
        'E-Travel and many more',
      ],
      button: 'LEARN MORE',
    },
  ]

  return (
    <div className="services-page">
      <section className="services-hero" style={{ backgroundImage: `url(${servicesHeroBg})` }}>
        <div className="services-hero-content">
          <h1>Services</h1>
          <p>
            Explore our wide range of premium printing solutions designed to
            elevate your brand and bring your ideas to life.
          </p>
        </div>
      </section>

      <section className="services-list-section">
        <div className="services-list">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card">
              <img
                src={service.image}
                alt={service.title}
                className="service-card-image"
              />
              <div className="service-card-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.checklist.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <button className="service-card-button">{service.button}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
