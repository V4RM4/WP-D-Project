function submitMembershipForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = new Date(document.getElementById("dob").value);
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var favGame = document.getElementById("favGame").value;
    var employmentStatus = document.getElementById("employmentStatus").value;
    var membershipTier = document.getElementById("membershipTier").value;

    // Calculate age
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // Calculate membership fees based on age and tier
    var membershipFees;
    if (age <= 16) {
        switch (membershipTier) {
            case "Bronze":
                membershipFees = 10;
                break;
            case "Silver":
                membershipFees = 15;
                break;
            case "Gold":
                membershipFees = 25;
                break;
            case "Platinum":
                membershipFees = 30;
                break;
        }
    } else if (age > 16 && age < 60) {
        switch (membershipTier) {
            case "Bronze":
                membershipFees = 15;
                break;
            case "Silver":
                membershipFees = 20;
                break;
            case "Gold":
                membershipFees = 30;
                break;
            case "Platinum":
                membershipFees = 40;
                break;
        }
    }

    // Apply discount for student employment type
    if (employmentStatus === "Student") {
        membershipFees *= 0.95; // 5% discount
    }

    // Display membership details
    var membershipDetails = `
        <h2>Membership Details</h2>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Membership ID: ${generateMembershipID()}</p>
        <p>Joining Date: ${getJoiningDate()}</p>
        <p>Age: ${age}</p>
        <p>Membership Tier: ${membershipTier}</p>
        <p>Membership Fees: $${membershipFees.toFixed(2)}/month</p>
        <p>Interac ID: pay.amazinggameshub@gmail.com</p>
        <p>Please show this details along with the proof of payment during your visit to obtain your membership card</p>
        <h3>Happy Gaming!</h3>
    `;

    // Hide form and display membership details
    var formContainer = document.getElementById("membershipForm").parentNode;
    formContainer.innerHTML = membershipDetails;

    return false; // Prevent default form submission
}

function generateMembershipID() {
    // Generate a random number between 1000 and 9999 as the membership ID
    return Math.floor(Math.random() * 9000) + 1000;
}

function getJoiningDate() {
    // Get today's date in the format "Month Day, Year"
    var today = new Date();
    var options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString("en-US", options);
}

const membershipBenefits = {
    bronze: {
      title: "Bronze Tier Benefits",
      benefits: [
        "Exclusive Access Hours: Access to the gaming center during off-peak hours for uninterrupted gaming sessions.",
        "Monthly Game Discounts: Enjoy 10% off on game purchases from our catalog every month.",
        "VIP Events: Invitation to special VIP gaming events with fellow Bronze Tier members."
      ]
    },
    silver: {
      title: "Silver Tier Benefits",
      benefits: [
        "Priority Access: Skip the queue and get priority access to popular games and gaming stations.",
        "Monthly Game Rentals: Rent one game from our catalog for free every month.",
        "Dedicated Support: Access to a dedicated support hotline for gaming assistance and queries."
      ]
    },
    gold: {
      title: "Gold Tier Benefits",
      benefits: [
        "Free Refreshments: Enjoy complimentary snacks and beverages during your gaming sessions.",
        "Exclusive Merchandise: Receive a limited edition gaming merchandise package upon joining and annually.",
        "Discounted Event Tickets: Get discounted tickets to gaming tournaments and events hosted at our center."
      ]
    },
    platinum: {
      title: "Platinum Tier Benefits",
      benefits: [
        "Personalized Gaming Setup: Customize your gaming station with premium peripherals and accessories.",
        "VIP Lounge Access: Relax in our exclusive VIP lounge area with complimentary snacks and beverages.",
        "Private Gaming Parties: Host private gaming parties for you and your friends with access to exclusive gaming titles and services."
      ]
    }
  };
  
  function displayMembershipBenefits() {
      var membershipBenefitsDiv = document.getElementById("membershipBenefits");
      var benefitsHTML = `
          <h2>Membership Tiers and Benefits</h2>
          <ul>
              <li><strong>Bronze:</strong> ${membershipBenefits.bronze.benefits.join('<br>')}</li>
              <li><strong>Silver:</strong> ${membershipBenefits.silver.benefits.join('<br>')}</li>
              <li><strong>Gold:</strong> ${membershipBenefits.gold.benefits.join('<br>')}</li>
              <li><strong>Platinum:</strong> ${membershipBenefits.platinum.benefits.join('<br>')}</li>
          </ul>
      `;
      membershipBenefitsDiv.innerHTML = benefitsHTML;
  }
  

displayMembershipBenefits();
