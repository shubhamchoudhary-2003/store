// External
import { Metadata } from "next"
import Image from "next/image"

import { getRegion } from "@lib/data/regions"
import { getProductTypesList } from "@lib/data/product-types"
import { Layout, LayoutColumn } from "@/components/Layout"
import { LocalizedLink } from "@/components/LocalizedLink"
import { CollectionsSection } from "@/components/CollectionsSection"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const ProductTypesSection: React.FC = async () => {
  const productTypes = await getProductTypesList(0, 20, [
    "id",
    "value",
    "metadata",
  ])

  if (!productTypes) {
    return null
  }

  return (
    <Layout className="mb-26 md:mb-36 max-md:gap-x-2">
      <LayoutColumn>
        <h3 className="text-lg md:text-2xl mb-8 md:mb-15">Our products</h3>
      </LayoutColumn>
      {productTypes.productTypes.map((productType, index) => (
        <LayoutColumn
          key={productType.id}
          start={index % 2 === 0 ? 1 : 7}
          end={index % 2 === 0 ? 7 : 13}
        >
          <LocalizedLink href={`/store?type=${productType.value}`}>
            {typeof productType.metadata?.image === "object" &&
              productType.metadata.image &&
              "url" in productType.metadata.image &&
              typeof productType.metadata.image.url === "string" && (
                <Image
                  src={productType.metadata.image.url}
                  width={1200}
                  height={900}
                  alt={productType.value}
                  className="mb-2 md:mb-8"
                />
              )}
            <p className="text-xs md:text-md">{productType.value}</p>
          </LocalizedLink>
        </LayoutColumn>
      ))}
    </Layout>
  )
}

export default async function Home({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) {
  const { countryCode } = await params
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  return (
    <>
  <div className="max-md:pt-18">
    <Image
      src="https://res.cloudinary.com/dveckkrb6/image/upload/v1728575674/IMG_6940_jh2y1b.jpg"
      width={2880}
      height={1500}
      alt="Traditional Indian Cookware Collection"
      className="md:h-screen md:object-cover"
    />
  </div>
  <div className="pt-8 pb-26 md:pt-26 md:pb-36">
    <Layout className="mb-26 md:mb-34">
      <LayoutColumn start={1} end={{ base: 13, md: 8 }}>
        <h3 className="text-2xl">
          Revive Traditional Indian Cooking with Authentic Brass, Copper & Kansa Cookware
        </h3>
      </LayoutColumn>
      <LayoutColumn start={{ base: 1, md: 9 }} end={13}>
        <div className="flex items-center h-full">
          <div className="text-md">
            <p>Discover Our Heritage Collection</p>
            <LocalizedLink href="/store" variant="underline">
              Shop Now
            </LocalizedLink>
          </div>
        </div>
      </LayoutColumn>
    </Layout>
    <ProductTypesSection />
    <CollectionsSection className="mb-26 md:mb-36" />
    <Layout>
      <LayoutColumn className="col-span-full">
        <h3 className="text-lg md:text-2xl mb-8 md:mb-15">
          About Charandhul
        </h3>
        <Image
          src="https://res.cloudinary.com/dveckkrb6/image/upload/v1729500638/WhatsApp_Image_2024-10-21_at_09.39.17_6bc0022b_lopmjo.jpg"
          width={2496}
          height={1400}
          alt="Traditional Craftsmanship"
          className="mb-8 md:mb-16 max-md:aspect-[3/2] max-md:object-cover"
        />
      </LayoutColumn>
      <LayoutColumn start={1} end={{ base: 13, md: 7 }}>
        <h2 className="text-lg md:text-2xl">
          Dream at Delhi. Inspired at Mathura. Made at Moradabad. Available at भारत.
        </h2>
      </LayoutColumn>
      <LayoutColumn
        start={{ base: 1, md: 8 }}
        end={13}
        className="mt-6 md:mt-19"
      >
        <div className="md:text-md">
          <p className="mb-5 md:mb-9">
            We craft 100% pure certified brass, copper, and Kansa products in Moradabad, India&apos;s brass capital, under the guidance of generational craftsmen.
          </p>
          <p className="mb-5 md:mb-3">
            Every purchase plants a tree, feeds stray animals, and contributes 2% of profits to senior citizens and orphans. Choose Charandhul for quality cookware that makes a difference.
          </p>
          <LocalizedLink href="/about" variant="underline">
            Read more about Charandhul&apos;s journey
          </LocalizedLink>
        </div>
      </LayoutColumn>
    </Layout>
  </div>
</>
    // <>
    //   <div className="max-md:pt-18">
    //   <Image
    //       src="https://images.pexels.com/photos/8801120/pexels-photo-8801120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //       width={2880}
    //       height={1500}
    //       alt="Living room"
    //       className="md:h-screen md:object-cover"
    //     />
    //   </div>
    //   <div className="pt-8 pb-26 md:pt-26 md:pb-36">
    //     <Layout className="mb-26 md:mb-34">
    //       <LayoutColumn start={1} end={{ base: 13, md: 8 }}>
    //         <h3 className="text-2xl">
    //           Elevate Your Living Space with Unmatched Comfort & Style
    //         </h3>
    //       </LayoutColumn>
    //       <LayoutColumn start={{ base: 1, md: 9 }} end={13}>
    //         <div className="flex items-center h-full">
    //           <div className="text-md">
    //             <p>Discover Your Perfect Sofa Today</p>
    //             <LocalizedLink href="/store" variant="underline">
    //               Explore Now
    //             </LocalizedLink>
    //           </div>
    //         </div>
    //       </LayoutColumn>
    //     </Layout>
    //     <ProductTypesSection />
    //     <CollectionsSection className="mb-26 md:mb-36" />
    //     <Layout>
    //       <LayoutColumn className="col-span-full">
    //         <h3 className="text-lg md:text-2xl mb-8 md:mb-15">
    //           About Sofa Society
    //         </h3>
    //         <Image
    //           src="/images/content/sofa2.png"
    //           width={2496}
    //           height={1400}
    //           alt="Sofa"
    //           className="mb-8 md:mb-16 max-md:aspect-[3/2] max-md:object-cover"
    //         />
    //       </LayoutColumn>
    //       <LayoutColumn start={1} end={{ base: 13, md: 7 }}>
    //         <h2 className="text-lg md:text-2xl">
    //           At Sofa Society, we believe that a sofa is the heart of every
    //           home.
    //         </h2>
    //       </LayoutColumn>
    //       <LayoutColumn
    //         start={{ base: 1, md: 8 }}
    //         end={13}
    //         className="mt-6 md:mt-19"
    //       >
    //         <div className="md:text-md">
    //           <p className="mb-5 md:mb-9">
    //             We are dedicated to delivering high-quality, thoughtfully
    //             designed sofas that merge comfort and style effortlessly.
    //           </p>
    //           <p className="mb-5 md:mb-3">
    //             Our mission is to transform your living space into a sanctuary
    //             of relaxation and beauty, with products built to last.
    //           </p>
    //           <LocalizedLink href="/about" variant="underline">
    //             Read more about Sofa Society
    //           </LocalizedLink>
    //         </div>
    //       </LayoutColumn>
    //     </Layout>
    //   </div>
    // </>
  )
}
