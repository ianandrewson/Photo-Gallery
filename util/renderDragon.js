export const renderDragon = (animalToRender) => {
    let html = /*html*/`
    <article class="card ${animalToRender.keyword}">
        <h2 class="card-title">${animalToRender.title}</h2>
        <img class="card-image" src='${animalToRender.url}' alt="">
        <section>
            <h3>Description:</h3>
            <p>${animalToRender.description}</p>
            <aside>${animalToRender.horns}</aside>
        </section>
    </article>
    `;

    return html;
};