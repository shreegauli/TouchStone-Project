import Image from 'next/image'

interface ResponsiveBannerProps {
  desktopSrc: string
  mobileSrc: string
  alt: string
}

export default function ResponsiveBanner({ desktopSrc, mobileSrc, alt }: ResponsiveBannerProps) {
  return (
    <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]">
      <Image
        src={desktopSrc}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes="100vw"
        className="hidden md:block"
        priority
      />
      <Image
        src={mobileSrc}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes="100vw"
        className="block md:hidden"
        priority
      />
    </div>
  )
}

