import React from 'react'
import { CustomerReviews, PopularProduct, SpecialOffer, Subscribe, SuperQuality, Hero, Footer, Services } from './sections'
import Nav from './components/Nav'

const App = () => {
  return (
    <main className='relative'>
      <Nav />     
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
     </section>
      <section className='padding'>
        <PopularProduct />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
      <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe /> 
      </section>
      <section className='bg-black padding-x paddin-t'>
        <Footer />
      </section>
    </main>
  )
}

export default App
