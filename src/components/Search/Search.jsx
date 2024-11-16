'use client'; 
import { useRouter } from 'next/navigation';
import  { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { FaSearch } from 'react-icons/fa';
import { useLocale } from "next-intl"; 

function Search() {
    const router = useRouter();
    const locale = useLocale(); 
    const [text, setText] = useState('');
    const [query] = useDebounce(text, 750); 

    useEffect(() => {
        if (!query) {
          
            router.push(`/${locale}/products`);
        } else {
         
            router.push(`/${locale}/products?search=${encodeURIComponent(query)}`);
        }
    }, [query, locale, router]);

    return (
        <div>
            <div className='p-3 border border-gray-300 dark:border-gray-700 rounded-sm bg-[#f9f9f9] dark:bg-[#1a1a1a] mt-3 flex items-center gap-3 w-full'>
                <FaSearch className='bg-red border-none' />
                <input 
                    className='bg-transparent'
                    value={text}
                    placeholder='Search product...'
                    onChange={e => setText(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Search;


