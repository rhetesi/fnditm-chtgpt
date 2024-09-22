'use strict';

// Ez egy véletlenszerű items tömböt létrehozó kódrészlet, melyet a ChatGPT generált.
// A kóhoz tartozó ChatGPT csevegés: https://chatgpt.com/share/66ef2e2b-6738-8000-9313-7dfc61dc0c73

// Function to generate a custom ID (ObjectId-like structure)
function generateCustomObjectId(timestamp, machinePart, userId) {
    // MongoDB ObjectId-like: first part is timestamp (seconds since epoch), then machine identifier and user
    const timeInSeconds = Math.floor(timestamp.getTime() / 1000).toString(16).padStart(8, '0');
    const machineIdentifier = machinePart.split('.').map(octet => parseInt(octet).toString(16).padStart(2, '0')).join('');
    const userIdentifier = userId.slice(-4); // Taking the last four characters of the userId

    // Simulate ObjectId by combining these parts
    return `${timeInSeconds}${machineIdentifier}${userIdentifier}`;
}

// Possible item names and found places
const itemNames = [
    'papucs', 'cipő', 'strandpapucs', 'női bikini', 'női fürdőruha', 'férfi fürdőruha',
    'női fehérnemű', 'sapka', 'nőis szemüveg', 'férfi szemüveg', 'női napszemüveg',
    'férfi napszemüveg', 'gyerek napszemüveg', 'fülbevaló', 'nyaklánc', 'karóra',
    'személyi igazolvány', 'útlevél', 'bankkártya', 'szobakártya', 'pénztárca'
];
const foundPlaces = [
    '"G" öltöző', '"G" előtér', 'Központi fürdőház', 'Vital Bar', '"C" épület',
    '"D" épület', '"Festetics" öltöző', 'szaunavilág'
];

// Function to generate random description
function generateDescription() {
    const loremIpsum = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Vestibulum auctor neque eu augue facilisis, a condimentum magna porttitor.",
        "Nullam eget libero nec velit dignissim venenatis."
    ];
    return loremIpsum.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1).join(' ');
}

// Generate random found date in 'yyyy-mm-ddThh:mm:ss' format
function generateRandomDate() {
    const startDate = new Date(2024, 0, 1, 9, 0, 0); // 2024-01-01 09:00
    const endDate = new Date(2024, 8, 30, 17, 0, 0); // 2024-09-30 17:00
    const randomTimestamp = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

    // Return date in 'yyyy-mm-ddThh:mm:ss' format
    const year = randomTimestamp.getFullYear();
    const month = String(randomTimestamp.getMonth() + 1).padStart(2, '0');
    const day = String(randomTimestamp.getDate()).padStart(2, '0');
    const hours = String(randomTimestamp.getHours()).padStart(2, '0');
    const minutes = String(randomTimestamp.getMinutes()).padStart(2, '0');
    const seconds = String(randomTimestamp.getSeconds()).padStart(2, '0');

    return {
        foundDate: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`,
        timestamp: randomTimestamp
    };
}

// Generate 50 items with "founddate" and ObjectId-like ID
const items = [];
for (let i = 0; i < 50; i++) {
    const { foundDate, timestamp } = generateRandomDate();

    // Machine part: random IP address from 172.120.20.0 - 172.120.20.255
    const ipLastByte = Math.floor(Math.random() * 256);
    const machinePart = `172.120.20.${ipLastByte}`;

    // User part: random user ID from fndusr0001 - fndusr0050
    const userId = `fndusr${String(Math.floor(Math.random() * 50) + 1).padStart(4, '0')}`;

    // Generate custom ObjectId
    const objectId = generateCustomObjectId(timestamp, machinePart, userId);

    const item = {
        id: objectId,
        founddate: foundDate,
        itemname: itemNames[Math.floor(Math.random() * itemNames.length)],
        description: generateDescription(),
        foundplace: foundPlaces[Math.floor(Math.random() * foundPlaces.length)],
        founder: "",
        deliverydate: "",
        deliveryemployee: "",
        recipientguest: "",
        image: ""
    };

    items.push(item);
}

// Sort items by founddate (date ascending)
items.sort((a, b) => new Date(a.founddate) - new Date(b.founddate));

// Log each ID's details (timestamp, IP, userId) and the sorted items
// items.forEach(item => {
//     console.log(`ID: ${item.id}`);
//     console.log(`Found Date: ${item.founddate}`);
//     console.log(`Item Name: ${item.itemname}`);
//     console.log(`Found Place: ${item.foundplace}`);
//     console.log('----------------------------');
// });

// Log all sorted items as JSON
console.log(JSON.stringify(items, null, 2));
