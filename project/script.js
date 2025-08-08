// Weird food combinations with Malayalam roasts
const combinations = [
    {
        combo: "Boiled Egg + Jam",
        roast: "Ayyo! Mutta-yum jam-um koode? Sherikkum crazy aano mone? 😵"
    },
    {
        combo: "Banana + Fish Curry",
        roast: "Pazham fish curry-il ittal enthuvade taste aavum? Eda ith kazhikkan pattille! 🤢"
    },
    {
        combo: "Pineapple + Sambar",
        roast: "Kaitha-pazham sambar-il? Bro, taste buds-ine vere level-il confuse cheytho! 😂"
    },
    {
        combo: "Pickle + Ice Cream",
        roast: "Achar ice cream-oode? Mone, cold-hot combo-il stomach upset varum! 🥵❄️"
    },
    {
        combo: "Kappa + Chocolate Syrup",
        roast: "Kappa chocolate syrup-il? Sweet-um salt-um koode ano? Weird level max! 🍫"
    },
    {
        combo: "Biriyani + Milk",
        roast: "Biriyani milk-il mix cheytho? Ath biriyani alla, oru disaster aanu! 🥛"
    },
    {
        combo: "Chips + Payasam",
        roast: "Chips payasam-il dip cheyyano? Sweet-salty confusion adipoli! 🍯"
    },
    {
        combo: "Chakka Payasam + Tomato Ketchup",
        roast: "Chakka payasam-inu ketchup? Mone, ammachi kandal thalli vidum! 🍅"
    },
    {
        combo: "Unnakaya + Chicken Stew",
        roast: "Unnakaya chicken stew-il? Sweet-savory combo super weird aanu! 🐔"
    },
    {
        combo: "Avial + Nutella",
        roast: "Avial-inu Nutella? Vegetables-inum chocolate-inum ulla relation enthada? 🥒🍫"
    },
    {
        combo: "Parotta + Apple Jam",
        roast: "Parotta apple jam-oode? Mone, curry illathavar ingane okke try cheyyum! 🍎"
    },
    {
        combo: "Olan + Cola",
        roast: "Olan cola-oode wash cheyyano? Fizzy-coconut combo super weird! 🥤"
    },
    {
        combo: "Lays + Curd Rice",
        roast: "Lays curd rice-il? Crispy-creamy combo, taste bhayankara confusing aavum! 🍚"
    },
    {
        combo: "Vattayappam + Butter Chicken",
        roast: "Vattayappam butter chicken-oode? Traditional-modern mix disaster level! 🧈"
    },
    {
        combo: "Fish Fry + Peanut Butter",
        roast: "Meen fry peanut butter-oode? Sea-land combo super weird aanu mone! 🐟🥜"
    },
    {
        combo: "Thoran + Sprinkles",
        roast: "Thoran-inu sprinkles? Healthy vegetables-inu sugar decoration? Eda poda! 🌈"
    },
    {
        combo: "Chammanthi + Ice Cream Cone",
        roast: "Chammanthi cone-il serve cheyyano? Spicy-sweet brain freeze guaranteed! 🍦"
    },
    {
        combo: "Chickpea Sundal + Jelly",
        roast: "Sundal jelly-oode? Protein-sugar combo, gym bros shock aavum! 🟡"
    },
    {
        combo: "Kozhukkatta + Hot Sauce",
        roast: "Kozhukkatta hot sauce-il? Sweet dumplings spicy aakkiyo? Ayyo! 🌶️"
    },
    {
        combo: "Idiyappam + Mango Ice Cream",
        roast: "Idiyappam mango ice cream-oode? Cold-warm noodle combo weird! 🥭"
    },
    {
        combo: "Neychor + Cucumber Ice Cream",
        roast: "Ghee rice cucumber ice cream-oode? Rich-cool combo, stomach confusion! 🥒"
    },
    {
        combo: "Dosa + Chocolate Sauce",
        roast: "Dosa chocolate sauce-il? South Indian breakfast dessert aakkiyo? 🍫"
    },
    {
        combo: "Puttu + Honey Mustard",
        roast: "Puttu honey mustard-oode? Sweet-tangy steamed rice combo! Ayye! 🍯"
    },
    {
        combo: "Chapathi + Payasam",
        roast: "Chapathi payasam-il dip cheyyano? Bread-kheer combo super weird! 🍞"
    },
    {
        combo: "Sambhar + Sprite",
        roast: "Sambar Sprite-oode thin aakkano? Fizzy-spicy drink disaster! 🥤"
    },
    {
        combo: "Pazham Pori + Fish Fry",
        roast: "Pazham pori fish fry-oode? Sweet banana-salty fish combo! Eda! 🍌🐟"
    },
    {
        combo: "Parippu Vada + Banana",
        roast: "Dal vada banana-oode? Fried-fresh fruit combo confusion level max! 🍌"
    },
    {
        combo: "Beef Ularth + Candy Floss",
        roast: "Beef ularthiyath cotton candy-oode? Meat-sugar combo adipoli weird! 🍬"
    },
    {
        combo: "Mutta Roast + Ice Cream",
        roast: "Egg roast ice cream-oode cool cheyyano? Hot-cold protein combo! 🥚❄️"
    },
    {
        combo: "Upma + Whipped Cream",
        roast: "Upma whipped cream-oode? Breakfast dessert aakkiyo? Weird! 🍦"
    },
    {
        combo: "Kozhi Curry + Strawberry Syrup",
        roast: "Chicken curry strawberry syrup-il? Pink chicken curry? Ayyo! 🍓"
    },
    {
        combo: "Bitter Gourd Fry + Milkshake",
        roast: "Kaipakka fry milkshake-oode? Bitter-sweet life combo! 😂"
    },
    {
        combo: "Pathiri + Pickle Juice",
        roast: "Pathiri achar water-il? Soft bread tangy liquid combo weird! 🥒"
    },
    {
        combo: "Jackfruit Chips + Cheese Spread",
        roast: "Chakka chips cheese spread-oode? Fruit-dairy combo confusion! 🧀"
    },
    {
        combo: "Sardine Curry + Chocolate Ice Cream",
        roast: "Mathi curry chocolate ice cream-oode? Fish-chocolate combo! Eda poda! 🐟🍫"
    },
    {
        combo: "Rasam + Gummy Bears",
        roast: "Rasam gummy bears-oode? Spicy soup chewy candy combo! Weird level! 🐻"
    },
    {
        combo: "Papadam + Chocolate Fudge",
        roast: "Pappadam chocolate fudge-il? Crispy-creamy combo super confusion! 🍫"
    },
    {
        combo: "Idli + Peanut Butter",
        roast: "Idli peanut butter spread cheyyano? South-American combo! Ayyo! 🥜"
    },
    {
        combo: "Kootu Curry + Marshmallows",
        roast: "Kootu marshmallow-oode? Vegetable-sugar combo brain freeze! 🍡"
    },
    {
        combo: "Appam + Orange Juice Dip",
        roast: "Appam orange juice-il dip? Citrus hoppers combo! Weird taste! 🍊"
    },
    {
        combo: "Kozhi Nirachathu + Nutella",
        roast: "Stuffed chicken Nutella-oode? Savory-chocolate combo disaster! 🐔🍫"
    },
    {
        combo: "Biriyani + Grapes",
        roast: "Biriyani grapes-oode? Spiced rice-sweet fruit combo confusion! 🍇"
    },
    {
        combo: "Pidi + Cotton Candy",
        roast: "Pidi cotton candy-oode? Rice dumpling-sugar cloud combo! Ayye! 🍬"
    },
    {
        combo: "Kadala Curry + Ice Cubes",
        roast: "Chana curry ice cubes-il? Hot curry cold serve cheyyano? 🧊"
    },
    {
        combo: "Omelette + Sugar Syrup",
        roast: "Omelette sugar syrup-il? Sweet egg combo! Breakfast dessert aakkiyo? 🥚🍯"
    },
    {
        combo: "Moru Curry + Cornflakes",
        roast: "Buttermilk curry cornflakes-oode? Cereal-curry combo super weird! 🥣"
    },
    {
        combo: "Vendakka Fry + Honey",
        roast: "Okra fry honey-il? Sticky-crispy vegetable combo! Weird level max! 🍯"
    },
    {
        combo: "Theeyal + Butterscotch Ice Cream",
        roast: "Theeyal butterscotch-oode? Tangy curry-sweet ice cream combo! Ayyo! 🍦"
    },
    {
        combo: "Fish Pickle + Rasgulla",
        roast: "Meen achar rasgulla-oode? Spicy fish-sweet dessert combo! Eda poda! 🐟🍡"
    },
    {
        combo: "Chena Mezhukkupuratti + Jelly Beans",
        roast: "Yam fry jelly beans-oode? Savory vegetable-colorful candy combo! Super weird! 🌈"
    }
];

// Recipe responses
const recipeResponses = [
    "Go ask your mom! She knows all the weird combinations! 😂",
    "Recipe? Seriously? Just throw it together and pray! 🙏",
    "Step 1: Don't. Step 2: Order pizza instead! 🍕",
    "The recipe is simple - courage and a strong stomach! 💪",
    "Ask Google, even I'm scared to know the recipe! 😱",
    "Recipe: Mix and regret. That's it! 🤷‍♂️",
    "Your mom probably has the secret recipe hidden somewhere! 👵",
    "Just close your eyes and mix - ignorance is bliss! 👀",
    "The recipe is classified information for your own safety! 🔒",
    "Step 1: Question your life choices. Step 2: Mix anyway! 🤯"
];

// User submissions storage
let userSubmissions = JSON.parse(localStorage.getItem('dishasterSubmissions')) || [];

// DOM Elements
const generateBtn = document.getElementById('generateBtn');
const resultSection = document.getElementById('resultSection');
const dishCombo = document.getElementById('dishCombo');
const roastText = document.getElementById('roastText');
const shareBtn = document.getElementById('shareBtn');
const recipeBtn = document.getElementById('recipeBtn');
const recipeModal = document.getElementById('recipeModal');
const recipeResponse = document.getElementById('recipeResponse');
const closeModal = document.querySelector('.close');
const submitBtn = document.getElementById('submitBtn');
const userCombo = document.getElementById('userCombo');
const userName = document.getElementById('userName');
const leaderboard = document.getElementById('leaderboard');
const tasteBtns = document.querySelectorAll('.taste-btn');

let currentCombo = null;

// Event Listeners
generateBtn.addEventListener('click', generateDishaster);
shareBtn.addEventListener('click', shareCombo);
recipeBtn.addEventListener('click', showRecipe);
closeModal.addEventListener('click', closeRecipeModal);
submitBtn.addEventListener('click', submitUserCombo);
tasteBtns.forEach(btn => btn.addEventListener('click', rateTaste));

// Generate random dishaster
function generateDishaster() {
    const randomIndex = Math.floor(Math.random() * combinations.length);
    currentCombo = combinations[randomIndex];
    
    dishCombo.textContent = currentCombo.combo;
    roastText.textContent = currentCombo.roast;
    
    // Reset taste buttons
    tasteBtns.forEach(btn => btn.classList.remove('selected'));
    
    // Show result section with animation
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Share functionality
function shareCombo() {
    if (!currentCombo) return;
    
    const shareText = `Check out this weird combo I found on Dishaster: ${currentCombo.combo}! 😂 ${currentCombo.roast}`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
        // Native sharing (mobile)
        navigator.share({
            title: 'Dishaster - Weird Food Combo',
            text: shareText,
            url: shareUrl
        }).catch(console.error);
    } else {
        // Fallback for desktop
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        
        // Create share menu
        const shareMenu = document.createElement('div');
        shareMenu.className = 'share-menu';
        shareMenu.innerHTML = `
            <div class="share-options">
                <h4>Share this Dishaster:</h4>
                <a href="${whatsappUrl}" target="_blank" class="share-option whatsapp">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a href="${facebookUrl}" target="_blank" class="share-option facebook">
                    <i class="fab fa-facebook"></i> Facebook
                </a>
                <a href="${twitterUrl}" target="_blank" class="share-option twitter">
                    <i class="fab fa-twitter"></i> Twitter
                </a>
                <button class="share-option copy-btn" onclick="copyToClipboard('${shareText}')">
                    <i class="fas fa-copy"></i> Copy Text
                </button>
            </div>
        `;
        
        document.body.appendChild(shareMenu);
        
        // Close share menu when clicking outside
        shareMenu.addEventListener('click', (e) => {
            if (e.target === shareMenu) {
                document.body.removeChild(shareMenu);
            }
        });
    }
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Combo copied to clipboard!');
        // Close share menu
        const shareMenu = document.querySelector('.share-menu');
        if (shareMenu) {
            document.body.removeChild(shareMenu);
        }
    }).catch(console.error);
}

// Show recipe modal
function showRecipe() {
    const randomResponse = recipeResponses[Math.floor(Math.random() * recipeResponses.length)];
    recipeResponse.textContent = randomResponse;
    recipeModal.style.display = 'block';
}

// Close recipe modal
function closeRecipeModal() {
    recipeModal.style.display = 'none';
}

// Rate taste
function rateTaste(e) {
    // Remove previous selection
    tasteBtns.forEach(btn => btn.classList.remove('selected'));
    // Add selection to clicked button
    e.target.classList.add('selected');
    
    // Show feedback
    const level = e.target.dataset.level;
    let feedback = '';
    switch(level) {
        case '1': feedback = 'Haha! Smart choice! 😂'; break;
        case '2': feedback = 'Doubt-il aano? Try cheyyathe nokku! 😅'; break;
        case '3': feedback = 'Adventurous aalle! Update tharanam! 😎'; break;
        case '4': feedback = 'Wow! You have unique taste buds! 🌟'; break;
    }
    
    // Show temporary feedback
    const originalText = e.target.textContent;
    e.target.textContent = feedback;
    setTimeout(() => {
        e.target.textContent = originalText;
    }, 2000);
}

// Submit user combo
function submitUserCombo() {
    const combo = userCombo.value.trim();
    const name = userName.value.trim();
    
    if (!combo || !name) {
        alert('Please fill in both fields!');
        return;
    }
    
    const newSubmission = {
        id: Date.now(),
        combo: combo,
        author: name,
        likes: 0,
        likedBy: []
    };
    
    userSubmissions.unshift(newSubmission); // Add to beginning
    localStorage.setItem('dishasterSubmissions', JSON.stringify(userSubmissions));
    
    // Clear form
    userCombo.value = '';
    userName.value = '';
    
    // Update leaderboard
    updateLeaderboard();
    
    // Show success message
    alert('Your weird combo has been added! 🎉');
}

// Update leaderboard
function updateLeaderboard() {
    if (userSubmissions.length === 0) {
        leaderboard.innerHTML = '<p style="text-align: center; color: #718096;">No submissions yet. Be the first to add your weird combo! 🚀</p>';
        return;
    }
    
    // Sort by likes (descending)
    const sortedSubmissions = [...userSubmissions].sort((a, b) => b.likes - a.likes);
    
    leaderboard.innerHTML = sortedSubmissions.map(submission => `
        <div class="leaderboard-item">
            <div class="leaderboard-content">
                <div class="leaderboard-combo">${submission.combo}</div>
                <div class="leaderboard-author">by ${submission.author}</div>
            </div>
            <div class="like-section">
                <button class="like-btn ${submission.likedBy.includes('user') ? 'liked' : ''}" 
                        onclick="toggleLike(${submission.id})">
                    <i class="fas fa-heart"></i>
                </button>
                <span class="like-count">${submission.likes}</span>
            </div>
        </div>
    `).join('');
}

// Toggle like
function toggleLike(submissionId) {
    const submission = userSubmissions.find(s => s.id === submissionId);
    if (!submission) return;
    
    const userKey = 'user'; // In a real app, this would be a unique user ID
    
    if (submission.likedBy.includes(userKey)) {
        // Unlike
        submission.likes--;
        submission.likedBy = submission.likedBy.filter(id => id !== userKey);
    } else {
        // Like
        submission.likes++;
        submission.likedBy.push(userKey);
    }
    
    localStorage.setItem('dishasterSubmissions', JSON.stringify(userSubmissions));
    updateLeaderboard();
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === recipeModal) {
        recipeModal.style.display = 'none';
    }
}

// Initialize leaderboard on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLeaderboard();
});