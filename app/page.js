import Image from 'next/image';

import Header from '@/components/header';
import WeatherContainer from '@/components/weatherContainer';
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <WeatherContainer />
      <Footer />
    </>
  )
}
