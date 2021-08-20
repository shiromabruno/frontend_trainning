
let validUserNames = (x) => x.filter(element => {
    if (element.length < 10){
        return element
    }
})

console.log(validUserNames(['mark', 'staceyysmom1978', 'q123123123', 'carrie98', 'moanafan']))
//['mark', 'staceyysmom1978', 'q123123123', 'carrie98', 'moanafan']