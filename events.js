
const sets = document.querySelectorAll('.set');
const silhouettes = document.querySelectorAll('.silhouette');
const cookie = document.getElementById("cookie");
const npc1 = document.getElementById('npc1');
const marine = document.getElementById('marine');
const money = document.getElementById('money');
const sera = document.getElementById('sera');
const eeper = document.getElementById('eeper');
const perla = document.getElementById('perla');
const scaredy = document.getElementById('scaredy');
const lockjaw = document.getElementById('lockjaw');
const ow = document.getElementById('ow');
const shellgal = document.getElementById('shellgal');
const mouja = document.getElementById('mouja');
const phoebi = document.getElementById('phoebi');
const spongemaster = document.getElementById('spongemaster');
const npc1textbox = document.getElementById('npc1textbox');
const npc2textbox = document.getElementById('npc2textbox');
const npc1text = document.getElementById('npc1dialogtext');
const npc2text = document.getElementById('npc2dialogtext');
const dialogarrow = document.getElementById('dialogarrow');
const dialogarrow2 = document.getElementById('dialogarrow2');
const entercave = document.getElementById('entercave');
const npcportrait = document.getElementById('npcportrait');
const npc2portrait = document.getElementById('npc2portrait');
const giveawaypearl = document.getElementById('giveawaypearl');

// showing sets
sets.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = "90%";  
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = "3%";  
    });
});

// showing silhouettes
silhouettes.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = "70%";  
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = "1%";  
    });
});



// eating the bear
if(cookie){
var bite = new Audio('assets/music/chomp.mp3');

cookie.addEventListener("click", function() {
    bite.play();
    cookie.src = "assets/bearcookieATED.png";

});
};


const npc1gatekeep = [
    "What...? you want me to move out of the way?", 
"Uhm... well, normally I wouldn't let you through", 
"Marine.. she's.. busy right now. I can't let you disturb her hard work!", 
"But you see.. at this point I was supposed to tell you to collect seashells for me and I'll let you through",
"What are the shells for..? Heh.. none of your business! /////",
"But anyway.. LaceDream ended up realizing he can't. realistically code that minigame in 4 days.",
"So uh. I guess I'll let you through. Just dont disturb Marine, alright!?" ];


var n = 0;
if(npc1){

    npc1.addEventListener("click", function() {
        npc1textbox.style.display = "block";
        npc1text.textContent = npc1gatekeep[n];});

    dialogarrow.addEventListener("click", function(){
        if (n === 6) {        npc1textbox.style.display = "none";
            entercave.style.display = "block";
            npc1.style.right = "60%";

        }
        else if (n === 1) {
            npcportrait.src = "assets/npc/gatekeep1.png";
        n = n+1;
        
        npc1text.textContent = npc1gatekeep[n];
        }
        else if (n === 0) {
            npcportrait.src = "assets/npc/gatekeep4.png";
        n = n+1;
        
        npc1text.textContent = npc1gatekeep[n];
        }
        else if (n === 2) {
            npcportrait.src = "assets/npc/gatekeep3.png";
        n = n+1;
        
        npc1text.textContent = npc1gatekeep[n];
        }
        else if (n === 3) {
            npcportrait.src = "assets/npc/gatekeep2.png";
        n = n+1;
        
        npc1text.textContent = npc1gatekeep[n];
        }
        else if (n === 4) {
            npcportrait.src = "assets/npc/gatekeep3.png";
        n = n+1;
        
        npc1text.textContent = npc1gatekeep[n];
        }
        else if (n === 5) {
            npcportrait.src = "assets/npc/gatekeep4.png";
        n = n+1;
        
        npc1text.textContent = npc1gatekeep[n];
        }
        else{
        n = n+1;
        
        npc1text.textContent = npc1gatekeep[n];}

    }
)

    };
    
    
    const marinedialog = [
        "Hm..? Greetings, stranger...", 
    "My name is Marine, in the room to your left is my dear assistant, Sera. This is our little boutique...", 
    "I am still making preparations for our new limited collection.", 
    "it will be open in only a few days. So be on the lookout, won't you?", 
    "We house many exquisite ocean-inspired fashion pieces from various designers.",
    "I actually happen to have a book with a collection of their sketches.",
    "I'ts- Ah...? Where did it go...",
    "Hmm... Mind not, I will find it eventually. ",
    "Nonetheless, for now... Feel free to take a gander at what we have so far.", "If you like what you see, I graciously await your arrival on our opening day.",];
    var f = 0;
    if(marine){
    
        marine.addEventListener("click", function() {
            npc1textbox.style.display = "block";
            npc1text.textContent = marinedialog[f];
        });
    
        dialogarrow.addEventListener("click", function(){
            if (f === 9) {        npc1textbox.style.display = "none";
            }
            else if (f === 0) {
                
                npcportrait.src = "assets/npc/marineclosed.png";
                f = f+1;
             npc1text.textContent = marinedialog[f];
            }
            else if (f === 1) {
                
                npcportrait.src = "assets/npc/marinesmile.png";
                f = f+1;
             npc1text.textContent = marinedialog[f];
            }
            
            else if (f === 3) {
                
                npcportrait.src = "assets/npc/marineclosed.png";
                f = f+1;
             npc1text.textContent = marinedialog[f];
            }
            else if (f === 5) {
                
                npcportrait.src = "assets/npc/marinethink.png";
                f = f+1;
             npc1text.textContent = marinedialog[f];
            }
            else if (f === 6) {
                
                npcportrait.src = "assets/npc/marinesigh.png";
                f = f+1;
             npc1text.textContent = marinedialog[f];
            }
            else if (f === 7) {
                
                npcportrait.src = "assets/npc/marinesmile.png";
                f = f+1;
             npc1text.textContent = marinedialog[f];
            }
            else if (f === 8) {
                
                npcportrait.src = "assets/npc/marineclosed.png";
                f = f+1;
             npc1text.textContent = marinedialog[f];
            }
            else{
            f = f+1;
            
            npc1text.textContent = marinedialog[f];}
    
        }
    )
    
        };

        
    const seradialog = [
        "Eh?.. A customer..? Sorry, eheh... we're not open yet...", 
    "Oh.. Marine told you you can look around?... No harm in that, I guess.", 
    "Hah.. Sorry for the rude introduction.. things are just... Hectic right now!", 
    "You see these beautiful clothes all around us?", "With the help of various designers, Marine worked hard tailoring every single one", 
    " ...using shells, gems, seaglass and trinkets she found in the ocean. Amazing, isn't she? but...",
    "Yesterday, I stepped into the studio, and I immediately saw our stash of shells and trinkets has been stolen!!",
    "Who would've thought these waters are littered with thieves!", "...", "...You know who I bet it was..?",
    "I bet it was that SCHEMING gatekeeper. The one who's always outside the cave entrance.", 
    "As soon as they heard the shells were missing, they've suspiciously been coming to Marine with a bunch of trinkets, probably in attempt to charm her or something!",
    "But I bet they didn't even find those shells themselves, they came right from here!",    
    "Honestly!! They're so- Ah.. sorry... can I assist you in anything?"];
        
        var a = 0;
        if(sera){
        
            sera.addEventListener("click", function() {
                npc1textbox.style.display = "block";
                npc1text.textContent = seradialog[a];
                
                npcportrait.src = "assets/npc/seranervous.png";
            });
        
            dialogarrow.addEventListener("click", function(){
                if (a === 13) {        npc1textbox.style.display = "none";
                }
                else if (a === 2) {
                    
                    npcportrait.src = "assets/npc/sera.png";
                    a = a+1;
                 npc1text.textContent = seradialog[a];
                }
                else if (a === 1) {
                    
                    npcportrait.src = "assets/npc/serasigh.png";
                    a = a+1;
                 npc1text.textContent = seradialog[a];
                }
                else if (a === 7) {
                    
                    npcportrait.src = "assets/npc/serapout2.png";
                    a = a+1;
                 npc1text.textContent = seradialog[a];
                }
                
                else if (a === 9) {
                    
                    npcportrait.src = "assets/npc/serapout.png";
                    a = a+1;
                 npc1text.textContent = seradialog[a];
                }
                else if (a === 5) {
                    
                    npcportrait.src = "assets/npc/serapout.png";
                    a = a+1;
                 npc1text.textContent = seradialog[a];
                }
                else if (a === 12) {
                    
                    npcportrait.src = "assets/npc/seranervous.png";
                    a = a+1;
                 npc1text.textContent = seradialog[a];
                }
                
                else{
                a = a+1;
                
                npc1text.textContent = seradialog[a];}
        
            }
        )
        
            };
                   
      
    const moneydialog = [
    "The boutique seems to be coming along quite well...", 
    "Yes... this seems to be proving a worthy investment.", 
    "Once it opens, I'll be rolling in sand dollars~", 
    "Hmm..? You want piece of the pie too?", 
    "Fufufu.. Well.. I'll let you in on a little secret.",
    "In your world, there is a secret giveaway... for 'Stardusts', as you may call it...",
    "In the competition, just write the secret password - 'MARINE', and you might win a fortune...",
    "Click on my shell below, and you'll be taken right there.",
    "Thank me later, alright, dear?"];
        

    var f = 0;
    if(money){
    
        money.addEventListener("click", function() {
            npc2textbox.style.display = "block";
            npc2text.textContent = moneydialog[f];
            npc2text.href = moneydialog[f];
        });
    
        dialogarrow2.addEventListener("click", function(){
            if (f === 8) {        npc2textbox.style.display = "none";
            }
            else if (f === 6) {
            giveawaypearl.style.display = "block"
            f = f+1;
            npc2text.textContent = moneydialog[f];}
            else{
            f = f+1;
            
            npc2text.textContent = moneydialog[f];}
    
        }
    )
    
        };

        
    const eeperdialog = [
        "Gh...", 
        "Just... 5 more minutes...", 
        "Okaaay fiiine... I'm awake.. Good morni-", 
        "Wait! it's still dark? Why would you wake me up?!", 
        "That's so cruel.. Hmph..", 
        "The book? What about it...?",
        "I found it, so that means it's mine now.",
        "I guess it won't hurt if you take a look...",
        "But no spoilers, ok?!",
        "What, you have more questions..? Eh? What do you mean, shadowy figures?",
        "What are you talking about? Are you trying to give me nightmares?????",
        "GO AWAAYYY!!! i am TRYING to get my BEAUTY SLEEP  ! ! !",  
        "i need to be ready... for the opening ...  of ...... zzz.... ",
        "zzzzzzzzzzzzzz........."];

        var f = 0;
        if(eeper){
        
            eeper.addEventListener("click", function() {
                npc1textbox.style.display = "block";
                npc1text.textContent = eeperdialog[f];
            });
        
            dialogarrow.addEventListener("click", function(){
                if (f === 13) {        npc1textbox.style.display = "none";
                }
                else if (f === 1) {
                    
                    npcportrait.src = "assets/npc/eeper.png";
                    f = f+1;
                 npc1text.textContent = eeperdialog[f];
                }
                else if (f === 2) {
                    
                    npcportrait.src = "assets/npc/eeper3.png";
                    f = f+1;
                 npc1text.textContent = eeperdialog[f];
                }
                else if (f === 4) {
                    
                    npcportrait.src = "assets/npc/eeper2.png";
                    f = f+1;
                 npc1text.textContent = eeperdialog[f];
                }
                else if (f === 6) {
                    
                    npcportrait.src = "assets/npc/eeper.png";
                    f = f+1;
                 npc1text.textContent = eeperdialog[f];
                }
                
                
                else if (f === 8) {
                    
                    npcportrait.src = "assets/npc/eeper3.png";
                    f = f+1;
                 npc1text.textContent = eeperdialog[f];
                }
                
                else if (f === 11) {
                    
                    npcportrait.src = "assets/npc/eeperyawn.png";
                    f = f+1;
                 npc1text.textContent = eeperdialog[f];
                }
                
                else{
                f = f+1;
                
                npc1text.textContent = eeperdialog[f];}
        
            }
        )
        
            };

            const scaredydialog = [
                "GAAAAAAAAAAH!?", 
            "Oh.. Oh my god.. you scared me... Please don't creep up on me like that...", 
            "What am I doing here? Ah.. well.. just.. y'know...?", 
            "Uhm...", 
            "...This... This ship is pretty cool, isn't it...?",
            "I was trying to explore it just now...",
            "But it's so dark- I couldn't see a thing!",
            "I swear there was a lightswitch hidden somewhere in the dark",
            "I was aimlessly touching around to find it... But then...",
            "I saw some sort of ominous red light flash in my eyes!..! I got SO scared, I ran as fast out of there as I could!",
            "I'm so frustrated - I really wanted to see what secrets I could uncover in there",
            "But now I can't even think of going back... I felt like my heart was gonna burst",
            "Uh... If by any chance you're going in there...",
            "Click around... Maybe you'll find the switch?..."];

            var f = 0;
            if(scaredy){
            
                scaredy.addEventListener("click", function() {
                    npc1textbox.style.display = "block";
                    npc1text.textContent = scaredydialog[f];
                });
            
                dialogarrow.addEventListener("click", function(){
                    if (f === 13) {        npc1textbox.style.display = "none";
                    }
                    else if (f === 0) {
                        
                        npcportrait.src = "assets/npc/lennie3.png";
                        f = f+1;
                     npc1text.textContent = scaredydialog[f];
                    }
                    else if (f === 1) {
                        
                        npcportrait.src = "assets/npc/lennie.png";
                        f = f+1;
                     npc1text.textContent = scaredydialog[f];
                    }
                    else if (f === 2) {
                        
                        npcportrait.src = "assets/npc/lennie4.png";
                        f = f+1;
                     npc1text.textContent = scaredydialog[f];
                    }
                    else if (f === 3) {
                        
                        npcportrait.src = "assets/npc/lennie5.png";
                        f = f+1;
                     npc1text.textContent = scaredydialog[f];
                    }
                    
                    else if (f === 5) {
                        
                        npcportrait.src = "assets/npc/lennie6.png";
                        f = f+1;
                     npc1text.textContent = scaredydialog[f];
                    }
                    
                    else if (f === 8) {
                        
                        npcportrait.src = "assets/npc/lennie7.png";
                        f = f+1;
                     npc1text.textContent = scaredydialog[f];
                    }
                    else if (f === 11) {
                        
                        npcportrait.src = "assets/npc/lennie3.png";
                        f = f+1;
                     npc1text.textContent = scaredydialog[f];
                    }
                    else{
                    f = f+1;
                    
                    npc1text.textContent = scaredydialog[f];}
            
                }
            )
            
                };
        
                const lockjawdialog = [
                    "?!", 
                "Eh?!", 
                "Hiding..? We're not hiding! ..Anything!!", 
                "(Dude... I don't think this is a good idea anymore...)", 
                "(Shhhtfkup!!)", 
                "Y-Yeah.. We're just.. U-uh.. Hanging out...", 
                "You know. Like guys do. Chilling out. In the darkness.",
                "Y-yup! G..guys like us, w-we're not afraid of the d-dark...!",
                "Pft... Unlike that wuss who was just here... Heh... Was that Lennie?",
                "Man, the way they ran out when they saw my mask light up was SO funny!",
                "They damn near tripped over trying to get away!",
                "Hahah... anyway....",
                "You can run along now...",
                "Kinda rude of you to disturb our cool guy hangout time.",
                "And stop trying to look behind me. There's nothing there...!",
                "(Why do I keep getting pulled into his mess?) ",];

                var f = 0;
                if(lockjaw){
                
                    var light = new Audio('assets/music/Light_Switch.mp3');
                    light.play();
                    lockjaw.addEventListener("click", function() {
                        npc1textbox.style.display = "block";
                        npc1text.textContent = lockjawdialog[f];
                    });
                
                    dialogarrow.addEventListener("click", function(){
                        if (f === 15) {        npc1textbox.style.display = "none";
                        }
                        else if (f === 2) {
                            
                            npcportrait.src = "assets/npc/lockjawfake.png";
                            f = f+1;
                         npc1text.textContent = lockjawdialog[f];
                        }
                        else{
                        f = f+1;
                        
                        npc1text.textContent = lockjawdialog[f];}
                
                    }
                )
                
                    };
                
                const fishfacts = [
                    "Sharks are the only fish with eyelids!", 
                    "Sharks are the only fish with eyelids!", 
                "Many cosmetic products like lipstick and nail polish contain 'pearl essence', which is a substance extracted from fish scales to create a shimmery, pearlescent effect!", 
                "Fish are the oldest inhabitants of earth!", 
                "With proper training, fish can learn to interact with you and do tricks just like any other pet!", 
                "Fish can only swim forward! The only exception are eels, who have the ability to swim backwards~",
                "Fish have been proven to have good memory and have the ability to navigate mazes, seek out reward and use tools!",
            "Starfish actually aren't fish... Neither are jellyfish!"];

                let fact = Math.floor((Math.random() * 7) + 1);
                if(mouja){
                
                    mouja.addEventListener("click", function() {
                        npc1textbox.style.display = "block"
                    });
                
                    dialogarrow.addEventListener("click", function(){
                        if (f === 10){
                                npc1textbox.style.display = "none"
                        }
                        else {

                            npcportrait.src = "assets/npc/moujasmile.png";
                            npc1text.textContent = fishfacts[fact];
                            f = 10;
                        }
                
                    }
                )
                
                    };


                    
                    if (ow){
                        
                        ow.addEventListener("click", function() {
                            npc1textbox.style.display = "block";
                        });
                            dialogarrow.addEventListener("click", function(){
                                npc1textbox.style.display = "none";
                            })
                        };

                    
                const spongedialog = [
                    "WAZZUUUUPPP!! It's ME!!! The SPONGEMASTER!!", 
                "MAaaan does it feel good to finally say that! Nobody's found my secret room yet!", 
                "Heh... it's preeetty awesome, right? ",
                "I had to get rid of those STINKY elder guardians to claim this room...", 
                "And all I get is these... Sponges...", 
                "That's right- all these sponges are now MINE!!!!!!!!!!", 
                 "AHHAHAHAHAAHAHAAHHAHAHHAHAHAHHAHAHAH!!!!", 
                "HAHAHAHAHhhahaha... ha.... .......", 
                "...", 
                ".....Uh.. How did ya get here anyway?", 
                "...", 
                "What? What do you mean I'm in the wrong game?",
                "What are you talking about..?",
                "I-I'm. the SPONGEMASTER!.... dude...",
                ".........",
                "....?"];

                var f = 0;
                if(spongemaster){
                
                    spongemaster.addEventListener("click", function() {
                        npc1textbox.style.display = "block";
                        npc1text.textContent = spongedialog[f];
                    });
                
                    dialogarrow.addEventListener("click", function(){
                        if (f === 15) {        npc1textbox.style.display = "none";
                        }
                        else if (f === 0) {
                            
                            npcportrait.src = "assets/npc/spongemaster1.png";
                            f = f+1;
                         npc1text.textContent = spongedialog[f];
                        }
                        else if (f === 1) {
                            
                            npcportrait.src = "assets/npc/spongemaster2.png";
                            f = f+1;
                         npc1text.textContent = spongedialog[f];
                        }
                        else if (f === 2) {
                            
                            npcportrait.src = "assets/npc/spongemaster5.png";
                            f = f+1;
                         npc1text.textContent = spongedialog[f];
                        }
                        else if (f === 3) {
                            
                            npcportrait.src = "assets/npc/spongemaster3.png";
                            f = f+1;
                         npc1text.textContent = spongedialog[f];
                        }
                        else if (f === 4) {
                            
                            npcportrait.src = "assets/npc/spongemaster5.png";
                            f = f+1;
                         npc1text.textContent = spongedialog[f];
                        }
                        else if (f === 6) {
                            
                            npcportrait.src = "assets/npc/spongemaster1.png";
                            f = f+1;
                         npc1text.textContent = spongedialog[f];
                        }
                        else if (f === 7) {
                            
                            npcportrait.src = "assets/npc/spongemaster2.png";
                            f = f+1;
                         npc1text.textContent = spongedialog[f];
                        }
                        else if (f === 10) {
                            
                            npcportrait.src = "assets/npc/spongemaster3.png";
                            f = f+1;
                         npc1text.textContent = spongedialog[f];
                        }
                        else if (f === 12) {
                            
                            npcportrait.src = "assets/npc/spongemaster2.png";
                            f = f+1;
                         npc1text.textContent = spongedialog[f];
                        }
                        else if (f === 13) {
                            
                            npcportrait.src = "assets/npc/spongemaster3.png";
                            f = f+1;
                         npc1text.textContent = spongedialog[f];
                        }
                        else if (f === 14) {
                            
                            npcportrait.src = "assets/npc/spongemaster4.png";
                            f = f+1;
                         npc1text.textContent = spongedialog[f];
                        }
                        else{
                        f = f+1;
                        
                        npc1text.textContent = spongedialog[f];}
                
                    }
                )
                
                    };
            
                    const perladialog = [
                        "...", 
                    "Oh! Sorry, I didn't see you there, I was aloof...", 
                    "You see, I've been looking for my sister in these waters.",
                    "Mayhaps you've seen her?",
                    "She looks just like me:", 
                    "So stunning. Beautiful. Wonderful.", 
                    "Runway material. Beauti-", 
                     "Sorry, I got carried away, let's dial that back -", 
                    "She's just like me, but she's changed...", 
                    "Her eyes, they've become like voids..", 
                    "And the twin pearl connecting us has blackened.", 
                    "...", 
                    "I'm afraid that if I do not find her soon,",
                    "She will never know how much I miss her.",
                    "...Sorry for rambling on. I'll get back to looking!"];

                    
                var f = 0;
                if(perla){
                
                    perla.addEventListener("click", function() {
                        npc1textbox.style.display = "block";
                        npc1text.textContent = perladialog[f];
                    });
                
                    dialogarrow.addEventListener("click", function(){
                        if (f === 14) {        npc1textbox.style.display = "none";
                        }
                        else if (f === 0) {
                            
                            npcportrait.src = "assets/npc/perlatalk.png";
                            f = f+1;
                         npc1text.textContent = perladialog[f];
                        }
                        else if (f === 1) {
                            
                            npcportrait.src = "assets/npc/perlaclosed2.png";
                            f = f+1;
                         npc1text.textContent = perladialog[f];
                        }
                        else if (f === 2) {
                            
                            npcportrait.src = "assets/npc/perlatalk.png";
                            f = f+1;
                         npc1text.textContent = perladialog[f];
                        }
                        else if (f === 4) {
                            
                            npcportrait.src = "assets/npc/perlawink.png";
                            f = f+1;
                         npc1text.textContent = perladialog[f];
                        }
                        else if (f === 6) {
                            
                            npcportrait.src = "assets/npc/perlasmile.png";
                            f = f+1;
                         npc1text.textContent = perladialog[f];
                        }
                        else if (f === 8) {
                            
                            npcportrait.src = "assets/npc/perlaclosed2.png";
                            f = f+1;
                         npc1text.textContent = perladialog[f];
                        }
                        else if (f === 12) {
                            
                            npcportrait.src = "assets/npc/perla.png";
                            f = f+1;
                         npc1text.textContent = perladialog[f];
                        }
                        else if (f === 13) {
                            
                            npcportrait.src = "assets/npc/perlatalk.png";
                            f = f+1;
                         npc1text.textContent = perladialog[f];
                        }
                        else{
                        f = f+1;
                        
                        npc1text.textContent = perladialog[f];}
                
                    }
                )
                
                    };


                    const shellgaldialog = [
                        "Hey, enjoying the beach? Are you searching for shells too?", 
                    "I spent the whole afternoon searching the shore and found the most beautiful shells.", 
                    "There's this beautiful iridescent big one that's just perfect!",
                    "I'll definitely take it to Marine - maybe it'll strike some inspiration.",
                    "The colors remind me of the sea and soft sand - so calming...", 
                    "Anyway, before I knew it... The sun went down.", 
                    "And the shore was illuminated in a gorgeous blue glow.", 
                    "It's so beautiful, I decided to stay a while longer.", 
                    "Oh, just make sure not to touch it... Bioluminescent plankton is acutally toxic.", 
                    "Ahhh... well it was nice meeting you!", 
                    "I can't wait to visit the Marine Boutique next Thursday.", 
                     "On... the 15th, I think? Hopefully I'll see you there too?"];

                     
                var f = 0;
                if(shellgal){
                
                    shellgal.addEventListener("click", function() {
                        npc1textbox.style.display = "block";
                        npc1text.textContent = shellgaldialog[f];
                    });
                
                    dialogarrow.addEventListener("click", function(){
                        if (f === 11) {        npc1textbox.style.display = "none";
                        }
                        else if (f === 1) {
                            
                            npcportrait.src = "assets/npc/shellgaltalk.png";
                            f = f+1;
                         npc1text.textContent = shellgaldialog[f];
                        }
                        else if (f === 3) {
                            
                            npcportrait.src = "assets/npc/shellgalclosed.png";
                            f = f+1;
                         npc1text.textContent = shellgaldialog[f];
                        }
                        else if (f === 4) {
                            
                            npcportrait.src = "assets/npc/shellgaltalk.png";
                            f = f+1;
                         npc1text.textContent = shellgaldialog[f];
                        }
                        else if (f === 6) {
                            
                            npcportrait.src = "assets/npc/shellgalclosed.png";
                            f = f+1;
                         npc1text.textContent = shellgaldialog[f];
                        }
                        else if (f === 7) {
                            
                            npcportrait.src = "assets/npc/shellgaltalk.png";
                            f = f+1;
                         npc1text.textContent = shellgaldialog[f];
                        }
                        else if (f === 8) {
                            
                            npcportrait.src = "assets/npc/shellgalsmile.png";
                            f = f+1;
                         npc1text.textContent = shellgaldialog[f];
                        }
                        else{
                        f = f+1;
                        
                        npc1text.textContent = shellgaldialog[f];}
                
                    }
                )
                
                    };

                    

                    const phoebidialog = [
                        "Hm...? Is someone there? I can hear someone..", 
                        "Oh, hi!! Who're you? Are you exploring?", 
                    "This area is my faaavourite! You like it too, right?", 
                    "The calming music~ and the way I can feel the little fishies swimming happily around me~",
                    "Truly amazing!! I could live here forever and ever~~",
                    "So.. are you looking for something? Someone?", 
                    "Ah.. A book? Marine lost her book?", 
                    "Sheesh, first her supplies being stolen, and now this?", 
                    "Weeelll.. Morvoren might know something about it, theyre into books!", 
                    "She lives within the purple coral reef, but uh..", "I heard they don't like to be disturbed, so...", 
                    "Oh, oh! Maybe it's that creepy fish..! Guy!", 
                    "Him and his lackey... Honestly, I think they're up to no good!", 
                     "But don't worry! Lennie went to check that place out!", 
                     "Or at least.... I think? I haven't heard anything from them in a while...", 
                     "Hmm... Well anyway! I'm sure Marine's stuff will be found in no time!"];

                     
                var f = 0;
                if(phoebi){
                
                    phoebi.addEventListener("click", function() {
                        npc1textbox.style.display = "block";
                        npc1text.textContent = phoebidialog[f];
                    });
                
                    dialogarrow.addEventListener("click", function(){
                        if (f === 15) {        npc1textbox.style.display = "none";
                        }
                        else if (f === 0) {
                            
                            npcportrait.src = "assets/npc/phoebihappy1.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else if (f === 2) {
                            
                            npcportrait.src = "assets/npc/phoebihappy2.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else if (f === 3) {
                            
                            npcportrait.src = "assets/npc/phoebihappy1.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else if (f === 4) {
                            
                            npcportrait.src = "assets/npc/phoebismile.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else if (f === 5) {
                            
                            npcportrait.src = "assets/npc/phoebigasp.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else if (f === 6) {
                            
                            npcportrait.src = "assets/npc/phoebithink.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else if (f === 7) {
                            
                            npcportrait.src = "assets/npc/phoebismile.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else if (f === 8) {
                            
                            npcportrait.src = "assets/npc/phoebithink.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else if (f === 10) {
                            
                            npcportrait.src = "assets/npc/phoebigasp.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else if (f === 12) {
                            
                            npcportrait.src = "assets/npc/phoebismile.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else if (f === 13) {
                            
                            npcportrait.src = "assets/npc/phoebithink.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else if (f === 14) {
                            
                            npcportrait.src = "assets/npc/phoebihappy1.png";
                            f = f+1;
                         npc1text.textContent = phoebidialog[f];
                        }
                        else{
                        f = f+1;
                        
                        npc1text.textContent = phoebidialog[f];}
                
                    }
                )
                
                    };