const Player = require("~/domains/Content/Player");
const testInEnv = () => {
  const videoContent = new Player(
    "Sample Video",
    "https://example.com/video.mp4",
  );
  const audioContent = new Player(
    "Sample Audio",
    "https://example.com/audio.mp3",
  );
  const textContent = new Player(
    "Sample Text",
    "https://example.com/text.json",
  );

  videoContent.play(); // Uses VideoPlayer
  audioContent.play(); // Uses AudioPlayer

  // Fetching text content before playing (assuming asynchronous fetching)
  textContent.play();

  // Pausing and stopping content
  videoContent.pause();
  audioContent.stop();
};

module.exports = testInEnv;
