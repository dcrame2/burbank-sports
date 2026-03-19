import Image from "next/image";
import { AnimateOnScroll, StaggerChildren } from "@/components/animate-on-scroll";
import { FloatingSportsIcons, FloatingSportsIconsLight } from "@/components/floating-sports";
import { Navbar } from "@/components/navbar";

const PHONE = "(708) 422-7777";
const PHONE_HREF = "tel:+17084227777";
const EMAIL = "burbanksports2@juno.com";
const ADDRESS = "5500 W 79th St, Burbank, IL 60459";
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.5!2d-87.78!3d41.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3a0f0f0f0f0f%3A0x0!2s5500+W+79th+St%2C+Burbank%2C+IL+60459!5e0!3m2!1sen!2sus!4v1";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=5500+W+79th+St+Burbank+IL+60459";
const FACEBOOK = "https://www.facebook.com/BurbankSportsInc";

const hours = [
  { day: "Monday", time: "10 AM – 5 PM" },
  { day: "Tuesday", time: "10 AM – 5 PM" },
  { day: "Wednesday", time: "10 AM – 5 PM" },
  { day: "Thursday", time: "10 AM – 5 PM" },
  { day: "Friday", time: "10 AM – 5 PM" },
  { day: "Saturday", time: "10 AM – 4 PM" },
  { day: "Sunday", time: "Closed" },
];

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 11h-.008a.75.75 0 01-.742-.75V6.375a3.375 3.375 0 00-3-3.354M7.5 18.75v-4.5A3.375 3.375 0 0111.25 11h.008a.75.75 0 01.742.75v3.875" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25l1.5 3h3l-2.25 2.25.75 3L12 9l-3 1.5.75-3L7.5 5.25h3L12 2.25z" />
      </svg>
    ),
    title: "Trophies & Awards",
    description:
      "Custom trophies, medals, and corporate plaques for your MVP, entire team, or employees.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: "Custom Uniforms",
    description:
      "Design uniforms and clothing for your school, league, or workplace — delivered directly to you.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Silk Screen Printing",
    description:
      "High-quality screen printing on any garment. Perfect for teams, events, and organizations.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
      </svg>
    ),
    title: "Custom Monogramming",
    description:
      "Personalized embroidery and monogramming to make every piece uniquely yours.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Laser Engraving",
    description:
      "Precision laser engraving on any material — glass, wood, metal, and more.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
    title: "Letterman Jackets",
    description:
      "Classic varsity letterman jackets customized for your school, team, and achievements.",
  },
];

const jacketGallery = [
  { src: "/images/jacket-navy-front.jpg", alt: "Navy letterman jacket with grey leather sleeves - front" },
  { src: "/images/jacket-navy-back.jpg", alt: "Navy letterman jacket with grey leather sleeves - back" },
  { src: "/images/jacket-strita-back.jpg", alt: "St. Rita HS custom letterman jacket - back" },
  { src: "/images/jacket-strita-front.jpg", alt: "Black and red letterman jacket - front" },
  { src: "/images/jacket-green-front.jpg", alt: "Green letterman jacket with black leather sleeves - front" },
  { src: "/images/jacket-green-back.jpg", alt: "Green letterman jacket with black leather sleeves - back" },
  { src: "/images/jacket-maroon-front.jpg", alt: "Maroon letterman jacket with custom name - front" },
  { src: "/images/jacket-maroon-back.jpg", alt: "Argo Basketball Softball letterman jacket - back" },
  { src: "/images/jacket-navy-hood-front.jpg", alt: "Navy hooded letterman jacket - front" },
  { src: "/images/jacket-navy-hood-back.jpg", alt: "Navy hooded letterman jacket - back" },
];

const reviews = [
  {
    name: "Don Helms",
    initial: "D",
    color: "bg-red-light",
    rating: 5,
    text: "Great service awesome shirts/sweatshirts any design I give them they can copy or create and put on anything for a great price. Any color clothing and any color print whatever you want they will figure out a way to do it. Will definitely continue using them and referring as much as possible.",
  },
  {
    name: "MR L",
    initial: "M",
    color: "bg-primary",
    rating: 5,
    text: "Rich and Staff are true professionals. Highly recommend, I use Burbank Sports for all my jersey and apparel printing along with trophy and award orders.",
  },
  {
    name: "Stacy Unser",
    initial: "S",
    color: "bg-red",
    rating: 5,
    text: "I love this place!! I have had custom winter hats for 3yrs for my sons' hockey teams. The work is phenomenal and they are quick!!",
  },
  {
    name: "Dawn Booth",
    initial: "D",
    color: "bg-primary-light",
    rating: 5,
    text: "Family owned place ... very welcoming family ... and best custom work I've ever bought and reasonable prices ... highly recommended. They are great.",
  },
  {
    name: "Sebastian Sandoval",
    initial: "S",
    color: "bg-red-dark",
    rating: 5,
    text: "I went here to get a sweater to wear at my school and the service was great and the cashier was hilarious. Giving it a 5.",
  },
  {
    name: "Sandra Dennis",
    initial: "S",
    color: "bg-primary-dark",
    rating: 5,
    text: "Great customer service this is my 3rd time using Burbank Sports!!!!",
  },
];

const GOOGLE_REVIEWS_LINK =
  "https://www.google.com/maps/place/Burbank+Sports/@41.7536,-87.7794,17z/data=!4m8!3m7!1s0x0:0x0!8m2!3d41.7536!4d-87.7794!9m1!1b1!16s";

export default function Home() {
  return (
    <>
      {/* ─── NAVIGATION ─── */}
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden bg-foreground">
        <Image
          src="/images/storefront-front.jpg"
          alt="Burbank Sports storefront"
          fill
          className="object-cover opacity-30 lg:opacity-100 lg:object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/40 lg:via-foreground/80 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/60 lg:hidden" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-32 lg:py-0 w-full">
          <div className="max-w-2xl">
            <AnimateOnScroll animation="fade-down" duration={600}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
                <span className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em]">
                  Family Owned Since 1970
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-right" duration={800} delay={200}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
                Burbank
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Sports
                </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={700} delay={400}>
              <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed mb-4 max-w-lg">
                Custom uniforms, letterman jackets, silk screen printing,
                monogramming, trophies &amp; awards — crafted with over 50 years of
                expertise.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={700} delay={500}>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Letterman Jackets", "Uniforms", "Screen Printing", "Trophies", "Engraving", "Monogramming"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-blue-200/80 border border-blue-400/20 rounded-full px-3 py-1.5 bg-blue-500/10"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={700} delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="group inline-flex items-center justify-center gap-3 bg-primary text-white font-bold px-6 py-3 rounded-full text-base sm:px-8 sm:py-4 sm:text-lg hover:bg-primary-light transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Quote Request&body=Hi Burbank Sports,%0D%0A%0D%0AI'd like to request a quote for:%0D%0A%0D%0A`}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold px-6 py-3 rounded-full text-base sm:px-8 sm:py-4 sm:text-lg hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  Get a Free Quote
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={700} delay={700}>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <svg className="w-4 h-4 text-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                5500 W 79th St, Burbank, IL 60459
              </a>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-primary-dark text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-2 text-sm font-medium">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            50+ Years in Business
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            Supplying Local Schools & Teams
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>
            Family Owned & Operated
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/></svg>
            Free Delivery Available
          </span>
        </div>
      </section>

      {/* ─── SERVICES ─── bg-white */}
      <section id="services" className="py-24 bg-white scroll-mt-16 relative">
        <FloatingSportsIcons count={15} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                What We Do
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Custom Work Is Our Specialty
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                From the field to the boardroom, we create custom merchandise for
                any occasion. Design it, and we&apos;ll make it happen.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerChildren animation="fade-up" staggerDelay={100}>
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group p-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-accent/30 hover:shadow-xl hover:shadow-blue-100/50 hover:border-primary-light/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-light py-16">
        <FloatingSportsIconsLight count={8} />
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-white/5 animate-spin-slow" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/5 animate-spin-slow" style={{ animationDirection: "reverse" }} />
        <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
          <AnimateOnScroll animation="zoom-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Design Your Custom Gear?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need 10 jerseys or 1,000 — we&apos;ll work with you to
              create something special. Call us or email for a free quote.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-full text-base sm:px-8 sm:py-4 sm:text-lg hover:bg-blue-50 transition-all shadow-lg hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Quote Request&body=Hi Burbank Sports,%0D%0A%0D%0AI'd like to request a quote for:%0D%0A%0D%0A`}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-full text-base sm:px-8 sm:py-4 sm:text-lg hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email for a Quote
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── LETTERMAN JACKET GALLERY ─── bg-muted */}
      <section id="gallery" className="py-24 bg-muted scroll-mt-16 relative">
        <FloatingSportsIcons count={10} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                Our Work
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Custom Letterman Jackets
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Every jacket tells a story. From school colors to personal
                embroidery, we craft varsity jackets that last a lifetime.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <StaggerChildren animation="zoom-in" staggerDelay={80}>
              {jacketGallery.map((jacket, i) => (
                <div
                  key={i}
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1"
                >
                  <Image
                    src={jacket.src}
                    alt={jacket.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </StaggerChildren>
          </div>
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="text-center mt-12">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full text-base sm:px-8 sm:py-4 sm:text-lg hover:bg-primary-dark transition-all shadow-lg hover:scale-105"
              >
                Order Your Custom Jacket
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── STOREFRONT ─── bg-white */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                Our Shop
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                The Home of Burbank Sports
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Serving the Chicagoland community from our shop on 79th Street since 1970.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
        {/* Scrolling image strip */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="flex gap-4 overflow-x-auto gallery-scroll px-6 pb-4 snap-x snap-mandatory">
            <div className="flex-none w-[85vw] sm:w-[60vw] lg:w-[500px] snap-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/storefront-corner.jpg"
                  alt="Burbank Sports store corner view"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 85vw, 500px"
                />
              </div>
            </div>
            <div className="flex-none w-[85vw] sm:w-[60vw] lg:w-[500px] snap-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/storefront-close.jpg"
                  alt="Burbank Sports storefront close up"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 85vw, 500px"
                />
              </div>
            </div>
            <div className="flex-none w-[85vw] sm:w-[60vw] lg:w-[500px] snap-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/storefront-sign.jpg"
                  alt="Burbank Sports street sign"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 85vw, 500px"
                />
              </div>
            </div>
            <div className="flex-none w-[85vw] sm:w-[60vw] lg:w-[500px] snap-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/ad-vintage.jpg"
                  alt="Burbank Sports vintage advertisement"
                  fill
                  className="object-contain bg-muted group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 85vw, 500px"
                />
              </div>
            </div>
            {/* Spacer so last card can scroll to center */}
            <div className="flex-none w-4" />
          </div>
        </AnimateOnScroll>
      </section>

      {/* ─── LEGACY / ABOUT THE FOUNDER ─── bg-muted */}
      <section id="legacy" className="py-24 bg-muted scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="fade-right" duration={900}>
              <div className="relative">
                <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/grandpa.jpg"
                    alt="Donald Cramer, founder of Burbank Sports"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient overlay at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">Est. 1970</p>
                    <p className="text-2xl font-bold">Donald Cramer</p>
                    <p className="text-sm text-gray-300">Founder, Burbank Sports</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={900} delay={200}>
              <div>
                <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                  Our Story
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  A Legacy of
                  <br />
                  <span className="text-primary">Craftsmanship</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    In 1970, Donald Cramer opened the doors to Burbank Sports with
                    a simple mission: serve the community with quality custom
                    sportswear and awards. What started as a small local shop on
                    79th Street grew into Chicagoland&apos;s go-to destination for
                    teams, schools, and organizations.
                  </p>
                  <p>
                    For over five decades, Donald poured his heart into every
                    jersey, every jacket, and every trophy that left this shop. He
                    believed that every team deserved to look and feel their best —
                    and that belief built relationships with generations of local
                    families and schools.
                  </p>
                  <p>
                    Though Donald has passed, his legacy lives on in every stitch,
                    every engraving, and every handshake at Burbank Sports. This is
                    still a family business, and we still do things his way — with
                    pride, care, and a commitment to getting it right.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <div className="h-px bg-blue-200 flex-1" />
                  <p className="text-primary font-semibold italic text-lg">
                    &ldquo;Custom Work Is Our Specialty&rdquo;
                  </p>
                  <div className="h-px bg-blue-200 flex-1" />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── bg-white */}
      <section id="reviews" className="py-24 bg-white scroll-mt-16 relative">
        <FloatingSportsIcons count={10} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                What People Say
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Trusted by the Community
              </h2>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl font-bold text-foreground">4.3</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map((i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="half">
                        <stop offset="50%" stopColor="currentColor" />
                        <stop offset="50%" stopColor="#d1d5db" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-muted-foreground text-sm">21 reviews on Google</span>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StaggerChildren animation="fade-up" staggerDelay={100}>
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-muted rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {review.name}
                      </p>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-blue-500 ml-auto" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              ))}
            </StaggerChildren>
          </div>
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="text-center mt-10">
              <a
                href={GOOGLE_REVIEWS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                See all 21 reviews on Google
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── LOCATION & HOURS ─── bg-muted */}
      <section id="location" className="py-24 bg-muted scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                Visit Us
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Come See Us in Person
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Stop by our shop in Burbank, IL. We&apos;d love to show you what
                we can do.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            {/* Left side — all info */}
            <AnimateOnScroll animation="fade-right">
              <div className="rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                {/* Blue gradient header */}
                <div className="bg-gradient-to-br from-primary to-primary-light p-6 sm:p-8 text-white">
                  <h3 className="text-xl font-bold mb-1">Get in Touch</h3>
                  <p className="text-blue-200 text-sm">We&apos;d love to hear from you</p>
                </div>

                {/* Contact rows */}
                <div className="bg-white p-5 sm:p-6 space-y-0 divide-y divide-gray-100">
                  <a href={PHONE_HREF} className="flex items-center gap-4 group py-4 first:pt-0">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-accent text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{PHONE}</p>
                      <p className="text-xs text-muted-foreground">Tap to call</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group py-4">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-accent text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">{EMAIL}</p>
                      <p className="text-xs text-muted-foreground">Send us an email</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group py-4 last:pb-0">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-red-accent text-red flex items-center justify-center group-hover:bg-red group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{ADDRESS}</p>
                      <p className="text-xs text-primary font-medium">Get directions &rarr;</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Store hours */}
                <div className="bg-muted/50 p-5 sm:p-6 flex-1">
                  <h3 className="text-xs font-bold text-muted-foreground mb-3 flex items-center gap-2 uppercase tracking-wider">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    Store Hours
                  </h3>
                  <div className="space-y-1.5">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className={`flex justify-between text-sm ${
                          h.time === "Closed" ? "text-red font-semibold" : "text-muted-foreground"
                        }`}
                      >
                        <span className="font-medium text-foreground text-sm">{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facebook footer */}
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-primary hover:bg-accent font-semibold transition-colors text-sm py-4 border-t border-gray-100"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Follow us on Facebook
                </a>
              </div>
            </AnimateOnScroll>

            {/* Right side — map */}
            <AnimateOnScroll animation="fade-left" delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Burbank Sports location"
                  className="absolute inset-0"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <FloatingSportsIconsLight count={12} />
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/5 animate-spin-slow" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 animate-spin-slow" style={{ animationDirection: "reverse" }} />
        <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
          <AnimateOnScroll animation="zoom-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let&apos;s Make Something Great
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
              Call us today and find out why we&apos;ve been doing business for
              over 50 years. Custom work is just a phone call away.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={300}>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-white text-primary font-bold px-8 py-4 rounded-full text-lg sm:px-10 sm:py-5 sm:text-xl hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 cta-pulse"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call {PHONE}
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold mb-2">Burbank Sports Inc.</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Family owned and operated since 1970. Custom work is our
                specialty — supplying your local schools and teams with quality
                merchandise for over 50 years.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-gray-400 text-sm">
                <a href={PHONE_HREF} className="hover:text-white transition-colors">
                  {PHONE}
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </p>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gray-400 text-sm hover:text-white transition-colors mt-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Store Hours</h4>
              <div className="space-y-1">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex justify-between text-sm gap-4 ${
                      h.time === "Closed" ? "text-red" : "text-gray-400"
                    }`}
                  >
                    <span className="text-gray-300">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:text-right">
              <h4 className="font-semibold mb-2">Location</h4>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                {ADDRESS}
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Burbank Sports Inc. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
