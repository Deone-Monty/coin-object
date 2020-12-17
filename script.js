console.log("Hi Deone")

let coin = {
    state: 0,
    flip: function () {
        
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
              this.state = Math.round(Math.random());
           
           
    },

    
    toString: function() {
        if(this.state === 0) {
            return "heads";

        } else {
            return "tails";
        }
        
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');

        if(this.state === 0) {
            image.src = "images/heads.jpg";
            // image.alt = "quarter heads"

        }else {
            image.src = "images/tails.png";

        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};


// console.log(coin.state)



function display20Flips() {
    for(let i = 0; i < 20; i++) {
        coin.flip();
        let li = document.createElement("li");
        li.innerHTML = coin.toString();
        // li.append = coin.toString();
        document.body.append(li)
    }

}
// Write a function called display20Flips that uses a loop to flip the coin 20 times. 
// Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)




function display20Images() {
    for(let i = 0; i < 20; i++) {

        coin.flip();
        
        document.body.append(coin.toHTML());

    }

}

// Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, 
// display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).


display20Flips();
display20Images();