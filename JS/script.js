const allVideos = [
    {
    date: "25.01.2023",
    instructor: "Frederic",
    url: "cVMtYmOuPls"
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
    url: "vuSHVXLwiKQ"
    },
    {
    date: "03.02.2023",
    instructor: "Cesaire",
    url: "qMci9qVD-r0"
    },
    {
    date: "06.02.2023",
    instructor: "Cesaire",
    url: "TWT4GGDQpBE"
    },
    {
    date: "06.02.2023",
    instructor: "Cesaire",
    url: "YlH9TzGikL8"
    },
    {
    date: "06.02.2023",
    instructor: "Cesaire",
    url: "mKIoo2Ok0qk"
    },
    {
    date: "07.02.2023",
    instructor: "Cesaire",
    url: "aYCZL8MUbog"
    },
    {
    date: "07.02.2023",
    instructor: "Cesaire",
    url: "7UiYMv-6ERo"
    },
    {
    date: "08.02.2023",
    instructor: "Cesaire",
    url: "_XIvDE4SESQ"
    },
    {
    date: "08.02.2023",
    instructor: "Cesaire",
    url: "9wMlscAl4Is"
    },
    {
    date: "08.02.2023",
    instructor: "Cesaire",
    url: "o9P_fP4gNBQ"
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
    url: "QCCV2hNggCI"
    },
    {
    date: "14.02.2023",
    instructor: "Cesaire",
    url: "nbTBJV8hiJk"
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
    url: "ScAI_6-aFYU"
    },
    {
    date: "20.02.2023",
    instructor: "Cesaire",
    url: "2o8mtPi1wjQ"
    },
    {
    date: "20.02.2023",
    instructor: "Cesaire",
    url: "JXiYeosExHc"
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

function printVideos(instructor) {
    videoList.innerHTML = "";
    for (let i = 0; i < allVideos.length; i++) {
        if (allVideos[i].instructor == instructor) {
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
                        <h6>${allVideos[i].instructor}</6>
                    </div>
                </div>
            </div>
            `;
        }
    }
}
