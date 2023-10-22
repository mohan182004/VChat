//compare part
var but_compare = document.getElementById("but_compare");

//course 1
const bscIT = () =>
{
    return bscit = {
    name: "Bachelor of Science in Information Technology",
    level : "Graduate",
    duration : "3 years",
    el : "10+2 with minimum 45% marks with maths major",
    fees: 25000,
    job : "Programmers, Software Developer, Quality Analyst,IT Specialists, Technology Engineer, Technical Consultant, and Graphic Designer"
    };
}

//course2
const bscCs = () =>
{
    return bsccs = {
    name: "Bachelor of Science in Computer Science",
    level : "Graduate",
    duration : "3 years",
    el : "12th in PCM with the minimum 45%- 60% marks",
    fees: 30000,
    job : "Programmers, Software enginner,DTP operator, tech support Professional Hardware enginner, network architect"
};
}

//course3
const ME = () =>
{
    return Me = {
    name: "Mechanical Engineering",
    level : "Degree",
    duration : "4 years",
    el : "at least 60% marks in class 12 board exams. PCM in 12th compulsory",
    fees :'4,00,000/- 10,00,000/-',
    job : "Operation Engineer,Technical Project Manager ,Mechanical Design Engineer"
};
}

//event
but_compare.addEventListener("click",()=>{
    var inp1 = document.getElementById("inp1").value;
    var inp2 = document.getElementById("inp2").value;
    let table_span = document.getElementById("table_span");

    let d1,d2;
    switch (inp1)
    {
        case "BScIT":
            d1 = bscIT();
            break;
        case "BScCS":
            d1 = bscCs();
            break;
        case "ME":
            d1 = ME();
    }
    switch (inp2)
    {
        case "BScIT":
            d2 = bscIT();
            break;
        case "BScCS":
            d2 = bscCs();
            break;
        case "ME":
            d2 = ME();
    }

    table_span.innerHTML = `
    <table  class="table table-bordered table-dark">
            <thead class="bg-primary">
              <tr style="color:white ; text-decoration: underline blue;">
                <th style=" width: 15%;" scope="col">Specfication</th>
                <th scope="col">${inp1}</th>
                <th scope="col">${inp2}</th>

              </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Full form</th>
                    <td>${d1.name}</td>
                    <td>${d2.name}</td>

                  </tr>
              <tr>
                <th scope="row">course level</th>
                <td>${d1.level}</td>
                <td>${d2.level}</td>

              </tr>
              <tr>
                <th scope="row">duration</th>
                <td>${d1.duration}</td>
                <td>${d2.duration}</td>

              </tr>
              <tr>
                <th scope="row">eligibility</th>
                <td>${d1.el}</td>
                <td>${d2.el}</td>

              </tr>
              <tr>
                <th scope="row">course fees</th>
                <td>${d1.fees}, differ from various colleges </td>
                <td>${d2.fees}, differ from various colleges </td>

              </tr>
              <tr>
                <th scope="row">job position</th>
                <td>${d1.job}</td>
                <td>${d2.job}</td>

              </tr>
            </tbody>
          </table>`
})