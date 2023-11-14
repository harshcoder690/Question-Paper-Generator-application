const evaluateMarks = (totalMarks, difficulty) => {
    const marksDistribution = {
        Easy: totalMarks * (difficulty.Easy / 100),
        Medium: totalMarks * (difficulty.Medium / 100),
        Hard: totalMarks * (difficulty.Hard / 100),
    }
    return marksDistribution;
}

const createPaper = (req, questionList) => {
    const totalMarks = req.totalMarks;
    const difficulty = req.difficulty;
    const selectedQuestions = {
        Easy: [],
        Medium: [],
        Hard: []
    }
    const marksDistribution = evaluateMarks(totalMarks, difficulty);

    questionList.map((question) => {
        if (question[3] === "Easy") {
            if (marksDistribution["Easy"] !== 0) {
                selectedQuestions.Easy.push(question);
                marksDistribution["Easy"] -= question[4];
            }
        }
        else if (question[3] === "Medium") {
            if (marksDistribution["Medium"] !== 0) {
                selectedQuestions.Medium.push(question);
                marksDistribution["Medium"] -= question[4];
            }
        }
        else if (question[3] === "Hard") {
            if (marksDistribution["Hard"] !== 0) {
                selectedQuestions.Hard.push(question);
                marksDistribution["Hard"] -= question[4];
            }
        }
        else {
            console.info(`Unknown difficulty on ${question}`);
        }
    })
    
    return selectedQuestions;

}

module.exports = createPaper;