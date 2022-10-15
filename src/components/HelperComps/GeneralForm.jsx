
export function GeneralForm({
  fever,
  decreased_enery,
  loss_appetitie,
  weight_gain,
  weight_loss,
  age,
  updateFields,
}) {
  return (
    <div className="general">
      <h2>General</h2>
      <span>
        <label>Age</label>
        <input
        required
          type="number"
          value={age}
          onChange={(e) =>
            updateFields({ fever: e.target.value })

          }
        />
      </span>
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
          value={decreased_enery}
          onChange={(e) =>
            updateFields({ decreased_enery: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>Loss of appetite</label>
        <input
          type="checkbox"
          value={loss_appetitie}
          onChange={(e) =>
            updateFields({ loss_appetitie: e.target.value ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>weight gain/loss</label>
        <input
          type="checkbox"
          value={weight_gain}
          onChange={(e) =>
            updateFields({ weight_gain: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>weight gain/loss</label>
        <input
          type="checkbox"
          value={weight_loss}
          onChange={(e) =>
            updateFields({ weight_loss: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
    </div>
  );
}
