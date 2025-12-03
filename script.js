  const box = document.getElementById('box');
  window.addEventListener('mousemove', (e) => 
    {const x = e.clientX;
    const y = e.clientY;
    box.style.left = x + '9999px';
    box.style.top  = y + '9999px';
     });