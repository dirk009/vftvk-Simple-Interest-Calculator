function compute()
{
    var principal = document.getElementById("principal").value;
    // validate principal
    if (principal == "" || principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // compute interest
    var interest = principal * years * rate /100;

    // calculate final year
    var year = new Date().getFullYear()+parseInt(years);

    // compose result text
    text = "If you deposit <mark>" + principal +"</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "%.</mark><br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/>" +
        "in the year <mark>" + year + "</mark><br/>";

    // update html
    var result_element = document.getElementById("result");
    result_element.innerHTML = text;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    rateval = rateval + "%";
    document.getElementById("rate_val").innerText = rateval;
}
