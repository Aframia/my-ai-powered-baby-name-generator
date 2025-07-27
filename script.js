let meaning = document.querySelector(".meaning");
let gender = document.querySelector(".gender");
let day = document.querySelector(".day");



new Typewriter('#reply', {
  strings: ['Hello', 'Looking for a name for your newborn ....You are at the right place!'],
  autoStart: true,
  delay:100,
});

function sendMessage(response){
    let reply = document.querySelector("#reply");
    let answer = response.data.answer;
    reply.innerHTML = answer;
}

function send(event){
    event.preventDefault();
    let reply = document.querySelector(".reply");
    reply.innerHTML = "Generating name suggestions.....";

    let genderText = gender.value;
    let meaningText = meaning.value;
    let dayText = day.value;
  

    let apiKey ="fb820fo1b1cfa408bca4ft48b00334dc";
let prompt =`User Instructions:Provide a list of English names strictly for only ${genderText}
  that strictly means ${meaningText} add the meanings to each name.Add The ghanaian dayborn name strictly for only the gender and ${dayText} at the bottom as text not 
  part of the list`;
let context = `Give only 10 names.Be precise and clear.Follow User Instructions.Format:html ordered list and the dayborn text as centered paragraph.
look for the dayborn name  based on gender and day from this: dayborn  names in ghana =[
        [
            "Day: Monday" ,
            "Male: Kwadwo/Kojo",
            "Female : Adjoa/Adwoa"
        ],
         [
            "Day: Sunday" ,
            "Male: Kwasi/Kwesi/Akwasi",
            "Female : Akosua/Esi"
        ],
         [
            "Day: Tuesday" ,
            "Male: Kwabena/Kobi/Ebo",
            "Female : Abena/Araba/Abla"
        ],
         [
            "Day: Wednesday" ,
            "Male: Kwaku/Kweku/Abeiku",
            "Female : Akua/Aku/Kukua"
        ],
         [
            "Day: Thursday" ,
            "Male: Yaw/Yao/Ekow",
            "Female : Yaa/Yaba"
        ],
         [
            "Day: Friday" ,
            "Male: Kofi/Fiifi/Yoofi",
            "Female : Afua/Afia/Afi"
        ],
         [
            "Day: Saturday" ,
            "Male: Kwame/Kwamena/Ato",
            "Female : Ama/Amma/Amba"
        ]
    ]; .Don't return this object`
;
let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(sendMessage);


}

let form = document.querySelector("form");
form.addEventListener("submit", send)
