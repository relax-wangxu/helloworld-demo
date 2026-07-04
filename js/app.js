fetch("version.json")
    .then(response => response.json())
    .then(data => {

        document.getElementById("tag").innerHTML = data.tag;
        document.getElementById("branch").innerHTML = data.branch;
        document.getElementById("buildTime").innerHTML = data.buildTime;
        document.getElementById("env").innerHTML = data.env;

    })
    .catch(() => {
        alert("读取版本信息失败！");
    });
