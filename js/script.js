document.addEventListener("DOMContentLoaded", () => {
    const designGrade = document.querySelector('[data-js="designGrade"]')
    let currentId = window.location.search
                        .substring(1)
                        .split('&')
                        .find(item => item.startsWith('id='))

    if(currentId) {
        currentId = currentId.split('=')[1]
    } else {
        console.log('id не найден')
    }

    if(!designGrade || !currentId) return

    const designGradeBtnList = designGrade.querySelectorAll('[data-js="designGradeBtn"]')

    designGradeBtnList.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentNum = btn.dataset.value
            getResult(currentId, currentNum, designGrade)
        })
    })
})

function getResult(id, num, parentBlock) {
    const designGrades = parentBlock.querySelector('[data-js="designGradeGrades"]')
    const designResults = parentBlock.querySelector('[data-js="designGradeResults"]')

    fetch("https://ostinschool.woman.ru/save_data", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          num: num
        })
      })    
      .then( (response) => { 
        console.log('ответ')
        console.log(response)
    });

}
