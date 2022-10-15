
export function EyeForm({ visualChange, crossed, redness, updateFields }) {
  return (
    <div className="eyeform">
      <h2>Eye</h2>
      <span>
        <label>Any change in visual</label>
        <input
          type="checkbox"
          value={visualChange}
          onChange={(e) => updateFields({ visualChange: e.target.checked ? "yes" : "no" })}
        />
      </span>
      <span>
        <label>Do you feel your eyes may be crossed</label>
        <input
          type="checkbox"
          value={crossed}
          onChange={(e) => updateFields({ crossed: e.target.checked ? "yes" : "no" })}
        />
      </span>
      <span>
        <label>Redness</label>
        <input
          type="checkbox"
          value={redness}
          onChange={(e) => updateFields({ redness: e.target.checked ? "yes" : "no" })}
        />
      </span>
      
    </div>
  );
}
