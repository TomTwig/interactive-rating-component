const thanksState = document.getElementById('state-thanks');
const ratingState = document.getElementById('state-rating');
const userRating = document.getElementById('user__rating');
const ratingList = document.getElementById("list_rating");
const buttonSubmit = document.getElementById("button-submit");
const ratingListElement = document.getElementsByClassName("list_rating__element");

let rating = 0;

for(let i=0;i<ratingListElement.length;i++){
        ratingListElement[i].addEventListener("click",(ratingElement)=>{


                if(!ratingElement.target.classList.contains("active")){

                        // deselect other rating elements
                        for(let a=0;a<ratingListElement.length;a++){
                                if(ratingListElement[a].classList.contains("active")){
                                        ratingListElement[a].classList.remove("active");
                                        
                                }
                        }

                        ratingElement.target.classList.add("active");
                        buttonSubmit.removeAttribute("disabled");
                        rating = ratingElement.target.innerHTML;

                }else{
                        ratingElement.target.classList.remove("active"); 
                        buttonSubmit.setAttribute("disabled","");
                }
                



        })
}

buttonSubmit.addEventListener("click",()=>{



        
})





