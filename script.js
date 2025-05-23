// Character data for senders
const characters = {
    gojo: [
        { name: "Gojo Satoru", icon: "👁️" },
        { name: "Geto Suguru", icon: "👹" },
        { name: "Yuji Itadori", icon: "👊" },
        { name: "Megumi Fushiguro", icon: "🐺" }
    ],
    onepiece: [
        { name: "Luffy", icon: "👒" },
        { name: "Zoro", icon: "🗡️" },
        { name: "Nami", icon: "🍊" },
        { name: "Sanji", icon: "🚬" }
    ],
    spyfamily: [
        { name: "Loid Forger", icon: "🕵️" },
        { name: "Yor Forger", icon: "🗡️" },
        { name: "Anya", icon: "🌟" },
        { name: "Bond", icon: "🐶" }
    ],
    custom: [
        { name: "Friend", icon: "💌" } // Default for custom senders
    ]
};

// Gift data - UPDATE THIS WITH REAL NAMES AND MESSAGES
const giftData = [
    // Anime-themed gifts
    {
        sender: "custom",
        senderName: "Sritha", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
    {
        sender: "custom",
        senderName: "Mayuri", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
    {
        sender: "custom",
        senderName: "Lakshmi", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
    
    // Custom sender gifts - ADD YOUR FRIENDS' NAMES AND MESSAGES HERE
    {
        sender: "custom",
        senderName: "Abi", // Replace with actual name
        senderIcon: "🎮",    // Optional custom icon
        cosmicWish: "Happy birthday! Can't wait for our next gaming session!",
        timeCapsule: "Remember when we stayed up all night beating that boss? Legendary!",
        superpower: "Gaming Champion"
    },
    {
        sender: "custom",
        senderName: "Samyuktha", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Chinmayee", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Madhura", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Lakshita", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Mirthiya", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Dhanvarshini", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Heshika", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Hansinee", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Ananya", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Harshitha", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Sayana", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Pranathashree", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Nimisha", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Anjali", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
  {
        sender: "custom",
        senderName: "Sri Sruthi", // Replace with actual name
        cosmicWish: "To 20 more years of friendship! Cheers!",
        timeCapsule: "That road trip we took last summer was the best!",
        superpower: "Adventure Buddy"
    },
    // Add more gifts (total 19) alternating between anime and custom senders
    // ...
];

// Fill remaining gifts if less than 19
for (let i = giftData.length; i < 19; i++) {
    const themes = ["gojo", "onepiece", "spyfamily", "custom"];
    giftData.push({
        sender: themes[i % 4],
        senderName: themes[i % 4] === "custom" ? "Friend " + (i + 1) : undefined,
        cosmicWish: `Special wish #${i+1} from your ${themes[i % 4] === "custom" ? "friend" : "favorite universe"}!`,
        timeCapsule: `Memory #${i+1}: You're amazing just the way you are!`,
        superpower: ["Strong", "Kind", "Wise", "Funny"][i % 4]
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const giftsContainer = document.getElementById('giftsContainer');
    const modal = document.getElementById('giftModal');
    const progressBar = document.querySelector('.progress-bar');
    const openedCount = document.getElementById('openedCount');
    let openedGifts = 0;

    // Audio Elements
    const giftSound = document.getElementById('giftSound');
    const confettiSound = document.getElementById('confettiSound');

    // Create 19 gift boxes
    for (let i = 0; i < 19; i++) {
        const giftBox = document.createElement('div');
        giftBox.className = 'gift-box';
        
        const giftNumber = document.createElement('div');
        giftNumber.className = 'gift-number';
        giftNumber.textContent = i + 1;
        
        giftBox.appendChild(giftNumber);
        
        giftBox.addEventListener('click', function() {
            giftSound.currentTime = 0;
            giftSound.play();
            
            // Get sender information
            let sender;
            if (giftData[i].sender === "custom") {
                sender = {
                    name: giftData[i].senderName,
                    icon: giftData[i].senderIcon || characters.custom[0].icon
                };
            } else {
                const possibleSenders = characters[giftData[i].sender];
                sender = possibleSenders[Math.floor(Math.random() * possibleSenders.length)];
            }
            
            // Update modal content
            document.getElementById('modalTitle').textContent = `Gift #${i + 1}`;
            document.getElementById('modalSender').textContent = `${sender.icon} From: ${sender.name}`;
            document.getElementById('modalWish').textContent = giftData[i].cosmicWish;
            document.getElementById('modalMemory').textContent = giftData[i].timeCapsule;
            document.getElementById('modalDescriptor').textContent = giftData[i].superpower;
            
            // Show modal
            modal.style.display = 'block';
            
            // Theme-specific confetti
            let confettiColor;
            switch(giftData[i].sender) {
                case 'gojo':
                    confettiColor = ['#4b3bff', '#00f7ff'];
                    break;
                case 'onepiece':
                    confettiColor = ['#d90000', '#ffd700'];
                    break;
                case 'spyfamily':
                    confettiColor = ['#ff66a3', '#00bfff'];
                    break;
                default: // For custom senders
                    confettiColor = ['#ff66a3', '#4b3bff', '#d90000'];
            }
            
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: confettiColor
            });
            confettiSound.currentTime = 0;
            confettiSound.play();
            
            // Track progress
            if (!giftBox.classList.contains('opened')) {
                giftBox.classList.add('opened');
                openedGifts++;
                openedCount.textContent = openedGifts;
                progressBar.style.width = `${(openedGifts/19)*100}%`;
                
                if (openedGifts === 19) {
                    setTimeout(addBonusGift, 1000);
                }
            }
        });
        
        giftsContainer.appendChild(giftBox);
    }

    function addBonusGift() {
        const bonus = document.createElement('div');
        bonus.className = 'gift-box bonus';
        bonus.innerHTML = '20';
        bonus.addEventListener('click', function() {
            modal.style.display = 'block';
            document.getElementById('modalTitle').textContent = "The Most Special Gift of All!";
            document.getElementById('modalSender').textContent = "🌟 From: The Soul for whom you are her Answered Prayer";
            document.getElementById('modalWish').textContent = "The most precious gift is your friendship. Your ability to undertstand others is unparalleled. Thank you for being such a kind person! And you deserve so much happiness and love in your life! ❤️";
            document.getElementById('modalMemory').textContent = "Every moment with you becomes a treasured memory. I smile automatically when I look at you, I don't even have to think about it, you know. 🥰";
            document.getElementById('modalDescriptor').textContent = "Irreplaceable";
            
            confetti({
                particleCount: 500,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#4b3bff', '#00f7ff', '#d90000', '#ffd700', '#ff66a3', '#00bfff']
            });
        });
        giftsContainer.appendChild(bonus);
    }

    // Close modal
    document.querySelector('.close-modal').addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Theme switcher
    document.querySelectorAll('.theme-buttons button').forEach(btn => {
        if (btn.dataset.theme) {
            btn.addEventListener('click', () => {
                document.body.className = btn.dataset.theme;
            });
        }
    });

    // Open curtain
    document.getElementById('openCurtain').addEventListener('click', function() {
        document.querySelector('.curtain').style.transform = 'translateY(-100%)';
        confetti({ particleCount: 200, spread: 70 });
        confettiSound.currentTime = 0;
        confettiSound.play();
    });
});