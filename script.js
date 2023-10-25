document.addEventListener("DOMContentLoaded", function () {
    const questionContainer = document.getElementById("question-container");
    const nextButton = document.getElementById("next-button");
    const resultsContainer = document.getElementById("results");
    const recommendationText = document.getElementById("recommendation-text");
    const productImage = document.getElementById("product-image");
    const optionsContainer = document.getElementById("options");
  
    const questions = [
      {
        question: "What is your skin type?",
        options: ["oily", "dry", "normal"]
      },
      {
        question: "Do you have any skin concerns?",
        options: ["acne", "wrinkles", "sensitivity", "none"]
      },
      {
        question: "What's your age group?",
        options: ["under 18", "18-30", "31-45", "46 and above"]
      }
    ];
  
    const recommendations = {
      "oily": {
        text: "For oily skin, use oil-free cleansers and non-comedogenic products.",
        image: "C:\Users\jansr\OneDrive - Medtronic PLC\Desktop\New folder\images\oilyproduct.jfif"
      },
      "dry":{
        text: "Dry skin needs hydrating products like moisturizers and serums.",
        image:"C:\Users\jansr\OneDrive - Medtronic PLC\Desktop\New folder\images\dryproduct.jfif"
      },
      "normal": {
        text: "Normal skin types can use a variety of products. Keep it balanced.",
        image:"C:\Users\jansr\OneDrive - Medtronic PLC\Desktop\New folder\images\normalproduct.jfif"
      },
      "acne": {
        text: "If you have acne concerns, consider using products with salicylic acid or benzoyl peroxide.",
        image:  "C:\Users\jansr\OneDrive - Medtronic PLC\Desktop\New folder\images\acneproduct.jfif"
      },
      "wrinkles": {
        text: "For wrinkle concerns, look for products with retinol and hyaluronic acid.",
        image:"C:\Users\jansr\OneDrive - Medtronic PLC\Desktop\New folder\images\wrinklesproduct.jfif"
      },
      "sensitivity": {
        text: "For sensitive skin, use fragrance-free and hypoallergenic products.",
        image:"C:\Users\jansr\OneDrive - Medtronic PLC\Desktop\New folder\images\sensitiveproduct.jfif"
      },
      "none": {
        text: "Great, you don't have any specific skin concerns.",
        image:"C:\Users\jansr\OneDrive - Medtronic PLC\Desktop\New folder\images\genericproduct.jfif"
      }
    };
  
    let currentQuestion = 0;
  
    function showNextQuestion() {
      if (currentQuestion < questions.length) {
        const currentQues = questions[currentQuestion];
        document.getElementById("question-text").textContent = `${currentQues.question}`;
        optionsContainer.innerHTML = "";
        currentQues.options.forEach(option => {
          const label = document.createElement("label");
          label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
          optionsContainer.appendChild(label);
        });
        currentQuestion++;
      } else {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (!selectedOption) {
          alert("Please select an answer.");
          return;
        }
        const answer = selectedOption.value;
        const recommendation = recommendations[answer];
        recommendationText.textContent = recommendations.text;
        productImage.src = recommendations.image;
        questionContainer.style.display = "none";
        resultsContainer.style.display = "block";
      }
    }
  
    nextButton.addEventListener("click", showNextQuestion);
    showNextQuestion();
  });
  