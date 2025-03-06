const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {panel.addEventListener('click', () => {removeActiveClasses() 
    panel.classList.add('active')
    })
})
function removeActiveClasses () {panels.forEach(panel => {panel.classList.remove('active') }) }



const panels2 = document.querySelectorAll('.panel2')
panels2.forEach(panel2 => {panel2.addEventListener('click', () => {removeActive2Classes()
        panel2.classList.add('active2')
    })
})
function removeActive2Classes () {panels2.forEach(panel2 => {panel2.classList.remove('active2') })
}



const panels3 = document.querySelectorAll('.panel3')
panels3.forEach(panel3 => {panel3.addEventListener('click', () => {removeActive3Classes()
    panel3.classList.add('active3')
    })
})
function removeActive3Classes () {
    panels3.forEach(panel3 => {
        panel3.classList.remove('active3')
    })
}