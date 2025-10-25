var leagues = ["PSL", "BBL", "IPL",]
var teams = [
    ["Lahore", "Islamabad", "Multan", "Quetta", "Karachi", "Peshawar"],
    ["Adelaide", "Brisbane", "Hobart", "Melbourne", "Melbourne Stars", "Perth", "Sydney", "Sydney Thunder"],
    ["Banglore", "Mumbai", "Chennai", "Punjab", "Rajasthan", "Lucknow", "Gujarat", "Delhi", "Hyderabad", "Kolkata"],
]
var teamImages = [
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXhb9NksQSWEDeIJbE8Kr-o4YGzes8KFFPA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8uLRk81-33fdgql1HCcxdoURet1Bk3fK0Q&s",
    "https://images.seeklogo.com/logo-png/51/2/multan-sultans-logo-png_seeklogo-519946.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcE-40w7BdcIPstsG-fbiZlDz4IHQnJTPiJQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWC7oULG4VHZWoBGwnkhY-ITOdni2uvQNw5g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsbRmRDwM39yhGv70GfCd7RPAvJ5QuUtVJA&s",
],
   
    [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUl1IRt5QGBZHeWbx3VUYZa74kWKfFjJElw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78oFQPyW0hosErvOp2fxxQVDWlGD2JQcTEg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtJX9cZqcamu6H6yI6qQwFUvVAK8fXQevzw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphBC8SE-syvAIGy-G9brEfr2tbJIIhWGVVw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_x9-h7hlyrKzkVCsXPT45XTHxQJoGlwuLfA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiejv_GfBxRTsaz-Syz-O_Xf2DbBAF73zFw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0oTAlFR9N0fu_NBbF3PA0ZR8u8bItBWlig&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq84POhpj9qBmh1hsc-VzMpD-N0NZEpJKjLQ&s",

    ],
     ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xBdReIKD8bR7VUDRWnKRo6UFCtP9R5TDqQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnJg8OKopjee0gR0_ZjTpwrIKoIf0cxVkhw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8MRZn2qFzNBkqxlJGRPG05V2ms-lMyMdgw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbZBFeDoFMDSQFWKyu20ZXxhlBu6fJDpGDg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KPxw97-jYM1LGUPcMLERXdZWVbmf7-H_0g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdURdkjiGCSzciELc10rNcp3IqZh4lCEl4cQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0UU4ALj9GO0Db_ThbngHnaqE1VIj93S_hA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZ1G-bK_p-xdUj7qnjOmg78UzJzN_Gd1jKQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtFjFHJxu3uFdR2YcqFhok_aUV7NWrKzgtw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchgBx2x_mthKdcw2VmGidzngAlNF3Z6Yuww&s"

    ]
]
var teamSquad = [
    [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPp2ytTHETS2vLEgJ7zF0D-gBGuKeDyG-xw&s ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFEEJBcjyBnMi5kUE_KZEZI-vTB8KQIomRg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW38PlK8q1dQ4FMG7TK0sCD8_SZWOjLzIytA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGkCcQR2ICFhlnP6DPdNXKemPFcdt3v6v5g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3DBaw2XJfAeNuD5jNow7ytSUMYFarLqIiQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWywiUBLw0wDLpwYVfmPZGwAocEBOOXADYXg&s",
    ],
    [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwo9gQRnYoCNLFZrqs1cdelDZGIddL4cAMYg&s",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FBBL%2Fposts%2Fa-look-at-the-complete-brisbane-heat-squadwhere-is-this-team-finishing-in-bbl10%2F3886612134702873%2F&psig=AOvVaw2fKdVFbiRlFAvICBjRxAgu&ust=1760967902209000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPiy0PuysJADFQAAAAAdAAAAABAE",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nfGkDprifT8q2qPIjaJuIowDmMLRIvO1RQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBXEiawM5ZllsoaUWOGI3yovTOaH6pqDuhg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_XOazbIVJMeq4TLUIOAQjPHH1F_87REQ2A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSxqEyloPC4B71ry1DqyToy7My2UTOnXrKA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepSnUtbt_hzM63-V5IvjA__n1WfAec3bgUA&s",
        "https://bblschedule.com/wp-content/uploads/2024/11/Sydney-Thunder-Squads-628x628.webp",
    ],
    [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnSZrIJ0XfYsaDzeQ7vQ-WPTTe3QPFEUejg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgjgGvvQFvKNrJv-H0qW0hd-aaPaDkJMoWw&s",
        "https://media.sportstiger.com/media/csk-ipl-2025-full-squad-1732555693735-original.webp",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sportstiger.com%2Fnews%2Fipl-2025-punjab-kings-full-squad&psig=AOvVaw1uiqO0MhWO5RxxzE4sKZIg&ust=1760967620714000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDEufWxsJADFQAAAAAdAAAAABAE",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzojenjKAym1G3RkgcsjmFlT_Jr7qWEUpDsg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq9Vhf_84XHPArwiuPqcScHtP4pMFAhm4XYg&s",
        "https://media.sportstiger.com/media/gt-ipl-2025-full-squad-1732555700796-original.webp",
        "https://media.sportstiger.com/media/dc-ipl-2025-full-squad-1732555601799-original.webp",
        "https://media.sportstiger.com/media/srh-ipl-2025-full-squad-1732555686201-original.webp",
        "https://media.sportstiger.com/media/kkr-ipl-2025-full-squad-1732555678242-original.webp"
    ]
    

]

document.writeln("<div class = 'container'>")
for (var i = 0; i < leagues.length; i++) {
    document.writeln(
        `
        <div class = 'row mt-4'
        <h1> ${leagues[i]} </br> </h1>
        `
    )

    for (var j = 0; j<teams[i].length ; j++) {
        document.writeln(
            `
        <div class = 'col-lg-4 col-md-4 col-sm-12 col-12 mt-4' 
            <div class="card" style="width: 18rem;">
                <h3 class="${teams[i][j]}">${teams[i][j]}</h3>
                <img src="${teamImages[i][j]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <a href="${teamSquad[i][j]}" class="btn btn-primary ">See Squad</a>
                    </div>
            </div>
        </div>
            `
        )
        document.writeln("</div>")
    }
}
document.writeln("</div>")