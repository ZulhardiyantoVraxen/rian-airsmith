import Image from "next/image";
import Link from "next/link";

const VIDEOS = [
  {
    id: "GQcYzFAlE1k",
    title: "PROMO‼️PREDATOR BLACK EAGLE FULL CNC GRATIS ONGKIR",
    views: "14K views",
    channel: "CV AHAS OUTDOOR",
  },
  {
    id: "6Ma9qk5QI9U",
    title: "Senapan Angin Predator Black Eagle",
    views: "Demo",
    channel: "CV AHAS OUTDOOR",
  },
];

const PRODUCTS = [
  {
    name: "Air Rifle",
    desc: "Senapan angin panjang untuk target dan hobi. Rangka kayu atau sintetis, kali .177 / .22.",
    price: "Dari Rp 2.500.000",
    img: "https://placehold.co/400x300?text=Air+Rifle+Rian+Airsmith",
  },
  {
    name: "Air Pistol",
    desc: "Pistol angin ringan untuk latihan tembak jarak dekat. Mudah dibawa dan dirawat.",
    price: "Dari Rp 1.800.000",
    img: "https://placehold.co/400x300?text=Air+Pistol+Rian+Airsmith",
  },
  {
    name: "Aksesoris",
    desc: "Peluru, target, tabung udara, dan peralatan pemeliharaan senapan angin.",
    price: "Dari Rp 50.000",
    img: "https://placehold.co/400x300?text=Aksesoris+Rian+Airsmith",
  },
];

export const metadata = {
  title: "Rian Airsmith | Senapan Angin Tangan Berkualitas",
  description:
    "Rian Airsmith adalah pengrajin senapan angin tangan dengan presisi dan kualitas tinggi. Tersedia air rifle, air pistol, dan aksesoris untuk olahraga tembak serta koleksi pribadi. Kirim ke seluruh Indonesia.",
  keywords: [
    "senapan angin",
    "air rifle",
    "air pistol",
    "rian airsmith",
    "pengrajin senapan angin",
    "senapan angin tangan",
    "jual senapan angin",
    "air gun Indonesia",
  ],
  openGraph: {
    title: "Rian Airsmith | Senapan Angin Tangan Berkualitas",
    description:
      "Pengrajin senapan angin tangan dengan presisi dan kualitas tinggi. Air rifle, air pistol, dan aksesoris.",
    type: "website",
    locale: "id_ID",
    siteName: "Rian Airsmith",
    images: [
      {
        url: "https://placehold.co/1200x630?text=Rian+Airsmith+Senapan+Angin",
        width: 1200,
        height: 630,
        alt: "Rian Airsmith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rian Airsmith | Senapan Angin Tangan Berkualitas",
    description:
      "Pengrajin senapan angin tangan dengan presisi dan kualitas tinggi.",
    images: ["https://placehold.co/1200x630?text=Rian+Airsmith+Senapan+Angin"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const waNumber = "6289667853366";
  const waMsg = "Halo Rian Airsmith, saya tertarik memesan senapan angin.";

  return (
    <div className="flex flex-col min-h-svh bg-zinc-50 text-zinc-900">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="#" className="font-black text-2xl tracking-tighter">
            R<span className="text-cyan-500">IAN</span>AIRSMITH
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="#produk" className="hover:text-cyan-600 transition">
              Produk
            </Link>
            <Link href="#video" className="hover:text-cyan-600 transition">
              Video
            </Link>
            <Link href="#tentang" className="hover:text:text-cyan-600 transition">
              Tentang
            </Link>
            <Link href="#kontak" className="hover:text-cyan-600 transition">
              Kontak
            </Link>
          </div>
          <a
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`}
            className="hidden md:block bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            Chat WhatsApp
          </a>
        </div>
      </nav>

      <section id="home" className="relative bg-zinc-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-600/20 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-6">
            Pengrajin Senapan Angin Tangan
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Senapan Angin <br />
            <span className="text-cyan-400">Presisi Tangan, Kualitas Terjamin</span>
          </h1>
          <p className="text-lg text-zinc-300 mb-8 max-w-xl mx-auto">
            Setiap unit dirangkai dengan hati-hati untuk peluru yang akurat. Tersedia air rifle, air pistol, dan aksesoris untuk olahraga tembak serta koleksi pribadi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#produk"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition text-lg"
            >
              Lihat Produk
            </a>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`}
              className="px-6 py-3 border border-zinc-600 hover:border-cyan-500 text-cyan-300 hover:text-white font-bold rounded-lg transition text-lg"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="produk" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Produk Kami</h2>
            <p className="text-zinc-500">Tersedia berbagai jenis senapan angin dan aksesoris</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <div key={i} className="bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-lg transition">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  priority={i === 0}
                />
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-zinc-500 text-sm mb-4">{p.desc}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="py-20 px-4 bg-zinc-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Review &amp; Video</h2>
            <p className="text-zinc-500">Lihat demonstrasi dan review senapan angin dari mitra kami</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VIDEOS.map((v, i) => (
              <div key={i} className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg transition">
                <a
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-video bg-zinc-200 overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                      alt={v.title}
                      width={480}
                      height={360}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{v.title}</h3>
                    <p className="text-sm text-zinc-500">{v.channel} • {v.views}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.youtube.com/@AbdullahAHASoutdoor/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 font-semibold"
            >
            Lihat semua video di YouTube →
            </a>
          </div>
        </div>
      </section>

      <section id="tentang" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl border border-zinc-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Tentang Rian Airsmith</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Kami adalah pengrajin senapan angin tangan yang fokus pada presisi, keamanan, dan daya tahan. Setiap senapan dikonfigurasi sesuai kebutuhan pembeli, baik untuk olahraga tembak maupun koleksi pribadi.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Pesanan dapat dikirim ke seluruh Indonesia dengan kemasan aman. Konsultasi dan order langsung via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section id="kontak" className="py-20 px-4 bg-zinc-900 text-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Kontak Kami</h2>
          <p className="text-zinc-400 mb-8">Pesan atau konsultasi senapan angin</p>
          <a
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`}
            className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition text-lg"
          >
            Chat WhatsApp Sekarang
          </a>
          <p className="mt-8 text-zinc-500 text-sm">© 2026 Rian Airsmith. Senapan Angin Tangan.</p>
        </div>
      </section>
    </div>
  );
}
