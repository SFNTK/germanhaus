import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Germanhaus - Designed By SOUFIANE TAKI Tous droits réservés</p>
          <div id='footelinks' className="mt-4">
            <a href="https://www.facebook.com/GermanHaus.Meknas?_rdr" className="text-yellow-400 hover:underline mr-4">Notre Facebook</a>
            <a href="#" className="text-yellow-400 hover:underline">Notre Whatssap : 0652383182</a>
            <a  href="tel:0751-761346" className="text-yellow-400 hover:underline">Notre Numero : 0751-761346</a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
