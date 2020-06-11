const Audio = () => {
  return (
    <audio
      controls
      autoPlay
      src={audionews}
      loop={false}
      style={{ display: 'none' }}
    >
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  );
};

{
  playSecondAudio === true ? <Audio2 /> : <Audio />;
}

/* for fixing responsive on phone */
https://slicejack.com/fullscreen-html5-video-background-css/

@media (max-width: 767px) {
    .fullscreen-bg {
      background: url('../img/videoframe.jpg') center center / cover no-repeat;
    }
  
    .fullscreen-bg__video {
      display: none;
    }
  }