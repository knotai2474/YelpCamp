var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Cat ipsum dolor sit amet, under the bed and flop over. Hide at bottom of staircase to trip human drink water out of the faucet, and thug cat but scratch the furniture attack dog, run away and pretend to be victim. Caticus cuteicus pooping rainbow while flying in a toasted bread costume in space so jump around on couch, meow constantly until given food, intently stare at the same spot scamper so always hungry climb a tree, wait for a fireman jump to fireman then scratch his face. Rub face on everything. Hack up furballs wake up human for food at 4am leave fur on owners clothes yet hate dog intently stare at the same spot, so eat from dog's food, and kick up litter. Immediately regret falling into bathtub plan steps for world domination yet claws in your leg sleep on keyboard if it smells like fish eat as much as you wish kitty loves pigs have secret plans. Sleep nap. Hunt anything that moves instantly break out into full speed gallop across the house for no reason rub face on everything peer out window, chatter at birds, lure them to mouth. Thinking longingly about tuna brine damn that dog use lap as chair, but sniff other cat's butt and hang jaw half open thereafter for if it fits, i sits. See owner, run in terror scratch the furniture climb a tree, wait for a fireman jump to fireman then scratch his face flop over. Chase mice leave hair everywhere, human give me attention meow and meowwww, intently sniff hand. Meowing non stop for food thinking longingly about tuna brine. See owner, run in terror poop in litter box, scratch the walls attack feet, or run in circles, for sit in box. "
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "Cat ipsum dolor sit amet, under the bed and flop over. Hide at bottom of staircase to trip human drink water out of the faucet, and thug cat but scratch the furniture attack dog, run away and pretend to be victim. Caticus cuteicus pooping rainbow while flying in a toasted bread costume in space so jump around on couch, meow constantly until given food, intently stare at the same spot scamper so always hungry climb a tree, wait for a fireman jump to fireman then scratch his face. Rub face on everything. Hack up furballs wake up human for food at 4am leave fur on owners clothes yet hate dog intently stare at the same spot, so eat from dog's food, and kick up litter. Immediately regret falling into bathtub plan steps for world domination yet claws in your leg sleep on keyboard if it smells like fish eat as much as you wish kitty loves pigs have secret plans. Sleep nap. Hunt anything that moves instantly break out into full speed gallop across the house for no reason rub face on everything peer out window, chatter at birds, lure them to mouth. Thinking longingly about tuna brine damn that dog use lap as chair, but sniff other cat's butt and hang jaw half open thereafter for if it fits, i sits. See owner, run in terror scratch the furniture climb a tree, wait for a fireman jump to fireman then scratch his face flop over. Chase mice leave hair everywhere, human give me attention meow and meowwww, intently sniff hand. Meowing non stop for food thinking longingly about tuna brine. See owner, run in terror poop in litter box, scratch the walls attack feet, or run in circles, for sit in box. "
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Cat ipsum dolor sit amet, under the bed and flop over. Hide at bottom of staircase to trip human drink water out of the faucet, and thug cat but scratch the furniture attack dog, run away and pretend to be victim. Caticus cuteicus pooping rainbow while flying in a toasted bread costume in space so jump around on couch, meow constantly until given food, intently stare at the same spot scamper so always hungry climb a tree, wait for a fireman jump to fireman then scratch his face. Rub face on everything. Hack up furballs wake up human for food at 4am leave fur on owners clothes yet hate dog intently stare at the same spot, so eat from dog's food, and kick up litter. Immediately regret falling into bathtub plan steps for world domination yet claws in your leg sleep on keyboard if it smells like fish eat as much as you wish kitty loves pigs have secret plans. Sleep nap. Hunt anything that moves instantly break out into full speed gallop across the house for no reason rub face on everything peer out window, chatter at birds, lure them to mouth. Thinking longingly about tuna brine damn that dog use lap as chair, but sniff other cat's butt and hang jaw half open thereafter for if it fits, i sits. See owner, run in terror scratch the furniture climb a tree, wait for a fireman jump to fireman then scratch his face flop over. Chase mice leave hair everywhere, human give me attention meow and meowwww, intently sniff hand. Meowing non stop for food thinking longingly about tuna brine. See owner, run in terror poop in litter box, scratch the walls attack feet, or run in circles, for sit in box. "
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
