function flashCard(front, back) {
    this.front = front
    this.back = back
}

function clozeCard(question, answer) {
    this.cloze = () => {
        if (question.match(/who|what|when|where|why/gi)) {
            let blanks = "_ _ _ _ _ _ _"
            let cloze = question.replace(/who|what|when|where|why/gi, blanks)
            console.log(cloze)
            return cloze
        } else {
            console.log("Cannot find pronoun!")
        }
    }
    this.fullText = () => {
        if (question.match(/who|what|when|where|why/gi)) {
            let fullText = question.replace(/who|what|when|where|why/gi, answer)
            console.log(fullText)
            return fullText
        } else {
            console.log("Cannot find pronoun!")
        }
    }
}

var card1 = new flashCard("who was the first president of the united states", "george washington")
var cloze1 = new clozeCard("who was the first president of the united states", "george washington")
var card2 = new clozeCard("This shouldn't work", "oops")
console.log(card1.front)
console.log(card1.back)
cloze1.cloze()
cloze1.fullText()
card2.cloze()
card2.fullText()
