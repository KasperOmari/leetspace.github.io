let comingSoon = document.querySelector(".comingsoon");
if (comingSoon) {
    let loadingUp = true;
    setInterval(() => {
        let content = comingSoon.textContent;
        if (!content)
            return;

        if (content.includes("..."))
            loadingUp = false;
        else if (!content.includes("."))
            loadingUp = true;

        if (loadingUp)
            content = content + ".";
        else
            content = content.substring(0, content.length - 1);

        comingSoon.textContent = content;
    }, 850)
}