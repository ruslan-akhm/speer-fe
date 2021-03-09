import "./Pricing.css";
import plans from "../data/plans";
import perks from "../data/perks";

function Pricing() {
  const plansList = plans.map(plan => {
    return (
      <div id={plan.type} className="plan-card">
        <h3>{plan.type}</h3>
        <h3>{plan.charged}</h3>
        <h1>${plan.price}</h1>
        <ul>
          {plan.specs.map(item => {
            return <li>&#x266A; {item}</li>;
          })}
        </ul>
        <button>select</button>
      </div>
    );
  });

  const perksList = perks.map(perk => {
    return (
      <li>
        <h2>{perk.title}</h2>
        <p>{perk.text}</p>
      </li>
    );
  });

  return (
    <div id="pricing">
      <div className="pricing-info">
        <h1>PRICING</h1>
        <h2>
          Test our app today! Choose from three subscription <br /> based
          payment model
        </h2>
      </div>
      <div className="pricing-plans">{plansList}</div>
      <div className="pricing-perks">
        <h1>Perks</h1>
        <ul>{perksList}</ul>
      </div>
      <div className="pricing-footer">
        <h2>EXP|CON</h2>
      </div>
    </div>
  );
}

export default Pricing;
