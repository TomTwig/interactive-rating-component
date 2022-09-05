const thanksState = document.getElementById('state-thanks');
const ratingState = document.getElementById('state-rating');
const userRating = document.getElementById('user__rating');
const ratingList = document.getElementById("list_rating");

let ratingValue;

ratingList.addEventListener("click",(element) =>
{
        if(element.target.tagName === "LI"){

                for(let i = 0; i < element.target.parentElement.children.length; i++ ){
                        console.log(element.target.parentElement.children[i].classList.remove("active"));
                }
                element.target.classList.toggle("active");
                ratingValue = element.target.innerHTML;
                console.log(ratingValue); 
        }
}
);



const button = document.getElementById("button");
thanksState.style.display="none";
button.addEventListener("click",changeState);







function changeState (){
        thanksState.style.display = "block";
        ratingState.style.display = "none";
        userRating.innerHTML = ratingValue;
}








