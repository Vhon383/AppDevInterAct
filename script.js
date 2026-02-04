const content = {
    resp: {
        tag: "Archive Entry",
        title: "Why Responsive Design Matters",
        body: `
            <p>Responsive design is a fundamental requirement of modern web development. With over 60% of web traffic coming from mobile, websites must adapt fluidly.</p>
            <strong>Key Impacts:</strong>
            <ul>
                <li><strong>SEO Performance</strong> — Google prioritizes mobile-friendly sites.</li>
                <li><strong>Accessibility</strong> — Ensures content reaches all users equally.</li>
                <li><strong>Future-Proofing</strong> — Adapts to new devices without rewrites.</li>
            </ul>
        `
    },
    purp: {
        tag: "Archive Entry",
        title: "Purpose of Front-End Frameworks",
        body: `
            <p>Frameworks solve the challenge of building complex apps through <strong>component-based architecture</strong>.</p>
            <ul>
                <li><strong>Consistency</strong> — Shared components ensure visual coherence.</li>
                <li><strong>Efficiency</strong> — "Write once, use everywhere" reduces code.</li>
                <li><strong>State Management</strong> — Simplifies complex user interactions.</li>
            </ul>
        `
    },
    intro: {
        tag: "Archive Entry",
        title: "Introduction to Frameworks",
        body: `
            <p>The front-end ecosystem offers several powerful tools with distinct strengths:</p>
            <div style="background:rgba(255,255,255,0.05); padding:15px; margin-bottom:10px;">
                <strong>React</strong>: Pioneered the component-based approach and virtual DOM.
            </div>
            <div style="background:rgba(255,255,255,0.05); padding:15px; margin-bottom:10px;">
                <strong>Vue.js</strong>: Known for its progressive adoption and gentle learning curve.
            </div>
            <div style="background:rgba(255,255,255,0.05); padding:15px;">
                <strong>Angular</strong>: Google's comprehensive framework for enterprise applications.
            </div>
        `
    }
};

function openModal(id) {
    const data = content[id];
    const modalContent = document.getElementById('modalContent');
    const modalOverlay = document.getElementById('modalOverlay');

    modalContent.innerHTML = `
        <span class="modal-tag">${data.tag}</span>
        <h2>${data.title}</h2>
        <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:20px 0;">
        <div class="modal-body">${data.body}</div>
    `;
    
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}