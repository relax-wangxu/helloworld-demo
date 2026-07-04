fetch("version.json")
    .then(response => response.json())
    .then(data => {

        document.getElementById("tag").textContent = data.tag;
        document.getElementById("branch").textContent = data.branch;
        document.getElementById("commit_id").textContent = data.commit_id;
        document.getElementById("buildTime").textContent = data.buildTime;
        document.getElementById("env").textContent = data.env;

    })
    .catch(() => {
        alert("读取版本信息失败！");
    });
