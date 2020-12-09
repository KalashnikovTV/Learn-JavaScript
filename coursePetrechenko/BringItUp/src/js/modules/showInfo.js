export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const sibling = btn.closest('.module__info-show').nextElementSibling;

                sibling.classList.toggle('msg');
                sibling.style.cssText = `
                    font-weight: 400;
                    line-height: 24px;
                    font-size: 14px;
                    letter-spacing: -.28px;
                    margin-top: 20px;
                `;
            });
        });
    }



}