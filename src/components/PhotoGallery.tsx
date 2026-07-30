export default function PhotoGallery() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 right-[10%] w-64 h-64 bg-secondary-pink/[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[10%] w-64 h-64 bg-secondary-blue/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest mb-3">
            Summer Snapshots
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
            A glimpse of the{' '}
            <span className="text-primary">magic</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Every day at Gan Izzy is a story worth telling.
          </p>
        </div>

        <div className="elfsight-app-b3818165-a718-4a26-90b1-201628d17495" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}
