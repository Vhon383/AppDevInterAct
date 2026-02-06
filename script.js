const content = {
    core: {
        tag: "Archive Entry",
        title: "Core Front-End Technologies",
        body: `
      <p>Front-end development relies on three core technologies that work together:</p>
      <ul>
        <li><strong>HTML</strong> — defines the structure and meaning of content (headings, text, buttons, sections).</li>
        <li><strong>CSS</strong> — controls the design and layout (colors, fonts, spacing, alignment, responsiveness).</li>
        <li><strong>JavaScript</strong> — adds behavior and interactivity (events, dynamic updates, form handling).</li>
      </ul>
      <p>
        A common best practice is <strong>separation of concerns</strong>: keep structure in HTML, styling in CSS, and behavior in JavaScript.
        This makes projects easier to update and maintain.
      </p>
    `
    },

    html: {
        tag: "HTML Guide",
        title: "HTML: Structure & Semantics",
        body: `
      <p>HTML creates the page structure and organizes information so it is readable for both users and browsers.</p>
      <strong>Key ideas:</strong>
      <ul>
        <li><strong>Structure</strong>: headings, paragraphs, lists, images, buttons, and forms.</li>
        <li><strong>Semantics</strong>: using meaningful tags like <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;header&gt;</code>.</li>
        <li><strong>Accessibility</strong>: semantic tags help screen readers and improve usability.</li>
      </ul>
      <p>
        In our project, HTML defines the title, description, message area, and button—creating a clear structure that CSS and JavaScript enhance.
      </p>
    `
    },

    css: {
        tag: "CSS Guide",
        title: "CSS: Styling & Layout",
        body: `
      <p>CSS controls how the page looks and feels. It improves readability and user experience.</p>
      <strong>What CSS handles:</strong>
      <ul>
        <li><strong>Typography</strong>: fonts, sizes, and line spacing</li>
        <li><strong>Layout</strong>: alignment and spacing using Flexbox/Grid</li>
        <li><strong>UI design</strong>: colors, shadows, borders, and button styles</li>
      </ul>
      <p>
        In our page, CSS creates a centered card layout, adds spacing, and styles the button with hover feedback—without changing the HTML content.
      </p>
    `
    },

    js: {
        tag: "JavaScript Guide",
        title: "JavaScript: Adding Interactivity",
        body: `
      <p>JavaScript allows the page to react to user actions, creating interactive experiences.</p>
      <strong>Main concepts used:</strong>
      <ul>
        <li><strong>Events</strong>: detecting user actions such as a button click</li>
        <li><strong>DOM Manipulation</strong>: updating elements on the page dynamically</li>
        <li><strong>No page reload</strong>: the UI changes instantly for a smoother experience</li>
      </ul>
      <p>
        In our demo, clicking the button triggers a function that changes the message text, proving JavaScript interactivity.
      </p>
    `
    },

    resp: {
        tag: "Archive Entry",
        title: "Why Responsive Design Matters",
        body: `
      <p>Responsive design ensures the same website works well on desktops, tablets, and mobile devices.</p>
      <strong>Why it matters:</strong>
      <ul>
        <li><strong>Usability</strong>: users can read and click easily on small screens</li>
        <li><strong>Accessibility</strong>: content remains clear and readable</li>
        <li><strong>Professional standard</strong>: modern websites must support mobile devices</li>
      </ul>
      <strong>How it’s done:</strong>
      <ul>
        <li>Flexible widths and layouts</li>
        <li>Media queries to adjust spacing and alignment</li>
        <li>Buttons sized for touch interaction</li>
      </ul>
      <p>
        In this project, the layout adjusts so the content fits neatly on smaller screens and stays easy to use.
      </p>
    `
    },

    purp: {
        tag: "Archive Entry",
        title: "Purpose of Front-End Frameworks",
        body: `
      <p>Frameworks help developers build large web applications faster and more reliably.</p>
      <strong>Main benefits:</strong>
      <ul>
        <li><strong>Reusable components</strong>: build UI elements once and reuse them everywhere</li>
        <li><strong>Clean organization</strong>: better structure for large projects</li>
        <li><strong>Maintainability</strong>: easier to update and fix over time</li>
        <li><strong>State management</strong>: simplifies complex user interactions</li>
      </ul>
      <p>
        Without frameworks, large applications become difficult to manage as code grows and features increase.
      </p>
    `
    },

    intro: {
        tag: "Archive Entry",
        title: "Introduction to Frameworks",
        body: `
      <p>The front-end ecosystem includes several popular frameworks/libraries:</p>

      <div style="background:rgba(255,255,255,0.05); padding:15px; margin-bottom:10px;">
        <strong>React</strong>: Component-based UI library focused on building interactive interfaces.
      </div>

      <div style="background:rgba(255,255,255,0.05); padding:15px; margin-bottom:10px;">
        <strong>Vue.js</strong>: Progressive framework known for simplicity and gentle learning curve.
      </div>

      <div style="background:rgba(255,255,255,0.05); padding:15px;">
        <strong>Angular</strong>: Full framework with built-in tools, commonly used for enterprise apps.
      </div>

      <p>
        Framework choice depends on project size, team experience, and long-term maintenance needs.
      </p>
    `
    },

    react: {
        tag: "React Demo",
        title: "Basic React Usage (Component + State)",
        body: `
      <p>React builds user interfaces using <strong>components</strong>. Each component is a reusable part of the UI.</p>

      <strong>Key concept: State</strong>
      <ul>
        <li><strong>State</strong> stores values that can change (like a counter).</li>
        <li>When state changes, React automatically updates the screen.</li>
      </ul>

      <strong>Simple example (Counter Component):</strong>
      <pre style="white-space:pre-wrap; background:rgba(0,0,0,0.25); padding:12px; border-radius:6px;">
function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increase&lt;/button&gt;
    &lt;/div&gt;
  );
}
      </pre>

      <p>
        This demonstrates why frameworks are powerful: React manages updates automatically, making complex apps easier to scale.
      </p>
    `
    },

    glossary: {
        tag: "Reference",
        title: "Front-End Glossary (Beginner Friendly)",
        body: `
    <ul>
      <li><strong>HTML</strong>: The structure of a web page (text, buttons, sections).</li>
      <li><strong>CSS</strong>: Controls how the page looks (colors, layout, fonts).</li>
      <li><strong>JavaScript</strong>: Makes the page interactive.</li>
      <li><strong>Responsive Design</strong>: Making a website work on all screen sizes.</li>
      <li><strong>DOM</strong>: The browser’s representation of the web page.</li>
      <li><strong>Framework</strong>: A tool that helps build large applications faster.</li>
      <li><strong>Component</strong>: A reusable piece of a user interface.</li>
      <li><strong>State</strong>: Data that can change and update the UI.</li>
    </ul>
  `
    },
    access: {
        tag: "Best Practice",
        title: "Accessibility & Usability",
        body: `
    <p>Accessibility ensures that websites can be used by as many people as possible.</p>
    <ul>
      <li>Readable text and clear contrast</li>
      <li>Buttons that are large enough to tap</li>
      <li>Semantic HTML for screen readers</li>
      <li>Responsive layouts for different devices</li>
    </ul>
    <p>
      In this project, accessibility is supported through readable text, clear layout,
      and mobile-friendly design.
    </p>
  `
    },
    frameworks: {
        tag: "Best Practice",
        title: "Why Use Frameworks?",
        body: `
    <p>Frameworks help developers build large web applications faster and more reliably.</p>
    <strong>Main benefits:</strong>
    <ul>
      <li><strong>Reusable components</strong>: build UI elements once and reuse them everywhere</li>
      <li><strong>Clean organization</strong>: better structure for large projects</li>
      <li><strong>Maintainability</strong>: easier to update and fix over time</li>
      <li><strong>State management</strong>: simplifies complex user interactions</li>
    </ul>
    <p>
      Without frameworks, large applications become difficult to manage as code grows and features increase.
    </p>
  `
    }

};

function openModal(id) {
    const data = content[id];
    const modalContent = document.getElementById("modalContent");
    const modalOverlay = document.getElementById("modalOverlay");

    modalContent.innerHTML = `
    <span class="modal-tag">${data.tag}</span>
    <h2>${data.title}</h2>
    <div class="modal-divider"></div>
    <div class="modal-body">${data.body}</div>
  `;

    modalOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("modalOverlay").style.display = "none";
    document.body.style.overflow = "auto";
}

// SCROLL REVEAL
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// SPOTLIGHT EFFECT
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// SCROLL TO TOP
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// MOBILE MENU
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}
