const modeSwitch = document.getElementById('mode-switch');

modeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
const buttons = document.querySelectorAll('.arrow');

    function changeContent(category) {
        var title = document.querySelector('.title');
        var content = document.querySelector('.content');

        switch (category) {
            case 'Chess Strategies':
                title.textContent = '5 Chess Strategies You Should Know!';
                title.style.fontWeight = 'bold';
                title.style.color = 'blue'; 
                title.style.fontSize = '20px';
                title.style.animation = 'fadeIn 1s ease-in-out';
                content.innerHTML = `
                <p>1. Control the Center:<br>Occupying and controlling the central squares allows for better mobility and influence over the board.</p>
                <p>2. Develop Pieces:<br>Efficiently bringing out your pieces to active squares helps in creating threats and maintaining a strong position.</p>
                <p>3. King Safety:<br>Ensuring the safety of your king through timely castling and proper pawn structure is crucial to avoid vulnerabilities.</p>
                <p>4. Pawn Structure:<br>Understanding and manipulating pawn structures can dictate the flow of the game and provide long-term advantages.</p>
                <p>5. Piece Activity:<br>Keeping your pieces active and coordinating them effectively enhances their power and contributes to a harmonious position.</p>
                <h4>"Chess teaches us to think ahead, adapt, and never underestimate the power of strategy" -Umali-<h4>
                `;
            break;
            case 'Programming Tips':
                title.textContent = '5 Programming Tips as a Beginner';
                title.style.fontWeight = 'bold';
                title.style.color = 'blue'; 
                title.style.fontSize = '20px';
                title.style.animation = 'fadeIn 1s ease-in-out';
                content.innerHTML = `
                <p>1. Start with the Basics<br>
                Start with the basics, learn fundamental concepts like variables, data types, control structures, and functions to build a solid foundation.</p>
                <p>2. Practice Regularly<br>
                Practice regularly, set aside time each day to write code, solve problems, and experiment with new concepts to improve your skills.</p>
                <p>3. Break Down Problems<br>
                Break down complex problems into smaller, manageable parts to understand the problem and develop a solution more effectively.</p>
                <p>4. Use Online Resources<br>
                Use online resources like tutorials, documentation, forums, and coding challenges to expand your knowledge and gain practical experience.</p>
                <p>5. Collaborate with Others<br>
                Collaborate with other programmers by joining online communities, participating in coding challenges, or finding a mentor to learn from different coding styles, problem-solving techniques, and best practices.</p>
                <h4>"Code with passion, create with purpose."-Umali-<h4>
                `;
                break;
            case 'Web Development':
                title.textContent = 'What is Web Development?';
                title.style.fontWeight = 'bold';
                title.style.color = 'blue'; 
                title.style.fontSize = '20px';
                title.style.animation = 'fadeIn 1s ease-in-out';
                content.innerHTML = `
                <p>Web development encompasses the creation and upkeep of websites and web applications, utilizing technologies like HTML, CSS, JavaScript, and server-side programming languages. Web developers manage both the front-end and back-end aspects of a site to ensure its functionality and user experience.</p>
                <p>-HTML (Hypertext Markup Language)<br>
                HTML is the standard markup language used to create the structure and content of web pages. It uses tags to define elements like headings, paragraphs, images, links, and more.</p>
                <p>-CSS (Cascading Style Sheets)<br>
                CSS is used to control the presentation and styling of web pages. It allows developers to define the layout, colors, fonts, and other visual aspects of the website.</p>
                <p>-JavaScript<br>
                JavaScript is a programming language used to add interactivity and dynamic behavior to web pages. It enables features like drop-down menus, image sliders, form validations, and pop-ups.</p>
                <p>Learning web development as a BSIS student can offer numerous opportunities in the tech industry and enable you to craft innovative solutions to real-world challenges in this dynamic field.</p>
                `;
                break;
            case 'Personal Growth':
                title.textContent = '5 Strategies for Personal Growth';
                title.style.fontWeight = 'bold';
                title.style.color = 'blue'; 
                title.style.fontSize = '20px';
                title.style.animation = 'fadeIn 1s ease-in-out';
                content.innerHTML = `
                <p>1. Commitment and Consistency:<br>
                Personal growth in programming is a gradual process that requires commitment and consistency. Embrace the journey of learning and skill development with patience and dedication.</p>
                <p>2. Continuous Learning: <br>
                Engage in daily learning activities such as watching videos, reading documentation, and exploring source code to enhance your skills.</p>
                <p>3. Practice Regularly: <br>
                Dedicate 2-4 hours a day to practice programming, listen to tech podcasts, read articles, and work on projects to improve your skills.</p>
                <p>4. Use Online Resources<br>
                Use online resources like tutorials, documentation, forums, and coding challenges to expand your knowledge and gain practical experience.</p>
                <p>5. Specialize in Key Programming Languages:<br>
                Enhance your proficiency in essential programming languages like HTML, CSS, JavaScript, Java, Python, Ruby, SQL, and others to broaden your skill set.</p>
                <h5>Tip: Set specific, achievable goals for your programming skills and track your progress regularly to stay motivated and focused on your personal growth journey.<h5>
                `;
                break;
            default:
                title.textContent = 'Default Title';
                content.textContent = 'Default Content.';
        }
    }
