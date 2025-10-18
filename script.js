
const navLinks = document.querySelectorAll('.nav-link');


const contentPages = document.querySelectorAll('.page-content');

const mainHeader = document.getElementById('main-header');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
       
        event.preventDefault();

        const pageToShow = this.dataset.page;

       
        if (pageToShow === 'logout') {
            alert('You are now logged out.');
            return;
        }

      
        mainHeader.textContent = this.textContent;

        
        navLinks.forEach(item => {
            item.classList.remove('active');
        });
        
        this.classList.add('active');

       
        contentPages.forEach(page => {
            page.classList.add('hidden');
        });

       
        const page = document.getElementById(pageToShow + '-content');
        page.classList.remove('hidden');
    });
});
