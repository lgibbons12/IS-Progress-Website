function hello(list) {
    len = list.length;
    for (var i = 0; i < len; i++) {
        var item = list[i];
        
        // Create an h1 element and set its text to the date
        var h1 = $("<h1>").text(item.date);
        
        // Create an img element and set its src to the picture link
        var img = $("<img>").attr("src", item.picture);
        img.css("max-width", "100%");
        // Create a ul element for the items
        var itemsList = $("<ul>");
        for (var j = 0; j < item.items.length; j++) {
            var listItem = $("<li>").text(item.items[j]);
            itemsList.append(listItem);
        }
        
        // Create a ul element for the links
        var linksList = $("<ul>");
        for (var j = 0; j < item.links.length; j++) {
            var linkItem = $("<li>").append($("<a>").attr("href", item.links[j]).text(item.hypers[j]));
            linksList.append(linkItem);
        }
        
        // Create a div to hold all the elements
        var containerDiv = $("<div>").append(h1, img, itemsList, linksList);
        
        // Append the container div to the div with the id "info"
        $("#info").append(containerDiv);
    }
}

xy = {
    date: "August 31st",
    picture: "Thumbnail.png",
    items: ["Created a Plan", "Finished Django Tutorial"],
    links: ["https://youtu.be/V088DmuOPNY?si=12C_Ptc5mQaEyGIY", "https://github.com/lgibbons12/Django-Tutorial", 'https://docs.google.com/document/d/1lBjsWRsNgdeNCRmxHUvef6lkyieQzKYbMMB82qWVGxY/edit?usp=sharing'],
    hypers: ["Video", "GitHub for the Tutorial", "Rubric"]
}

list = [xy];

function cool() {
    // Get the button element
    var button = document.querySelector(".center-button");
    
    // Hide the button by setting its display property to "none"
    button.style.display = "none";

    // Call the hello function to populate content in #info
    hello(list);
}
