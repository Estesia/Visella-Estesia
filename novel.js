document.addEventListener("DOMContentLoaded", async function() {
    try {
        let response = await fetch("novel_data.json");
        let novels = await response.json();

        let novelContainer = document.getElementById("novel-container");
        novelContainer.innerHTML = "";

        novels.forEach(novel => {
            let novelElement = `
                <div class="novel">
                    <img src="${novel.cover}" alt="${novel.title}" style="width: 300px; border-radius: 10px;">
                    <h3>${novel.title}</h3>
                    <p>${novel.description}</p>
                    <a href="${novel.link}" target="_blank" class="btn">Baca di Wattpad</a>
                </div>`;
            novelContainer.innerHTML += novelElement;
        });
    } catch (error) {
        console.error("Gagal mengambil data novel:", error);
        document.getElementById("novel-container").innerHTML = "<p>Gagal memuat novel. Silakan coba lagi nanti.</p>";
    }
});