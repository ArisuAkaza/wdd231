const members= document.querySelector('#members');
const gridButton= document.querySelector('#grid');
const listButton= document.querySelector('#list');

async function getMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    console.table(data.businesses);
    displayMembers(data.businesses);
}
getMembersData();

const displayMembers = (membersData) => {
    membersData.forEach((business) => {
        // some code
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let logo = document.createElement('img');

        name.textContent = business.name;
        address.textContent = `Address: ${business.address}`;
        phone.textContent = `Phone: ${business.phone}`;
        website.textContent = business.website;
        website.href = business.website;
        website.target = "_blank";
        logo.src = business.image;
        logo.alt = `Logo of ${business.name}`;
        logo.loading = "lazy";
        logo.width = 200;
        logo.height = 200;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        members.appendChild(card);
    });
}

gridButton.addEventListener('click', () => {
    members.classList.add('grid');
});
listButton.addEventListener('click', () => {
    members.classList.remove('grid');
});
