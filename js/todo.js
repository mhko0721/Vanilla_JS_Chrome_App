const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; //로컬저장소 키 이름

let toDos = [];

//로컬 저장소에 투두리스트 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 배열을 스트링화하여 저장
}

//투두리스트 내용 삭제
function deleteToDo(dl) {
  const li = dl.target.parentElement; //버튼의 부모, 즉 HTML의 리스트(li)
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  saveToDos();
}

//투두리스트 나타내기
function paintToDo(td) {
  const li = document.createElement("li"); //리스트 생성
  li.id = td.id;
  const span = document.createElement("span"); //할 일
  span.innerText = td.text;
  const btn = document.createElement("button"); // 삭제버튼
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo); //삭제 이벤트
  li.appendChild(span); //리스트에 자식으로 할 일 추가
  li.appendChild(btn);
  toDoList.appendChild(li); //HTML에 리스트 추가
}

//브라우저 기능 막기
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //항목 구분
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function satHello(item) {}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos); //스트링을 배열화
  toDos = parsedToDos; //기존 항목 유지
  parsedToDos.forEach(paintToDo); //배열의 각 아이템을 사용
}
