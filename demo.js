window.onload = function () {
    let box = document.getElementsByClassName('box')[0];
    console.log(box);
    box.addEventListener('click', function () {
        alert('这是测试代码')
    })
}