const lessons = [
  {
    title: "Fire Safety",
    description: "Always keep fire extinguishers nearby and know how to use them."
  },
  {
    title: "Electrical Safety",
    description: "Never overload sockets and always turn off unused appliances."
  },
  {
    title: "PPE (Personal Protective Equipment)",
    description: "Always wear helmets, gloves, and goggles in risky areas."
  },
  {
    title: "Chemical Safety",
    description: "Always store chemicals properly and use appropriate protective equipment."
  },
  {
    title: "Workplace Ergonomics",
    description: "Sit properly, keep your posture straight, and adjust your chair and desk height."
  }
];

const appDiv = document.getElementById("app");

lessons.forEach(lesson => {
  const card = document.createElement("div");
  card.className = "lesson-card";

  const title = document.createElement("h2");
  title.textContent = lesson.title;

  const desc = document.createElement("p");
  desc.textContent = lesson.description;

  card.appendChild(title);
  card.appendChild(desc);

  appDiv.appendChild(card);
});