
export function HeadForm({ headache,head_injury,difficulty_hearing,ear_pain, updateFields }) {
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
          value={head_injury}
          onChange={(e) =>
            updateFields({ head_injury: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>Difficulty Hearing</label>
        <input
          type="checkbox"
          value={difficulty_hearing}
          onChange={(e) =>
            updateFields({ difficulty_hearing: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
      <span>
        <label>Ear Pain</label>
        <input
          type="checkbox"
          value={ear_pain}
          onChange={(e) =>
            updateFields({ ear_pain: e.target.checked ? "yes" : "no" })
          }
        />
      </span>
    </div>
  );
}
