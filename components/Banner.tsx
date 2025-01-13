import Image from 'next/image'

export default function Banner() {
  return (
    <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]">
      <Image
        src="/public/images/gm.jpg"
        alt="EcoStore Banner"
        fill
        style={{ objectFit: 'cover' }}
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome to EcoStore
        </h1>
      </div>
    </div>
  )
}

