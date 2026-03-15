"use client";

import Image from "next/image";
import { useState } from "react";

const PRODUCTS = [
  {
    name: "Sourdough",
    description: "48-hour fermented, stone-baked with a deep, tangy crumb and crispy crust.",
    price: "€4.80",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&h=600&fit=crop&q=80",
    fresh: ["Monday", "Wednesday", "Friday"],
  },
  {
    name: "Alpine Rye",
    description: "Dense, hearty rye with caraway seeds and a dark, malty sweetness.",
    price: "€5.20",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop&q=80",
    fresh: ["Tuesday", "Thursday", "Saturday"],
  },
  {
    name: "Walnut Ciabatta",
    description: "Airy Italian-style bread studded with roasted Tyrolean walnuts.",
    price: "€5.50",
    image: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=600&h=600&fit=crop&q=80",
    fresh: ["Monday", "Thursday"],
  },
  {
    name: "Butter Croissant",
    description: "Flaky, golden layers of French-style pastry made with alpine butter.",
    price: "€3.20",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=600&fit=crop&q=80",
    fresh: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  {
    name: "Pretzel",
    description: "Traditional Bavarian-style, chewy with a dark, salted crust.",
    price: "€2.80",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=600&fit=crop&q=80",
    fresh: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  {
    name: "Apple Strudel",
    description: "Paper-thin pastry filled with spiced apples, raisins, and cinnamon sugar.",
    price: "€4.50",
    image: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?w=600&h=600&fit=crop&q=80",
    fresh: ["Wednesday", "Saturday", "Sunday"],
  },
];

const SCHEDULE = [
  {
    time: "Morning",
    hours: "6:00 – 10:00",
    icon: "☀️",
    items: "Sourdough, Croissants, Pretzels, Fresh rolls",
  },
  {
    time: "Afternoon",
    hours: "12:00 – 15:00",
    icon: "🌤️",
    items: "Ciabatta, Rye bread, Focaccia, Sandwiches",
  },
  {
    time: "Evening",
    hours: "16:00 – 18:30",
    icon: "🌙",
    items: "Strudel, Pastries, Day-end specials (20% off)",
  },
];

function getTodayName() {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#story", label: "Our Story" },
    { href: "#bread", label: "The Bread" },
    { href: "#schedule", label: "Daily Fresh" },
    { href: "#find-us", label: "Find Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brown-600/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-heading text-cream text-xl tracking-wide">
            Alpine Bakery
          </a>
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream/80 hover:text-wheat transition-colors text-sm tracking-wider uppercase"
              >
                {l.label}
              </a>
            ))}
          </div>
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cream"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-cream/80 hover:text-wheat transition-colors text-sm tracking-wider uppercase py-2"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1920&h=1080&fit=crop&q=80"
        alt="Fresh bread in a rustic bakery"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <p className="text-wheat-200 tracking-[0.3em] uppercase text-sm mb-4 font-body">
          Innsbruck, Austria
        </p>
        <h1 className="font-heading text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-lg">
          Alpine
          <br />
          Bakery
        </h1>
        <p className="text-white/95 text-lg sm:text-xl font-body max-w-2xl mx-auto leading-relaxed">
          Handcrafted bread, baked fresh daily since 1987
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#bread"
            className="bg-brick text-cream px-8 py-3 rounded-full font-body text-sm uppercase tracking-wider hover:bg-brick-600 transition-colors"
          >
            Our Breads
          </a>
          <a
            href="#find-us"
            className="border border-cream/40 text-cream px-8 py-3 rounded-full font-body text-sm uppercase tracking-wider hover:bg-cream/10 transition-colors"
          >
            Visit Us
          </a>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-cream/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cream/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section id="story" className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556217477-d325251ece38?w=800&h=1000&fit=crop&q=80"
            alt="Baker kneading dough"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-brick uppercase tracking-[0.2em] text-sm font-body mb-4">
            Our Story
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-brown mb-6 leading-tight">
            Three generations
            <br />
            of baking
          </h2>
          <div className="space-y-4 text-brown-300 leading-relaxed text-base">
            <p>
              In 1987, Friedrich Berger converted a small alpine chalet on Innstraße into
              something the neighborhood didn&apos;t know it needed: a bakery that treated bread
              like an art form. Armed with his grandmother&apos;s sourdough starter — now nearly
              80 years old — and a stubborn commitment to slow fermentation, he built Alpine
              Bakery loaf by loaf.
            </p>
            <p>
              Today, his granddaughter Lena runs the ovens. The starter is the same. The stone
              oven is the same. The flour still comes from Müller&apos;s farm in Stubaital, just
              as it did when Friedrich first opened the doors. What&apos;s changed? Not much,
              really. And that&apos;s the point.
            </p>
            <p>
              We believe great bread needs three things: good flour, patient hands, and time.
              No shortcuts. No preservatives. Just bread the way it should be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[0] }) {
  const today = getTodayName();
  const isFresh = product.fresh.includes(today);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {isFresh && (
          <div className="absolute top-3 right-3 bg-brick text-cream text-xs px-3 py-1 rounded-full font-body uppercase tracking-wider">
            Fresh Today
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-heading text-xl text-brown">{product.name}</h3>
          <span className="text-brick font-heading text-lg">{product.price}</span>
        </div>
        <p className="text-brown-400 text-sm leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}

function TheBread() {
  return (
    <section id="bread" className="py-24 px-4 bg-wheat-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brick uppercase tracking-[0.2em] text-sm font-body mb-4">
            The Bread
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-brown mb-4">
            Baked with intention
          </h2>
          <p className="text-brown-400 max-w-lg mx-auto text-base leading-relaxed">
            Every loaf tells a story. Slow-fermented, stone-baked, made with flour from
            local Tyrolean farms.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DailySchedule() {
  return (
    <section id="schedule" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brick uppercase tracking-[0.2em] text-sm font-body mb-4">
            Daily Schedule
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-brown mb-4">
            What&apos;s fresh &amp; when
          </h2>
          <p className="text-brown-400 text-base">
            We bake in batches throughout the day. Here&apos;s when to catch your favorites.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SCHEDULE.map((slot) => (
            <div
              key={slot.time}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{slot.icon}</div>
              <h3 className="font-heading text-2xl text-brown mb-1">{slot.time}</h3>
              <p className="text-brick text-sm font-body mb-4">{slot.hours}</p>
              <p className="text-brown-400 text-sm leading-relaxed">{slot.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FindUs() {
  return (
    <section id="find-us" className="py-24 px-4 bg-brown-600">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="text-cream">
          <p className="text-wheat uppercase tracking-[0.2em] text-sm font-body mb-4">
            Find Us
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl mb-8">
            Come say hello
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-wheat text-lg mb-2">Address</h3>
              <p className="text-cream/80 leading-relaxed">
                Innstraße 27
                <br />
                6020 Innsbruck
                <br />
                Austria
              </p>
            </div>
            <div>
              <h3 className="font-heading text-wheat text-lg mb-2">Hours</h3>
              <div className="text-cream/80 space-y-1 text-sm">
                <p>Monday – Friday: 6:00 – 18:30</p>
                <p>Saturday: 7:00 – 16:00</p>
                <p>Sunday: 8:00 – 13:00</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-wheat text-lg mb-2">Contact</h3>
              <p className="text-cream/80 text-sm">
                +43 512 123 456
                <br />
                hallo@alpinebakery.at
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden min-h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.5!2d11.3905!3d47.2654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d6ecf1e0216e1%3A0x1234567890abcdef!2sInnstra%C3%9Fe%2027%2C%206020%20Innsbruck%2C%20Austria!5e0!3m2!1sen!2sat!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alpine Bakery — Innstraße 27, Innsbruck"
          />
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 px-4 bg-wheat-100">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-heading text-3xl sm:text-4xl text-brown mb-4">
          Get fresh updates
        </h2>
        <p className="text-brown-400 mb-8 text-base">
          Join our newsletter for weekly specials, seasonal recipes, and bakery news.
          No spam — just bread.
        </p>
        {submitted ? (
          <div className="bg-white rounded-full px-6 py-4 text-brown">
            <p className="font-heading text-lg">Welcome to the family! 🍞</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubmitted(true);
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-3 rounded-full bg-white text-brown placeholder:text-brown-200 focus:outline-none focus:ring-2 focus:ring-wheat"
            />
            <button
              type="submit"
              className="bg-brick text-cream px-8 py-3 rounded-full font-body text-sm uppercase tracking-wider hover:bg-brick-600 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brown-800 text-cream/60 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading text-cream text-lg">Alpine Bakery</div>
        <p className="text-sm">
          © {new Date().getFullYear()} Alpine Bakery. Made with flour, water, salt &amp; love.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-wheat transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-wheat transition-colors">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OurStory />
      <TheBread />
      <DailySchedule />
      <FindUs />
      <Newsletter />
      <Footer />
    </main>
  );
}
