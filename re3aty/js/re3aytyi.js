const btn=document.querySelector('header .container .bar i');
const slider=document.querySelector('.slider');

const close =document.querySelector('.slider .main-nav .close');
btn.addEventListener('click',()=>{
    slider.classList.add('active')
})
close.addEventListener('click',()=>{
    slider.classList.remove('active')
})
window.addEventListener('scroll',()=>{
    slider.classList.remove('active')
})


const contact = document.querySelector('.contact .parent i');
const contact_child = document.querySelector('.contact .contact-child');
contact.addEventListener('click',()=>{
    contact_child.classList.toggle('active')
});

























// var mergeTwoLists = function(list1, list2) {
//    const concata=list1.concat(list2)
//    concata.sort()
// };
// console.log(mergeTwoLists([5,4,3],[1,6,2]))


// var mergeTwoLists = function(list1, list2) {
//     while(list1||list2){
//         if(list1.val)
//     }
//  };
//  console.log(mergeTwoLists([5,4,3],[1,6,2]))