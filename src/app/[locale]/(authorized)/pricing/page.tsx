import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CheckoutForm from "../../../../components/pricing/stripe/checkoutForm";
import { image } from "@nextui-org/react";
import box from "../../../../assets/pricing-img.jpg";
export const metadata: Metadata = {
  title: "Pricing",
};

export default async function IndexPage({
  params,
}: {
  params: { locale?: string };
}): Promise<JSX.Element> {
  const locale = (await params?.locale) || "en";
  return (
<div className="container mx-auto px-4  h-full flex items-center justify-center">
  <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-6 rounded-lg max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
    
    {/* Left Side: Image */}
    <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
      <Image
        src={box} // Your image source remains the same
        alt="Beauty Products"
        width={700}
        height={700}
        className="w-full h-auto max-w-sm rounded-lg"
      />
    </div>

    {/* Right Side: Subscription Info */}
    <div className="lg:w-1/2 text-center lg:text-left space-y-6">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">Beauty Subscription Box</h1>
      <p className="text-lg text-gray-600 dark:text-gray-200">
        Get 5 products worth up to $70, plus exclusive access to epic deals up to 80% off, starting at just $14/month. Cancel anytime.
      </p>

      {/* Features in Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="flex items-center justify-start p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">5 Premium Products</p>
        </div>
        <div className="flex items-center justify-start p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Exclusive Deals up to 80% Off</p>
        </div>
        <div className="flex items-center justify-start p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Starts at $14/Month</p>
        </div>
      </div>

      {/* Join Button */}
   
      <CheckoutForm uiMode="hosted" locale={locale} />
    </div>
  </div>
</div>


  )
}
