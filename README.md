# ccvalid
[12/27 currently working but still in progress, will be available very soon at: instograph.elasticbeanstalk.com]

Checks to see if a number is valid credit card number

You enter a 16 digit number into input field.

If the number is a valid credit card number it will output a confirmation that includes it's type (Visa, Mastercard, American Express, Discover)

Why:

Earlier this month(12/2015) I was making reservations for a hotel online. I would have the option to cancel at any time but I still had to give them my credit card number to confirm the reservation.

Unless I'm actually paying for something, I prefer not to give out my credit card number willy nilly. So I entered a fake number even though I planned to stay there (you never know).

The day of my stay they tried to run my "card" and I had a voicemail from them when my plane landed. I was chatting with the girl at the front desk while whe was running my real card. I explained how I used an algorithm to get the previous number. She thought that was nifty. I wanted to show her but that would involve pulling out my computer and running the code in the terminal...yeah, not going to happen.

So I decided to make a friendlier interface.


#DISCLAIMER: This will only tell you if the number follows the rules of a valid credit card number, meaning it passes the Luhn Algorithm. The number alone is useless without additional information so don't get any bright ideas! 
