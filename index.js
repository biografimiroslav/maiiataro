// FAQ Section Toggle Functionality
// This script toggles the visibility of FAQ answers when the question is clicked

document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});



  const images = [
    './img/HeroIMG.png',
    './img/HeroIMG2.png',
    './img/HeroIMG3.png'
  ];

  let currentIndex = 0;
  const heroImg = document.querySelector('.HeroIMG');

  setInterval(() => {
    // Додаємо клас fade-out
    heroImg.classList.add('fade-out');

    // Після завершення анімації — змінюємо картинку і повертаємо fade-in
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      heroImg.src = images[currentIndex];
      heroImg.classList.remove('fade-out');
    }, 500); // 500мс = час анімації в CSS
  }, 1800); // Кожні 3 секунди змінюється


// Animation for site elements

    const testimonials = [
      {
        text: "“Курс просто 🔥! Всё понятно, доступно и без воды. Уже внедряю знания в жизнь!”"
      },
      {
        text: "“Очень удобно, что уроки открываются в телеграмме. Я прошла всё за неделю!”"
      },
      {
        text: "“Информация простая и эффективная. Спасибо за ваш труд, рекомендую курс всем!”"
      }
    ];

    let current = 0;
    const textEl = document.getElementById('testimonialText');

    textEl.textContent = testimonials[current].text;

    function showTestimonial(index) {
      textEl.style.opacity = 0;
      setTimeout(() => {
        textEl.textContent = testimonials[index].text;
        textEl.style.opacity = 1;
      }, 200);
    }

    function nextTestimonial() {
      current = (current + 1) % testimonials.length;
      showTestimonial(current);
    }

    function prevTestimonial() {
      current = (current - 1 + testimonials.length) % testimonials.length;
      showTestimonial(current);
    }




    

      document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target); // щоб не повторювалося
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
  });