const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = {
    // name: "Henry Caiza",
    // nickname: "kratos",
    // description: "...",
    // avatar: "...",
    // social: [
    //     {
    //         name: "twitter",
    //         url: "https://twitter.com/",
    //         username: "",
    //     },
    //     {
    //         name: "instagram",
    //         url: "https://instagram.com/",
    //         username: "",
    //     },
    // ],
    links: [
        {
            name: "Cursos realizados",
            url: "https://platzi.com/p/henrypcv1995/",
            color: "rose",
            emoji: "💻",
        },
        {
            name: "Blog",
            url: "https://henry-caiza.github.io/blogPost/",
            color: "cyan",
            emoji: "💬",
        },
        {
            name: "MovSos",
            url: "https://henry-caiza.github.io/movsos/",
            color: "indigo",
            emoji: "🎬",
        },
        {
            name: "Cats",
            url: "https://henry-caiza.github.io/CatApi/public/index.html",
            color: "amber",
            emoji: "😺",
        },
        {
            name: "Music",
            url: "https://henry-caiza.github.io/landingAsy/",
            color: "fuchsia",
            emoji: "🎵",
        }
    ],
    footer: "Made with Love on Colombia",
};

const main = () => {
    let name = document.createTextNode(data?.name);
    let links = data?.links?.map((link) => {
        return `
            <div
                class="shadow-lg shadow-${link.color}-500/40 border-${link.color}-500 border-2 px-4 py-5 flex justify-between  w-10/12 rounded-full mx-auto">
                <a class="text-sm font-bold text-${link.color}-500 text-center hover:text-${link.color}-300 cursor-pointer"
                    href="${link.url}" target="_blank">
                    ${link.name}
                </a>
                <span>${link.emoji}</span>
            </div>
                `
    }).join('');
    let newItem = document.createElement('section');
    newItem.classList.add('space-y-4')
    newItem.innerHTML = links;
    $links.appendChild(newItem);
    $name.appendChild(name);
}

main();