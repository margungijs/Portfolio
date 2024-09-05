export const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-animate')
        }else{
            entry.target.classList.remove('show-animate')
        }
    });
});

export const observerblur = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-animate-blur')
        }else{
            entry.target.classList.remove('show-animate-blur')
        }
    });
});

