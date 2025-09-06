import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  PartyPopper,
  UserCheck,
  ClipboardList
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';



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
    { name: 'CALOY', image: 'team_images/caloy.png', role: 'WEBSITE DEVELOPER' },
    { name: 'OLI', image: 'team_images/oliver.png', role: 'VA LEAD GENERATION' },
    { name: 'MARIAN', image: 'team_images/marian.png', role: 'VA BOOKEEPER' },
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

  // Animation variants for smooth entry and transitions
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1], // Correct easing type
      },
    },
  };

  const cardHoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  const buttonHoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

 const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (form.current) {
      emailjs
        .sendForm(
          "service_73i1j1a",     // ✅ your service ID
          "template_45p8mh7",    // ✅ your template ID
          form.current,
          "p8C4pNE6hK_jJG3Br"    // ✅ your public key
        )
        .then(
          () => {
            setStatus("✅ Your inquiry has been sent successfully!");
            form.current?.reset(); // clear form after submit
          },
          () => {
            setStatus("❌ Something went wrong. Please try again.");
          }
        )
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    // The main container. We'll use a neutral background and a common font.
    // The `bg-black/90` with `bg-blend-multiply` on the header creates the image overlay effect.
    <div className=" font-sans waving-background text-gray-800 antialiased overflow-x-hidden">
      {/* Tailwind CSS is assumed to be available in the environment. */}

      {/* Header Section */}
      <motion.header
        className="relative bg-[url('bg/tandem.png')] bg-cover bg-center"
        style={{
          minHeight: '120vh',
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Dark overlay to make text more readable */}
        <div className="absolute inset-0 "></div>

        {/* Header content */}
        <motion.div
          className="relative z-10 flex flex-col items-start justify-center h-full p-8 md:p-16 lg:p-24"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl text-[#212107] font-bold uppercase leading-10 tracking-wide text-left flex items-center"
            variants={itemVariants}
          >
            <span className="flex items-center font-baskerville">
              THE WEDDING &nbsp;
              <span className="flex items-center" style={{ marginTop: '0.2rem' }}>
                <img
                  src="/admin.png"
                  alt="A"
                  className="h-8 sm:h-10 md:h-10 mx-1 inline-block"
                />
              </span>
              DMIN
            </span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base font-montserrat font-medium mb-20 text-[#212107] leading-relaxed max-w-xl text-left tracking-wider"
            variants={itemVariants}
          >
            <span className="whitespace-nowrap">
              STREAMLINING BUSINESS SUCCESS FOR WEDDING AND EVENT PROFESSIONALS
            </span>
          </motion.p>
          <motion.p
            className="text-3xl sm:text-4xl font-baskerville md:text-5xl text-[#212107] font-bold mb-6 max-w-2xl leading-none text-left"
            variants={itemVariants}
          >
            FLAT OUT WITH
            <br />
            WEDDINGS AND BARELY
            <br />
            KEEPING UP?
          </motion.p>
          <motion.p
            className="text-xl font-montserrat sm:text-2xl leading-relaxed text-[#212107] font-semibold mb-1 max-w-xl"
            variants={itemVariants}
          >
            NO NEED TO DO IT ALL
            <br />
            YOURSELF, MATE.
          </motion.p>
          <motion.p
            className="text-lg font-medium mb-2 max-w-xl font-montserrat text-[#212107] leading-relaxed tracking-widest"
            variants={itemVariants}
          >
            From emails to bookkeeping
            <br />
            and socials, we’ll sort the
            <br />
            nitty-gritty so you can focus
            <br />
            on your clients.
          </motion.p>
          <motion.a
            href="#"
            className="flex items-center gap-3 bg-[#212107] text-white font-semibold font-montserrat tracking-wider p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#3a3a16]"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK A FREE CONSULTATION
            <motion.span
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white"
              whileHover={{ x: 5 }} // arrow moves slightly to the right on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-[#212107] transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={4}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.header>

      {/* The form section with the black background */}
      <motion.section
        className="bg-[#212107] text-white py-50 lg:py-10 md:py-10 px-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ marginTop: '-100px' }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Text content on the left */}
          <div className="md:w-1/2">
            <h1 className="font-baskerville text-4xl md:text-5xl font-bold mb-6">
              WEDDING AND
              <br />
              EVENT SUPPLIERS' 
              <br />BEST MATE
            </h1>
            <p className="font-light leading-relaxed font-montserrat text-xl">
              Running a wedding or events business isn’t just about creativity – it takes solid organisation, time management, and a keen eye for detail. That’s where <span className="font-semibold">The Wedding Admin</span> comes in. With experience both as a <span className='font-semibold'>Virtual Assistant</span>  and a <span className='font-semibold'>Wedding & Events Planner</span>, I get the juggle you’re dealing with. That’s why I’ve put together a service to take the pressure off – from sorting out the admin and emails to keeping things ticking along behind the scenes – so you can focus on what you do best: pulling off unforgettable events.
            </p>
          </div>

          {/* Contact form on the right */}
          <motion.div
            className="md:w-1/2 px-20 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white p-10 rounded-[50px] w-[40vw] shadow-2xl backdrop-blur-sm">
              <p className="text-4xl font-semibold mb-4 text-start font-baskerville text-[#212107]">
                WANT TO FOCUS ON WHAT 
                <br />
                MATTERS MOST? SAY G'DAY 
                <br />
                IN THE FORM BELOW!
              </p>
              <form 
              ref={form}
              onSubmit={sendEmail}
                className="space-y-4 justify-center flex flex-col items-center"
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="YOUR NAME"
                  className="w-full text-xl font-bold font-montserrat bg-[#dadada] text-gray-500 rounded-[20px] p-5 placeholder-gray-400 tracking-wider focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                />
                <input
                  type="text"
                  name="user_business"
                  placeholder="YOUR BUSINESS NAME"
                  className="w-full text-xl font-bold font-montserrat bg-[#dadada] text-gray-500 rounded-[20px] p-5 placeholder-gray-400 tracking-wider focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full text-xl font-bold font-montserrat bg-[#dadada] text-gray-500 rounded-[20px] p-5 placeholder-gray-400 tracking-wider focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                />
                <textarea
                  placeholder="INQUIRY"
                  name="user_inquiry"
                  rows={4}
                  className="w-full text-xl font-bold font-montserrat bg-[#dadada] text-gray-500 rounded-[20px] p-5 placeholder-gray-400 tracking-wider focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                ></textarea>
                <motion.button
                  type="submit"
                  disabled={loading}
                  className={`w-[150px] flex justify-center items-center self-center font-montserrat tracking-wider font-bold py-3 rounded-[20px] shadow-lg transition-all duration-300 
                    ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#212107] text-white hover:scale-105"}`}
                  whileTap={{ scale: 0.95 }}
                  whileHover={buttonHoverEffect}
                >
                  {loading ? "Sending..." : "SUBMIT"}
                </motion.button>
              </form>
              {status && (
                <p
                  className={`mt-4 text-lg font-semibold ${
                    status.startsWith("✅") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>
      

      {/* Team section */}
      <section className=" waving-background-team h-auto py-20 px-10">
        <div className="container mx-auto">
          <motion.div className=" flex flex-row ">
            <motion.div className="">
              <motion.h2
                className="text-8xl font-bold font-baskerville text-[#212107] text-start "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                SAY HELLO TO THE TEAM
              </motion.h2>
              <motion.p
                className=" font-montserrat text-[#212107] text-start text-3xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                THE HEART OF <span className=" font-bold">THE WEDDING ADMIN</span>
              </motion.p>
            </motion.div>
            <motion.img src='team_images/vine.png' className="relative right-[-100px] top-[-20px] w-[53%] h-auto rounded-lg  mb-4">

            </motion.img>
          </motion.div>
          
          <motion.div className="flex flex-col  items-center ">
            {/* Team leader section */}
            <motion.div
              className="w-full  flex flex-row text-center space-x-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src="/team_images/miguel.png"
                alt="Miguel / Miggy"
                className="w-auto h-[60vh] rounded-lg shadow-xl mb-4"
              />
              <motion.div className="flex flex-col justify-start items-start ">
                <motion.div className="flex flex-col text-start ">
                  <h3 className="text-6xl font-bold font-baskerville tracking-wider text-[#212107]">MIGUEL/MIGGY</h3>
                  <p className=" text-2xl mt-1 font-montserrat font-medium tracking-wider text-[#212107]">VA PRODUCTIVITY STRATEGIST | FOUNDER</p>
                </motion.div>
                <motion.p className="font-montserrat tracking-wider text-justify text-[#212107] justify-center text-justify text-2xl mt-4 leading-relaxed">
                  With a passion for creating seamless experiences, Miguel brings a unique combination of expertise in the events and virtual assistant industries. As a wedding planner and souvenir photographer, Miguel has been immersed in the wedding scene for over a decade, working under the mentorship of an 11-year industry veteran. In this time, he has played a pivotal role in coordinating and executing over 100 weddings, ensuring every detail is flawlessly managed.
                </motion.p>
              </motion.div>
            </motion.div>
            <motion.div className="flex flex-col text-justify space-y-4">
              <motion.p className="font-montserrat tracking-wider text-justify text-[#212107] justify-center text-justify text-2xl mt-4 leading-relaxed">
                Complementing this hands-on events experience, Miguel has spent nearly three years as a Virtual Executive Assistant, supporting Australian and U.S. business owners across various industries. His background in streamlining operations and managing day-to-day tasks makes him a versatile and results-driven professional.
              </motion.p>
              <motion.p className="font-montserrat tracking-wider text-justify text-[#212107] justify-center text-justify text-2xl mt-4 leading-relaxed">
                Through <span className="font-bold">The Wedding Admin</span>, Miguel combines his passion for organization and his understanding of the wedding and event world to help industry professionals thrive by providing tailored virtual assistance services.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Other team members */}
          <motion.div
            className="flex flex-col sm:flex-row  justify-center items-center gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={cardHoverEffect}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-[20px] h-[60vh] object-cover  mx-auto mb-4"
                />
                <p className="text-6xl font-bold text-[#212107] font-baskerville">{member.name}</p>
                <p className="text-xm font-semibold font-montserrat">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment section with the light background and overlay */}
      {/* <motion.section
        className="relative py-20 bg-[url('https://placehold.co/1920x1080/f3f4f6/6b7280?text=Background')] bg-cover bg-center text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.p
            className="text-xl md:text-2xl font-semibold mb-4"
            variants={itemVariants}
          >
            WOULD YOU INVEST AUD 50.00 PER HOUR ...
          </motion.p>
          <motion.p
            className="text-3xl md:text-5xl font-bold mb-8"
            variants={itemVariants}
          >
            if that means you can earn an extra AUD 500.00 per hour?
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl font-light"
            variants={itemVariants}
          >
            HOW ABOUT JUST AUD 12.50?
          </motion.p>
        </div>
      </motion.section> */}

      {/* "How It Works" section */}
      {/* <section className="bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            HOW IT WORKS
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={cardHoverEffect}
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="font-light leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Footer Section */}
      {/* <footer className="bg-gray-950 text-gray-500 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-4">
            TRUSTED BY EVENT SUPPLIERS
          </p> */}
          {/* Testimonials */}
          {/* <motion.div
            className="text-gray-400 text-sm mb-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
          </motion.div>

          <div className="flex justify-center space-x-6 mb-8">
            <motion.a href="#" aria-label="Facebook" whileHover={{ scale: 1.2 }}>
              <Facebook className="w-6 h-6 hover:text-white transition-colors" />
            </motion.a>
            <motion.a href="#" aria-label="Instagram" whileHover={{ scale: 1.2 }}>
              <Instagram className="w-6 h-6 hover:text-white transition-colors" />
            </motion.a>
            <motion.a href="#" aria-label="Twitter" whileHover={{ scale: 1.2 }}>
              <Twitter className="w-6 h-6 hover:text-white transition-colors" />
            </motion.a>
            <motion.a href="#" aria-label="LinkedIn" whileHover={{ scale: 1.2 }}>
              <Linkedin className="w-6 h-6 hover:text-white transition-colors" />
            </motion.a>
          </div>
          <p className="text-sm">
            © 2024 THE WEDDING ADMIN | ALL RIGHTS RESERVED
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default PortfolioPage;