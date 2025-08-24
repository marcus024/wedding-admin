import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  PartyPopper,
  UserCheck,
  ClipboardList
} from 'lucide-react';

// This is a placeholder component for the main portfolio page.
// In a real Inertia.js application, this component would receive
// props from a server-side controller (e.g., Laravel, Rails).

// Define the type for any props this component might receive.
// The linter warns against empty interfaces, so we'll be more explicit.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

const PortfolioPage: React.FC<Props> = () => {
  // Hardcoded data for the team members to match the image.
  const teamMembers = [
    { name: 'CALOY', image: 'https://placehold.co/300x300/a39e99/ffffff?text=CALOY' },
    { name: 'OLI', image: 'https://placehold.co/300x300/a39e99/ffffff?text=OLI' },
    { name: 'MARIAN', image: 'https://placehold.co/300x300/a39e99/ffffff?text=MARIAN' },
  ];

  // Hardcoded data for the "How It Works" section.
  const howItWorksSteps = [
    {
      icon: <PartyPopper className="w-12 h-12 text-black/80 mb-4" />,
      title: 'CUSTOM CONSULTATION EXPERIENCE',
      description: 'At The Wedding Admin, we make outsourcing simple and easy. Book a free consultation session to discuss your goals and identify the tasks you can delegate, giving you more time to focus on what truly matters whether it\'s growing your business or spending quality time with loved ones.',
    },
    {
      icon: <UserCheck className="w-12 h-12 text-black/80 mb-4" />,
      title: 'BRINGING THE RIGHT FIT',
      description: 'With the result of the custom consultation, we\'ll interview skilled applicants, conduct thorough background checks, and match you with the perfect fit. Beyond finding the right fit, Miguel will personally oversee every task, ensuring it\'s completed accurately, and efficiently while helping you build a seamless and successful partnership tailored to your business needs.',
    },
    {
      icon: <ClipboardList className="w-12 h-12 text-black/80 mb-4" />,
      title: 'FOCUS ON WHAT TRULY MATTERS',
      description: 'Once your VA has access to your accounts, you\'re free to go! With all the tasks taken care of, you\'ll enjoy more free time than ever before. Go on a weekend getaway, catch up with your mates, or explore new opportunities. Less stress, more freedom... with The Wedding Admin, it\'s happy days all around!',
    },
  ];

  return (
    // The main container. We'll use a neutral background and a common font.
    // The `bg-black/90` with `bg-blend-multiply` on the header creates the image overlay effect.
    <div className="bg-white font-sans text-gray-800 antialiased">
      {/* Tailwind CSS is assumed to be available in the environment. */}

      {/* Header Section */}
      <header
        className="relative bg-[url('https://placehold.co/1920x1080/4b5563/ffffff?text=THE+WEDDING+ADMIN')] bg-cover bg-center"
        style={{
          minHeight: '85vh',
        }}
      >
        {/* Dark overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Header content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white p-8 md:p-16 lg:p-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wide">
            THE WEDDING ADMIN
          </h1>
          <p className="text-sm sm:text-base font-light mb-6 leading-relaxed max-w-xl">
            STREAMLINING BUSINESS SUCCESS FOR WEDDING AND EVENT PROFESSIONALS
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-xl leading-snug">
            FLAT OUT WITH WEDDINGS AND BARELY KEEPING UP?
          </p>
          <p className="text-xl sm:text-2xl font-semibold mb-4 max-w-xl">
            NO NEED TO DO IT ALL YOURSELF, MATE.
          </p>
          <p className="text-lg font-light mb-8 max-w-xl">
            From emails to bookkeeping and socials, we’ll sort the nitty-gritty so you can focus on your clients.
          </p>
          <a
            href="#"
            className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300"
          >
            BOOK A FREE CONSULTATION
          </a>
        </div>
      </header>

      {/* The form section with the black background */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Text content on the left */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              WEDDING AND EVENT SUPPLIERS' BEST MATE
            </h2>
            <p className="font-light leading-relaxed">
              Running a wedding or events business isn’t just about creativity – it takes solid organisation, time management, and a keen eye for detail. That’s where **The Wedding Admin** comes in. With experience both as a **Virtual Assistant** and a **Wedding & Events Planner**, I get the juggle you’re dealing with. That’s why I’ve put together a service to take the pressure off – from sorting out the admin and emails to keeping things ticking along behind the scenes – so you can focus on what you do best: pulling off unforgettable events.
            </p>
          </div>

          {/* Contact form on the right */}
          <div className="md:w-1/2 w-full">
            <div className="bg-gray-800/80 p-8 rounded-xl shadow-2xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">
                WANT TO FOCUS ON WHAT MATTERS MOST? SAY G'DAY IN THE FORM BELOW!
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full bg-gray-700/60 text-white rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="text"
                  placeholder="YOUR BUSINESS NAME"
                  className="w-full bg-gray-700/60 text-white rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-gray-700/60 text-white rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <textarea
                  placeholder="INQUIRY"
                  rows={4}
                  className="w-full bg-gray-700/60 text-white rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            SAY HELLO TO THE TEAM
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Team leader section */}
            <div className="w-full md:w-1/3 text-center">
              <img
                src="https://placehold.co/300x400/f3f4f6/6b7280?text=MIGUEL"
                alt="Miguel / Miggy"
                className="w-full h-auto rounded-lg shadow-xl mb-4"
              />
              <h3 className="text-2xl font-bold">MIGUEL / MIGGY</h3>
              <p className="text-gray-500 text-sm mt-1">VA PRODUCTIVITY STRATEGIST | FOUNDER</p>
            </div>

            {/* Team description section */}
            <div className="w-full md:w-2/3">
              <p className="leading-relaxed text-gray-600 mb-4">
                With a passion for creating seamless experiences, Miguel brings a unique combination of expertise in the events and virtual assistant industries. As a wedding planner and souvenir photographer, Miguel has been immersed in the wedding scene for over a decade, working under the mentorship of an 11-year industry veteran. In this time, he has played a pivotal role in coordinating and executing over 100 weddings, ensuring every detail is flawlessly managed.
              </p>
              <p className="leading-relaxed text-gray-600 mb-4">
                Complementing this hands-on events experience, Miguel has spent nearly three years as a Virtual Executive Assistant, supporting Australian and U.S. business owners across various industries. His background in streamlining operations and managing day-to-day tasks makes him a versatile and results-driven professional.
              </p>
              <p className="leading-relaxed text-gray-600 mb-4">
                Through The Wedding Admin, Miguel combines his passion for organization and his understanding of the wedding and event world to help industry professionals thrive by providing tailored virtual assistance services.
              </p>
            </div>
          </div>

          {/* Other team members */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-gray-200"
                />
                <p className="text-lg font-semibold">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment section with the light background and overlay */}
      <section className="relative py-20 bg-[url('https://placehold.co/1920x1080/f3f4f6/6b7280?text=Background')] bg-cover bg-center text-center text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <p className="text-xl md:text-2xl font-semibold mb-4">
            WOULD YOU INVEST AUD 50.00 PER HOUR ...
          </p>
          <p className="text-3xl md:text-5xl font-bold mb-8">
            if that means you can earn an extra AUD 500.00 per hour?
          </p>
          <p className="text-xl md:text-2xl font-light">
            HOW ABOUT JUST AUD 12.50?
          </p>
        </div>
      </section>

      {/* "How It Works" section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            HOW IT WORKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-950 text-gray-500 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-4">
            TRUSTED BY EVENT SUPPLIERS
          </p>
          {/* Testimonials */}
          <div className="text-gray-400 text-sm mb-8 space-y-4">
            <p className="font-light italic">
              "You're doing so well, Miggy. I'm like a proud mom!"
              <br />
              <span className="font-normal text-gray-500">- Zsarina, Weddings by Zilla</span>
            </p>
            <p className="font-light italic">
              "Have absolutely loved your work to this point. Not only am I getting things done I would never have imagined, I'm starting to get paid with design work, I'm getting time to play footy and go for runs, and most importantly - be with my little family. Mick was Gobsmacked with our profit margin increase, and he really gets like that!"
              <br />
              <span className="font-normal text-gray-500">- Jacob, Wedding Souvenir</span>
            </p>
            <p className="font-light italic">
              "Thanks for being capable and dependable staff. Appreciated :)"
              <br />
              <span className="font-normal text-gray-500">- Grace, Event Photographer</span>
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-white transition-colors" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-white transition-colors" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-white transition-colors" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-white transition-colors" />
            </a>
          </div>
          <p className="text-sm">
            © 2024 THE WEDDING ADMIN | ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
