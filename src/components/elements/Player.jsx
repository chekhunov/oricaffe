import React, { useState } from "react";

const audio = {
  id: "muscle-car",
  name: "Muscle Car",
  file: new Audio("/sounds/1.mp3"),
  isPlaying: false,
};

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(audio.isPlaying);
  function play(audio) {
    setIsPlaying(true);
    audio.file.play();
  }
  function pause(audio) {
    setIsPlaying(false);
    audio.file.pause();
  }

  
  return (
    <div
      className="player fab-buttons__link"
      data-tooltip="Sound"
    >
      <button
        className="player__btn"
        onClick={() => (isPlaying ? pause(audio) : play(audio))}
      >
        <svg
          className="player__icon"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 496.159 496.159"
          style={{ enableBackground: "new 0 0 496.159 496.159" }}
          // xml:space="preserve"
        >
          <path
            style={isPlaying ? { fill: " #e5aa17" } : { fill: "#d06156" }}
            d="M496.159,248.085c0-137.023-111.07-248.082-248.076-248.082C111.071,0.003,0,111.063,0,248.085
      c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.159,385.086,496.159,248.085z"
          />
          <g>
            <path
              style={{ fill: "#ffffff" }}
              d="M266.494,128.917c-3.409-1.851-7.559-1.688-10.813,0.425l-95.137,61.791H125.38
        c-5.845,0-10.583,4.738-10.583,10.582v92.728c0,5.845,4.738,10.583,10.583,10.583h35.164l95.137,61.79
        c1.748,1.135,3.754,1.708,5.765,1.708c1.733,0,3.471-0.426,5.049-1.283c3.41-1.852,5.534-5.42,5.534-9.301V138.218
        C272.028,134.338,269.904,130.768,266.494,128.917z"
            />
            {isPlaying && (
              <path
                style={{ fill: "#ffffff" }}
                d="M301.485,322.937c0.894,0,1.801-0.162,2.685-0.504c24.239-9.412,40.524-38.49,40.524-72.361
        c0-29.956-13.2-57.047-33.63-69.018c-3.534-2.072-8.08-0.883-10.153,2.652c-2.072,3.535-0.885,8.082,2.651,10.152
        c15.971,9.358,26.291,31.424,26.291,56.213c0,27.36-12.77,51.426-31.055,58.525c-3.82,1.482-5.715,5.783-4.231,9.604
        C295.707,321.139,298.513,322.937,301.485,322.937z"
              />
            )}
            {isPlaying && (
              <path
                style={{ fill: "#ffffff" }}
                d="M320.856,353.882c0.896,0,1.803-0.163,2.685-0.505c34.046-13.219,57.822-55.979,57.822-103.988
        c0-43.186-18.884-82.155-48.11-99.278c-3.533-2.073-8.081-0.884-10.152,2.652c-2.072,3.534-0.885,8.081,2.651,10.151
        c24.768,14.512,40.771,48.456,40.771,86.475c0,42.027-19.883,79.101-48.353,90.154c-3.82,1.482-5.715,5.782-4.231,9.604
        C315.079,352.084,317.884,353.882,320.856,353.882z"
              />
            )}
          </g>
        </svg>
      </button>
    </div>
  );
}
