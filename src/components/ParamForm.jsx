import {
  SEASONS,
  BUDGETS,
  CONTINENTS,
  ACTIVITIES,
  STYLES,
} from "../data/formOptions";

export function ParamForm({ onSubmit }) {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        onSubmit({
          season: f.get("season"),
          budget: f.get("budget"),
          continent: f.get("continent"),
          activity: f.get("activity"),
          style: f.get("style"),
        });
      }}
    >
      <label className="form-label">
        Season
        <select name="season" className="form-select" required>
          <option value="">Select…</option>
          {SEASONS.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      <label className="form-label">
        Budget
        <select name="budget" className="form-select" required>
          <option value="">Select…</option>
          {BUDGETS.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      <label className="form-label">
        Continent
        <select name="continent" className="form-select" required>
          <option value="">Select…</option>
          {CONTINENTS.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      <label className="form-label">
        Activity
        <select name="activity" className="form-select" required>
          <option value="">Select…</option>
          {ACTIVITIES.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      <label className="form-label">
        Travel Style
        <select name="style" className="form-select" required>
          <option value="">Select…</option>
          {STYLES.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className="btn">
        Find destination
      </button>
    </form>
  );
}
