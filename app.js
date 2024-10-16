class Framework {
    constructor(root) {
        this.root = root;
    }
    registerComponent(component) {
        let element = document.createElement(component.selector);
        element.innerHTML = component.template;
        this.root.appendChild(element);
        if (component.onInit) {
            component.onInit(); // Call lifecycle hook
        }
    }
}
class MyComponent {
    constructor() {
        this.selector = 'my-component';
        this.template = '<h1>Hellow{{name}} {{age}}</h1>';
        this.data = { name: 'Amal', age: 21 };
    }
    onInit() {
        this.render();
    }
    render() {
        const element = document.querySelector(this.selector);
        if (element) {
            const template = this.template.replace(/\{\{(.*?)\}\}/g, (match, p1) => {
                return this.data[p1.trim()] || '';
            });
            element.innerHTML = template;
        }
    }
}
const app = new Framework(document.getElementById('app'));
app.registerComponent(new MyComponent());
