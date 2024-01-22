// change navbar styles on scroll(n5alle lnavbar tbayen on content when scrolling)
window.addEventListener('scroll', scrolfunc => {
    document.querySelector('nav').classList.toggle('window-scroll' , window.scrollY > 50)
})



// show or hide faq answer 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click' , () => {
        faq.classList.toggle('open');

        // change icon when open/close 
        const icon = faq.querySelector('.faq__icon i');
    if(icon.className === 'uil uil-plus')
        icon.className = "uil uil-minus";
    else 
    icon.className = "uil uil-plus";
    })
})