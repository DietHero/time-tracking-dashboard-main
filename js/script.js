var daily = document.querySelector('.about__button--daily')
var weekly = document.querySelector('.about__button--weekly')
var monthly = document.querySelector('.about__button--monthly')
var dailyCard = document.querySelectorAll('.card__daily')
var weeklyCard = document.querySelectorAll('.card__weekly')
var monthlyCard = document.querySelectorAll('.card__monthly')


 daily.addEventListener(
    'click', 
  () => {
    monthlyCard.forEach(element => {
        element.style.visibility = 'hidden'
    });
    weeklyCard.forEach(element => {
        element.style.visibility = 'hidden'
    });
    dailyCard.forEach(element => {
        element.style.visibility = 'visible'
    })
  }
)

weekly.addEventListener(
    'click',
    () => 
    { 
        dailyCard.forEach(element => {
            element.style.visibility = 'hidden'
        })
        monthlyCard.forEach(element => {
            element.style.visibility = 'hidden'
        });
        weeklyCard.forEach(element => {
            element.style.visibility = 'visible';
        }) ;
       
    }
   
)

monthly.addEventListener(
    'click',
    () => {
        dailyCard.forEach(element => {
            element.style.visibility = 'hidden'
        })
       ;

       weeklyCard.forEach(element => {
            element.style.visibility = 'hidden'
        })
       ;

       monthlyCard.forEach(element =>{
          element.style.visibility = 'visible'
      })
      
    }
 
)