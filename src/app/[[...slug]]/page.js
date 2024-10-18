
import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [
    { slug: [''] },
    { slug: ['favicon.ico'] } ,
    { slug: ["products"] },
     { slug: ["about"] },
     { slug: ["contact"] },
     { slug: ["blog"] },
  ];
  
}
 
export default function Page() {
  return <ClientOnly />
}