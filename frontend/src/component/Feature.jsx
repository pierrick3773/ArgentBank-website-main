import chat from "../assets/img/icon-chat.png";
import security from "../assets/img/icon-security.png";
import money from "../assets/img/icon-money.png";

const Features = [
  {
    icon: chat,
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: money,
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: security,
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

export function Feature() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>

      {Features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img
            src={feature.icon}
            alt={feature.title}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{feature.title} </h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </section>
  );
}
