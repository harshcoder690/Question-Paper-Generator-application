const fs = require("fs/promises");
const parseJSON = async (fileName) =>{
    console.log(fileName)
    const questions = await fs.readFile(fileName);
    const parsedQuestions = JSON.parse(questions);
    const list = parsedQuestions.data;
    return list;
}

module.exports = parseJSON;