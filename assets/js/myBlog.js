let pushBlog = []

function addBlog(event) {
  event.preventDefault()
  let judul = document.getElementById("judulBlog1").value
  let startDate = document.getElementById("startDate").value
  let endDate = document.getElementById("endDate").value
  let dsck = document.getElementById("descBlog").value  
  let foto = document.getElementById("inputFoto") 
  foto = URL.createObjectURL(foto.files[0]);

  let blog = {
    judul,
    dsck,
    foto,
    startDate,
    endDate,
  };
  pushBlog.push(blog)
  domInner()
}

function getTime(start, end) {
  let dataStart = new Date(start)
  let dataEnd = new Date(end)

  let dis = dataEnd - dataStart
  
    let monthDis = Math.floor(dis / (30 * 24 * 60 * 60 * 1000))
    if (monthDis != 0) {
        return monthDis + ' bulan'
    } else {
        let weekDis = Math.floor(dis / (7 * 24 * 60 * 60 * 1000))
        if (weekDis != 0) {
            return weekDis + ' minggu'
        } else {
            let daysDis = Math.floor(dis / (24 * 60 * 60 * 1000))
            if (daysDis != 0) {
                return daysDis + ' hari'
            } else {
                let hoursDis = Math.floor(dis / (60 * 60 * 1000))
                if (hoursDis != 0) {
                    return hoursDis + ' jam'
                } else {
                    let minuteDis = Math.floor(dis / (60 * 1000))
                    if (minuteDis != 0) {
                        return minuteDis + ' menit'
                    } else {
                        let secondDis = Math.floor(dis / 1000)
                        if (secondDis != 0)
                            return secondDis + ' detik'
                    }
                }
            }
        }
    }
  }

function domInner() {
  let content = document.getElementById("listCard");
  content.innerHTML = "" ;
  for (i = 0; i < pushBlog.length; i++) {
    content.innerHTML += `
    <div class="listCt">
                <img src="${pushBlog[i].foto}">
                <a href="blogDetail.html" class="cardJudul">${pushBlog[i].judul}</a>
                    <p class="duration">duration : ${getTime(pushBlog[i].startDate, pushBlog[i].endDate)}</p>
                    <div class="desc"><p>${pushBlog[i].dsck}</p></div>
                    <div id="iconCd" class="iconCd">
                        <i class="fa-brands fa-node-js" title="node.js"></i>
                        <i class="fa-brands fa-react" title="react.js"></i>
                        <i class="fa-brands fa-angular" title="angular"></i>
                        <i class="fa-brands fa-vuejs" title="vue.js"></i>
                    </div>
                    <div class="frist">
                        <button type="button" class="fristEdit">edit</button>
                        <button type="button" class="fristDelete">delete</button>
                    </div>
            </div>
    `
  }
}
