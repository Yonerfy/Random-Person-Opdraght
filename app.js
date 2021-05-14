const countryList = function () {
    return randomPersonData.map(country => country.region);
}

const capricornWomen = function () {
    return randomPersonData.filter(woman => woman.gender === "female").filter(age => age.age > 30).filter(date =>
        date.birthday.mdy <= "01/19/" || date.birthday.mdy >= "12/22/");
}

const addDataToListCapriWomen = function (data, imgSrc) {
    const ul = document.querySelector(".list-data");
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = imgSrc
    ul.append(li);
    li.append(data, img);
}

const addDataToListCountry = function (data) {
    const ul = document.querySelector(".list-data");
    const li = document.createElement("li");
    ul.append(li);
    li.append(data);
}

const buttonsEventCapriwoman = function (id, callback) {
    const ul = document.querySelector(".list-data");
    const btnList = document.getElementById(id);
    btnList.addEventListener("click", function () {
        const data = callback();
        ul.innerHTML = "";
        data.forEach(element => {
            addDataToListCapriWomen(element.surname, element.photo);
        })
    })
}
const buttonsEventCountry = function (id, callback) {
    const ul = document.querySelector(".list-data");
    const btnList = document.getElementById(id);
    btnList.addEventListener("click", function () {
        const data = callback();
        ul.innerHTML = "";
        data.forEach(element => {
            addDataToListCountry(element);
        })
    })
}
buttonsEventCountry("country", countryList);
buttonsEventCapriwoman("capriwoman", capricornWomen);
console.log(randomPersonData);

