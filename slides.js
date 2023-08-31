document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", performSearch);
  });
  
  function performSearch() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const items = document.querySelectorAll(".box");
  
    items.forEach(item => {
      const itemName = item.querySelector(".primary").textContent.toLowerCase();
      if (itemName.includes(searchInput)) {
        item.style.display = "contents";
      } else {
        item.style.display = "none";
      }
    });
 
    loadMoreBtn.style.display = 'none';
  }
  
 //navbar blur 
  document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navbar = header.querySelector('.navbar');
 
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-blur');
    } else {
        navbar.classList.remove('navbar-blur');
    }
 });