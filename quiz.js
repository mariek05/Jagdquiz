let score = 0;
let currentQuestionIndex = 0;

let questions = [
    {
        question: "Warum ist Jagd notwendig?",
        answers: ["Jagd muss gar nicht sein","um das Gleichgewicht in der Natur zu halten","weil es sonst fad ist"],
        correctAnswer: 1
    },
    {
        question: "Auf welches Wild wird die Blattjagd ausgeübt?",
        answers: ["Rehwild","Schwarzwild","Rotwild", "Damwild", "Sikawild"],
        correctAnswer: 0
    },
    {
        question: "Warum werden die Rehe im Winter gefüttert?",
        answers: ["weil sie lieb sind","damit es mehr Rehe zum schießen gibt","weil sie sonst Schaden an den Bäumen anrichten oder verhungern"],
        correctAnswer: 2
    },
    {
        question: "Worauf muss der Jäger bei der Pirsch achten?",
        answers: ["dass er beim Jausnen nicht schmatzt","dass er sich leise bewegt","dass er nicht gegen einen Baum kracht oder einschläft"],
        correctAnswer: 1
    },
    {
        question: "Müssen Jäger überhaupt schießen?",
        answers: ["Nein, aber sie finden das lustig","Ja, es gibt sogar einen Abschussplan","Nein, das macht der Förster"],
        correctAnswer: 1
    },
    {
        question: "Welche Aussage über den Erlegerbruch ist richtig?",
        answers: ["er wird vom Nachbarschützen überreicht","er wird vom Jagdkönig überreicht","er wird nach erfolgreicher Nachsuche dem Hund an die Halsung gesteckt", "er wird nach erfolgreicher Nachsuche dem Hund an die Halsung gesteckt", "er wird auf der rechten Hutseite getragen"],
        correctAnswer: 4
    },
    {
        question: "Wie nennt man das Fleisch voon wilden Tieren?",
        answers: ["Wildfleisch","Hasenpfeffer","Wildbret"],
        correctAnswer: 2
    },
    {
        question: "Welche Pflanze ist bei der Wildackerbestellung als Sommeräsung besonders geeignet?",
        answers: ["Markstammkohl","Buchweizen","Rüben", "Winterraps"],
        correctAnswer: 1
    },
    {
        question: "Was machst du, wenn du ein einsames Tierkind findest?",
        answers: ["du suchst seine Mutter","du lässt es in Ruhe","du streichelst es ein wenig, damit es sich nicht so allein fühlt"],
        correctAnswer: 1
    },
    {
        question: "Was ist der Unterschied zwischen einen Jäger und einem Förster?",
        answers: ["Jäger kümmern sich vor allem um das Wild, die Förster um die Pflanzen im Wald","da gibt's gar keinen Unterschied","die Jäger sind nur am Waldrand, die Förster sind im Wald"],
        correctAnswer: 0
    },
    {
        question: "Welcher Gefahrgutklasse ist Treibladungspulver bei Beförderungen zugeordnet?",
        answers: ["1a","1b","1c","3a"],
        correctAnswer: 0
    },
    {
        question: "Nennen Sie die typische Jagdart auf Rebhühner",
        answers: ["Buschieren","Kesseltreiben","Streife","Suche", "Böhmische Streife"],
        correctAnswer: 0
    },
    {
        question: "Warum ist ein Uhu so leise?",
        answers: ["er hat es so geübt","wegen den ausgefransten Federn","weil er so klein ist"],
        correctAnswer: 1
    },
    {
        question: "Welche Rehe werden geschossen?",
        answers: ["nur alte und kranke Rehe","Rehe mit großen Hörnern","der Jäger muss sich an einen Abschussplan halten"],
        correctAnswer: 2
    },
    {
        question: "Welcher Lagergruppe ist NC-Pulver zugeordnet?",
        answers: ["Lagergruppe 1.3","Lagergruppe 1.1","Lagergruppe 1.5", "Lagergruppe 1.1-3"],
        correctAnswer: 0
    },
    {
        question: "Wie heißt der weiße Puschel am Hintern eines Rehs?",
        answers: ["Blume","Spiegel","Lunte"],
        correctAnswer: 1
    },
    {
        question: "Was ist die Höchstmenge Treibladungspulver, die man in einem Auto befördern darf?",
        answers: ["bis 20kg, wenn ein 2kg-Feuerlöscher an Bord ist","bis 30kg, wenn Ortschaften gemieden werden","bis 35kg, wenn ein 5kg Feuerlöscher an Bord ist", "bis 40kg, wenn sonst niemand mitfährt"],
        correctAnswer: 0
    },
    {
        question: "Ein guter Jagdhund...",
        answers: ["beißt alle Rehe","rennt bellend durch den Wald","findet verlorenes Wild"],
        correctAnswer: 2
    },
    {
        question: "Die wichtigste aufgabe des Jägers ist...",
        answers: ["wanderer beobachten","Natur und Tiere beobachten","alle Tiere abschießen"],
        correctAnswer: 1
    },
    {
        question: "Die Augen des Steinadlers sind...",
        answers: ["gelb","braun","orange"],
        correctAnswer: 1
    },
];

function displayQuestion(){

    if(currentQuestionIndex >= questions.length){
        document.getElementById('quiz-container').hidden = true;
        document.getElementById('result').hidden = false;
        document.getElementById('score').textContent = score;
        return;
    }


    let question = questions[currentQuestionIndex];

    document.getElementById('question').textContent = question.question;
    
    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button');
        answerButton.classList.add("btn", "btn-dark", "me-2");
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);
    });
}

displayQuestion();

function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if(userAnswer == correctAnswer){
        score += 1;
    }

    nextQuestion();
}

function nextQuestion(){
    currentQuestionIndex += 1;
    displayQuestion();
}