import { ProductPageGallery } from "@/components/ProductPageGallery"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
  className?: string
}

const ImageGallery = ({ images, className }: ImageGalleryProps) => {
  const filteredImages = images.filter((image) => Boolean(image.url))

  if (!filteredImages.length) {
    return null
  }

  return (
    <ProductPageGallery className={className}>
      {filteredImages.map((image, index) => (
        <div
          key={image.id}
          className="relative aspect-[3/4] w-full overflow-hidden"
        >
          <Image
            key={image.id}
            src={image.url}
            priority={index <= 2 ? true : false}
            alt={`Product image ${index + 1}`}
            fill
            // TODO: update sizes to match the design
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            className="object-cover"
          />
        </div>
      ))}
    </ProductPageGallery>
  )
}

export default ImageGallery
