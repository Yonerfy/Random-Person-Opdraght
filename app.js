const countryList = function () {
    return randomPersonData.map(country => country.region);
}

const capricornWomen = function () {
    const womans = randomPersonData.filter(woman => woman.gender === "female").filter(age => age.age > 30).filter(date =>
        date.birthday.mdy <= "01/19/" || date.birthday.mdy >= "12/22/");
    return womans.map(woman => `${woman.name} ${woman.surname} `)
}

const addDataToList = function (data) {
    const ul = document.querySelector(".list-data");
    const li = document.createElement("li")
    ul.append(li);
    li.append(data);
}

const buttonsEvent = function (id, callback) {
    const ul = document.querySelector(".list-data");
    const btnList = document.getElementById(id);
    btnList.addEventListener("click", function () {
        const data = callback();
        ul.innerHTML = "";
        data.forEach(element => {
            addDataToList(element);
        })
    })
}
buttonsEvent("country", countryList);
buttonsEvent("capriwoman", capricornWomen);

