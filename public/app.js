// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             console.log(entry.target)
//         }
//     })
// })
// const todoElements = document.querySelectorAll(".todo")
// todoElements.forEach(el => observer.observe(el))

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target)
        entry.target.classList.add("show")
        // observer.unobserve(entry.target); // animate once
      }else{
        entry.target.classList.remove("show")
      }
    })
  },
  {
    // threshold: 0.1,
  }
);

console.log("i am in app.js");

const todoElements = document.querySelectorAll(".todo-item");
todoElements.forEach((el) => observer.observe(el));


function locationURL(){
    location.href = './css_grid/page2.html'
}