let product_dtails=JSON.parse(localStorage.getItem("clicked_details"));
console.log(product_dtails);
// console.log(product_dtails.price);
function product(product_dtails)
{
    let leftdiv=document.getElementById("leftcont")
    let image_div=document.createElement("div");
    image_div.setAttribute("id","image");
    let image=document.createElement("img");
    image.src=product_dtails.image_link;
    image_div.append(image);
   
    let logimage=document.createElement("div");
    logimage.setAttribute("id","logimage");
    let iogimg=document.createElement("img");
    iogimg.src="prodet.jpg";
    logimage.append(iogimg);
    let proddetails=document.createElement("div");
    proddetails.setAttribute("id","proddetails");
    let h1=document.createElement("h3");
    h1.textContent="Product Details";

    let dirctiondiv=document.createElement("div");
    dirctiondiv.style.display="flex";
    dirctiondiv.style.background="rgba(211, 186, 186, 0.705)";
    let direct=document.createElement("p");
    direct.textContent="Directions:";
    direct.style.flex="2";
    direct.style.fontSize="20px";
    let direc=document.createElement("p");
    direc.style.flex="8";
    direc.textContent=product_dtails.Description;
   
    dirctiondiv.append(direct,direc);

    let Ingredientsdiv=document.createElement("div");
    Ingredientsdiv.style.display="flex";
    let Ingredientst=document.createElement("p");
    Ingredientst.textContent="Ingredients:";
    Ingredientst.style.flex="2";
    Ingredientst.style.fontSize="20px";

    let Ingredients=document.createElement("p");
    Ingredients.style.flex="8";
    Ingredients.textContent=product_dtails. Ingredients;
    Ingredientsdiv.append(Ingredientst, Ingredients);

    
    let Branddiv=document.createElement("div");
    Branddiv.style.display="flex";
    Branddiv.style.background="rgba(211, 186, 186, 0.705)";
    let brandt=document.createElement("p");
    brandt.textContent="Brand:";
    brandt.style.flex="2";
    brandt.style.fontSize="20px";

    let Brand=document.createElement("p");
    Brand.textContent=product_dtails.Brand;
    Brand.style.flex="8";
    // Brand.style.background="rgba(211, 186, 186, 0.705)";
    Branddiv.append(brandt, Brand);

    proddetails.append(h1, dirctiondiv, Ingredientsdiv,Branddiv);

    leftdiv.append(image_div,logimage,proddetails);

    // leftdivcompleted
    let rightcont=document.getElementById("rightcont");
   
    let pricenamediv=document.createElement("div");
    pricenamediv.style.fontFamily="sans-serif";
    let brad=document.createElement("h4");
    brad.textContent=product_dtails.Brand;
    let name=document.createElement("h1");
    name.textContent=product_dtails.name;
    price=document.createElement("h1");
    price.textContent=`$ ${product_dtails.price}`;
    let hr=document.createElement("hr");
    pricenamediv.append(brad,name,price,hr);
    

    let button=document.createElement("button");
    button.textContent="ADD TO CART";
    button.style.width="100%";
    button.style.backgroundColor="Black";
    button.style.color="white";
    button.style.padding="13px 0px";
    button.style.cursor="pointer";
    button.onclick=function(event)
    {
        addtocartt(product_dtails);
    };
    let wishbutton=document.createElement("button")
    wishbutton.onclick=(event)=>{
        wishbuttonfun()
    }
    wishbutton.setAttribute("id","wishlist");
    wishbutton.textContent="Save to WishList";
    wishbutton.style.margin="30px 5px";
    wishbutton.style.padding="10px";
    wishbutton.style.border="0";
    // wishbutton.style.background="none";
    wishbutton.style.cursor="pointer";


let hi=document.createElement("p");
hi.textContent="In stock - Usually dispatched within 24 hours";

let selet=document.createElement("h3");
selet.textContent="Select your Gifts";
let dis=document.createElement("p");
dis.innerHTML="Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while stocks last.";

let shopbutton=document.createElement("button");
shopbutton.textContent="SHOP NOW";
shopbutton.onclick=(event)=>{
    buynow();
}
shopbutton.style.padding="20px";
    rightcont.append(pricenamediv,button,wishbutton,hi,selet,hr,dis,shopbutton);


}



product(product_dtails);

function  addtocartt(elem){
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
    cart.push(elem);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Item is add to cart");
    // console.log(cart);
   window.location.href="manojcart.html";
}

function wishbuttonfun(){
    alert("item add to wish list");
}

function buynow(){
    alert("This function not availabe");
}