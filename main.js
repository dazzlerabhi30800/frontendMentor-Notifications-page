const notificationCount = document.querySelector('.notification');
const notification = document.querySelectorAll('.mark--as--read');
const notificationCircle = document.querySelectorAll('.circle');
const markAllRead = document.querySelector('header h2');

const handleNotification = () => {
    notification.forEach((not, index) => {
        not.addEventListener('click', () => {
            not.classList.toggle('read');
            handleNotificationCircle(index);
        })
    })
}

const handleNotificationCount = () => {
    notification.forEach(not => {
        not.addEventListener('click', () => {
            if (not.classList.contains('read')) {
                notificationCount.textContent++;
            }
            else {
                notificationCount.textContent--;
            }
        })
    })
}

const handleNotificationCircle = (index) => {
    notificationCircle[index].classList.toggle('readed');
}

const handleMarkAllRead = () => {
    notification.forEach(not => {
        not.classList.remove('read')
    })
    notificationCircle.forEach(circle => {
        circle.classList.remove('readed');
    })
    notificationCount.textContent = 0;
}


handleNotification();
handleNotificationCount();

markAllRead.addEventListener('click', handleMarkAllRead)