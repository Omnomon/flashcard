function flashCard(question, answer) {
    this.question = question
    this.answer = answer
    this.cloze = () => {
        if (this.question.match(/who|what|when|where|why/gi)) {
            let blanks = "_ _ _ _ _ _ _"
            let cloze = this.question.replace(/who|what|when|where|why/gi, blanks)
            console.log(cloze)
            return cloze
        } else {
            console.log("Cannot find pronoun!")
        }

    }
    this.fullText = () => {
        if (this.question.match(/who|what|when|where|why/gi)) {
            let fullText = this.question.replace(/who|what|when|where|why/gi, this.answer)
            console.log(fullText)
            return fullText
        } else{
            console.log("Cannot find pronoun!")
        }

    }
}

var card1 = new flashCard("who was the first president of the united states", "george washington")
var card2 = new flashCard("This shouldn't work", "oops")
card1.cloze()
card1.fullText()
card2.cloze()
card2.fullText()
