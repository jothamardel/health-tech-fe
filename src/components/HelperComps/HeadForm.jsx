
export function HeadForm({ headache,headInjury,diffHearing,earPain, updateFields }) {
  return (
    <div className="headform">
      <h2>Head & Ear</h2>
      <span>
        <label>Headache</label>
        <input
          type="checkbox"
          value={headache}
          onChange={(e) =>
            updateFields({ headache: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>Any head injury</label>
        <input
          type="checkbox"
          value={headInjury}
          onChange={(e) =>
            updateFields({ headInjury: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>Difficulty Hearing</label>
        <input
          type="checkbox"
          value={diffHearing}
          onChange={(e) =>
            updateFields({ diffHearing: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>Ear Pain</label>
        <input
          type="checkbox"
          value={earPain}
          onChange={(e) =>
            updateFields({ earPain: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
    </div>
  );
}
