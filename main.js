let products = {
    data: [
      {
        productName: "Great Indian Novel",
        category: "Fiction",
        price: "By Shashi Tharoor",
        image: "image/book-1.jpeg",
      },
      {
        productName: "Masterpieces of English",
        category: "Horror",
        price: "By Kenneth Brown",
        image: "image/book-2.jpeg",
      },
      {
        productName: "Death Comes To Call",
        category: "Mystery",
        price: "By Clare Chase",
        image: "image/book-3.jpeg",
      },
      {
        productName: "The Novel",
        category: "Fiction",
        price: "By Michael Schmidt",
        image: "image/book-4.jpeg",
      },
      {
        productName: "The Alchemist",
        category: "Romance",
        price: "By Paulo Coelho",
        image: "image/book-5.jpeg",
      },
      {
        productName: "Anne of Green Fables",
        category: "Fiction",
        price: "By LM Montomer",
        image: "image/book-6.jpeg",
      },
      {
        productName: "Stranger Things",
        category: "Mystery",
        price: "By Grek Pak",
        image: "image/book-7.jpeg",
      },
      {
        productName: "Olive, Again",
        category: "Horror",
        price: "By Elizabeth Strout",
        image: "image/book-9.webp",
      },
      {
        productName: "Demon In The Wood",
        category: "Horror",
        price: "By Leigh Barduga",
        image: "image/book-10.jpeg",
      },
      {
        productName: "Harry Potter",
        category: "Mystery",
        price: "By JK Rowling",
        image: "image/book-11.webp",
      },
      {
        productName: "Normal People",
        category: "Romance",
        price: "By Sally Rooney",
        image: "image/book-12.jpeg",
      },
      {
        productName: "Solar Bones",
        category: "Romance",
        price: "By McCormack ",
        image: "image/book-13.jpeg",
      },
      {
        productName: "Women of Light",
        category: "Horror",
        price: "By Anstine",
        image: "image/book-14.jpeg",
      },
      {
        productName: "The Glass Hotel",
        category: "Fiction",
        price: "By Emily Mandel",
        image: "image/book-15.jpeg",
      }
    ],
  };
  
  for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    let price = document.createElement('a');
    var link = document.createTextNode("Read Now");
    price.appendChild(link); 
    price.title = "This is Link"; 
    price.href = "book-description.html";
    price.classList.add("readnow-link");
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
  
  window.onload = () => {
    filterProduct("all");
  };