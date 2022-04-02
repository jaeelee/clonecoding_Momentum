const clock = document.querySelector("h2#clock");

clock.innerText = "clock";


function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hour}:${minutes}`;
}
getClock();
setInterval(getClock, 1000);


// Interval = 매번 일어나야 하는 무언가 (ex. 매 2초마다 무슨일이 일어나게 하고 싶을 떄 사용)
// setInterval(sayHello, 5000); // 5초마다 sayHello 함수 실행

// timeout = 몇초 후에 일어나야 할 떄 사용 
// setTimeout(sayHello, 5000); // 5초 후에 sayHello 함수 실행

// padStart(a, b) = 시작부분에 문자열 길이 a보다 작으면 부족한 만큼 문자열 b 추가
// "1".padStart(2, "0"); => "01"