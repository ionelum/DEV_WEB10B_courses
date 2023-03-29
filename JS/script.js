const allVideos = [
    {
        date: "12.12.2022",
        instructor: "Numa",
        url: "jRoyZcdvZ4A",
    },
    {
        date: "12.12.2022",
        instructor: "Numa",
        url: "hToCNLE6c50",
    },
    {
        date: "13.12.2022",
        instructor: "Numa",
        url: "tTtsG7tpw7c",
    },
    {
        date: "14.12.2022",
        instructor: "Numa",
        url: "Eh441-BG_tA",
    },
    {
        date: "15.12.2022",
        instructor: "Numa",
        url: "Z1IleAJ93iA",
    },
    {
        date: "16.12.2022",
        instructor: "Numa",
        url: "Oj3roJaCr80",
    },
    {
        date: "02.01.2023",
        instructor: "Mohamed",
        url: "BZJL78yXrDM",
    },
    {
        date: "03.01.2023",
        instructor: "Mohamed",
        url: "0PCARTvefN4",
    },
    {
        date: "04.01.2023",
        instructor: "Mohamed",
        url: "GbylkzP1iIw",
    },
    {
        date: "05.01.2023",
        instructor: "Mohamed",
        url: "K-lr83H4Mjg",
    },
    {
        date: "06.01.2023",
        instructor: "Mohamed",
        url: "ovbJNqjXKd0",
    },
    {
        date: "09.01.2023",
        instructor: "Mohamed",
        url: "LXYY3JihHUk",
    },
    {
        date: "10.01.2023",
        instructor: "Mohamed",
        url: "yVeDWNBR34c",
    },
    {
        date: "11.01.2023",
        instructor: "Mohamed",
        url: "HE1TUS0d7go",
    },
    {
        date: "12.01.2023",
        instructor: "Mohamed",
        url: "MvLTB5exy_c",
    },
    {
        date: "18.01.2023",
        instructor: "Frederic",
        url: "e5JlWrnMmjM",
    },
    {
        date: "19.01.2023",
        instructor: "Frederic",
        url: "oj9b_t6O3y0",
    },
    {
        date: "23.01.2023",
        instructor: "Frederic",
        url: "B0weS75OvTc",
    },
    {
        date: "24.01.2023",
        instructor: "Frederic",
        url: "ApK5OWviLdc",
    },
    {
        date: "25.01.2023",
        instructor: "Frederic",
        url: "UrRF5GE1mwI",
    },
    {
        date: "26.02.2023",
        instructor: "Cesaire",
        url: "GU2MakNN1nY",
    },
    {
        date: "27.02.2023",
        instructor: "Cesaire",
        url: "-0Fj5nnB4TE",
    },
    {
        date: "30.02.2023",
        instructor: "Cesaire",
        url: "X3HYTUHWkuc",
    },
    {
        date: "31.02.2023",
        instructor: "Cesaire",
        url: "qvJyGwc74dQ",
    },
    {
        date: "01.02.2023",
        instructor: "Cesaire",
        url: "t8buU5Xy6AI",
    },
    {
        date: "02.02.2023",
        instructor: "Cesaire",
        url: "WX8FHEkyIR0",
    },
    {
        date: "03.02.2023",
        instructor: "Cesaire",
        url: "S2LXoCVlYLw",
    },
    {
        date: "06.02.2023",
        instructor: "Cesaire",
        url: "tSmMd-zhlzM",
    },
    {
        date: "07.02.2023",
        instructor: "Cesaire",
        url: "ETNAsA3n-GU",
    },
    {
        date: "08.02.2023",
        instructor: "Cesaire",
        url: "rQ6wBP7H9Mw",
    },
    {
        date: "09.02.2023",
        instructor: "Cesaire",
        url: "viHrlp2V8bQ",
    },
    {
        date: "10.02.2023",
        instructor: "Cesaire",
        url: "Rgk1h1puhts",
    },
    {
        date: "13.02.2023",
        instructor: "Cesaire",
        url: "V1s9SS-nt5M",
    },
    {
        date: "14.02.2023",
        instructor: "Cesaire",
        url: "ABcyRmRUdSw",
    },
    {
        date: "15.02.2023",
        instructor: "Cesaire",
        url: "yoO29ZZOHX4",
    },
    {
        date: "16.02.2023",
        instructor: "Cesaire",
        url: "7MEtOh5-I8A",
    },
    {
        date: "17.02.2023",
        instructor: "Cesaire",
        url: "nrC54Tnp80g",
    },
    {
        date: "20.02.2023",
        instructor: "Cesaire",
        url: "iiy4xZTjNyk",
    },
    {
        date: "21.02.2023",
        instructor: "Cesaire",
        url: "xoBWlEws3i4",
    },
    {
        date: "22.02.2023",
        instructor: "Cesaire",
        url: "6rs6GiHfc_M",
    },
    {
        date: "23.02.2023",
        instructor: "Cesaire",
        url: "Is_oB681SAw",
    },
    {
        date: "20.03.2023",
        instructor: "Cesaire",
        url: "Uo9acpy5m5c",
    },
    {
        date: "21.03.2023",
        instructor: "Cesaire",
        url: "CsT1JKuKgTg",
    },
    {
        date: "24.03.2023",
        instructor: "Laurent",
        url: "9821ISFToP4",
    },
    {
        date: "27.03.2023",
        instructor: "Amro",
        url: "GIt0QVWxp78",
    },
    {
        date: "29.03.2023",
        instructor: "Amro",
        url: "J9iMjSzH5uc",
    },
];

var videoList = document.querySelector("#videoList");

for (let i = 0; i < document.querySelectorAll(".instructor").length; i++) {
    document
        .querySelectorAll(".instructor")
        [i].addEventListener("click", printVideos);
}

function printVideos() {
    videoList.innerHTML = "";
    for (let i = 0; i < allVideos.length; i++) {
        if (allVideos[i].instructor == this.innerHTML) {
            videoList.innerHTML += `
                <div class="col-lg-3 col-md-6">
                    <div class="card bg-dark">
                        <div class="card-body">
                            <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/${allVideos[i].url}?rel=0"
                            allowfullscreen></iframe>
                            </div>
                            <h5 class="card-title">${allVideos[i].date}</h5>
                            <h6>${allVideos[i].instructor}</h6>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}
