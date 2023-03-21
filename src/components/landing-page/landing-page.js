import Carousel from 'react-bootstrap/Carousel';
import mosque from '../../assets/mosque.jpg';
import Header from '../common/header';
import './landing-page.scss'
import aayatData from '../data/aayat'
import PrayerTimes from '../prayer-times/prayer-times';
import Footer from '../common/footer';

function LandingPage() {
  return (
    <>
      <Header />
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src={mosque}
            alt="mosque"
          />
          <Carousel.Caption>
            <div className='pb8'>
              <h3 className='arabic-font'>{aayatData.surah_12_108.aayat}</h3>
              <div className='english-font'>
                <p>{aayatData.surah_12_108.meaning}</p>
                <p>{aayatData.surah_12_108.verse_no}</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src={mosque}
            alt="mosque"
          />

          <Carousel.Caption>
            <div className='pb8'>
              <h3 className='arabic-font'>{aayatData.surah_49_13.aayat}</h3>
              <div className='english-font'>
                <p>{aayatData.surah_49_13.meaning}</p>
                <p>{aayatData.surah_49_13.verse_no}</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src={mosque}
            alt="mosque"
          />

          <Carousel.Caption>
            <div className='pb8'>
              <h3 className='arabic-font'>{aayatData.surah_57_18.aayat}</h3>
              <div className='english-font'>
                <p>{aayatData.surah_57_18.meaning}</p>
                <p>{aayatData.surah_57_18.verse_no}</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <PrayerTimes />
      <Footer />
    </>
  );
}

export default LandingPage;