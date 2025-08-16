let form = document.getElementById("form");
let lists = document.getElementById("lists");
let form_input = document.getElementById("form_input");
let second_time_hour = document.getElementById("second_time_hour");
let second_time_min = document.getElementById("second_time_min");
let first_time = document.getElementById("first_time");
let icon_trash = document.getElementById("icon_trash");
let icon_pencil = document.getElementById("icon_pencil");
let icon_check = document.getElementById("icon_check");
let none = document.getElementById("none");

//data to arr upload

let data = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valu = form_input.value;
  if (valu.trim() === "") {
    none.classList.remove("hidden");
  } else {
    data = [...data, { id: Date.now(), form_input: valu }];
    form_input.value = "";
    addUi(data);
    none.classList.add("hidden");
  }
});

//list create

function addUi(data) {
  let div = document.createElement("div");

  //reate time

  let now = new Date();
  let timeMin = String(now.getMinutes()).padStart(2, "0");
  let timeHour = String(now.getHours()).padStart(2, "0");

  //pencil or checked

  lists.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon_pencil")) {
      e.target.classList.remove("fa-pencil");
      e.target.classList.remove("icon_pencil");
      e.target.classList.add("fa-check");
      e.target.classList.add("icon_check");
    } else if (e.target.classList.contains("icon_check")) {
      e.target.classList.remove("fa-check");
      e.target.classList.remove("icon_check");
      e.target.classList.add("fa-pencil");
      e.target.classList.add("icon_pencil");
    }
  });

  div.classList.add(
    "w-[600px]",
    "mb-3",
    "flex",
    "items-center",
    "justify-between",
    "rounded-[10px]",
    "border-[1px]",
    "bg-[#0D0714]",
    "border-[#3E1671]",
    "py-[30px]",
    "px-[20px]"
  );
  data.forEach((element) => {
    div.innerHTML = ` 
          <strong
            id="list_strong"
            class="font-normal w-[350px] text-[16px] leading-[100%] text-[#9E78CF]"
            >${element.form_input}</strong
          >
          <input
            class="form_input hidden w-[400px]  bg-[#0D0714] border-[#3E1671] py-[10px] pl-[15px] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[100%] placeholder:text-[#777777] font-bold text-[16px] leading-[100%] text-[#777777] outline-0"
            id="list_input"
            type="text"
          />
          <div
          
            id="list_iconWrapper"
            class="gap-2 flex items-center justify-between"
          >
            <p class="font-normal text-[16px] leading-[100%] text-[#9E78CF]" id="first_time"><span>Sent => </span><br>${timeHour} : ${timeMin}</p>
            <p class="font-normal text-[16px] leading-[100%] text-[#9E78CF]" id="second_time"><span>Edit => </span><br><span id="second_time_hour"></span> : <span id="second_time_min"></span></p>
            <i id="icon_pencil" class="icon_pencil text-[#9E78CF] cursor-pointer fa-solid fa-pencil"></i>
            <i id="icon_trash" class="icon_trash text-[#9E78CF] cursor-pointer fa-solid fa-trash"></i>
        </div>`;
  });
  lists.append(div);
}

//list remove

lists.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon_trash")) {
    e.target.parentElement.parentElement.remove();
  }
});

//list's content edit

// lists.addEventListener("click", (e) => {
//   if (e.target.classList.contains("icon_check")) {
//     list_strong.classList.add("hidden");
//     list_input.classList.remove("hidden");
//   }
// });
