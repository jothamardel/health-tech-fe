
export function EyeForm({ visual_change, crossed_eyes, redness_eyes, updateFields }) {
  return (
    <div className="eyeform">
      <h2>Eye</h2>
      <span>
        <label>Any change in visual</label>
        <input
          type="checkbox"
          value={visual_change}
          onChange={(e) => updateFields({ visual_change: e.target.checked ? "yes" : "no" })}
        />
      </span>
      <span>
        <label>Do you feel your eyes may be crossed</label>
        <input
          type="checkbox"
          value={crossed_eyes}
          onChange={(e) => updateFields({ crossed_eyes: e.target.checked ? "yes" : "no" })}
        />
      </span>
      <span>
        <label>Redness</label>
        <input
          type="checkbox"
          value={redness_eyes}
          onChange={(e) => updateFields({ redness_eyes: e.target.checked ? "yes" : "no" })}
        />
      </span>
      
    </div>
  );
}
