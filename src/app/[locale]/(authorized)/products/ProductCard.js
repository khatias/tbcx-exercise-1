import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function ProductCard({ product }) {
  const locale = useLocale();
  const firstImage = product.product_colors?.[0]?.product_images?.find(
    (img) => img.is_primary
  )?.image_url;

  return (
    <div className=" w-full flex flex-col">
      {firstImage && (
        <div className=" w-full">
          <Image
            src={firstImage}
            alt={product.name}
            layout="responsive"
            width={500}
            height={300}
            className="rounded-md object-contain"
          />
        </div>
      )}

      <div className=" flex flex-col pl-3">
        <div className="flex  gap-2 pt-3">
          {product.product_colors.map((color, index) => (
            <div key={index} className=" ">
              {color.color_id.color_image && (
                <Image
                  src={color.color_id.color_image}
                  alt={color.color_id.color_name}
                  width={24}
                  height={24}
                  style={{ borderRadius: "4px" }}
                />
              )}
            </div>
          ))}
        </div>

        <Link href={`/${locale}/products/${product.id}`}>
          <h2 className="text-sm font-semibold pt-3">{product.name}</h2>
        </Link>
        <p className="text-sm text-gray-500 pt-1">${product.price}</p>
      </div>
    </div>
  );
}
