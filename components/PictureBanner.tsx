interface PictureBannerProps {
    desktopSrc: string
    tabletSrc: string
    mobileSrc: string
    alt: string
  }
  
  export default function PictureBanner({ desktopSrc, tabletSrc, mobileSrc, alt }: PictureBannerProps) {
    return (
      <picture className="block w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]">
        <source media="(min-width: 1024px)" srcSet={desktopSrc} />
        <source media="(min-width: 640px)" srcSet={tabletSrc} />
        <img src={mobileSrc} alt={alt} className="w-full h-full object-cover" />
      </picture>
    )
  }
  
  