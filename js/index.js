import { DATA } from "../../src/data/data.js";

document.addEventListener("DOMContentLoaded", () => {
  const ul = document.getElementById("content");
  const srcs = [
    "../../src/assets/images/icon-work.svg",
    "../../src/assets/images/icon-play.svg",
    "../../src/assets/images/icon-study.svg",
    "../../src/assets/images/icon-exercise.svg",
    "../../src/assets/images/icon-social.svg",
    "../../src/assets/images/icon-self-care.svg",
  ];
  const colorsBackground = [
    "--Light-orange",
    "--Soft-blue",
    "--Light-red",
    "--Lime-green",
    "--Violet",
    "--Soft-orange",
  ];

  const srcImgEllipsis = "../../src/assets/images/icon-ellipsis.svg";
  let count = 0;
  const lengthData = DATA.length;

  while (count < lengthData) {
    console.count("passou");
    const li = document.createElement("li");
    const containerData = document.createElement("div");
    containerData.setAttribute("class", `container-data`);
    const contentData = document.createElement("div");
    contentData.setAttribute("class", `content-data`);
    contentData.innerHTML = `<div class="infos-data">
                                <p>${DATA[count].title}</p>
                                <button type="button" class="menu-button">
                                  <img src="${srcImgEllipsis}" alt="menu" />
                                </button>
                              </div>
                              <div class="main-data" id="main-data_${DATA[
                                count
                              ].title
                                .split(" ")
                                .join("-")}">
                              </div>
                              `;
    const containerImg = document.createElement("div");
    containerImg.style.cssText = `background: var(${colorsBackground[count]})`;
    containerImg.setAttribute("class", `container-img`);
    const contentImg = document.createElement("div");
    contentImg.setAttribute("class", `content-img`);
    const img = document.createElement("img");
    img.setAttribute("src", `${srcs[count]}`);
    const containerdetalsData = document.createElement("div");
    containerdetalsData.setAttribute("class", `container-data-details`);

    contentImg.appendChild(img);
    containerData.appendChild(contentData);
    containerImg.appendChild(contentImg);
    containerdetalsData.appendChild(containerImg);
    containerdetalsData.appendChild(containerData);
    li.appendChild(containerdetalsData);
    ul.appendChild(li);
    count++;
  }
  const getResultDaily = document.getElementById("getResultDaily");
  const getResultWeekly = document.getElementById("getResultWeekly");
  const getResultMonthy = document.getElementById("getResultMonthy");

  function setValuesWeekMonthDay(params) {
    for (const iterator of DATA) {
      const element = document.getElementById(
        `main-data_${iterator.title.split(" ").join("-")}`
      );

      element.innerHTML = `<div class="span-time-frame">
                              ${iterator.timeframes[`${params}`].current}hrs
                          </div>
                            <p>Last Day - ${
                              iterator.timeframes[`${params}`].current
                            }hrs</p>
                          `;
    }
  }
  // displays daily data when loading the page
  setValuesWeekMonthDay("daily");

  getResultDaily.addEventListener("click", () => {
    setValuesWeekMonthDay("daily");
  });
  getResultWeekly.addEventListener("click", () => {
    setValuesWeekMonthDay("weekly");
  });
  getResultMonthy.addEventListener("click", () => {
    setValuesWeekMonthDay("monthly");
  });
});
