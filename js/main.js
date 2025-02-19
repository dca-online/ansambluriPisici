const products=[{id:1,name:"Wall Haven",category:"wall-mounted",price:"500 RON",image:"assets/img/wall.jpg"},{id:2,name:"Tower Supreme",category:"floor-standing",price:"1000 RON",image:"assets/img/tower.avif"},{id:3,name:"Modular Paradise",category:"modular",price:"1500 RON",image:"assets/img/modular.jpg"}];const testimonials=[{id:1,name:"Maria & Mop",text:"Pisica noastră nu s-a oprit să se joace de când am instalat ansamblul!",avatar:"assets/img/cat2.webp"},{id:2,name:"Mihai & Luna",text:"Design-ul este atât de frumos încât chiar și pisica se minuna când l-a văzut.",avatar:"assets/img/cat1.jpg"}];class ProductGallery{constructor(){this.filterButtons=document.querySelectorAll('.filter-btn');this.productGrid=document.querySelector('.product-grid');this.currentFilter='all';this.init()}
init(){this.renderProducts();this.filterButtons.forEach(btn=>{btn.addEventListener('click',()=>this.filterProducts(btn))})}
renderProducts(){const filteredProducts=this.currentFilter==='all'?products:products.filter(p=>p.category===this.currentFilter);this.productGrid.innerHTML=filteredProducts.map(product=>`
            <div class="product-card glassmorphic">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="cta-button">Vezi mai mult</button>
            </div>
        `).join('')}
filterProducts(btn){this.filterButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');this.currentFilter=btn.dataset.category;this.renderProducts()}}
class TestimonialCarousel{constructor(){this.track=document.querySelector('.testimonial-track');this.prevBtn=document.querySelector('.prev-btn');this.nextBtn=document.querySelector('.next-btn');this.currentIndex=0;this.init()}
init(){this.renderTestimonials();this.prevBtn.addEventListener('click',()=>this.prev());this.nextBtn.addEventListener('click',()=>this.next())}
renderTestimonials(){this.track.innerHTML=testimonials.map(testimonial=>`
            <div class="testimonial-card glassmorphic">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="avatar">
                <p>${testimonial.text}</p>
                <h4>${testimonial.name}</h4>
            </div>
        `).join('')}
prev(){this.currentIndex=Math.max(0,this.currentIndex-1);this.updatePosition()}
next(){this.currentIndex=Math.min(testimonials.length-1,this.currentIndex+1);this.updatePosition()}
updatePosition(){this.track.style.transform=`translateX(-${this.currentIndex * 100}%)`}}
class FormHandler{constructor(){this.newsletterForm=document.getElementById('newsletter-form');this.init()}
init(){this.newsletterForm.addEventListener('submit',(e)=>this.handleSubmit(e))}
handleSubmit(e){e.preventDefault();const email=e.target.email.value;if(!this.validateEmail(email)){this.showError('Va rog introduceti o adresa valida de email');return}
this.showSuccess('Multumim pentru inregistrare!');e.target.reset()}
validateEmail(email){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
showError(message){this.showMessage(message,'error')}
showSuccess(message){this.showMessage(message,'success')}
showMessage(message,type){const messageEl=document.createElement('div');messageEl.className=`form-message ${type}`;messageEl.textContent=message;this.newsletterForm.appendChild(messageEl);setTimeout(()=>{messageEl.remove()},3000)}}
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();const target=document.querySelector(this.getAttribute('href'));if(target){target.scrollIntoView({behavior:'smooth',block:'start'})}})});document.addEventListener('DOMContentLoaded',()=>{new ProductGallery();new TestimonialCarousel();new FormHandler();const navToggle=document.querySelector('.nav-toggle');const navLinks=document.querySelector('.nav-links');navToggle.addEventListener('click',()=>{navLinks.classList.toggle('active');navToggle.classList.toggle('active')});let lastScroll=window.pageYOffset;const header=document.querySelector('.site-header');window.addEventListener('scroll',()=>{const currentScroll=window.pageYOffset;if(currentScroll>lastScroll){if(navLinks.classList.contains('active')){navLinks.classList.remove('active');navToggle.classList.remove('active')}
if(currentScroll>100){header.classList.add('hide')}}else{header.classList.remove('hide')}
lastScroll=currentScroll});document.addEventListener('click',(e)=>{if(navLinks.classList.contains('active')&&!navLinks.contains(e.target)&&!navToggle.contains(e.target)){navLinks.classList.remove('active');navToggle.classList.remove('active')}})})
