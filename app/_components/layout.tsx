export default function Layout({
  children,
  title = 'My App',
}: { children: any; title?: string }) {
  return (
    <main className='grid grid-cols-[auto_980px_auto] grid-rows-[90px_1fr_90px]'>
      <div className='col-start-1 col-end-4 row-start-1 row-end-1 border-b border-black' />
      <header className='flex flex-row justify-between items-center mx-12 col-start-2 col-end-3 row-start-1 row-end-2'>
        <h1>{title}</h1>
        <div>
          <a href='/' className='cursor-pointer ml-12'>
            Home
          </a>
        </div>
      </header>
      <section className='mx-12 col-start-2 col-end-3 row-start-2 row-end-3'>
        {children}
      </section>
    </main>
  )
}
