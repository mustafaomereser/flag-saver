// url: https://flagdownload.com/wp-content/uploads/

let downloads = [];
let queue = 0;

// round-64x64
let filter = `[data-sort*="round-128x128"]`;

document.querySelectorAll(`td[data-sort]:not(${filter})`).forEach(item => item.remove());

document.querySelectorAll(filter).forEach((item, index) => {
    let a = item.querySelector('a'), url = a.getAttribute('href');
    a.setAttribute('download', url.split('/').pop());
    downloads[index] = a;
})

function download() {
    let completed = (downloads.length - 1 == queue);
    if (!completed) {
        downloads[queue].click();
        downloads[queue].setAttribute('style', 'background-color: green; color: white');
        console.log(`${downloads.length} of ${queue + 1} downloaded.`);
        setTimeout(() => download(), 1000);
        queue++;
    } else {
        console.log(`${queue} file downloaded Completed.`);
    }
}

download();