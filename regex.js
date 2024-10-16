var data = { fname: 'amal', lname: 'dev' };
template = `<h1>Hello, {{ fname }} {{lname}}!</h1>`;
template.replace(/\{\{(.*?)\}\}/g, (match, p1) => {
    debugger;
    return data[p1.trim()] || '';
});