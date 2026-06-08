const form = document.getElementById("leadForm");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const formData = {
name: form.name.value,
email: form.email.value,
phone: form.phone.value || "",
country: form.country.value || "",
destination: form.destination.value || "",
message: form.message.value,
lead_source: "Website Inquiry Form",
lead_status: "New Lead"
};

const responseBox =
document.getElementById("responseMessage");

try {

const response = await fetch(
"https://YOUR-N8N-URL/webhook/tours-lead",
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(formData)
}
);

if(response.ok){

responseBox.innerHTML =
"✅ Thank you! Your inquiry has been received.";

responseBox.style.color = "green";

form.reset();

}else{

responseBox.innerHTML =
"❌ Submission failed. Please try again.";

responseBox.style.color = "red";

}

}catch(error){

responseBox.innerHTML =
"❌ Unable to connect. Please try later.";

responseBox.style.color = "red";

}

});