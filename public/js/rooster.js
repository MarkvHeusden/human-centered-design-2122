const gifs = ['flip', 'punch', 'wave', 'backflip', 'punch', 'wave', 'hi']
const gifContainer = document.querySelector('.gif')
const days = document.querySelectorAll('.rooster li')

for (let i = 0; i < days.length; i++) {
    days[i].addEventListener('focus', () => {
        gifContainer.style.backgroundImage = `url('/img/${gifs[i]}.gif')`
    })
}
