"use client";

import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br bg-[#09173b]/70  overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">Featured Video</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Experience
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}NeoTech
            </span>
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our innovative technology and vision through this exclusive showcase video
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-6xl mx-auto">
          <div 
            className="relative group cursor-pointer rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {/* Video Element */}
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                playsInline
                autoPlay
                preload="metadata"
                poster="/images/video-poster.jpg" // You can add a poster image
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/NeoTech_Final.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                  <button
                    onClick={togglePlay}
                    className="flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                  >
                    <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1 group-hover:text-blue-400 transition-colors" />
                  </button>
                </div>
              )}

              {/* Video Controls */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 lg:p-6 transition-all duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={togglePlay}
                      className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-200"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      )}
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-200"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>

                  <button
                    onClick={toggleFullscreen}
                    className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-200"
                  >
                    <Maximize className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 to-purple-500/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}></div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default VideoSection;