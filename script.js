window.onload = function () {
  let first = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");
  let top = document.getElementById("top");
  let top2 = document.getElementById("top2");

  
  let firstVal = 0.1;
  let firstInterval = setInterval(function () {
    first.textContent = firstVal.toFixed(1) + "B";
    firstVal += 0.1;
    if (firstVal > 2.2) {
      clearInterval(firstInterval);
      first.textContent = "+2.2B";
    }
  }, 70);

  let secondVal = 1;
  let secondInterval = setInterval(function () {
    second.textContent = secondVal + "m";
    secondVal++;
    if (secondVal > 99) {
      clearInterval(secondInterval);
      second.textContent = "99m";
    }
  }, 15);

  
  let thirdVal = 1;
  let thirdInterval = setInterval(function () {
    third.textContent = "$" + thirdVal + "m";
    thirdVal++;
    if (thirdVal > 27) {
      clearInterval(thirdInterval);
      third.textContent = "$27m";
    }
  }, 80);

  
  let topVal = 1;
  let topInterval = setInterval(function () {
    top.textContent = topVal + "y";
    topVal++;
    if (topVal > 20) {
      clearInterval(topInterval);
      top.textContent = "+20y";
    }
  }, 190);


  let top2Val = 100;
  let top2Interval = setInterval(function () {
    top2.textContent = top2Val;
    top2Val++;
    if (top2Val > 900) {
      clearInterval(top2Interval);
      top2.textContent = "+900";
    }
  }, 1); 
   
document.getElementById("send").addEventListener("click", function () {
  const form = document.getElementById("email").value;
  const text = document.getElementById("firstname").value;
  const message = document.getElementById("message").value;


  if (form) {
    alert("form is submitted successfully!");
  }

   else {
    alert("Please enter a valid info.");
  }
});
}

document.addEventListener('DOMContentLoaded', function () {
  const testimonialContainer = document.getElementById('testimonialboxes');
  const testimonials = document.querySelectorAll('#testimonialboxes > div');
  const dots = document.querySelectorAll('.dot');

  let currentIndex = 0;
  const showCount = 2;
  let isDragging = false;
  let startX = 0;
  let movedX = 0;
  let previousX = 0;

  testimonialContainer.style.width = (testimonials.length / showCount) * 100 + '%';

  moveTestimonials();

  testimonialContainer.addEventListener('touchstart', startDrag);
  testimonialContainer.addEventListener('touchmove', dragMove);
  testimonialContainer.addEventListener('touchend', endDrag);

  dots.forEach(function (dot, dotIndex) {
    dot.addEventListener('click', function () {
      currentIndex = dotIndex * showCount;
      moveTestimonials();
      highlightDot();
    });
  });

  function startDrag(e) {
    isDragging = true;
    testimonialContainer.style.transition = 'none';
    startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
  }

  function dragMove(e) {
    if (!isDragging) return;

    let currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    movedX = previousX + (currentX - startX);
    testimonialContainer.style.transform = 'translateX(' + movedX + 'px)';
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;

    const movedBy = movedX - previousX;

    if (movedBy < -100 && currentIndex < testimonials.length - showCount) {
      currentIndex += 1;
    } else if (movedBy > 100 && currentIndex > 0) {
      currentIndex -= 1;
    }

    moveTestimonials();
    highlightDot();
  }

  function moveTestimonials() {
    const oneBoxWidth = testimonials[0].offsetWidth + 20;
    const totalMove = -currentIndex * oneBoxWidth;
    movedX = totalMove;
    previousX = totalMove;
    testimonialContainer.style.transition = 'transform 0.3s ease';
    testimonialContainer.style.transform = 'translateX(' + totalMove + 'px)';
  }

  function highlightDot() {
    const activeDot = Math.floor(currentIndex / showCount);
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === activeDot);
    });
  }
});
