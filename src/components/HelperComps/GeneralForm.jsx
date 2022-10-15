
export function GeneralForm({
  fever,
  decreasedEnergy,
  lossAppetitie,
  weightGain,
  weightLoss,
  updateFields,
}) {
  return (
    <div className="general">
      <h2>General</h2>
      <span>
        <label>Fever</label>
        <input
          type="checkbox"
          value={fever}
          onChange={(e) =>
            updateFields({ fever: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>Decreased/no energy</label>
        <input
          type="checkbox"
          value={decreasedEnergy}
          onChange={(e) =>
            updateFields({ decreasedEnergy: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>Loss of appetite</label>
        <input
          type="checkbox"
          value={lossAppetitie}
          onChange={(e) =>
            updateFields({ lossAppetitie: e.target.value ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>weight gain/loss</label>
        <input
          type="checkbox"
          value={weightGain}
          onChange={(e) =>
            updateFields({ weightGain: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>weight gain/loss</label>
        <input
          type="checkbox"
          value={weightLoss}
          onChange={(e) =>
            updateFields({ weightLoss: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
    </div>
  );
}
