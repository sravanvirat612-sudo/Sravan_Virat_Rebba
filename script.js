// Handle self info form
document.getElementById("selfForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  
  const data = {
    activity: e.target.activity.value,
    food: e.target.food.value,
    color: e.target.color.value,
    firstCrush: e.target.firstCrush.value,
    currentCrush: e.target.currentCrush.value,
    word: e.target.word.value
  };

  const id = Math.random().toString(36).substr(2, 9); // unique ID
  localStorage.setItem(id, JSON.stringify(data)); // store info locally

  document.getElementById("link").innerHTML =
    `Share this link: quiz.html?id=${id}`;
});

// Handle friend quiz
document.getElementById("quizForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const selfInfo = JSON.parse(localStorage.getItem(id));

  let score = 0;
  if (selfInfo.activity.toLowerCase() === e.target.activity.value.toLowerCase()) score++;
  if (selfInfo.food.toLowerCase() === e.target.food.value.toLowerCase()) score++;
  if (selfInfo.color.toLowerCase() === e.target.color.value.toLowerCase()) score++;
  if (selfInfo.firstCrush.toLowerCase() === e.target.firstCrush.value.toLowerCase()) score++;
  if (selfInfo.currentCrush.toLowerCase() === e.target.currentCrush.value.toLowerCase()) score++;
  if (selfInfo.word.toLowerCase() === e.target.word.value.toLowerCase()) score++;

  // Scale score to 10
  const finalScore = (score / 6) * 10;

  document.getElementById("result").innerHTML =
    `You know your friend ${finalScore}/10!`;
});
