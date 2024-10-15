'use client'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { FaSearch } from 'react-icons/fa'
import './search.css'

function Search() {
    const router = useRouter()
    const[text, setText] = useState('')
    const [query] = useDebounce(text, 750)

    useEffect(() => {
        if(!query){
          router.push('/products')
        }else{
          router.push(`/products?search=${query}`);
        }
        
    }, [query, router])
  return (
    <div>
        <div className='search-bar-wrapper'>
        <FaSearch className='search-icon' />
            <input 
            className='search-bar'
            value={text}
            placeholder='search product'
            onChange={ e => setText(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search




