console.log("hello Word!");

        async function displayData() {
            try {
                const response = await fetch("data/demo.json");
                const data = await response.json();
                const dataContainer = document.getElementById('data-container');

                // Loop through the data and display it
                data.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.innerHTML = `
                        <div class="user">
                            <div class="user1">
                                <div class="imgbox">
                                    <img src="img/${item.img}" />
                                </div>
                            </div>
                            <div class="user2">
                                <span class="title"><b>${item.name}</b></span>
                                <hr>
                                <span>${item.intro}</span>
                            </div>
                            <div class="user3">
                                <p class="string">
                                    <span>
                                        <a href="tel:${item.mobile}">01877357091</a> <br>
                                        <a href="tel:${item.mobile}" class="icon btn">
                                            <i class="bi bi-telephone-forward"></i>
                                        </a>
                                        <a href="https://api.whatsapp.com/send?phone=${item.wa}&text=Hello%20i%27m%20just%20bp%20server%20well%20be%20your%20number!%F0%9F%A5%B0" class="icon btn">
                                            <i class="bi bi-whatsapp"></i>
                                        </a>
                                        <a href="mailto:${item.email}" class="icon btn">
                                            <i class="bi bi-envelope"></i>
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    `;
                    dataContainer.appendChild(itemElement);
                });
            } catch (error) {
                console.error('Error fetching or displaying data:', error);
            }
        }

        // Call the displayData function to load and display JSON data
        displayData();