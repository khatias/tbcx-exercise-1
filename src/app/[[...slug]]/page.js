
import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [
    { slug: [''] }, // or any other slugs you need
    { slug: ['favicon.ico'] } // Add favicon.ico if needed
  ];
  
}
 
export default function Page() {
  return <ClientOnly />
}