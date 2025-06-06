function copyIP() {
    const ip = document.getElementById("server-ip").innerText;
    navigator.clipboard.writeText(ip).then(() => {
        alert("Server IP copied: " + ip);
    });
}
