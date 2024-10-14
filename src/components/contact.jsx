import React,{ useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    
      const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
      }
    return (
        <section className="py-16" id='contact'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contactez-nous pour plus d'informations</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="./about.jpg"
                alt="Notre équipe"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-500 transition duration-300"
                >
                  Envoyer
                </button>
              </form>
              <p className="contactnumber mt-6 text-center text-lg">
                Ou appelez-nous directement au : <a href="tel:0751-761346" className="text-red-600 font-semibold">0751-761346</a>
                <br/>Ou Sur Whatssap: <a href="https://wa.me/1234567890?text=Hello!%20I%27m%20interested%20in%20your%20services" className="text-red-600 font-semibold">0751-761346</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact;
