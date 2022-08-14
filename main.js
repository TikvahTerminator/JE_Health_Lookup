//Just Eat Food Hygiene Lookup for Firefox
//By Data Cohen 2022

const targetNode = document.querySelectorAll('[data-test-id="searchresults"]')[0]; //We want to watch the Search Results, so this selects the node for the Mutation Observer.
const config = {childList: true, subtree: true };
var last_card = 0; //Keeps a track of the infinite scroll to save loading time.

const main_function = async function(){
    var cards = document.querySelectorAll(".c-restaurantCardContainer");   //Select all restaurant cards

    for (let i = last_card; i < cards.length; i++){
        var current_card = cards[i];
        const restaurant_id = current_card.getAttribute("data-restaurant-id");
        var restaurant_url = "https://hygieneratingscdn.je-apis.com/api/uk/restaurants/"+restaurant_id;
        const restaurant_fsa_image = async () => {
            var menu_response = await fetch(restaurant_url, {method: 'GET'})  
            const rating_json = await menu_response.json();
            var image_url = rating_json['imageUrl'];
            return image_url;
        }
        var newDiv = document.createElement('div');
        var fsa_image = document.createElement('img');
        newDiv.setAttribute('fsaimage', "True")
        fsa_image.src = await restaurant_fsa_image();
        fsa_image.style.cssText = "height: 50%; width: 50%";
        newDiv.appendChild(fsa_image);
        var card_section = current_card.getElementsByTagName("section")[0]
        if (card_section.querySelectorAll('[fsaimage="True"]').length == 0){
            card_section.insertBefore(newDiv, card_section[3]);
        }
        else{
            continue;
        }


    }
    last_card = (cards.length - 1);

}
main_function();
const observer = new MutationObserver(main_function);

observer.observe(targetNode, config);
