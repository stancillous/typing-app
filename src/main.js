import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


const shortQuotes= [
    "For a bunch of hair-less apes, we've actually managed to invent some incredibly awesome things.",
    "What's morality, it's the difference between what is wrong and what you can rationalize.",
    "We lived on farms, then we lived in cities, now we are going to live on the internet!",
    "To achieve great things, two things are needed: a great plan and not quite enough time.",
    "I just want to lie on the beach and eat hot dogs. That's all I ever wanted.",
    "The difference between treason and patriotism is only a matter of dates.",
    "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    "Well, of course you don't. Neither do I.Who the hell speaks Swedish?",
    "Just so I feel better right now, you aren't going to kidnap me right now are you?",
    "Never ask an elf for help; they might decide your better off dead, eh?",
    "It's only after we've lost everything that we are free to do anything.",
    "You know Mitch, now that I'm dying, I've become much more interesting to people.",
]

const mediumQuotes=[
    "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us.",
    "Everyone should be able to do one card trick, tell two jokes, and recite three poems, in case they are ever trapped in an elevator.",
    "Happiness is like a butterfly; the more you chase it, the more it will elude you, but if you turn your attention to other things, it will come and sit softly on your shoulder.",
    "The lampshade on my head is for my bright ideas. I won't be able to convey them until Monday, when my curtain gets out of the dry cleaners.",
    "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
    "The concept of randomness and coincidence will be obsolete when people can finally define a formulation of patterned interaction between all things within the universe.",
    "A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be",
    "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.",
]

const longQuotes=[
    "Tried to escape, to block out the fact that I was being eaten alive by arachnids. For some reason the only thing I could replace it with was the image of being eaten by tiny clowns.",
    "I believe you make your day. You make your life. So much of it is all perception, and this is the form that I built for myself. I have to accept it and work within those compounds, and it’s up to me.",
    "Take up one idea. Make that one idea your life -- think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success.",
    "There are three things you can do with your life: You can waste it, you can spend it, or you can invest it. The best use of your life is to invest it in something that will last longer than your time on Earth.",
    "I don’t believe in happy endings, but I do believe in happy travels, because ultimately, you die at a very young age, or you live long enough to watch your friends die. It’s a mean thing, life.",
    "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
    "The way I see it, every life is a pile of good things and bad things. The good things don’t always soften the bad things, but vice versa, the bad things don’t always spoil the good things and make them unimportant.",
    "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.",
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


//CODE TO EXECUTE WHEN ONE SELECTS TO TYPE SHORT QUOTES
document.getElementById('shortQuote').addEventListener('click', () => {
    //remove the class named finish from the quoteElement
    quoteElement.removeAttribute('class','finished')

    // get a random quote
    const quoteIndex = Math.floor(Math.random() * shortQuotes.length);
    
    const quote = shortQuotes[quoteIndex];
   
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
//CODE TO EXECUTE WHEN ONE SELECTS TO TYPE MEDIUM QUOTES
document.getElementById('mediumQuote').addEventListener('click', () => {
    //remove the class named finish from the quoteElement
    quoteElement.removeAttribute('class','finished')

    // get a random quote
    const quoteIndex = Math.floor(Math.random() * mediumQuotes.length);
    
    const quote = mediumQuotes[quoteIndex];
   
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

//CODE TO EXECUTE WHEN ONE SELECTS TO TYPE LONG QUOTES
document.getElementById('longQuote').addEventListener('click', () => {
    //remove the class named finish from the quoteElement
    quoteElement.removeAttribute('class','finished')

    // get a random quote
    const quoteIndex = Math.floor(Math.random() * longQuotes.length);
    
    const quote = longQuotes[quoteIndex];
   
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



//CODE TO EXECUTE WHEN THE BUTTON IS CLICKED
document.getElementById('start').addEventListener('click', () => {
    //remove the class named finish from the quoteElement
    quoteElement.removeAttribute('class','finished')

    // get a random quote
    const quoteIndex = Math.floor(Math.random() * mediumQuotes.length);
    
    const quote = mediumQuotes[quoteIndex];
   
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




//ALL THE CUSTOM OPTIONS BUTTONS
let customOptionsButtons= document.querySelectorAll('.custom-options-btn')

//ADD EVENT LISTENER FOR EACH BUTTON AND WHEN CLICKED, ADD THE ACTIVE CLASS TO IT
customOptionsButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
       
        document.querySelector('.custom-options').querySelector('.active-quote').classList.remove('active-quote')
        button.classList.add('active-quote')


    })
})