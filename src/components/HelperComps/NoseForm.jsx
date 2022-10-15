
export function NoseForm({ runny_nose,nasal_congestion,nose_bleed, updateFields }) {
  return (
    <div className="noseform">
      <h2>Nose</h2>
      <span>
        <label>Running Nose</label>
        <input
          type="checkbox"
          value={runny_nose}
          onChange={(e) => updateFields({ runny_nose: e.target.checked ? "yes" : "no" })}
        />
      </span>
      <span>
        <label>Nasal Congestion</label>
        <input
          type="checkbox"
          value={nasal_congestion}
          onChange={(e) => updateFields({ nasal_congestion: e.target.checked ? "yes" : "no" })}
        />
      </span>
      <span>
        <label>Nose Bleed</label>
        <input
          type="checkbox"
          value={nose_bleed}
          onChange={(e) => updateFields({ nose_bleed: e.target.checked ? "yes" : "no" })}
        />
      </span>
     
    </div>
  );
}
