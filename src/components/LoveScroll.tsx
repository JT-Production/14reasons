import { useEffect } from 'react';
import pic1 from '../assets/pic (1).jpg'
import pic2 from '../assets/pic (2).jpg'
import pic3 from '../assets/pic (3).jpg'
import pic4 from '../assets/pic (4).jpg'
import pic5 from '../assets/pic (5).jpg'
import pic6 from '../assets/pic (6).jpg'
import pic7 from '../assets/pic (7).jpg'
import pic8 from '../assets/pic (8).jpg'
import pic9 from '../assets/pic (9).jpg'
import pic10 from '../assets/pic (10).jpg'
import pic11 from '../assets/pic (11).jpg'
import pic12 from '../assets/pic (12).jpg'
import pic13 from '../assets/pic (13).jpg'
import pic14 from '../assets/pic (14).jpg'


const reasons = [

  "You always know how to make me smile",
  "Your laugh is my favorite sound",
  "You support me no matter what",
  "You're my peace in chaos",
  "I love how intentional you are with your love",
  "You pray for me",
  "You're strong and soft all at once",
  "You see the best in me",
  "You make even distance feel close",
  "You're my biggest inspiration",
  "You never give up on us",
  "You always make time for me",
  "Your words heal and uplift",
  "You are everything I asked God for"
];
const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14];

export default function LoveScroll() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* YouTube Music Embed (Hidden)
      <div style={{ opacity: '0' }}>
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/N6i1SeRmKL0?autoplay=1&loop=1&playlist=N6i1SeRmKL0"
          title="Residuals by Chris Brown"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div> */}
<audio autoPlay loop controls playsInline hidden >
    <source src="/residuals.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
</audio>

      {/* Cover Page */}
      <div className="h-screen w-full flex items-center justify-center flex-col bg-pink-100 snap-start">
        <h1 className="text-4xl font-bold text-center mb-4">14 Reasons I Love You, Aretha</h1>
        <p className="text-lg text-center max-w-md">Scroll down slowly and feel my heart in every word.</p>
        <button 
            onClick={() => document.querySelector('audio')?.play()} 
            className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
        >
            Play Our Song ♪
        </button>
      </div>

      {/* Love Reasons */}
      {reasons.map((reason, index) => (
        <div
          key={index}
          className={`h-screen w-full flex items-center justify-center px-4 ${index % 2 === 0 ? 'bg-pink-200' : 'bg-pink-300'} snap-start`}
        >
          <div className="max-w-[500px] text-center flex justify-between items-center">
            <div>
                <img src={images[index]} alt="" className='w-50 h-50 object-contain' />
            </div>
            <p className="text-2xl font-semibold">{reason}</p>
          </div>
        </div>
      ))}

      {/* Final Message */}
      <div className="h-screen w-full flex items-center justify-center bg-pink-500 text-white snap-start">
        <h2 className="text-3xl font-bold text-center">Can’t wait to hold you again ❤️</h2>
      </div>
    </div>
  );
}
