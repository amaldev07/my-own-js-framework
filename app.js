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
        this.template = '<h1>Hellow{{name}}</h1>';
        this.data = { name: 'Amal' };
    }
    onInit() {
        this.render();
    }
    render() {
        const element = document.querySelector(this.selector);
        if (element) {
            element.innerHTML = this.template.replace('{{name}}', this.data.name);
        }
    }
}
const app = new Framework(document.getElementById('app'));
app.registerComponent(new MyComponent());
