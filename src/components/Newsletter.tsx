"use client";

export default function Newsletter() {
  return (
    <section
      className="py-12 bg-accent-red relative"
      style={{
        backgroundImage: "url('https://ext.same-assets.com/2955440858/56846010.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-accent-red/90" />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Title */}
          <div className="text-white">
            <h3 className="text-xl font-bold font-ubuntu uppercase tracking-wide">
              Una web con estilo propio
            </h3>
          </div>

          {/* Form */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Proyecto web de demostración"
              value="Landing de ejemplo · Sin captación de datos"
              readOnly
              aria-label="Esta sección es una demostración visual"
              className="px-6 py-4 w-full sm:w-80 text-sm bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
            />
            <button
              type="button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-4 bg-primary-dark text-white font-semibold uppercase tracking-wider text-sm hover:bg-primary-dark/80 transition-colors"
            >
              Ver proyecto
              <span className="ml-3 w-8 h-8 bg-accent-red flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
