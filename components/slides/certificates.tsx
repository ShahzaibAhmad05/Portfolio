// components/slides/certificates.tsx
"use client";

import Particles from "@/components/particles";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  href: string;
};

const CERTS: Cert[] = [
  {
    title: "AI Engineering Professional Certificate",
    issuer: "IBM",
    date: "Dec 2025",
    credentialId: "AEWCW47ISNZR",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/AEWCW47ISNZR",
  },
  {
    title: "Advanced Data Analytics Professional Certificate",
    issuer: "Google",
    date: "Dec 2025",
    credentialId: "OL32KK3R0YFI",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/OL32KK3R0YFI",
  },
  {
    title: "Backend Developer Professional Certificate",
    issuer: "Meta",
    date: "Dec 2025",
    credentialId: "LJJY4L5DLS7U",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/LJJY4L5DLS7U",
  },
  {
    title: "IT Automation with Python Professional Certificate",
    issuer: "Google",
    date: "Nov 2025",
    credentialId: "WXKXVQ0QXBDV",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/WXKXVQ0QXBDV",
  },
  {
    title: "C# for .NET Developers",
    issuer: "Board Infinity",
    date: "Oct 2025",
    credentialId: "BTAPH50OJEW4",
    href: "https://www.coursera.org/account/accomplishments/verify/BTAPH50OJEW4",
  },
  {
    title: "Full Stack Developer Specialization",
    issuer: "Meta",
    date: "Oct 2025",
    credentialId: "F885115FEH0L",
    href: "https://www.coursera.org/account/accomplishments/specialization/F885115FEH0L",
  },
  {
    title: "React Specialization",
    issuer: "Meta",
    date: "Sep 2025",
    credentialId: "CUD5JDF6T9X4",
    href: "https://www.coursera.org/account/accomplishments/specialization/CUD5JDF6T9X4",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "Jul 2025",
    credentialId: "57823KF9C8TI",
    href: "https://www.coursera.org/account/accomplishments/specialization/57823KF9C8TI",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "Jul 2025",
    credentialId: "HXNEXKNPSKOC",
    href: "https://www.coursera.org/account/accomplishments/specialization/HXNEXKNPSKOC",
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    date: "Aug 2025",
    credentialId: "CTU45F2WJAZP",
    href: "https://www.coursera.org/account/accomplishments/verify/CTU45F2WJAZP",
  },
];

export default function CertificatesSlide() {
  // Duplicate the certificates array for seamless loop
  const duplicatedCerts = [...CERTS, ...CERTS];

  return (
    <section className="relative h-full w-full flex-none snap-start overflow-hidden">
      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        .animate-scroll {
          animation: scroll-down 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 py-12 sm:px-10">
        {/* Left Side - Title Section */}
        <div className="flex-1 pr-12 flex flex-col justify-center">
          <div className="space-y-4 ml-5">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-50">
              Certificates
            </h2>
            <p className="ml-2 text-lg sm:text-md text-zinc-500 max-w-md">
              My professional credentials.
            </p>
          </div>
        </div>

        {/* Right Side - Moving Belt */}
        <div className="flex-1 relative h-full overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-zinc-950 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-zinc-950 to-transparent pointer-events-none z-10" />
          
          {/* Scrolling certificates */}
          <div className="animate-scroll flex flex-col gap-4 py-4">
            {duplicatedCerts.map((cert, index) => (
              <article
                key={`${cert.credentialId}-${index}`}
                className="rounded-3xl border border-zinc-700/60 bg-zinc-800/50 p-5 shadow-lg backdrop-blur-sm transition mr-15 hover:border-zinc-600/60 hover:bg-zinc-800/70"
                style={{
                  boxShadow: "0 4px 20px -4px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08) inset"
                }}
              >
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-50 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-400">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-fit items-center justify-center gap-1.5 rounded-full border border-zinc-700 px-4 text-xs font-medium text-zinc-300 transition hover:bg-zinc-800/50 hover:border-zinc-600 mt-3"
                  >
                    View Certificate
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Particles />
    </section>
  );
}
