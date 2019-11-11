module.exports = function ({ message }) {
    return `<section class="feedback">
    <p class="feedback__message">${message}</p>
    <span class="feedback__icon">🎈</span>
</section>`
}