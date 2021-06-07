function toggleRules() {
    const rules = document.getElementById('rules');
    const rulesActive = document.getElementById('rules-active')
    const body = document.querySelector('body')
    const close = document.getElementById('close')
    rulesActive.style.display = 'none'
    
    rules.addEventListener('click', (e) => {
        rulesActive.style.display = 'block'
    })

    close.addEventListener('click', (e) => {
        rulesActive.style.display = 'none'
    })
}
toggleRules()