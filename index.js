// d5ec966c27b24f469f257ebd3f60c0fa
console.log("Hello");
let NewsAccordion= document.getElementById(`NewsAccordion`);

const xhr= new XMLHttpRequest();
xhr.open(`GET`,`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d5ec966c27b24f469f257ebd3f60c0fa`,true);
xhr.getResponseHeader(`Content-type`,`application/json`);

xhr.onload= function(){

    if(this.status===200){
        let json=JSON.parse(this.responseText);
         console.log(json);
          let articles=json.articles;
          let newsconst="";
          articles.forEach(function(element,index){

              let news=`<div class="accordion-item">
                  <h2 class="accordion-header" id="heading${element.index}">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapse${element.index}" aria-expanded="true" aria-controls="collapse${element.index}">
                          ${element["title"]}
                       </button>
                  </h2>
                  <div id="collapse${element.index}" class="accordion-collapse collapse hide" aria-labelledby="heading${element.index}"
                      data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          ${element["description"]} <a href="${element.url}">Click here for more</a>
                      </div>
                  </div>
              </div>`;

              newsconst +=news;

            
          });

          NewsAccordion.innerHTML=newsconst;
       

      
    }
    else{
        console.log("Error has occured");
    }
}

xhr.send();

