document.addEventListener('DOMContentLoaded', () => {
  // Navbar style when scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('window-scroll', window.scrollY > 0);
    }
  });

  // Show/hide FAQs
  const faqs = document.querySelectorAll('.faq');
  if (faqs) {
    faqs.forEach(faq => {
      faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        const icon = faq.querySelector('.faq_icon i');
        if (icon) {
          icon.className = icon.className === 'fa-solid fa-plus' ? 'fa-solid fa-minus' : 'fa-solid fa-plus';
        }
      });
    });
  }

  // Show/hide nav menu
  const menu = document.querySelector('.nav_menu');
  const menuBtn = document.querySelector('#open-menu-btn');
  const closeBtn = document.querySelector('#close-menu-btn');

  if (menu && menuBtn && closeBtn) {
    menuBtn.addEventListener('click', () => {
      menu.style.display = 'flex';
      closeBtn.style.display = 'inline-block';
      menuBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
      menu.style.display = 'none';
      closeBtn.style.display = 'none';
      menuBtn.style.display = 'inline-block';
    });
  }

  // Registration form
  const form = document.querySelector('form');
  if (form) {
    const nextBtn = form.querySelector('.nextBtn');
    const backBtn = form.querySelector('.backBtn');
    const allInput = form.querySelectorAll('.first input');
    const submitBtn = form.querySelector('.submitBtn');

    if (nextBtn && backBtn && allInput.length > 0) {
      nextBtn.addEventListener('click', () => {
        let allFilled = true;
        allInput.forEach(input => {
          if (input.value === '') {
            allFilled = false;
          }
        });
        if (allFilled) {
          form.classList.add('secActive');
        } else {
          form.classList.remove('secActive');
        }
      });

      backBtn.addEventListener('click', () => form.classList.remove('secActive'));

      if (submitBtn) {
        submitBtn.addEventListener('click', (event) => {
          let allFilled = true;
          form.querySelectorAll('input[required]').forEach(input => {
            if (input.value === '') {
              allFilled = false;
            }
          });

          if (allFilled) {
            alert('Submitted!');
          } else {
            alert('Please complete the form');
            event.preventDefault();
          }
        });
      }
    }
  }
});
