function flashCard(question, answer) {
    this.question = question
    this.answer = answer
    this.cloze = () => {
        let blanks = "_ _ _ _ _ _ _"
        let cloze = this.question.replace(/who|what|when|where|why/gi, blanks)
        console.log(cloze)
        return cloze
    }
    this.fullText = () => {
        let fullText = this.question.replace(/who|what|when|where|why/gi, this.answer)
        console.log(fullText)
        return fullText
    }
}

var card1 = new flashCard("who was the first president of the united states", "george washington")

card1.cloze()
card1.fullText()
