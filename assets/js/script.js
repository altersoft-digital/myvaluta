;(() => {
  const tabs = document.querySelectorAll('[data-tab-target]')
  const tabContents = document.querySelectorAll('[data-tab-content]')

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active')
      })
      tabs.forEach((tab) => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    })
  })

  // filter dropdown
  function filterDropdown() {
    if (!document.querySelector('.filter-dropdown')) return

    const dropdown = document.querySelector('.filter-dropdown')
    const trigger = dropdown.querySelector('[dropdown-trigger]')
    const options = dropdown.querySelectorAll('.filter-options button')

    trigger.addEventListener('click', () => {
      dropdown.classList.toggle('active')
    })

    options.forEach((option) => {
      option.addEventListener('click', () => {
        // update filter button chosen option
        const optionInnerContent = option.innerHTML
        trigger.querySelector('div').innerHTML = optionInnerContent

        // close dropdown
        dropdown.classList.remove('active')

        // submit api call from here
        console.log(option.value)
      })
    })
  }

  function currencyDropdown() {
    if (!document.querySelector('.dropdown')) return

    const dropdowns = document.querySelectorAll('.dropdown')

    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector('[dropdown-trigger]')
      const options = dropdown.querySelectorAll('.dropdown-options button')

      trigger.addEventListener('click', () => {
        dropdown.classList.toggle('active')
      })

      options.forEach((option) => {
        option.addEventListener('click', () => {
          // update filter button chosen option
          const optionInnerContent = option.innerHTML
          trigger.querySelector('div').innerHTML = optionInnerContent

          // close dropdown
          dropdown.classList.remove('active')

          // submit api call from here
          console.log(option.value)
        })
      })
    })
  }

  currencyDropdown()
  filterDropdown()
})()
