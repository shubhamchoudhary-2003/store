import Image from "next/image"
import { Layout, LayoutColumn } from "@/components/Layout"

export default function AboutPage() {
  return (
    <>
      <div className="max-md:pt-18">
        <Image
          src="https://res.cloudinary.com/dveckkrb6/image/upload/v1728575674/IMG_6940_jh2y1b.jpg"
          width={2880}
          height={1500}
          alt="Traditional Indian cookware"
          className="md:h-screen md:object-cover"
        />
      </div>
      <div className="pt-8 md:pt-26 pb-26 md:pb-36">
        <Layout>
          <LayoutColumn start={1} end={{ base: 13, lg: 7 }}>
            <h3 className="text-lg max-lg:mb-6 md:text-2xl">
              At Charandhul, we&apos;re reviving India&apos;s traditional cooking heritage through authentic brass, copper, and Kansa cookware.
            </h3>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, lg: 8 }} end={13}>
            <div className="md:text-md lg:mt-18">
              <p className="mb-6 lg:mb-8">
                Our story began in college, where a group of friends turned their entrepreneurial spirit into a mission to preserve and promote Indian culture. What started as SAMPDA, a university organization hosting events for 20 people, grew to gatherings of 2,000.
              </p>
              <p>
                The divine inspiration struck during a trip to Mathura, where we discovered our true calling: bringing traditional Indian cookware back to modern kitchens. With blessings from Madhav, Charandhul was born.
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn>
            <Image
              src="https://res.cloudinary.com/dveckkrb6/image/upload/v1729500638/WhatsApp_Image_2024-10-21_at_09.39.17_6bc0022b_lopmjo.jpg"
              width={2496}
              height={1404}
              alt="Traditional craftwork showcase"
              className="mt-26 lg:mt-36 mb-8 lg:mb-26"
            />
          </LayoutColumn>
          <LayoutColumn start={1} end={{ base: 13, lg: 8 }}>
            <h3 className="text-lg lg:mb-10 mb-6 md:text-2xl">
              Dream at Delhi. Inspired at Mathura. Made at Moradabad. Available at भारत.
            </h3>
          </LayoutColumn>
          <LayoutColumn start={1} end={{ base: 13, lg: 6 }}>
            <div className="mb-16 lg:mb-36">
              <p className="mb-6">
                At the heart of our brand is a deep commitment to quality and tradition. Our products are crafted in Moradabad, India&apos;s brass capital, under the guidance of generational craftsmen who bring centuries of expertise to every piece.
              </p>
              <p>
                From pure certified brass and copper to traditional Kansa, each product is carefully crafted to bring the benefits of traditional Indian cooking to your modern kitchen. We believe in direct sourcing - from the artisan&apos;s workshop to your home, ensuring fair prices and authentic quality.
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn start={{ base: 2, lg: 1 }} end={{ base: 12, lg: 7 }}>
            <Image
              src="https://res.cloudinary.com/dveckkrb6/image/upload/v1728575487/IMG_6872_qrwrxg.jpg"
              width={1200}
              height={1600}
              alt="Traditional cookware display"
              className="mb-16 lg:mb-36"
            />
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, lg: 8 }} end={13}>
            <div className="mb-6 lg:mb-20 xl:mb-36">
              <p>
                Our mission extends beyond commerce. With every purchase, we plant a tree, feed stray animals, and donate 2% of our profits to senior citizens and orphans. We believe in creating a sustainable cycle of giving back to our community and environment.
              </p>
            </div>
            <div className="md:text-md max-lg:mb-26">
              <p>
                We&apos;re helping India return to its roots - cooking in brass, drinking from copper, and eating from Kansa. One product at a time, we&apos;re making traditional cookware affordable, better, and worth every rupee spent.
              </p>
            </div>
          </LayoutColumn>
        </Layout>
        <Image
          src="https://res.cloudinary.com/dveckkrb6/image/upload/v1728575674/IMG_6940_jh2y1b.jpg"
          width={2880}
          height={1618}
          alt="Traditional Indian cookware collection"
          className="mb-8 lg:mb-26"
        />
        <Layout>
          <LayoutColumn start={1} end={{ base: 13, lg: 7 }}>
            <h3 className="text-lg max-lg:mb-8 md:text-2xl">
              Join us in preserving India&apos;s culinary heritage!
            </h3>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, lg: 8 }} end={13}>
            <div className="md:text-md lg:mt-18">
              <p className="mb-6 lg:mb-8">
                Every Charandhul product carries the legacy of Indian craftsmanship and the promise of a better future for our artisans and community.
              </p>
              <p>
                Thank you for being part of our journey to revive India&apos;s traditional cooking wisdom and create positive change in our society.
              </p>
            </div>
          </LayoutColumn>
        </Layout>
      </div>
    </>
  )
}

// // External components
// import Image from "next/image"
// import { StoreRegion } from "@medusajs/types"

// // Lib
// import { listRegions } from "@lib/data/regions"

// // Components
// import { Layout, LayoutColumn } from "@/components/Layout"

// export async function generateStaticParams() {
//   const countryCodes = await listRegions().then((regions: StoreRegion[]) =>
//     regions.flatMap((r) =>
//       r.countries
//         ? r.countries
//             .map((c) => c.iso_2)
//             .filter(
//               (value): value is string =>
//                 typeof value === "string" && Boolean(value)
//             )
//         : []
//     )
//   )

//   const staticParams = countryCodes.map((countryCode) => ({
//     countryCode,
//   }))

//   return staticParams
// }

// export default function AboutPage() {
//   return (
//     <>
//       <div className="max-md:pt-18">
//         <Image
//           src="/images/content/living-room5.png"
//           width={2880}
//           height={1500}
//           alt="Living room"
//           className="md:h-screen md:object-cover"
//         />
//       </div>
//       <div className="pt-8 md:pt-26 pb-26 md:pb-36">
//         <Layout>
//           <LayoutColumn start={1} end={{ base: 13, lg: 7 }}>
//             <h3 className="text-lg max-lg:mb-6 md:text-2xl">
//               At Sofa Society, we believe that a sofa is the heart of every
//               home.
//             </h3>
//           </LayoutColumn>
//           <LayoutColumn start={{ base: 1, lg: 8 }} end={13}>
//             <div className="md:text-md lg:mt-18">
//               <p className="mb-6 lg:mb-8">
//                 Welcome to Sofa Society, where we believe that comfort and style
//                 should be effortlessly intertwined. Our mission is to help you
//                 create beautiful, functional spaces that bring warmth and
//                 relaxation into your home.
//               </p>
//               <p>
//                 Every piece in our collection is designed with care, blending
//                 timeless craftsmanship with modern aesthetics to offer you the
//                 perfect balance between form and function.
//               </p>
//             </div>
//           </LayoutColumn>
//           <LayoutColumn>
//             <Image
//               src="/images/content/living-room6.png"
//               width={2496}
//               height={1404}
//               alt="Living room"
//               className="mt-26 lg:mt-36 mb-8 lg:mb-26"
//             />
//           </LayoutColumn>
//           <LayoutColumn start={1} end={{ base: 13, lg: 8 }}>
//             <h3 className="text-lg lg:mb-10 mb-6 md:text-2xl">
//               We are here to make your living space a true reflection of your
//               personal style.
//             </h3>
//           </LayoutColumn>
//           <LayoutColumn start={1} end={{ base: 13, lg: 6 }}>
//             <div className="mb-16 lg:mb-36">
//               <p className="mb-6">
//                 At the heart of our brand is a deep commitment to quality. We
//                 understand that a sofa isn&apos;t just another piece of
//                 furniture; it&apos;s where you unwind, gather with loved ones,
//                 and make memories. That&apos;s why we source only the finest
//                 materials and fabrics, ensuring that every sofa we offer is
//                 built to last.
//               </p>
//               <p>
//                 From luxurious leathers and soft linens to high-performance
//                 textiles, each fabric is carefully selected for its durability
//                 and beauty. Our attention to detail extends to every stitch and
//                 seam, guaranteeing that your sofa will not only look stunning
//                 but will also withstand the test of time.
//               </p>
//             </div>
//           </LayoutColumn>
//           <LayoutColumn start={{ base: 2, lg: 1 }} end={{ base: 12, lg: 7 }}>
//             <Image
//               src="/images/content/living-room7.png"
//               width={1200}
//               height={1600}
//               alt="Living room"
//               className="mb-16 lg:mb-36"
//             />
//           </LayoutColumn>
//           <LayoutColumn start={{ base: 1, lg: 8 }} end={13}>
//             <div className="mb-6 lg:mb-20 xl:mb-36">
//               <p>
//                 Our design philosophy revolves around creating pieces that are
//                 both beautiful and practical. Inspired by Scandinavian
//                 simplicity, modern luxury, and timeless classics, our
//                 collections are curated to suit a wide variety of tastes and
//                 lifestyles. We understand that every home is different, so we
//                 offer a diverse range of styles, colors, and textures to help
//                 you find the perfect fit. Whether you prefer sleek modern lines
//                 or soft, inviting silhouettes, we have something to suit every
//                 space and personality.
//               </p>
//             </div>
//             <div className="md:text-md max-lg:mb-26">
//               <p>
//                 We believe that great design should be environmentally
//                 conscious, which is why we strive to minimise our environmental
//                 footprint through responsible sourcing and production practices.
//                 Our commitment to sustainability ensures that our products are
//                 not only beautiful but also kind to the planet.
//               </p>
//             </div>
//           </LayoutColumn>
//         </Layout>
//         <Image
//           src="/images/content/living-room8.png"
//           width={2880}
//           height={1618}
//           alt="Living room"
//           className="mb-8 lg:mb-26"
//         />
//         <Layout>
//           <LayoutColumn start={1} end={{ base: 13, lg: 7 }}>
//             <h3 className="text-lg max-lg:mb-8 md:text-2xl">
//               Our customers are at the center of everything we do!
//             </h3>
//           </LayoutColumn>
//           <LayoutColumn start={{ base: 1, lg: 8 }} end={13}>
//             <div className="md:text-md lg:mt-18">
//               <p className="mb-6 lg:mb-8">
//                 Our team is here to help guide you through the process, offering
//                 personalised support to ensure that you find exactly what
//                 you&apos;re looking for.
//               </p>
//               <p>
//                 We&apos;re not just selling sofas - we&apos;re helping you
//                 create spaces where you can relax, recharge, and make lasting
//                 memories. Thank you for choosing Sofa Society to be a part of
//                 your home!
//               </p>
//             </div>
//           </LayoutColumn>
//         </Layout>
//       </div>
//     </>
//   )
// }
