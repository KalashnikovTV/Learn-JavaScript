window.addEventListener('DOMContentLoaded', () => {
    const name = 'Bob';
    $('h2').eq(0).html(`Это предложение именно для вас, ${name}`);

    // test
    $().get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => console.log(res));
});