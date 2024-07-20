

    
    window.onload = function () {
            // Check if the user has visited the page before
            if (!localStorage.getItem('visited')) {
                // Show the loader and set a timeout to hide it after 2 seconds
                setTimeout(() => {
                    document.getElementById('loader').style.display = "none";
                    document.getElementById('content').style.display = "block";
                    // Mark the user as having visited
                    localStorage.setItem('visited', 'true');
                }, 2000);
            } else {
                // If the user has visited before, skip the loader
                document.getElementById('loader').style.display = "none";
                document.getElementById('content').style.display = "block";
            }
        };
   


        //   Show button when scrolling 
   
        window.addEventListener('scroll', function () {
            const button = document.getElementById('back-to-top');
            if (window.scrollY > 200) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        });
   




        //   Back to Top Script 
   
        document.getElementById('back-to-top').addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
   




        
        document.addEventListener("DOMContentLoaded", function () {
            const elements = [" Web Developer", " Full Stack Developer", "Frontend-Developer", "Backend-Developer"];
            let part = 0;
            let partIndex = 0;
            let intervalVal;
            const element = document.querySelector("#typing-effect");

            function type() {
                const text = elements[part].substring(0, partIndex + 1);
                element.textContent = text;
                partIndex++;

                if (text === elements[part]) {
                    clearInterval(intervalVal);
                    setTimeout(function () {
                        intervalVal = setInterval(deleteText, 100);
                    }, 2000);
                }
            }

            function deleteText() {
                const text = elements[part].substring(0, partIndex - 1);
                element.textContent = text;
                partIndex--;

                if (text === '') {
                    clearInterval(intervalVal);
                    part = (part + 1) % elements.length;
                    partIndex = 0;
                    setTimeout(function () {
                        intervalVal = setInterval(type, 100);
                    }, 200);
                }
            }

            intervalVal = setInterval(type, 100);
        });
   



        // JavaScript to insert the data-skill value into the span
        document.addEventListener('DOMContentLoaded', function () {
            const skillSpans = document.querySelectorAll('.progress-bar span');
            skillSpans.forEach(span => {
                const skillValue = span.getAttribute('data-skill');
                span.textContent = skillValue;
            });
        });
    
