// 'use strict';

// const gallery = document.querySelectorAll('.collection .gallery');

// var refreshInterval, count = 0, progress, video = 0;

// gallery.forEach(el => {
//     el.addEventListener('mouseenter', () => {
//         progress = el.querySelector('.progress');
//         video = el.querySelector('.video');
//         progress.value = count;

//         refreshInterval = setInterval(interval, 10);
//     });

//     el.addEventListener('mouseleave', () => {
//         count = 0;
//         progress.value = count;
//         video.paused();
//         clearInterval(refreshInterval)
//     });
// });

// function interval() {
//     if (count == 100) {
//         count = 0;
//         video.paused();
//         progress.value = count;
//         clearInterval(refreshInterval)
//     } else {
//         count = + 1;
//         video.play();
//         progress.value = count;
//     }
// }

// 'use strict';

// const gallery = document.querySelectorAll('.collection .gallery');

// var refreshInterval, count = 0, progress, video = 0;

// gallery.forEach(el => {
//     el.addEventListener('mouseenter', () => {
//         progress = el.querySelector('.progress');
//         video = el.querySelector('.video');
//         progress.value = count;

//         refreshInterval = setInterval(interval, 240);

//     });

//     el.addEventListener('mouseleave', () => {
//         count = 0;
//         progress.value = count;
//         video.pause();
//         clearInterval(refreshInterval)
//     });
// });

// function interval() {
//     if (count == 240) {
//         count = 0;
//         video.pause();
//         progress.value = count;
//         clearInterval(refreshInterval)
//     } else {
//         count += 1;
//         video.play();
//         progress.value = count;
//     }
// }