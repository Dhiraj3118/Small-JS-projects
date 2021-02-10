let about = document.querySelector('.about');
let btns = document.querySelectorAll('.tab-btn');
let content = document.querySelectorAll('.content')

btns.forEach(btn => {

    btn.addEventListener('click', () => {
        
        content.forEach(item => {
            if(item.classList.contains('active'))
            {
                item.classList.remove('active');
            }        
            if(item.id === btn.dataset.id)
            {
                item.classList.add('active')
            }
        })
        
        btns.forEach(button => {
            if(button.classList.contains('active'))
            {
                button.classList.remove('active');
            }        
            if(btn === button)
            {
                button.classList.add('active')
            }
        })

    })

})