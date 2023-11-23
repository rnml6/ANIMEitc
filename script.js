const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {

    navItems.forEach(item => item.classList.remove('active'));

    const targetPage = navItem.getAttribute('data-target');

    navItem.classList.add('active');

    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(targetPage).classList.add('active');
  });
});