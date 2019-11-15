const tabsHeader = $('.tabs-header');
const tabsItems = $ ('.tabs-content-item');
const tabsItemsContainer = $ ('.tabs-content');


tabsHeader.on('click', '.tabs-header-item', function () {
    tabsItemsContainer.css({
        height: tabsItemsContainer.height()
    });
    $('.active').removeClass('active');
    $(this).addClass('active');
    $(tabsItems[$(this).index()]).addClass('active');
});


let works = document.getElementById('works');
let more = document.getElementById('moreWorksImages');
let worksPhoto = document.getElementById('worksPhoto');
let amazing = document.getElementById('amazing');

works.addEventListener('click', changeWorksImage);
more.addEventListener('click', loadMoreImages);

function changeWorksImage(e) {
    if (typeof(e.target.id) == String) {
        return;
    } else {
        for (let i = 0; i < works.children.length; i++) {
            works.children[i].id = '';
        }
        e.target.id = 'active_work';
        console.dir(e);
        for (let j = 0; j < works.nextElementSibling.children.length; j++) {
            if (works.nextElementSibling.children[j].className == e.target.innerHTML.replace(/\s+/g, '')) {
                works.nextElementSibling.children[j].style.display = 'block';
            } else if (e.target.innerHTML == 'All') {
                works.nextElementSibling.children[j].style.display = 'block';
            } else {
                works.nextElementSibling.children[j].style.display = 'none';
            }
        }
    }
}

function loadMoreImages() {
    let a = Array.from(worksPhoto.cloneNode(true).children);
    for (let i = 0; i < a.length; i++) {
        worksPhoto.appendChild(a[i]);
    }
    more.style.display = 'none';
}













