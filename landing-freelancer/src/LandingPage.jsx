// src/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import picture1 from '/assets/picture1.jpeg';
import picture2 from '/assets/picture2.jpeg';
import aboutme from '/assets/aboutme.jpg';


const Button = ({ children, className = "" }) => (
  <button className={`px-6 py-2 rounded-xl font-semibold transition ${className}`}>
    {children}
  </button>
);

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white dark:bg-[#1e1e1e] shadow-md py-4 px-6 flex justify-between items-center">
    <div className="text-xl font-bold text-[#a36d75]">Social.byTeodora</div>
    <ul className="flex gap-6 font-medium text-[#2e2e2e] dark:text-white">
      <li><a href="#about" className="hover:text-[#a36d75]">Despre</a></li>
      <li><a href="#services" className="hover:text-[#a36d75]">Servicii</a></li>
      <li><a href="#results" className="hover:text-[#a36d75]">Rezultate</a></li>
      <li><a href="#testimonials" className="hover:text-[#a36d75]">Testimoniale</a></li>
      <li><a href="#contact" className="hover:text-[#a36d75]">Contact</a></li>
    </ul>
  </nav>
);

const testimonials = [
  {
    name: "Andreea, antreprenor",
    text: "Colaborarea cu Teo a fost fix ce aveam nevoie: claritate, energie și rezultate!"
  },
  {
    name: "Mihai, fondator start-up",
    text: "Strategia propusă de Teo ne-a ajutat să ne dublăm engagement-ul pe Instagram."
  },
  {
    name: "Ioana, creatoare de conținut",
    text: "Am simțit că lucrez cu o prietenă care chiar înțelege brandul meu."
  }
];

function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-[#3e3e3e] text-[#2e2e2e] dark:text-white shadow-2xl rounded-3xl p-12 w-full max-w-5xl"
      >
        <p className="text-2xl italic mb-6 leading-relaxed">“{current.text}”</p>
        <p className="font-semibold text-lg">{current.name}</p>
      </motion.div>
      <div className="flex gap-2 mt-4">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-primary scale-125' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 4000);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const serviceColors = ['#e8b8c6', '#a36d75', '#f6e9d5', '#dcdcdc'];

  return (
    <div className="bg-[#ffffff] text-[#2e2e2e] dark:bg-[#2e2e2e] dark:text-[#ffffff] scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen grid md:grid-cols-2 items-center px-6 py-28 gap-28">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={picture1} alt="Profile" className="rounded-3xl shadow-xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Freelance Marketing cu Impact Real</h1>
          <p className="text-lg md:text-xl mb-6">Construiesc strategii smart de marketing digital care atrag clienți și cresc branduri.</p>
          <Button className="text-lg bg-[#a36d75] text-white hover:bg-[#e8b8c6]">Programează o consultare</Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Despre mine</h2>
            <p className="text-lg">Sunt Teodora, freelancer în marketing digital, cu o abordare personalizată și creativă. Îmbin strategia cu storytellingul și conținutul vizual, pentru ca brandurile să strălucească în online.</p>
          </div>
          <div className="flex justify-center">
            <img src={aboutme} alt="AboutMe" className="rounded-3xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#e9dcc4] dark:bg-[#2e2e2e] px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Serviciile mele</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {["Content writing SEO", "Editare & Reels", "Strategii Social Media", "Consultanță & Audit"].map((text, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
              className="w-40 h-40 flex items-center justify-center text-center rounded-full shadow-lg text-[#2e2e2e]"
              style={{ backgroundColor: serviceColors[index % serviceColors.length] }}
            >
              <p className="text-sm font-semibold px-4">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Rezultate în cifre</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{
            value: 120,
            label: "Postări lunare"
          }, {
            value: 20,
            label: "Clienți activi"
          }, {
            value: 6,
            label: "Ani experiență"
          }, {
            value: 300,
            label: "Reels editate"
          }].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-[#a36d75]">
                <CountUp end={item.value} duration={3} />
              </div>
              <p className="mt-2 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Ce spun clienții</h2>
        <TestimonialSlider />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#e9dcc4] dark:bg-[#2e2e2e] px-6">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Gata să lucrăm împreună?</h2>
            <p className="mb-6 text-lg">📩 <a href="mailto:teodoracara.smm@yahoo.com" className="underline">teodoracara.smm@yahoo.com</a><br />📱 Instagram: <a href="https://instagram.com/social.byteodora" className="underline">@social.byteodora</a></p>
            <Button className="text-lg bg-[#a36d75] text-white hover:bg-[#e8b8c6]">Trimite un mesaj</Button>
          </div>
          <div className="flex justify-center">
            <img src={picture2} alt="Contact" className="rounded-3xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* Easter Egg */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#a36d75] text-white px-6 py-4 rounded-2xl shadow-2xl text-xl font-bold z-50"
          >
            🎉 Te-ai conectat cu o super-freelancer! 🎉
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}