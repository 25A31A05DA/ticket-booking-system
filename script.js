function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u === "admin" && p === "1234") { 
        window.location.href = "booking.html";
    } else {
        document.getElementById("error").innerText = "Invalid login!";
    }
}


function bookSeat() {
    window.location.href = "success.html";
}


function generateSeat() {
    let seatNumber = Math.floor(Math.random() * 100) + 1;  
    document.getElementById("seat").innerText = seatNumber;
}