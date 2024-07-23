const template = document.createElement('template')
template.innerHTML = `
<header>
   <div class="logo"><img src="/img/logo.png" alt="" style="width: 100%; height: 75%"></div>
   <div class="hamburger">
      <div class="line" style="border-radius: 10px;"></div>
      <div class="line" style="border-radius: 10px; width: 20px; margin: auto;"></div>
      <div class="line" style="border-radius: 10px;"></div>
   </div>

   <nav class="nav-bar">
      <ul>
         <li><a href="/" class="active">Главная</a></li>
         <li>
            <a href="/products" class="prod-btn">Продукция</a>
         </li>
         <li><a href="#">Контакты</a></li>
      </ul>
      <div class="contacts">123</div>
   </nav>
</header>
`
document.body.appendChild(template.content)
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
   navBar = document.querySelector(".nav-bar");
   navBar.classList.toggle("active");
};