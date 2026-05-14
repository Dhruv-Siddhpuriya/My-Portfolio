import dhruvPhoto from '../assets/dhruv.jpg';

const AvatarCard = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[400px] md:h-[500px]">
      {/* Outer glow blob */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-tr from-neon-blue/30 to-neon-purple/30 filter blur-[60px] animate-pulse" />
      </div>

      {/* Rotating dashed rings */}
      <div
        className="absolute w-[310px] h-[310px] md:w-[390px] md:h-[390px] rounded-full border border-dashed border-neon-blue/30"
        style={{ animation: 'spin 18s linear infinite' }}
      />
      <div
        className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-dashed border-neon-purple/20"
        style={{ animation: 'spin 12s linear infinite reverse' }}
      />

      {/* Photo */}
      <div
        className="relative w-[260px] h-[260px] md:w-[330px] md:h-[330px] rounded-full overflow-hidden"
        style={{
          boxShadow: '0 0 40px rgba(96, 165, 250, 0.45), 0 0 80px rgba(167, 139, 250, 0.2)',
          border: '2px solid rgba(96, 165, 250, 0.4)',
          animation: 'float 4s ease-in-out infinite',
        }}
      >
        <img
          src={dhruvPhoto}
          alt="Dhruv Siddhpuriya"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neon-blue/10 pointer-events-none" />
      </div>

      {/* Floating badge */}
      <div
        className="absolute bottom-12 right-6 md:right-14 bg-gray-900/80 backdrop-blur border border-neon-blue/30 text-neon-blue text-xs font-semibold px-3 py-1.5 rounded-full"
        style={{ animation: 'float 3s ease-in-out infinite 1s' }}
      >
        MERN Stack Dev 🚀
      </div>
    </div>
  );
};

export default AvatarCard;
