# Question-Paper-Generator-application

- Requirements: You need to Node.js > v10 installed in your system.

- If your system doesn't have Node.js installed then you can goto https://nodejs.org and install LTS version.

- Follow these steps to run the programme.

1. Clone the repo.
```bash
git clone https://github.com/harshcoder690/Question-Paper-Generator-application.git
```

2. Add questions inside question.json file.

```json
["What is the speed of light", "Physics", "Waves", "Easy", 5]
```
3. Start the server by
```bash
nodemon index.js
```
it will start the server on host 5000

4. Hit the post request on API("http://localhost:5000/api/v1/getQuestions") with the body:
```json
{
  "totalMarks": 100,
  "difficulty": {
    "Easy": 20,
    "Medium": 50,
    "Hard": 30
  }
}
```

6. Result format (in arrays questions will be stored).
```json
{
  "easy": [],
  "medium": [],
  "hard": []
}
```
