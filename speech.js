// Text to Speech

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-US";
  voice.volume = 2;
  voice.rate = 0.75;
  voice.pitch = 1; // Can be 0, 1, or 2
  synth.speak(voice);
}