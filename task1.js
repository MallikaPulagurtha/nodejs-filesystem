// console.log("Working!");

const os = require("os");
const fs = require("fs");
const express = require("express");
const app = express();
var path = require('path');

//middleware
const cors = require("cors");
app.use(cors());

const pathName = "C:\\Users\\91800\\Desktop\\";

app.get("/directories", function (req, res) {
    fs.readdir(pathName, { withFileTypes: true }, function (err, files) {
        if (err) throw err;

        let allFiles = [];

        files.forEach(item => {
            console.log(item);
            const ext = item.name.split(".").pop();
            console.log(ext);
            if (item.isDirectory()) {
                allFiles.push({
                    file: item.name,
                    fileType: "fas fa-folder fa-lg"
                })
            }
            else if (ext === "mp3") {
                allFiles.push({
                    file: item.name,
                    fileType: "fas fa-file-audio fa-lg"
                })
            }
            else if (ext === "mp4") {
                allFiles.push({
                    file: item.name,
                    fileType: "fas fa-file-video fa-lg"
                })
            }
            else if (ext === "png" || ext === "jpg") {
                allFiles.push({
                    file: item.name,
                    fileType: "fas fa-image fa-lg"
                })
            }
            else if (ext === "pdf") {
                allFiles.push({
                    file: item.name,
                    fileType: "fas fa-file-pdf fa-lg"
                })
            }
            else if (ext === "lnk") {
                allFiles.push({
                    file: item.name,
                    fileType: "fas fa-link fa-lg"
                })
            }
        })
        res.json(allFiles);
        console.log(allFiles);
        // res.send("Hello");
    })
})

const time = new Date().toLocaleTimeString();
const date = new Date().toLocaleDateString();

fs.writeFile("currenttime_stamp.txt", `${date} and ${time}`, "utf-8", function (err) {
    if (err) throw err;
    else
        console.log("file is created");
});


app.get("/", function (req, res) {
    res.send("Hello Home");

})

// app.get("/users", function (req, res) {
//     res.json(
//         [{
//             "person": "person1",
//             "age": 22
//         },
//         {
//             "person": "person2",
//             "age": 22
//         },
//         {
//             "person": "person3",
//             "age": 22
//         }]
//     )
// })

app.listen(8080, function () {
    console.log("Server is Running");
})

   // let row = "<tr>";
    // dirs.forEach((item) => {


    // const extension = item.split(".").pop();
    // // console.log(extension);
    // if (extension == "mp3")
    //     row += `<td><button style="width: 170px; height: 40px;"><b>(Mp3)</b>${item}</button></td>`;


    // else if (extension == "mp4")
    //     row += `<td><button style="width: 170px; height: 40px;"><b>(Mp4)</b>${item}</button></td>`;

    // else if (extension == "jpg" || extension == "png")
    //     row += `<td><button style="width: 170px; height: 40px;"><b>(Img)</b>${item}</button></td>`;

    // else if (extension == "pdf")
    //     row += `<td><button style="width: 170px; height: 40px;"><b>(Pdf)</b>${item}</button></td>`;

    // else if (extension == "lnk")
    //     row += `<td><button style="width: 170px; height: 40px;"><b>(Link)</b>${item}</button></td>`;

    // else
    //     row += `<td><button style="width: 170px; height: 40px;"><b>(Dir)</b>${item}</button></td>`;
    // });
    // row += "</tr>";