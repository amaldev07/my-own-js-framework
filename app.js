// Basic Framework Code
class Framework {
    constructor(root) {
        this.root = root;
    }

    // Register a component
    registerComponent(component) {
        const element = document.createElement(component.selector);
        this.root.appendChild(element);
        element.innerHTML = component.template;
        if (component.onInit) {
            component.onInit(); // Call lifecycle hook
        }
    }
}

// Example Component
class MyComponent {
    constructor() {
        this.selector = 'my-component';
        this.template = `<h1>Hello, {{ name }}!</h1>`;
        this.data = { name: 'World' };
    }

    // Initialize component (basic lifecycle method)
    onInit() {
        console.log('Component initialized');
        this.render();
    }

    // Simple render method for basic one-way data binding
    render() {
        const element = document.querySelector(this.selector);
        if (element) {
            element.innerHTML = this.template.replace('{{ name }}', this.data.name);
        }
    }
}

// Bootstrap the framework
debugger;
const app = new Framework(document.getElementById('app'));
app.registerComponent(new MyComponent());
