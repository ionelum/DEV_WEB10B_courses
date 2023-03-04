const allVideos = [
    {
    date: "02.01.2023",
    instructor: "Mohamed",
    url: "BZJL78yXrDM"
    },
    {
    date: "12.01.2023",
    instructor: "Mohamed",
    url: "MvLTB5exy_c"
    },
    {
    date: "18.01.2023",
    instructor: "Frederic",
    url: "e5JlWrnMmjM"
    },
    {
    date: "19.01.2023",
    instructor: "Frederic",
    url: "oj9b_t6O3y0"
    },
    {
    date: "23.01.2023",
    instructor: "Frederic",
    url: "B0weS75OvTc"
    },
    {
    date: "24.01.2023",
    instructor: "Frederic",
    url: "ApK5OWviLdc"
    },
    {
    date: "25.01.2023",
    instructor: "Frederic",
    url: "UrRF5GE1mwI"
    },
    {
    date: "26.02.2023",
    instructor: "Cesaire",
    url: "GU2MakNN1nY"
    },
    {
    date: "27.02.2023",
    instructor: "Cesaire",
    url: "-0Fj5nnB4TE"
    },
    {
    date: "30.02.2023",
    instructor: "Cesaire",
    url: "X3HYTUHWkuc"
    },
    {
    date: "31.02.2023",
    instructor: "Cesaire",
    url: "qvJyGwc74dQ"
    },
    {
    date: "01.02.2023",
    instructor: "Cesaire",
    url: "t8buU5Xy6AI"
    },
    {
    date: "02.02.2023",
    instructor: "Cesaire",
    url: "WX8FHEkyIR0"
    },
    {
    date: "03.02.2023",
    instructor: "Cesaire",
    url: "S2LXoCVlYLw"
    },
    {
    date: "06.02.2023",
    instructor: "Cesaire",
    url: "tSmMd-zhlzM"
    },
    {
    date: "07.02.2023",
    instructor: "Cesaire",
    url: "ETNAsA3n-GU"
    },
    {
    date: "08.02.2023",
    instructor: "Cesaire",
    url: "rQ6wBP7H9Mw"
    },
    {
    date: "09.02.2023",
    instructor: "Cesaire",
    url: "viHrlp2V8bQ"
    },
    {
    date: "10.02.2023",
    instructor: "Cesaire",
    url: "Rgk1h1puhts"
    },
    {
    date: "13.02.2023",
    instructor: "Cesaire",
    url: "V1s9SS-nt5M"
    },
    {
    date: "14.02.2023",
    instructor: "Cesaire",
    url: "ABcyRmRUdSw"
    },
    {
    date: "15.02.2023",
    instructor: "Cesaire",
    url: "yoO29ZZOHX4"
    },
    {
    date: "16.02.2023",
    instructor: "Cesaire",
    url: "7MEtOh5-I8A"
    },
    {
    date: "17.02.2023",
    instructor: "Cesaire",
    url: "nrC54Tnp80g"
    },
    {
    date: "20.02.2023",
    instructor: "Cesaire",
    url: "iiy4xZTjNyk"
    },
    {
    date: "21.02.2023",
    instructor: "Cesaire",
    url: "xoBWlEws3i4"
    },
    {
    date: "22.02.2023",
    instructor: "Cesaire",
    url: "6rs6GiHfc_M"
    },
    {
    date: "23.02.2023",
    instructor: "Cesaire",
    url: "Is_oB681SAw"
    }
]

var videoList = document.querySelector("#videoList");

for (let i = 0; i<document.querySelectorAll(".instructor").length; i++) {
    document.querySelectorAll(".instructor")[i].addEventListener("click", printVideos);
};

function printVideos() {
    videoList.innerHTML = "";
    for (let i = 0; i < allVideos.length; i++) {
        if (allVideos[i].instructor == this.innerHTML) {
            videoList.innerHTML +=
            `
                <div class="col-lg-3 col-md-6">
                    <div class="card bg-dark">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/${allVideos[i].url}?rel=0"
                            allowfullscreen></iframe>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${allVideos[i].date}</h5>
                            <h6>${allVideos[i].instructor}</h6>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}
