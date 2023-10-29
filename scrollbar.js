const scrollbarThumb = document.getElementById('scrollbar-thumb');
const content = document.querySelector('.content');

scrollbarThumb.addEventListener('mousedown', startDrag);

function startDrag(e) {
    let prevY = e.clientY;

    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);

    function doDrag(e) {
        const diffY = e.clientY - prevY;
        const newTop = scrollbarThumb.offsetTop + diffY;

        // Prevent the thumb from moving outside the scrollbar
        if (newTop >= 0 && newTop <= scrollbar.clientHeight - scrollbarThumb.clientHeight) {
            scrollbarThumb.style.top = newTop + 'px';
            content.style.top = -(newTop / scrollbar.clientHeight) * content.clientHeight + 'px';
            prevY = e.clientY;
        }
    }

    function stopDrag() {
        document.removeEventListener('mousemove', doDrag);
        document.removeEventListener('mouseup', stopDrag);
    }
}
