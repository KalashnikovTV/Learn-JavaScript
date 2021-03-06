/* // 1-ый старый способ
window.addEventListener('DOMContentLoaded', () => {

    function req() {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/people');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        request.addEventListener('load', function() {
            if (request.status == 200) {
                let data = JSON.parse(request.response);
                console.log(data);

                data.forEach(item => {
                    let card = document.createElement('div');

                    card.classList.add('card');

                    let icon;
                    if (item.sex === 'male') {
                        icon = 'icons/mars.png';
                    } else {
                        icon = 'icons/female.png';
                    }

                    card.innerHTML = `
                        <img src="${item.photo}" alt="photo">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex">
                            <img src="${icon}" alt="sex">
                        </div>
                        <div class="age">${item.age}</div>
                    `;
                    document.querySelector('.app').appendChild(card);
                });
            } else {
                console.error('Что-то пошло не так');
            }
        });

        this.remove();
    }

    document.querySelector('button').addEventListener('click', req, {'once': true});
}); */


/* // 2-ой способ fetch API
window.addEventListener('DOMContentLoaded', () => {

    function req() {
        getResource('http://localhost:3000/people')
            .then(data => createCards(data))
            .catch(error => console.error(error));

        this.remove();
    }

    document.querySelector('button').addEventListener('click', req, {'once': true});

    async function getResource(url) {
        const res = await fetch(`${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');

            card.classList.add('card');

            let icon;
            if (item.sex === 'male') {
                icon = 'icons/mars.png';
            } else {
                icon = 'icons/female.png';
            }

            card.innerHTML = `
                <img src="${item.photo}" alt="photo">
                <div class="name">${item.name} ${item.surname}</div>
                <div class="sex">
                    <img src="${icon}" alt="sex">
                </div>
                <div class="age">${item.age}</div>
            `;
            document.querySelector('.app').appendChild(card);
        });
    }
}); */


/* // 3-ий способ axios библиотека
window.addEventListener('DOMContentLoaded', () => {

    function req() {
        getResource('http://localhost:3000/people')
            .then(data => createCards(data.data))
            .catch(error => console.error(error));

        this.remove();
    }

    document.querySelector('button').addEventListener('click', req, {'once': true});

    async function getResource(url) {
        const res = await axios(`${url}`);

        if (res.status !== 200) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return res;
    }

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');

            card.classList.add('card');

            let icon;
            if (item.sex === 'male') {
                icon = 'icons/mars.png';
            } else {
                icon = 'icons/female.png';
            }

            card.innerHTML = `
                <img src="${item.photo}" alt="photo">
                <div class="name">${item.name} ${item.surname}</div>
                <div class="sex">
                    <img src="${icon}" alt="sex">
                </div>
                <div class="age">${item.age}</div>
            `;
            document.querySelector('.app').appendChild(card);
        });
    }
}); */


/* // POST запросы FormData
window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    function req(e) {
        e.preventDefault();

        let formData = new FormData(form);
        formData.append('id', Math.random());

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        const request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3000/people');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(json);
        request.addEventListener('load', function() {
            if (request.status == 200) {
                let data = JSON.parse(request.response);
                console.log(data);
            } else {
                console.error('Что-то пошло не так');
            }
        });

        // this.remove(); 
    }

    form.addEventListener('submit', (e) => req(e), {'once': true});
}); */


// POST запросы 
window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    function req(e) {
        e.preventDefault();

        let formData = new FormData(form);
        /* formData.append('id', Math.random());

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj); */

        const request = new XMLHttpRequest();
        request.open('POST', '../api.php');
        /* request.setRequestHeader('Content-type', 'multipart/form-data'); */
        request.send(formData);
        request.addEventListener('load', function() {
            if (request.status == 200) {
                /* let data = JSON.parse(request.response); */
                console.log(request.response);
            } else {
                console.error('Что-то пошло не так');
            }
        });

        /* getResource('http://localhost:3000/people', obj)
            .then(data => createCards(data.data))
            .catch(error => console.error(error)); */
        // this.remove(); 
    }

    form.addEventListener('submit', (e) => req(e), {'once': true});

    async function getResource(url, data) {
        const res = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');

            card.classList.add('card');

            let icon;
            if (item.sex === 'male') {
                icon = 'icons/mars.png';
            } else {
                icon = 'icons/female.png';
            }

            card.innerHTML = `
                <img src="${item.photo}" alt="photo">
                <div class="name">${item.name} ${item.surname}</div>
                <div class="sex">
                    <img src="${icon}" alt="sex">
                </div>
                <div class="age">${item.age}</div>
            `;
            document.querySelector('.app').appendChild(card);
        });
    }

}); 