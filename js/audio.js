const names = [
    'samples/1.mp3',
    'samples/2.mp3',
    'samples/3.mp3',
    'samples/4.mp3',
    'samples/5.mp3',
    'samples/6.mp3',
    'samples/7.mp3',
    'samples/8.mp3',
    'samples/9.mp3',
    'samples/10.mp3',
    'samples/11.mp3',
    'samples/12.mp3',
    'samples/13.mp3',
    'samples/14.mp3',
    'samples/15.mp3',
    'samples/16.mp3',
    'samples/17.mp3',
    'samples/18.mp3',
    'samples/19.mp3',
    'samples/20.mp3',
    'samples/21.mp3',
    'samples/22.mp3',
    'samples/23.mp3',
    'samples/24.mp3',
    'samples/25.mp3',
    'samples/26.mp3',
    'samples/27.mp3',
    'samples/28.mp3',
    'samples/29.mp3',
    'samples/30.mp3',
    'samples/31.mp3',
    'samples/32.mp3',
    'samples/33.mp3'
]

const sounds = [];

for(i = 0; i < 33; i++){
    let aud = new Audio(names[i]);
    sounds.push(aud);
}

sounds.push(new Audio('samples/wrong.mp3'));


const U = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
  }

  function convertTextToSpeech(text) {
    U.text = text;
    const voice = voices[0]
    U.voice = voice
    U.lang = 'Russian';
    U.rate = 1;
    U.pitch = 1.4;
    speechSynthesis.speak(U)
  }