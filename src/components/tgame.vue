<template>
    <div>
        <div class="logo-div-container">
            <img id="app-logo" src="../assets/app-logo.png" alt="web logo">
            <a href="">SuperType</a>
        </div>

        <main class="main">

            <div class="page-title">
                <!-- <h1>kujo typing game!</h1> -->
            </div>



            <div class="type-div">
                <div class="custom-options">

                    <div class="custom-options-div">
                        <button class="custom-options-btn" id="shortQuote">short</button>
                    </div>
                    <div class="custom-options-div">
                        <button class="custom-options-btn active-quote" id="mediumQuote">medium</button>
                    </div>
                    <div class="custom-options-div">
                        <button class="custom-options-btn" id="longQuote">thick</button>
                    </div>

                </div>

                <div class="quote-div">
                    <!-- <p id="quote">When you have eliminated the impossible, whatever remains, however improbable, must be the truth.</p> -->
                    <p id="quote"></p>  

                </div>

                <div class="message-div">
                    <p id="message"></p> <!-- This will display any status messages -->
                </div>
                
                <div class="input-btn">
                <input autocapitalize="none" type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
                </div>
            </div>
            <button type="button" id="start">Start</button> <!-- To start the game -->
        </main>
    </div>
</template>

<script>
    export default {
        name:'tgameComp'
        
    }
</script>

<style lang="scss" >

$web-color:#000000;
$web-color2:#00ff998f;
$about-and-contact-color:#2007c2;
// $body-color:#dfeced;
$body-color:rgb(202, 216, 248);

$web-font1:"Satoshi", sans-serif;
$web-font2:"General Sans", sans-serif;
// font weights

$light:300;
$regular:400;
$medium:500;
$bold:700;
$black:900;




*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 10px;
    scroll-behavior: smooth;
    
}

body{
    font-family: $web-font1,$web-font2;
    // font-family: $web-font2;
    background-color: $body-color;
    overflow-x: hidden;
    min-height: 100vh;
}

//div with the header
.logo-div-container{
    display: flex;
    padding-left: 4rem;
    margin-bottom: 3rem;
    align-items: center;
    #app-logo{
        width: 8rem;
    }
    a{
        font-weight: $black;
        font-size: 1.8rem;
        // text-transform: uppercase;
        padding-left: .4rem;
        color: black;
        opacity: .8;
        text-decoration: none;

    }
    
}


.main{
    padding: 4rem;

    .page-title{
        h1{
            font-weight: $black;
            // text-align: center;
            margin: 3rem 0;
            text-transform: capitalize;
        }
    }

    .p{
        p{
            font-weight: $medium;
            padding-top: 1rem;
            font-size: 1.6rem;
        }
    }



    //DIV HOLDING THE CONTENTS TO BE TYPED AND THE INPUT 
    .type-div{
        background-color: rgb(185, 203, 240);
        padding:.8rem ;
        margin-top: 2rem;
        padding-bottom: 5rem;

            //DIV WITH THE CUSTOM OPTIONS
        .custom-options{
            // background-color: rgb(179, 202, 224);
            display: flex;
            justify-content: space-evenly;
            justify-content: center;
            margin-bottom: 4rem;
            align-items: center;
            .custom-options-div{
                button{
                    background-color: transparent;
                    color: rgb(51, 48, 48);
                    color: black;
                    opacity:.7;
                    padding: 1rem 2rem;
                    border: none;
                    margin: 0 1rem;
                    border-radius: .3rem;
                    cursor: pointer;
                    font-weight: $bold;
                    font-size: 1.5rem;

                    
                }
                .active-quote{
                    // border: 2px solid;
                    border-bottom: 1px solid;
                }
            }
        }

        .quote-div{
            #quote{
                font-weight: $medium;
                font-size:1.8rem;
                margin: 1rem 0;
            }
        }
    
        .message-div{
            #message{
                font-weight: $medium;
                font-size: 1.5rem;
                color: blue;
            }
        }
    
        .input-btn{
            input{
                padding: 1rem 1.5rem;
                font-weight: $bold;
                width: 100%;
                margin-top: 2rem;
                margin-bottom: 2rem;
                color: rgb(0, 0, 0);
                font-size: 1.5rem;
            }
    
    
        }
    }

    .V3GB23{
        color: blue;
        text-decoration: none;
        font-size: 1.2rem;
        font-style: italic;
        position: absolute;
        bottom: 1rem;
        left: 50%;
    }


    //THE START BUTTON
    #start{
        border-radius: .3rem;
        font-weight: $bold;
        padding: 1.3rem 4rem;
        font-size: 1.4rem;
        border: none;
        display: block;
        color: white;
        text-transform: uppercase;
        margin-top: 2rem;
        cursor: pointer;
        background-color: blue;

        &:hover{
            opacity: .8;
        }
    }
}

//class to be added to they quote after it is typed
.finished{
    opacity: .6;
}

//classes to be added to the quotes being typed
.highlight {
    background-color: yellow;
  }
  
  .error {
    background-color: lightcoral;
    border: red;
  }
</style>
