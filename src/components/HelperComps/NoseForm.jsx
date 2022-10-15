
export function NoseForm({ runnyNose,nasalCongestion,noseBleed, updateFields }) {
  return (
    <div className="noseform">
      <h2>Nose</h2>
      <span>
        <label>Running Nose</label>
        <input
          type="checkbox"
          value={runnyNose}
          onChange={(e) => updateFields({ runnyNose: e.target.checked ? "yes" : "no" })}
        />
      </span>
      <span>
        <label>Nasal Congestion</label>
        <input
          type="checkbox"
          value={nasalCongestion}
          onChange={(e) => updateFields({ nasalCongestion: e.target.checked ? "yes" : "no" })}
        />
      </span>
      <span>
        <label>Nose Bleed</label>
        <input
          type="checkbox"
          value={noseBleed}
          onChange={(e) => updateFields({ noseBleed: e.target.checked ? "yes" : "no" })}
        />
      </span>
     
    </div>
  );
}
