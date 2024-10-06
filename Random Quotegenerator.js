

let quotes=[
   "Opportunities don't happen. You create them." ,
   "Don't watch the clock; do what it does. Keep going." ,
   "The way to get started is to quit talking and begin doing." ,
   "I find that the harder I work, the more luck I seem to have." ,
   "Success usually comes to those who are too busy to be looking for it.", 
   "Don't be afraid to give up the good to go for the great." ,
   "Success is the sum of small efforts, repeated day-in and day-out." ,
   "The secret of change is to focus all of your energy not on fighting the old but on building the new." ,
   "If you really look closely, most overnight successes took a long time." ,
   "Success is not in what you have, but who you are." ,
   "The future belongs to those who believe in the beauty of their dreams." ,
    
   "The road to success and the road to failure are almost exactly the same." ,
   "To be successful, you must accept all challenges that come your way. You can't just accept the ones you like." ,
   "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." ,
   "The only place where success comes before work is in the dictionary." ,
   "The best way to predict the future is to create it." ,
   "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work." ,
   "Start where you are. Use what you have. Do what you can." ,
   "Don't be distracted by criticism. Remember, the only taste of success some people have is when they take a bite out of you." ,
   "The difference between who you are and who you want to be is what you do." ,
   "Success is walking from failure to failure with no loss of enthusiasm." ,
   "The ones who are crazy enough to think they can change the world, are the ones who do.",
   "You miss 100% of the shots you dont take.",
   "The purpose of our lives is to add value to the people of this generation and those that follow." ,
   "Success is liking yourself, liking what you do, and liking how you do it." ,
   "In the middle of every difficulty lies opportunity." ,
   "The biggest challenge after success is shutting up about it." ,
   "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit." ,
   "There's no shortage of remarkable ideas, what's missing is the will to execute them." ,
   "Risk more than others think is safe. Dream more than others think is practical." ,
   "You don't need to be a genius or a visionary or even a college graduate to be successful. You just need a framework and a dream." ,
   "Business opportunities are like buses, there's always another one coming." ,
   "Success is not just about making money. It's about making a difference." ,
   "Innovation distinguishes between a leader and a follower." ,
   "The secret of business is to know something that nobody else knows." ,
   "Your most unhappy customers are your greatest source of learning." ,
   "Don't let the fear of losing be greater than the excitement of winning." ,
   "To succeed in business, to reach the top, an individual must know all it is possible to know about that business.",
   "The golden rule for every businessman is this: Put yourself in your customer's place." ,
   "Do not wait to strike till the iron is hot; but make it hot by striking." ,
   "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself." ,
   "To be successful, you have to have your heart in your business, and your business in your heart." ,
   "It's not about ideas. It's about making ideas happen." ,
   "There are no secrets to success. It is the result of preparation, hard work, and learning from failure." ,
   "Time, energy, and talent can be more important than budget." ,
   "The best way to do it, is to do it." ,
   "Do not be embarrassed by your failures, learn from them and start again." ,
   "Success is not how high you have climbed, but how you make a positive difference to the world." ];
  $(document).click(function () {
   let Output=quotes[Math.floor(Math.random()*quotes.length)]
 console.log(Output);
   $(".QuoteOutput").text(Output);
  })

  
   
  
  

  