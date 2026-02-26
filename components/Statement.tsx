import Image from "next/image"

export default function Statement() {
  return (
    <section className="bg-bean-blue-dark relative overflow-hidden p-8">
      <div className="section-container flex items-center">
        {/* Statement text */}
        <h2 className="mb-2 text-center text-justify text-3xl leading-tight font-extrabold tracking-tight text-white uppercase md:text-5xl">
          Stop waiting for your moment.
          <br />
          <span className="text-bean-accent">Start building it.</span>
        </h2>

        {/* Banner image */}
        <div className="relative mx-auto hidden h-[280px] md:block md:w-[600px]">
          <Image
            src="/images/mami-banner.png"
            alt="Coach Mami in action on the court"
            fill
            className="object-contain"
          />
          <div className="to-bean-blue-dark absolute inset-0 bg-gradient-to-b from-transparent via-transparent" />
        </div>
      </div>
    </section>
  )
}
