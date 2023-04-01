const footerItem = document.querySelectorAll('.footer__block');
const footerSpan = document.querySelectorAll('.footer__block > span');
var max = [];

if (window.screen.width >= 769) {
    footerItem.forEach((block) => {
        var blockHeight = block.getBoundingClientRect();
        max.push(blockHeight.height);
    })
    var maxHeight = Math.max(...max);

    footerItem.forEach((block) => {
        block.style.height = maxHeight + 'px';
    })
} else {
    footerItem.forEach((element) => {
        element.addEventListener('click', () => {
            var spanLi = element.querySelector('div');

            if (spanLi.style.maxHeight) {
                footerItem.forEach((span) => {
                    span.querySelectorAll('div').forEach((div) => {
                        div.style.maxHeight = null;
                    })
                })
            } else {
                footerItem.forEach((span) => {
                    span.querySelector('div').style.maxHeight = null;
                })
                spanLi.style.maxHeight = spanLi.scrollHeight + 'px';
            }

        })
    })
}

