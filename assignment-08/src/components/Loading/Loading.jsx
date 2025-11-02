import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 bg-opacity-20 z-50">
    <Player
      autoplay
      loop
      src="https://assets5.lottiefiles.com/packages/lf20_usmfx6bp.json"
      style={{ height: '150px', width: '150px' }}
    />
    <p className="text-gray-900 text-2xl mt-0 font-semibold">Loading...</p>
  </div>
);

export default Loading;
