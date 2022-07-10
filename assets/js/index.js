function getEmail() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    console.log(name, email, phone, subject, message);

    if (!name) {
       return alert('Isi nama kamu')
    }else if (!email){
       return alert(' Isi email kamu')
    }else if (!phone){
       return alert('Isi nomer kamu')
    }else if (!subject){
       return alert('Pilih salah satu')
    }else if (!message){
       return alert ('Berikan Pesan')
    }else{
       alert('Berhasil dilengkapi')
    }
    
    let emailReceiver = "ilhamprastiy366@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo, nama saya ${name}, ${message}, ini nomer hp saya ${phone}`
    a.click()
}
