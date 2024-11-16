
function ContactForm() {
  return (
    <main className='bg-gray-100 dark:bg-black h-full ' >
        <div className='container mx-auto 2xl:px-20'>
            <div className='flex flex-col items-center h-full justify-center'>
                <form className='flex items-center flex-col gap-4 w-full p-4 max-w-4xl ' action="?">

                    <h1 className='text-center pt-8 text-xl'>Contact Us</h1>
                    <div className='flex flex-col gap-4 xl:flex-row w-full'>
                        <div  className='flex flex-col gap-3 w-full'>
                            <label htmlFor="first-name">Name</label>
                            <input className='border border-gray-300 rounded h-8 ' type="text" name="first-name" id="first-name" />
                        </div>
                        <div className='flex flex-col gap-3 xl:w-full'>
                            <label htmlFor="last_name">Last Name</label>
                            <input className='border border-gray-300 rounded h-8 '  type="text" name="last_name" id="last_name" />
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 w-full'>
                        <label htmlFor="email">Email Addres(required)</label>
                        <input className='border border-gray-300 rounded h-8 w-f ' type="email" name="email" id="email" />
                    </div>

                    <div className='flex flex-col gap-3 w-full'>
                        <label htmlFor="subject">Subject(required)</label>
                        <input className='border border-gray-300 rounded h-8 ' type="text" name="subject" id="subject" />
                    </div>

                    <div className='flex flex-col gap-3 w-full pb-10'>
                        <label htmlFor="message">Message(required)</label>
                        <textarea className='h-36 md:h-52'  name="message" id="message"></textarea>
                    </div> 
                    
                    <button className="p-2 border border-gray-300 rounded text-white bg-[#b32929] dark:bg-gray-700">SUBMIT</button>
                </form>
            
            </div>
        </div>
    </main>
  )
}

export default ContactForm
