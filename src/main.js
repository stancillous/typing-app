import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


//array of the quotes to be typed
const quotes=[
    "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
    "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.",
    "A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be",
    "The lampshade on my head is for my bright ideas. I won't be able to convey them until Monday, when my curtain gets out of the dry cleaners.",
    "Never ask an elf for help; they might decide your better off dead, eh?",
    "Well, of course you don't. Neither do I.Who the hell speaks Swedish?",
    "The concept of randomness and coincidence will be obsolete when people can finally define a formulation of patterned interaction between all things within the universe.",
    "Tried to escape, to block out the fact that I was being eaten alive by arachnids. For some reason the only thing I could replace it with was the image of being eaten by tiny clowns.",
    "When those who left us left their wills in our hands it is our sacred duty to carry it forth it remains that's my choice",
    "Just so I feel better right now, you aren't going to kidnap me right now are you?",
    "Everyone should be able to do one card trick, tell two jokes, and recite three poems, in case they are ever trapped in an elevator.",
]


// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

//CODE TO EXECUTE WHEN THE BUTTON IS CLICKED
document.getElementById('start').addEventListener('click', () => {
    //remove the class named finish from the quoteElement
    quoteElement.removeAttribute('class','finished')

    // get a random quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    
    const quote = quotes[quoteIndex];
   
    // Put the quote into an array of words
    words = quote.split(' ');
   
    // reset the word index for tracking
    wordIndex = 0;
  
    // UPDATING THE UI
    // Create an array of span elements so we can set a class
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
   
    // Convert into string and set as innerHTML on quote display
    quoteElement.innerHTML = spanWords.join('');
  
    // Highlight the first word
    quoteElement.childNodes[0].className = 'highlight';
  
    // Clear any prior messages
    messageElement.innerText = '';
  
    // Setup the textbox
    // Clear the textbox
    typedValueElement.value = '';
   
    // set focus
    typedValueElement.focus();
    // set the event handler
  
    // Start the timer
    startTime = new Date().getTime();

  });


//ADDING EVENT LISTENER TO THE INPUT ELEMENT
typedValueElement.addEventListener('input', () => {
    // Get the current word
    const currentWord = words[wordIndex];
   
    // get the current value
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        // end of sentence
        // Display success
        const elapsedTime = new Date().getTime() - startTime;
        const message = `Time: ${Math.round(elapsedTime / 1000)} seconds.`;
        messageElement.innerText = message;

        //removing the text from the input area
        typedValueElement.value = ''    

        //adding a class to the quote after it is typed
        //the class will reduce the opacity of the typed text
        quoteElement.setAttribute('class','finished')
        
    } 
    
    else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        // end of word
        // clear the typedValueElement for the new word
        typedValueElement.value = '';
        
        // move to the next word
        wordIndex++;
      
        // reset the class name for all elements in quote
        for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
        }
       
        // highlight the new word
        quoteElement.childNodes[wordIndex].className = 'highlight';
    } 

    else if (currentWord.startsWith(typedValue)) {
        // currently correct
        // highlight the next word
        typedValueElement.className = '';
    }

     else {
        // error state
        typedValueElement.className = 'error';
    }
});