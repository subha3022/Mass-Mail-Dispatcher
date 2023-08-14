let upload = document.getElementById('upload');
upload.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload = function () {

        let Arr = fr.result.split(/\r?\n|\n/).map(e =>  {
            return e.split(',');
        });
        Window.valNo = 0;
        let invalNo = 0;
        Window.valMail = [];
        Arr.forEach(e => {
            let em = String(e);
            let m = e.map(e => {
                return `<td>${e}</td>`;
            })
            let creEle = document.createElement("tr");
            creEle.innerHTML = m;
            if (em != "") {

            //}
               if (em.charAt(em.length - 4 ) == '.'){
                document.querySelector("table#val").appendChild(creEle);
                Window.valMail.push(em);
                Window.valNo = Window.valNo + 1;
                return false;
               }
               else if (em.charAt(em.length - 3 ) == '.') {
                document.querySelector("table#val").appendChild(creEle);
                Window.valMail.push(em);
                Window.valNo = Window.valNo + 1;
                return false;
               }
              else {
                document.querySelector("table#inval").appendChild(creEle);
                invalNo = invalNo + 1;
                return false;
            }

            }

        });

        document.querySelector('#valCount').innerHTML = Window.valNo;
        document.querySelector('#invalCount').innerHTML = invalNo;
    };
});

function sendEmail() {
    Email.send({
        Host:"smtp.elasticemail.com",
        Username:"desubha642@gmail.com" ,
        Password:"671B39F4E12A876F39C2204166B1D15F0D20",
        To: "desubha642@gmail.com",
        From: "desubha642@gmail.com",
        Subject: document.querySelector('#subject').value,
        Body: document.getElementById('message').value
    }).then(
        message => alert(Window.valNo + " mails has been sent successfully, press " + message + "to continue.")
    );

    console.log(document.getElementById('message').value);
    console.log(document.getElementById('message').innerHTML);
    console.log(document.getElementById('message').innerText);
}


